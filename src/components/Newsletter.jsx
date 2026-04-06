import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-inner">
        <span className="section-label reveal">{t.newsletter.label}</span>
        <h2 className="newsletter-heading reveal reveal-delay-1">
          {t.newsletter.heading}<br />{t.newsletter.headingBr} <em style={{ fontStyle: 'italic', color: 'var(--nude-deep)' }}>{t.newsletter.headingEm}</em>.
        </h2>
        <p className="newsletter-sub reveal reveal-delay-2">
          {t.newsletter.sub}
        </p>

        {submitted ? (
          <div className="reveal" style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ marginBottom: 12 }}><CheckCircle size={36} strokeWidth={1.5} style={{ color: 'var(--nude-deep)' }} /></div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--ink)' }}>
              {t.newsletter.successText}
            </p>
          </div>
        ) : (
          <form className="newsletter-form reveal reveal-delay-3" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder={t.newsletter.placeholder}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">
              {t.newsletter.cta}
            </button>
          </form>
        )}

        <p className="reveal" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          {t.newsletter.noSpam}
        </p>
      </div>
    </section>
  );
}
