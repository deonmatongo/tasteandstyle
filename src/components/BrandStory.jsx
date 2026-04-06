export default function BrandStory() {
  return (
    <section className="brand-story">
      <div className="brand-story-inner">
        <div className="brand-story-text-block reveal">
          <span className="brand-story-label">Our Origin</span>
          <h2 className="brand-story-heading">
            Born from a belief that the most memorable experiences happen at the intersection of two worlds.
          </h2>
          <p className="brand-story-body">
            In April 2024, 80 guests gathered in a converted industrial space in Warsaw. There was a chef, a designer, and an idea: that what we eat and what we wear tell the same story. That evening sold out in four days and ended at 2am with no one wanting to leave.
          </p>
          <p className="brand-story-body">
            That was Edition I. Since then, we've hosted seven intimate evenings across four Polish cities, earned coverage in Vogue Polska and Harper's Bazaar, and built a community of guests who return edition after edition.
          </p>
        </div>

        <div className="brand-story-text-block reveal reveal-delay-2">
          <blockquote className="brand-story-quote">
            "We don't curate events. We create the conditions for something genuinely unexpected to happen."
          </blockquote>
          <div className="brand-story-stats-grid" style={{ marginTop: 40 }}>
            <div className="brand-story-stat">
              <span className="brand-story-stat-value">100%</span>
              <span className="brand-story-stat-label">Sold out rate</span>
            </div>
            <div className="brand-story-stat">
              <span className="brand-story-stat-value">4.9★</span>
              <span className="brand-story-stat-label">Average guest rating</span>
            </div>
            <div className="brand-story-stat">
              <span className="brand-story-stat-value">68%</span>
              <span className="brand-story-stat-label">Return guests</span>
            </div>
            <div className="brand-story-stat">
              <span className="brand-story-stat-value">4 days</span>
              <span className="brand-story-stat-label">Average sell-out time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
