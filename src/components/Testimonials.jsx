import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { t } = useLanguage();
  const testimonials = t.testimonials.items;
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      setActive(a => (a + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDot = (i) => {
    setActive(i);
    clearInterval(timerRef.current);
    startTimer();
  };

  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <div className="testimonials-header reveal">
          <span className="section-label" style={{ color: 'var(--gold)' }}>{t.testimonials.label}</span>
          <h2 className="section-heading" style={{ color: 'var(--warm-white)' }}>
            {t.testimonials.heading} <em>{t.testimonials.headingEm}</em>
          </h2>
        </div>

        <div className="testimonials-carousel reveal reveal-delay-1">
          {testimonials.map((item, i) => (
            <div key={i} className={`testimonial-slide${active === i ? ' active' : ''}`}>
              <span className="testimonial-quote-mark">"</span>
              <p className="testimonial-text">{item.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{item.name}</span>
                <span className="testimonial-role">{item.role}</span>
                <span className="testimonial-role" style={{ fontSize: 11, opacity: 0.5 }}>{item.edition}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-dots reveal reveal-delay-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonials-dot${active === i ? ' active' : ''}`}
              onClick={() => handleDot(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
