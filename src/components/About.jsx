import { UtensilsCrossed, Shirt, Handshake, Sparkles } from 'lucide-react';

const cards = [
  {
    Icon: UtensilsCrossed,
    title: 'Culinary Mastery',
    desc: "A progressive dinner curated by Warsaw's most celebrated culinary voices, each course paired with a story.",
  },
  {
    Icon: Shirt,
    title: 'Fashion Showcase',
    desc: "An intimate presentation of collections from Poland's most daring emerging and established designers.",
    dark: true,
  },
  {
    Icon: Handshake,
    title: 'Curated Connections',
    desc: 'Structured and organic networking designed to create meaningful relationships between creative industries.',
  },
  {
    Icon: Sparkles,
    title: 'Exclusive Access',
    desc: "Private showroom visits, chef's table access, and curated gift experiences for every attendee.",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <div className="section-label reveal">The Concept</div>
        <h2 className="section-heading reveal reveal-delay-1">
          More than an<br />event — a <em>world</em>.
        </h2>
        <p className="about-text reveal reveal-delay-2">
          Taste &amp; Style is Warsaw's most intimate gathering of culinary tastemakers and fashion
          luminaries. Each edition is meticulously designed to foster genuine connections among those
          who shape culture in Poland and beyond.
        </p>
        <p className="about-text reveal reveal-delay-2">
          From a seven-course tasting menu curated by Michelin-starred talent to an intimate runway
          showcase from emerging Polish designers — every detail is considered, every moment intentional.
        </p>
        <div className="about-stats reveal reveal-delay-3">
          <div>
            <span className="stat-num">120</span>
            <span className="stat-label">Select Guests</span>
          </div>
          <div>
            <span className="stat-num">7</span>
            <span className="stat-label">Curated Courses</span>
          </div>
          <div>
            <span className="stat-num">3</span>
            <span className="stat-label">Editions Held</span>
          </div>
        </div>
      </div>

      <div className="about-right reveal reveal-delay-1">
        {cards.map((card, i) => (
          <div className="about-card" key={i}>
            <span className="card-icon" style={card.dark ? { filter: 'invert(1)' } : undefined}>
              <card.Icon size={28} strokeWidth={1.5} />
            </span>
            <div className="card-title">{card.title}</div>
            <div className="card-desc">{card.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
