import { useState } from 'react';
import EventCard from '../components/EventCard';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import { events, pastEvents } from '../data/events';

const cities = ['All', 'Warsaw', 'Kraków', 'Poznań', 'Gdańsk'];

export default function Events() {
  const { openBooking } = useBooking();
  const { t } = useLanguage();
  const ep = t.eventsPage;

  const statusFilters = [ep.filterAll, ep.filterUpcoming, ep.filterPast];

  const [cityFilter, setCityFilter] = useState(ep.filterAll);
  const [statusFilter, setStatusFilter] = useState(ep.filterAll);

  const allEvents = [...events, ...pastEvents];

  const filtered = allEvents.filter(e => {
    const cityMatch = cityFilter === ep.filterAll || e.city === cityFilter;
    const isPast = e.status === 'past';
    if (statusFilter === ep.filterUpcoming) return cityMatch && !isPast;
    if (statusFilter === ep.filterPast) return cityMatch && isPast;
    return cityMatch;
  });

  const headingLines = ep.heading.split('\n');

  return (
    <div className="events-page">
      <div className="events-page-hero">
        <div className="events-hero-inner">
          <span className="section-label reveal" style={{ color: 'var(--gold)' }}>{ep.label}</span>
          <h1 className="events-hero-heading reveal reveal-delay-1">
            {headingLines[0]}<br />{headingLines[1]}<br />{headingLines[2]} <em>{ep.headingEm}</em>.
          </h1>
          <p className="events-hero-sub reveal reveal-delay-2">{ep.sub}</p>
        </div>
      </div>

      <div className="events-filter-bar">
        <div className="events-filter-inner">
          <div className="filter-tabs">
            {statusFilters.map(f => (
              <button
                key={f}
                className={`filter-tab${statusFilter === f ? ' active' : ''}`}
                onClick={() => setStatusFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="filter-cities">
            {cities.map((c, i) => {
              const label = i === 0 ? ep.cityAll : c;
              return (
                <button
                  key={c}
                  className={`city-filter-btn${cityFilter === (i === 0 ? ep.filterAll : c) ? ' active' : ''}`}
                  onClick={() => setCityFilter(i === 0 ? ep.filterAll : c)}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="events-grid-section">
        {filtered.length === 0 ? (
          <div className="events-empty-state">
            <span className="events-empty-emoji">◎</span>
            <p className="events-empty-text">{ep.emptyState}</p>
            <button
              className="btn-outline"
              onClick={() => { setCityFilter(ep.filterAll); setStatusFilter(ep.filterAll); }}
            >
              {ep.clearFilters}
            </button>
          </div>
        ) : (
          <div className="events-grid">
            {filtered.map((event, i) => (
              <div key={event.id} className={`reveal reveal-delay-${(i % 4) + 1}`}>
                <EventCard event={event} onBook={openBooking} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
