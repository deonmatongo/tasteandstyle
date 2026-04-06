import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Share2, Check, MapPin, CalendarDays, Users } from 'lucide-react';
import useCountdown from '../hooks/useCountdown';
import { useLanguage } from '../context/LanguageContext';

function formatDate(date, lang) {
  return date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function EventCard({ event, onBook }) {
  const { lang, t } = useLanguage();
  const countdown = useCountdown(event.date);
  const spotsPercent = Math.round(((event.capacity - event.spotsLeft) / event.capacity) * 100);

  const isBookable = event.status === 'available' || event.status === 'limited';
  const isSoldOut = event.status === 'sold-out';
  const isComingSoon = event.status === 'coming-soon';
  const isPast = event.status === 'past';

  const barRef = useRef(null);
  const [barVisible, setBarVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const statusLabels = {
    available: t.events.available,
    limited: t.events.limited,
    'sold-out': t.events.soldOut,
    'coming-soon': t.events.comingSoon,
    past: t.events.pastEdition,
  };

  useEffect(() => {
    if (!barRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setBarVisible(true); io.disconnect(); } },
      { threshold: 0.4 }
    );
    io.observe(barRef.current);
    return () => io.disconnect();
  }, []);

  const handleShare = () => {
    const url = `${window.location.origin}/events/${event.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const lowestPrice = event.tickets ? event.tickets[0] : null;

  return (
    <div className="event-card">

      <div className="event-card-image-wrap">
        {event.image && (
          <img src={event.image} alt={event.title} className="event-card-img" loading="lazy" />
        )}
        <div className="event-card-img-overlay" />

        <div className="event-card-top-row">
          <span className="event-card-edition-tag">Ed. {event.edition}</span>
          <span className={`status-badge ${event.status}`}>{statusLabels[event.status]}</span>
        </div>

        {event.EventIcon && (
          <div className="event-card-icon-wrap">
            <event.EventIcon size={22} strokeWidth={1.2} />
          </div>
        )}
      </div>

      <div className="event-card-body">
        <div className="event-card-title-row">
          <h3 className="event-card-title">{event.title}</h3>
          {lowestPrice && !isPast && (
            <div className="event-card-price">
              <span className="event-card-price-from">from</span>
              <span className="event-card-price-amount">{lowestPrice.price.toLocaleString()} {lowestPrice.currency}</span>
            </div>
          )}
        </div>

        <div className="event-card-info-rows">
          <span className="event-card-info-item">
            <CalendarDays size={13} strokeWidth={1.5} />
            {formatDate(event.date, lang)}
          </span>
          <span className="event-card-info-item">
            <MapPin size={13} strokeWidth={1.5} />
            {event.venue}
          </span>
          {!isPast && (
            <span className="event-card-info-item">
              <Users size={13} strokeWidth={1.5} />
              {event.capacity} guests
            </span>
          )}
        </div>

        {!isPast && !countdown.isPast && (
          <div className="event-countdown">
            {[
              { v: countdown.days, l: t.hero.days },
              { v: countdown.hours, l: t.hero.hrs },
              { v: countdown.minutes, l: t.hero.min },
              { v: countdown.seconds, l: t.hero.sec },
            ].map(({ v, l }) => (
              <div className="countdown-unit" key={l}>
                <span className="countdown-value">{String(v).padStart(2, '0')}</span>
                <span className="countdown-label">{l}</span>
              </div>
            ))}
          </div>
        )}

        {isBookable && (
          <div className="event-spots" ref={barRef}>
            <div className="event-spots-text">
              <span>{t.events.availability}</span>
              <span className="event-spots-number">{event.spotsLeft} {t.events.spotsLeft}</span>
            </div>
            <div className="event-spots-bar">
              <div className="event-spots-fill" style={{ width: barVisible ? `${spotsPercent}%` : '0%' }} />
            </div>
          </div>
        )}
      </div>

      <div className="event-card-footer">
        <div className="event-card-footer-actions">
          {isBookable && (
            <button className="btn-primary" onClick={() => onBook(event)}>{t.events.bookNow}</button>
          )}
          {isSoldOut && (
            <button className="btn-outline" onClick={() => onBook(event)}>{t.events.joinWaitlist}</button>
          )}
          {isComingSoon && (
            <button className="btn-outline">{t.events.notifyMe}</button>
          )}
          {isPast && (
            <Link to={`/events/${event.id}`} className="btn-ghost event-recap-btn">
              {t.events.viewRecap}
            </Link>
          )}
          <button
            className={`event-share-btn${copied ? ' copied' : ''}`}
            onClick={handleShare}
            aria-label={t.events.shareEvent}
            title={copied ? t.events.linkCopied : t.events.shareEvent}
          >
            {copied ? <Check size={15} strokeWidth={2.5} /> : <Share2 size={15} strokeWidth={1.8} />}
          </button>
        </div>
      </div>
    </div>
  );
}
