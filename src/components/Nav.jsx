import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import { events } from '../data/events';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { openBooking } = useBooking();
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const isDarkPage = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleReserve = () => {
    const next = events.find(e => e.status === 'available' || e.status === 'limited');
    if (next) openBooking(next);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}${isDarkPage ? ' dark' : ''}`}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo">
            <img
              src="/pictures/photo_0001.jpg"
              alt="Taste & Style by Agnessitta"
              className="nav-logo-img"
            />
          </Link>

          <div className="nav-links">
            <NavLink to="/events">{t.nav.events}</NavLink>
            <NavLink to="/about">{t.nav.about}</NavLink>
            <div className="nav-lang-toggle">
              <button
                className={`nav-lang-btn${lang === 'en' ? ' active' : ''}`}
                onClick={() => setLang('en')}
              >EN</button>
              <span className="nav-lang-sep">|</span>
              <button
                className={`nav-lang-btn${lang === 'pl' ? ' active' : ''}`}
                onClick={() => setLang('pl')}
              >PL</button>
            </div>
            <button className="nav-reserve-btn" onClick={handleReserve}>
              {t.nav.reserve}
            </button>
          </div>

          <button
            className={`nav-hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`nav-mobile-menu${menuOpen ? ' open' : ''}`}>
        <nav className="nav-mobile-links">
          <NavLink to="/">{t.nav.home}</NavLink>
          <NavLink to="/events">{t.nav.events}</NavLink>
          <NavLink to="/about">{t.nav.about}</NavLink>
        </nav>
        <div className="nav-mobile-footer">
          <div className="nav-mobile-lang">
            <button className={`nav-lang-btn${lang === 'en' ? ' active' : ''}`} onClick={() => setLang('en')}>EN</button>
            <span className="nav-lang-sep">|</span>
            <button className={`nav-lang-btn${lang === 'pl' ? ' active' : ''}`} onClick={() => setLang('pl')}>PL</button>
          </div>
          <button className="btn-secondary" onClick={handleReserve}>
            {t.nav.reserveSeat}
          </button>
          <span className="nav-mobile-tagline">{t.nav.tagline}</span>
        </div>
      </div>
    </>
  );
}
