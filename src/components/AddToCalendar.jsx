import { getGoogleCalendarUrl, downloadICSFile } from '../utils/calendar';
import { CalendarPlus, CalendarDays } from 'lucide-react';

export default function AddToCalendar({ event, bookingRef }) {
  return (
    <div className="add-to-calendar">
      <p className="add-to-calendar-heading">Add to your calendar</p>
      <div className="add-to-calendar-btns">
        <a
          href={getGoogleCalendarUrl(event)}
          target="_blank"
          rel="noopener noreferrer"
          className="cal-btn cal-btn-google"
        >
          <CalendarPlus size={15} strokeWidth={1.5} style={{ marginRight: 6 }} /> Google Calendar
        </a>
        <button
          className="cal-btn cal-btn-apple"
          onClick={() => downloadICSFile(event, bookingRef)}
        >
          <CalendarDays size={15} strokeWidth={1.5} style={{ marginRight: 6 }} /> Apple / Outlook
        </button>
      </div>
    </div>
  );
}
