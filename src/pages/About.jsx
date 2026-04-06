import { Link } from 'react-router-dom';
import { pastEvents } from '../data/events';

const values = [
  {
    number: 'I',
    title: 'Intentionality',
    text: 'Every detail is deliberate — from the dress code to the centrepiece. Nothing happens by accident at a Taste & Style edition.',
  },
  {
    number: 'II',
    title: 'Intimacy',
    text: 'We keep our editions small by design. Curated guest lists. No festival crowds — just a room full of people who truly belong there.',
  },
  {
    number: 'III',
    title: 'Excellence',
    text: 'We work only with the best — celebrated chefs, luxury brand partners, and fashion talent that is redefining modern style.',
  },
];

export default function About() {
  return (
    <div className="about-page">
      {/* Manifesto */}
      <div className="about-manifesto">
        <div className="about-manifesto-inner">
          <span className="section-label reveal" style={{ color: 'var(--gold)' }}>Our Manifesto</span>
          <p className="about-manifesto-quote reveal reveal-delay-1">
            "Born from a belief that the most memorable evenings happen when fashion and food share the same table."
          </p>
          <p className="about-manifesto-sub reveal reveal-delay-2">
            Style and taste. Culture and community. London and beyond.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="about-story-section">
        <div className="about-story-inner">
          <span className="section-label reveal">Our Origin</span>
          <h2 className="about-story-heading reveal reveal-delay-1">How it began.</h2>
          <div className="about-story-photo-wrap reveal reveal-delay-1">
            <img src="/pictures/photo_0004.jpg" alt="Agnessitta hosting at Orzo Restaurant" className="about-story-photo" />
          </div>
          <p className="about-story-body reveal reveal-delay-2">
            It started with a vision. Agnessitta believed that the best evenings happen when fashion, food, and culture collide — not in separate rooms, but at the same table. In April 2024, that vision became Edition I: 80 guests at Orzo Restaurant, an evening that ended at 2am with no one wanting to leave.
          </p>
          <p className="about-story-body reveal reveal-delay-2">
            That first evening sold out within days. The second in hours. By Edition III, the red dress code and IBRA gifting had become iconic. Taste &amp; Style had become something more than an event — it had become a movement.
          </p>
          <blockquote className="about-story-highlight reveal reveal-delay-3">
            "Every edition is curated from scratch — every detail, every guest, every moment. That's the Taste &amp; Style promise."
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="about-values-header reveal">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-heading">Three principles.<br /><em>One ethos.</em></h2>
          </div>
          <div className="about-values-grid">
            {values.map((v, i) => (
              <div key={v.title} className={`about-value-card reveal reveal-delay-${i + 1}`}>
                <span className="about-value-number">{v.number}</span>
                <h3 className="about-value-title">{v.title}</h3>
                <p className="about-value-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="about-timeline">
        <div className="about-timeline-inner">
          <div className="about-timeline-header reveal">
            <span className="section-label" style={{ color: 'var(--gold)' }}>Edition History</span>
            <h2 className="section-heading">Every edition.<br /><em>Every city.</em></h2>
          </div>
          <div className="timeline-items">
            {pastEvents.map((e, i) => (
              <div key={e.id} className={`timeline-item reveal reveal-delay-${i + 1}`}>
                <span className="timeline-dot" />
                {e.EventIcon && <e.EventIcon size={28} strokeWidth={1.5} className="timeline-emoji" />}
                <div className="timeline-content">
                  <div className="timeline-title">{e.title}</div>
                  <div className="timeline-meta">
                    {e.venue} · {e.date.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })} · {e.capacity} guests
                  </div>
                  <p className="timeline-desc">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta-section">
        <div className="about-cta-inner reveal">
          <h2 className="section-heading">Ready to experience the next <em>edition</em>?</h2>
          <p className="section-subtext">Seats are limited and sell out fast. Reserve your place at the table.</p>
          <div className="about-cta-btns">
            <Link to="/events" className="btn-primary">View Upcoming Editions</Link>
            <a href="mailto:hello@tasteandstyle.pl" className="btn-outline">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
}
