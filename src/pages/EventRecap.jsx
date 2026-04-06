import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { events, pastEvents } from '../data/events';

const recapPhotos = {
  'edition-i-2024':    ['/pictures/photo_0004.jpg', '/pictures/photo_0006.jpg', '/pictures/photo_0007.jpg', '/pictures/photo_0008.jpg'],
  'edition-ii-2024':   ['/pictures/photo_0009.jpg', '/pictures/photo_0010.jpg', '/pictures/photo_0011.jpg', '/pictures/photo_0012.jpg'],
  'edition-iii-2025':  ['/pictures/photo_0012.jpg', '/pictures/photo_0013.jpg', '/pictures/photo_0014.jpg', '/pictures/photo_0015.jpg'],
};

const recapQuotes = {
  'edition-i-2024':   { text: 'It felt like the most beautiful secret. I didn\'t want the night to end.', author: 'Guest · Edition I' },
  'edition-ii-2024':  { text: 'The fashion showcase was breathtaking. I\'ve never seen anything like it in Warsaw.', author: 'Guest · Edition II' },
  'edition-iii-2025': { text: 'Red, gold, and absolutely unforgettable. Edition III set the standard.', author: 'Guest · Edition III' },
};

export default function EventRecap() {
  const { id } = useParams();
  const { lang, t } = useLanguage();
  const r = t.recap;
  const allEvents = [...events, ...pastEvents];
  const event = allEvents.find(e => e.id === id);

  if (!event) {
    return (
      <div className="recap-not-found">
        <p>{r.notFound}</p>
        <Link to="/events" className="btn-outline">{r.backToEvents}</Link>
      </div>
    );
  }

  const photos = recapPhotos[id] || [event.image].filter(Boolean);
  const quote = recapQuotes[id];

  return (
    <div className="recap-page">

      <div className="recap-hero" style={{ backgroundImage: `url(${event.image})` }}>
        <div className="recap-hero-overlay" />
        <div className="recap-hero-inner">
          <Link to="/events" className="recap-back-btn">
            <ArrowLeft size={16} strokeWidth={2} /> {r.allEditions}
          </Link>
          <div className="recap-hero-content reveal">
            <span className="section-label" style={{ color: 'var(--gold)' }}>{r.editionLabel} {event.edition} · {r.recapLabel}</span>
            <h1 className="recap-heading">{event.title}</h1>
            <p className="recap-sub">{event.subtitle}</p>
            <div className="recap-meta-row">
              <span className="recap-meta-item">
                <Calendar size={14} strokeWidth={1.5} />
                {event.date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="recap-meta-item">
                <MapPin size={14} strokeWidth={1.5} />
                {event.venue}
              </span>
              <span className="recap-meta-item">
                <Users size={14} strokeWidth={1.5} />
                {event.capacity} {r.guests}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="recap-body">

        <div className="recap-description reveal">
          <p className="recap-desc-text">{event.description}</p>
        </div>

        {quote && (
          <div className="recap-quote-block reveal">
            <blockquote className="recap-quote">"{quote.text}"</blockquote>
            <cite className="recap-quote-author">— {quote.author}</cite>
          </div>
        )}

        <div className="recap-photo-grid reveal reveal-delay-1">
          {photos.map((src, i) => (
            <div key={i} className="recap-photo-frame">
              <img src={src} alt={`${event.title} · moment ${i + 1}`} className="recap-photo-img" loading="lazy" />
            </div>
          ))}
        </div>

        {event.highlights && event.highlights.length > 0 && (
          <div className="recap-highlights reveal reveal-delay-2">
            <h2 className="recap-highlights-heading">{r.eveningHighlights}</h2>
            <ul className="recap-highlights-list">
              {event.highlights.map((h, i) => (
                <li key={i} className="recap-highlight-item">
                  <span className="recap-highlight-dot" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.guests && event.guests.length > 0 && (
          <div className="recap-guests reveal reveal-delay-2">
            <h2 className="recap-highlights-heading">{r.onTheNight}</h2>
            <div className="recap-guests-grid">
              {event.guests.map((g, i) => (
                <div key={i} className="recap-guest-card">
                  <div className="recap-guest-role">{g.role}</div>
                  <div className="recap-guest-name">{g.name}</div>
                  <div className="recap-guest-bio">{g.bio}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="recap-cta reveal reveal-delay-3">
          <p className="recap-cta-text">{r.ctaText}</p>
          <Link to="/events" className="btn-secondary">{r.ctaBtn}</Link>
        </div>

      </div>
    </div>
  );
}
