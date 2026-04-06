import { useLanguage } from '../context/LanguageContext';

export default function BrandStory() {
  const { t } = useLanguage();
  return (
    <section className="brand-story">
      <div className="brand-story-inner">
        <div className="brand-story-text-block reveal">
          <span className="brand-story-label">{t.story.label}</span>
          <h2 className="brand-story-heading">{t.story.heading}</h2>
          <p className="brand-story-body">{t.story.body1}</p>
          <p className="brand-story-body">{t.story.body2}</p>
        </div>

        <div className="brand-story-text-block reveal reveal-delay-2">
          <blockquote className="brand-story-quote">{t.story.quote}</blockquote>
          <div className="brand-story-stats-grid" style={{ marginTop: 40 }}>
            <div className="brand-story-stat">
              <span className="brand-story-stat-value">100%</span>
              <span className="brand-story-stat-label">{t.story.soldOut}</span>
            </div>
            <div className="brand-story-stat">
              <span className="brand-story-stat-value">4.9★</span>
              <span className="brand-story-stat-label">{t.story.rating}</span>
            </div>
            <div className="brand-story-stat">
              <span className="brand-story-stat-value">68%</span>
              <span className="brand-story-stat-label">{t.story.returnGuests}</span>
            </div>
            <div className="brand-story-stat">
              <span className="brand-story-stat-value">4 days</span>
              <span className="brand-story-stat-label">{t.story.sellout}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
