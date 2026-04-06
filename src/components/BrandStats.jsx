import { useLanguage } from '../context/LanguageContext';

export default function BrandStats() {
  const { t } = useLanguage();
  return (
    <section className="brand-stats">
      <div className="brand-stats-grid">
        {t.stats.items.map((s, i) => (
          <div className={`stat-item reveal reveal-delay-${i + 1}`} key={s.label}>
            <span className="stat-number">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
