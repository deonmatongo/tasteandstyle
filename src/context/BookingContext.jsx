import { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [bookingEvent, setBookingEvent] = useState(null);

  function openBooking(event) {
    setBookingEvent(event);
    document.body.style.overflow = 'hidden';
  }

  function closeBooking() {
    setBookingEvent(null);
    document.body.style.overflow = '';
  }

  return (
    <BookingContext.Provider value={{ bookingEvent, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
