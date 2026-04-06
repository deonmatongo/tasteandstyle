function formatDateForGoogle(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

function formatDateForICS(date) {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
}

export function getGoogleCalendarUrl(event) {
  const title = encodeURIComponent(`Taste & Style — ${event.title}`);
  const start = formatDateForGoogle(event.date);
  const end = formatDateForGoogle(event.endDate);
  const details = encodeURIComponent(
    `${event.subtitle}\n\n${event.description}\n\nVenue: ${event.venue}\n${event.venueAddress}\n\nTaste & Style — tasteandstyle.pl`
  );
  const location = encodeURIComponent(`${event.venue}, ${event.venueAddress}`);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function downloadICSFile(event, bookingRef) {
  const start = formatDateForICS(event.date);
  const end = formatDateForICS(event.endDate);
  const now = formatDateForICS(new Date());
  const uid = `${bookingRef || 'TS'}@tasteandstyle.pl`;

  const description = `${event.subtitle}\\n\\n${event.description}\\n\\nBooking Reference: ${bookingRef || 'N/A'}\\n\\nVenue: ${event.venue}\\n${event.venueAddress}`;

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Taste & Style//Event Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTAMP:${now}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `SUMMARY:Taste & Style — ${event.title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${event.venue}\\, ${event.venueAddress}`,
    'STATUS:CONFIRMED',
    'SEQUENCE:0',
    'BEGIN:VALARM',
    'TRIGGER:-PT24H',
    'ACTION:DISPLAY',
    `DESCRIPTION:Reminder: Taste & Style — ${event.title} tomorrow`,
    'END:VALARM',
    'BEGIN:VALARM',
    'TRIGGER:-PT2H',
    'ACTION:DISPLAY',
    `DESCRIPTION:Taste & Style — ${event.title} starts in 2 hours`,
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `taste-style-${event.id}.ics`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
