import { useState } from 'react';
import EventCard from '../components/EventCard';
import { useBooking } from '../context/BookingContext';
import { events, pastEvents } from '../data/events';

const cities = ['All', 'Warsaw', 'Kraków', 'Poznań', 'Gdańsk'];
const statusFilters = ['All', 'Upcoming', 'Past'];

export default function Events() {
  const { openBooking } = useBooking();
  const [cityFilter, setCityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const allEvents = [...events, ...pastEvents];

  const filtered = allEvents.filter(e => {
    const cityMatch = cityFilter === 'All' || e.city === cityFilter;
    const isPast = e.status === 'past';
    if (statusFilter === 'Upcoming') return cityMatch && !isPast;
    if (statusFilter === 'Past') return cityMatch && isPast;
    return cityMatch;
  });

  return (
    <div className="events-page">
      {/* Page hero */}
      <div className="events-page-hero">
        <div className="events-hero-inner">
          <span className="section-label reveal" style={{ color: 'var(--gold)' }}>Our Editions</span>
          <h1 className="events-hero-heading reveal reveal-delay-1">
            Every city.<br />Every season.<br />One <em>ethos</em>.
          </h1>
          <p className="events-hero-sub reveal reveal-delay-2">
            From Warsaw to Gdańsk, Taste &amp; Style hosts intimate evenings at the intersection of haute cuisine and fashion.
          </p>
        </div>
      </div>

      {/* Filters */}
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
            {cities.map(c => (
              <button
                key={c}
                className={`city-filter-btn${cityFilter === c ? ' active' : ''}`}
                onClick={() => setCityFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="events-grid-section">
        {filtered.length === 0 ? (
          <div className="events-empty-state">
            <span className="events-empty-emoji">◎</span>
            <p className="events-empty-text">No editions match this filter.</p>
            <button
              className="btn-outline"
              onClick={() => { setCityFilter('All'); setStatusFilter('All'); }}
            >
              Clear filters
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
