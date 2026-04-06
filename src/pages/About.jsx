import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { pastEvents } from '../data/events';

export default function About() {
  const { lang, t } = useLanguage();
  const a = t.about;

  return (
    <div className="about-page">
      {/* Manifesto */}
      <div className="about-manifesto">
        <div className="about-manifesto-inner">
          <span className="section-label reveal" style={{ color: 'var(--gold)' }}>{a.manifestoLabel}</span>
          <p className="about-manifesto-quote reveal reveal-delay-1">{a.manifestoQuote}</p>
          <p className="about-manifesto-sub reveal reveal-delay-2">{a.manifestoSub}</p>
        </div>
      </div>

      {/* Story */}
      <section className="about-story-section">
        <div className="about-story-inner">
          <span className="section-label reveal">{a.originLabel}</span>
          <h2 className="about-story-heading reveal reveal-delay-1">{a.originHeading}</h2>
          <div className="about-story-photo-wrap reveal reveal-delay-1">
            <img src="/pictures/photo_0004.jpg" alt="Agnessitta hosting at Orzo Restaurant" className="about-story-photo" />
          </div>
          <p className="about-story-body reveal reveal-delay-2">{a.originBody1}</p>
          <p className="about-story-body reveal reveal-delay-2">{a.originBody2}</p>
          <blockquote className="about-story-highlight reveal reveal-delay-3">{a.originBlockquote}</blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values-inner">
          <div className="about-values-header reveal">
            <span className="section-label">{a.valuesLabel}</span>
            <h2 className="section-heading">{a.valuesHeading}<br /><em>{a.valuesHeadingEm}</em></h2>
          </div>
          <div className="about-values-grid">
            {a.values.map((v, i) => (
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
            <span className="section-label" style={{ color: 'var(--gold)' }}>{a.timelineLabel}</span>
            <h2 className="section-heading">{a.timelineHeading}<br /><em>{a.timelineHeadingEm}</em></h2>
          </div>
          <div className="timeline-items">
            {pastEvents.map((e, i) => (
              <div key={e.id} className={`timeline-item reveal reveal-delay-${i + 1}`}>
                <span className="timeline-dot" />
                {e.EventIcon && <e.EventIcon size={28} strokeWidth={1.5} className="timeline-emoji" />}
                <div className="timeline-content">
                  <div className="timeline-title">{e.title}</div>
                  <div className="timeline-meta">
                    {e.venue} · {e.date.toLocaleDateString(lang === 'pl' ? 'pl-PL' : 'en-GB', { month: 'long', year: 'numeric' })} · {e.capacity} {a.timelineGuests}
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
          <h2 className="section-heading">{a.ctaHeading} <em>{a.ctaHeadingEm}</em>?</h2>
          <p className="section-subtext">{a.ctaSub}</p>
          <div className="about-cta-btns">
            <Link to="/events" className="btn-primary">{a.ctaBtn}</Link>
            <a href="mailto:hello@tasteandstyle.pl" className="btn-outline">{a.ctaContact}</a>
          </div>
        </div>
      </section>
    </div>
  );
}
