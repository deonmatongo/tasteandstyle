import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    quote: "An evening I'll carry with me for years. The dinner was poetry, the fashion was theatre, and the conversation was everything in between.",
    name: 'Magda T.',
    role: 'Creative Director, Warsaw',
    edition: 'Warsaw Summer Edition',
  },
  {
    quote: "Taste & Style has created something entirely new — not a dinner, not a show, but a genuine cultural moment. I've attended every edition since the first.",
    name: 'Piotr K.',
    role: 'Architect, Kraków',
    edition: 'Kraków Autumn Edition',
  },
  {
    quote: "The most beautifully curated evening I've attended in Poland. Every detail — the table, the lighting, the music between courses — spoke of deep intention.",
    name: 'Aleksandra W.',
    role: 'Fashion Editor, Warsaw',
    edition: 'Warsaw Summer Edition',
  },
  {
    quote: "I came for the food, stayed for the fashion, and left with three new friendships I still have. That's the real Taste & Style magic.",
    name: 'Tomasz R.',
    role: 'Restaurateur, Poznań',
    edition: 'Poznań Winter Edition',
  },
];

export default function Testimonials() {
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
          <span className="section-label" style={{ color: 'var(--gold)' }}>Guest Stories</span>
          <h2 className="section-heading" style={{ color: 'var(--warm-white)' }}>
            What our guests <em>say</em>
          </h2>
        </div>

        <div className="testimonials-carousel reveal reveal-delay-1">
          {testimonials.map((t, i) => (
            <div key={i} className={`testimonial-slide${active === i ? ' active' : ''}`}>
              <span className="testimonial-quote-mark">"</span>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <span className="testimonial-name">{t.name}</span>
                <span className="testimonial-role">{t.role}</span>
                <span className="testimonial-role" style={{ fontSize: 11, opacity: 0.5 }}>{t.edition}</span>
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
