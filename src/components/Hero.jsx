import { UtensilsCrossed } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Warsaw · June 2025 · An Exclusive Experience</div>
        <h1 className="hero-title">
          Where <em>taste</em><br />meets<br />style.
        </h1>
        <p className="hero-desc">
          A singular evening uniting Warsaw's culinary visionaries and fashion pioneers — curated for
          those who live beautifully at the intersection of culture, creativity, and connection.
        </p>
        <div className="hero-actions">
          <a href="#tickets" className="btn-primary"><span>Get Your Invitation</span></a>
          <a href="#about" className="btn-link">Discover More</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-img-container">
          <div className="hero-visual">
            <div className="hero-circle-deco" />
            <div className="hero-plate"><UtensilsCrossed size={40} strokeWidth={1.2} /></div>
            <div className="hero-fashion-tag">Haute Cuisine</div>
            <div className="hero-date-tag">28 · VI · 2025 · Warsaw</div>
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  );
}
