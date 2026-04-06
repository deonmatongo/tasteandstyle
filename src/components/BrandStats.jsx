const stats = [
  { value: '4', label: 'Cities' },
  { value: '360+', label: 'Guests Hosted' },
  { value: '3', label: 'Years of Excellence' },
  { value: '7', label: 'Editions Curated' },
];

export default function BrandStats() {
  return (
    <section className="brand-stats">
      <div className="brand-stats-grid">
        {stats.map((s, i) => (
          <div className={`stat-item reveal reveal-delay-${i + 1}`} key={s.label}>
            <span className="stat-number">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
