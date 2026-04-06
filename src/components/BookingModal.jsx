import { useState, useEffect, useRef } from 'react';
import { useBooking } from '../context/BookingContext';
import { useLanguage } from '../context/LanguageContext';
import AddToCalendar from './AddToCalendar';
import { Check, X, Heart, Globe, Star, Flower2, Leaf, Sun } from 'lucide-react';

function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  });
}

function generateRef() {
  return 'T&S-' + Math.random().toString(36).substr(2, 8).toUpperCase();
}

export default function BookingModal() {
  const { bookingEvent, closeBooking } = useBooking();
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', dietary: '', terms: false });
  const [errors, setErrors] = useState({});
  const bookingRef = useRef(null);

  useEffect(() => {
    if (bookingEvent) {
      setStep(1);
      setSelectedTicket(null);
      setQuantity(1);
      setForm({ firstName: '', lastName: '', email: '', phone: '', dietary: '', terms: false });
      setErrors({});
      bookingRef.current = null;
    }
  }, [bookingEvent]);

  if (!bookingEvent) return null;

  const total = selectedTicket ? selectedTicket.price * quantity : 0;

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'Required';
    if (!form.lastName.trim()) errs.lastName = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.terms) errs.terms = 'Please accept the terms';
    return errs;
  };

  const handleNext = () => {
    if (step === 1 && !selectedTicket) return;
    if (step === 2) {
      const errs = validate();
      if (Object.keys(errs).length) { setErrors(errs); return; }
      bookingRef.current = generateRef();
    }
    setStep(s => s + 1);
  };

  const handleField = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    setErrors(prev => { const n = { ...prev }; delete n[name]; return n; });
  };

  const stepLabels = [t.booking.selectTicket, t.booking.yourDetails, t.booking.confirmed];

  return (
    <div className="booking-modal-overlay" onClick={(e) => { if (e.target === e.currentTarget) closeBooking(); }}>
      <div className="booking-modal">
        {/* Header with steps */}
        <div className="booking-modal-header">
          <div className="booking-step-indicator">
            {stepLabels.map((label, i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, flex: i < 2 ? 1 : 'none' }}>
                <span className={`step-dot ${step > i + 1 ? 'done' : step === i + 1 ? 'active' : 'pending'}`}>
                  {step > i + 1 ? <Check size={12} strokeWidth={2.5} /> : i + 1}
                </span>
                <span style={{ fontSize: 11, fontFamily: 'var(--font-sans)', color: step === i + 1 ? 'var(--ink)' : 'var(--text-muted)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                  {label}
                </span>
                {i < 2 && <span className={`step-line${step > i + 1 ? ' done' : ''}`} />}
              </div>
            ))}
          </div>
          <button className="booking-close-btn" onClick={closeBooking} aria-label="Close"><X size={16} strokeWidth={2} /></button>
        </div>

        {/* Event summary */}
        <div className="booking-event-summary" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <bookingEvent.EventIcon size={28} strokeWidth={1.5} />
          <div>
            <div className="booking-event-summary-title">{bookingEvent.title}</div>
            <div className="booking-event-summary-meta">{formatDate(bookingEvent.date)} · {bookingEvent.venue}</div>
          </div>
        </div>

        {/* ---- STEP 1: Select Ticket ---- */}
        {step === 1 && (
          <>
            <div className="booking-tickets-section">
              <div className="booking-tickets-heading">{t.booking.chooseTicket}</div>
              <div className="booking-tickets-list">
                {bookingEvent.tickets.map((tick) => (
                  <div
                    key={tick.tier}
                    className={`ticket-card${selectedTicket?.tier === tick.tier ? ' selected' : ''}`}
                    onClick={() => setSelectedTicket(tick)}
                  >
                    <div className="ticket-card-top">
                      <span className="ticket-tier-name">{tick.tier}</span>
                      <span className="ticket-price">{tick.price.toLocaleString()} {tick.currency}</span>
                    </div>
                    <p className="ticket-description">{tick.description}</p>
                    <div className="ticket-perks">
                      {tick.perks.map(p => <span className="ticket-perk" key={p}>{p}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {selectedTicket && (
              <div className="booking-quantity-section">
                <div className="booking-qty-row">
                  <span className="booking-qty-label">{t.booking.numberOfGuests}</span>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => setQuantity(q => Math.max(1, q - 1))} disabled={quantity <= 1}>−</button>
                    <span className="qty-value">{quantity}</span>
                    <button className="qty-btn" onClick={() => setQuantity(q => Math.min(4, q + 1))} disabled={quantity >= 4}>+</button>
                  </div>
                </div>
                <div className="booking-total">
                  <div>
                    <div className="booking-total-label">{t.booking.total}</div>
                    <div className="booking-total-desc">{quantity} × {selectedTicket.tier}</div>
                  </div>
                  <span className="booking-total-amount">{total.toLocaleString()} {selectedTicket.currency}</span>
                </div>
              </div>
            )}

            <div className="booking-actions">
              <button className="btn-outline" onClick={closeBooking}>{t.booking.cancel}</button>
              <button className="btn-primary" onClick={handleNext} disabled={!selectedTicket}>
                {t.booking.continue}
              </button>
            </div>
          </>
        )}

        {/* ---- STEP 2: Details ---- */}
        {step === 2 && (
          <>
            <div className="booking-form-section">
              <div className="booking-order-summary-bar">
                <span className="order-summary-text">{selectedTicket.tier} × {quantity}</span>
                <span className="order-summary-total">{total.toLocaleString()} {selectedTicket.currency}</span>
              </div>

              <div className="form-row two-col">
                <div className="form-group">
                  <label className="form-label">{t.booking.firstName}</label>
                  <input className="form-input" name="firstName" value={form.firstName} onChange={handleField} placeholder="Anna" />
                  {errors.firstName && <span style={{ fontSize: 11, color: 'var(--status-sold-out)', marginTop: 2 }}>{errors.firstName}</span>}
                </div>
                <div className="form-group">
                  <label className="form-label">{t.booking.lastName}</label>
                  <input className="form-input" name="lastName" value={form.lastName} onChange={handleField} placeholder="Kowalska" />
                  {errors.lastName && <span style={{ fontSize: 11, color: 'var(--status-sold-out)', marginTop: 2 }}>{errors.lastName}</span>}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">{t.booking.emailAddress}</label>
                <input className="form-input" type="email" name="email" value={form.email} onChange={handleField} placeholder="anna@example.com" />
                {errors.email && <span style={{ fontSize: 11, color: 'var(--status-sold-out)', marginTop: 2 }}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">{t.booking.phone} <span className="form-label-optional">{t.booking.optional}</span></label>
                <input className="form-input" type="tel" name="phone" value={form.phone} onChange={handleField} placeholder="+48 000 000 000" />
              </div>

              <div className="form-group">
                <label className="form-label">{t.booking.dietary} <span className="form-label-optional">{t.booking.optional}</span></label>
                <textarea className="form-textarea" name="dietary" value={form.dietary} onChange={handleField} placeholder="Any allergies or preferences…" rows={3} />
              </div>

              <div className="form-checkbox-row">
                <input type="checkbox" className="form-checkbox" id="terms" name="terms" checked={form.terms} onChange={handleField} />
                <label className="form-checkbox-label" htmlFor="terms">
                  {t.booking.terms} <a href="#" onClick={e => e.preventDefault()}>{t.booking.termsLink}</a> {t.booking.and} <a href="#" onClick={e => e.preventDefault()}>{t.booking.privacyLink}</a>
                </label>
              </div>
              {errors.terms && <span style={{ fontSize: 11, color: 'var(--status-sold-out)' }}>{errors.terms}</span>}
            </div>

            <div className="booking-actions">
              <button className="btn-outline" onClick={() => setStep(1)}>{t.booking.back}</button>
              <button className="btn-primary" onClick={handleNext}>{t.booking.completeReservation}</button>
            </div>
          </>
        )}

        {/* ---- STEP 3: Confirmed ---- */}
        {step === 3 && (
          <div className="booking-confirmation">
            <div className="confirmation-checkmark"><Check size={28} strokeWidth={2.5} /></div>
            <h3 className="confirmation-heading">{t.booking.reservationConfirmed}</h3>
            <p className="confirmation-sub">
              {t.booking.confirmationSent} <strong>{form.email}</strong>. {t.booking.lookForward}
            </p>

            <div className="ticket-stub">
              <div className="ticket-stub-top">
                <div>
                  <div className="ticket-stub-event">{bookingEvent.title}</div>
                  <div className="ticket-stub-edition">{bookingEvent.subtitle}</div>
                </div>
                <bookingEvent.EventIcon size={32} strokeWidth={1.5} className="ticket-stub-emoji" />
              </div>
              <div className="ticket-perforation">
                <span className="ticket-perf-dot" />
                <span className="ticket-perf-line" />
                <span className="ticket-perf-dot" />
              </div>
              <div className="ticket-stub-bottom">
                <div className="ticket-detail">
                  <span className="ticket-detail-label">{t.booking.date}</span>
                  <span className="ticket-detail-value">{bookingEvent.date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
                <div className="ticket-detail">
                  <span className="ticket-detail-label">{t.booking.venue}</span>
                  <span className="ticket-detail-value">{bookingEvent.venue}</span>
                </div>
                <div className="ticket-detail">
                  <span className="ticket-detail-label">{t.booking.ticket}</span>
                  <span className="ticket-detail-value">{selectedTicket.tier} × {quantity}</span>
                </div>
                <div className="ticket-detail">
                  <span className="ticket-detail-label">{t.booking.totalPaid}</span>
                  <span className="ticket-detail-value">{total.toLocaleString()} {selectedTicket.currency}</span>
                </div>
                <div className="ticket-detail">
                  <span className="ticket-detail-label">{t.booking.guest}</span>
                  <span className="ticket-detail-value">{form.firstName} {form.lastName}</span>
                </div>
                <div className="ticket-detail">
                  <span className="ticket-detail-label">{t.booking.reference}</span>
                  <span className="ticket-detail-value ref">{bookingRef.current}</span>
                </div>
              </div>
            </div>

            <AddToCalendar event={bookingEvent} bookingRef={bookingRef.current} />

            <div className="booking-actions" style={{ width: '100%', padding: 0 }}>
              <button className="btn-primary" onClick={closeBooking} style={{ flex: 1, justifyContent: 'center' }}>{t.booking.done}</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
