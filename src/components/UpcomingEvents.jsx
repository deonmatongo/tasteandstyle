import { Link } from 'react-router-dom';
import EventCard from './EventCard';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import { events } from '../data/events';

export default function UpcomingEvents() {
  const { openBooking } = useBooking();
  const { t } = useLanguage();
  const upcoming = events.filter(e => e.status !== 'past');

  return (
    <section className="upcoming-events">
      <div className="upcoming-events-header">
        <div>
          <span className="section-label reveal">{t.upcoming.label}</span>
          <h2 className="section-heading reveal reveal-delay-1">
            {t.upcoming.heading} <em>{t.upcoming.headingEm}</em>
          </h2>
        </div>
        <Link to="/events" className="btn-outline reveal reveal-delay-2">
          {t.upcoming.viewAll}
        </Link>
      </div>

      <div className="upcoming-events-scroll">
        {upcoming.map((event, i) => (
          <div key={event.id} className={`reveal reveal-delay-${i + 1}`}>
            <EventCard event={event} onBook={openBooking} />
          </div>
        ))}
      </div>
    </section>
  );
}
