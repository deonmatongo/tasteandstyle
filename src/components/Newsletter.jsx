import { useState } from 'react';
import { CheckCircle } from 'lucide-react';

export default function Newsletter() {
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
        <span className="section-label reveal">Inner Circle</span>
        <h2 className="newsletter-heading reveal reveal-delay-1">
          Be the first to know about<br />the next <em style={{ fontStyle: 'italic', color: 'var(--nude-deep)' }}>edition</em>.
        </h2>
        <p className="newsletter-sub reveal reveal-delay-2">
          Early access to reservations, curator announcements, and exclusive previews — for those on our private list.
        </p>

        {submitted ? (
          <div className="reveal" style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ marginBottom: 12 }}><CheckCircle size={36} strokeWidth={1.5} style={{ color: 'var(--nude-deep)' }} /></div>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: 18, color: 'var(--ink)' }}>
              You're on the list. We'll be in touch before the next edition opens.
            </p>
          </div>
        ) : (
          <form className="newsletter-form reveal reveal-delay-3" onSubmit={handleSubmit}>
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-primary">
              Join the List
            </button>
          </form>
        )}

        <p className="reveal" style={{ fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>
          No spam. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
