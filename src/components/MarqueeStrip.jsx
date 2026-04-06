import { useLanguage } from '../context/LanguageContext';

export default function MarqueeStrip() {
  const { t } = useLanguage();
  const doubled = [...t.marquee, ...t.marquee];
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
