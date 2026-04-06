const items = [
  'Fashion Forward', 'Fine Dining', 'Curated Editions', 'London',
  'Exclusive Experiences', 'Style Conversations', 'By Agnessitta',
  'La Dolce Afro', 'Valentine Opulence', 'Culture & Community',
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
            <svg className="marquee-separator" width="8" height="8" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true"><path d="M4 0L8 4L4 8L0 4Z"/></svg>
          </span>
        ))}
      </div>
    </div>
  );
}
