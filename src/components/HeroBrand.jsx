import { Link } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import { events } from '../data/events';
import useCountdown from '../hooks/useCountdown';

const cells = [
  { label: 'Fashion', tag: 'Curated Style', image: '/pictures/photo_0009.jpg' },
  { label: 'Dining', tag: 'Fine Cuisine', image: '/pictures/photo_0015.jpg' },
  { label: 'Moments', tag: 'Unforgettable', image: '/pictures/photo_0006.jpg' },
  { label: 'Vibes', tag: 'Live & Curated', image: '/pictures/photo_0014.jpg' },
];

function HeroCountdown({ date }) {
  const { t } = useLanguage();
  const cd = useCountdown(date);
  if (cd.isPast) return null;
  const units = [
    { v: cd.days, l: t.hero.days },
    { v: cd.hours, l: t.hero.hrs },
    { v: cd.minutes, l: t.hero.min },
    { v: cd.seconds, l: t.hero.sec },
  ];
  return (
    <div className="hero-countdown">
      <span className="hero-countdown-label">{t.hero.nextEditionIn}</span>
      <div className="hero-countdown-units">
        {units.map(({ v, l }) => (
          <div className="hero-countdown-unit" key={l}>
            <span className="hero-countdown-value">{String(v).padStart(2, '0')}</span>
            <span className="hero-countdown-unit-label">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HeroBrand() {
  const { openBooking } = useBooking();
  const { t } = useLanguage();

  const handleReserve = () => {
    const next = events.find(e => e.status === 'available' || e.status === 'limited');
    if (next) openBooking(next);
  };

  return (
    <section
      className="hero-brand"
      style={{
        backgroundImage: 'url(/pictures/photo_0013.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="hero-brand-inner">
        <div className="hero-brand-left reveal">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">{t.hero.eyebrow}</span>
          </div>

          <h1 className="hero-heading">
            {t.hero.heading1}<br />
            {t.hero.heading2} <em>{t.hero.headingEm}</em>.
          </h1>

          <p className="hero-sub">{t.hero.sub}</p>

          {(() => { const next = events.find(e => e.status === 'available' || e.status === 'limited' || e.status === 'coming-soon'); return next ? <HeroCountdown date={next.date} /> : null; })()}

          <div className="hero-ctas">
            <Link to="/events" className="btn-secondary">
              {t.hero.upcomingEditions}
            </Link>
            <button className="btn-ghost" onClick={handleReserve}>
              {t.hero.reserveSeat}
            </button>
          </div>

          <div className="hero-scroll-hint">
            <span className="hero-scroll-line" />
            <span className="hero-scroll-text">{t.hero.scrollExplore}</span>
          </div>
        </div>

        <div className="hero-brand-right reveal reveal-delay-2">
          <div className="hero-visual-grid">
            {cells.map((c) => (
              <div
                className="hero-cell"
                key={c.label}
                style={{
                  backgroundImage: `url(${c.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="hero-cell-overlay" />
                <span className="hero-cell-city">{c.label}</span>
                <span className="hero-cell-tag">{c.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
