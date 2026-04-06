import { ChefHat, Shirt, Wine, PenLine } from 'lucide-react';

const guests = [
  {
    Icon: ChefHat,
    role: 'Chef',
    name: 'Aleksander Baronas',
    bio: 'Executive Chef · Restaurant Concept W-wa',
    bg: undefined,
    color: undefined,
  },
  {
    Icon: Shirt,
    role: 'Designer',
    name: 'Ania Kuczyńska',
    bio: 'Fashion Designer · AK Studio Warsaw',
    bg: 'var(--nude-dark)',
    color: 'var(--nude-light)',
  },
  {
    Icon: Wine,
    role: 'Sommelier',
    name: 'Marta Wiśniewska',
    bio: 'Head Sommelier · Grand Hyatt Warsaw',
    bg: 'var(--gold-light)',
    color: undefined,
  },
  {
    Icon: PenLine,
    role: 'Editor',
    name: 'Zuzanna Kołodziejska',
    bio: 'Fashion Editor-at-Large · Elle Polska',
    bg: 'var(--ink)',
    color: undefined,
  },
];

export default function Guests() {
  return (
    <section className="guests" id="guests">
      <div className="section-label reveal">Curators &amp; Guests</div>
      <h2 className="section-heading reveal reveal-delay-1">
        Minds that<br />shape <em>culture</em>.
      </h2>
      <div className="guests-grid reveal reveal-delay-2">
        {guests.map((g) => (
          <div className="guest-card" key={g.name}>
            <div
              className="guest-img"
              style={{
                background: g.bg || undefined,
                color: g.color || undefined,
              }}
            >
              <g.Icon size={48} strokeWidth={1.2} />
              <div className="guest-overlay" />
              <div className="guest-role-tag">{g.role}</div>
            </div>
            <div className="guest-info">
              <div className="guest-name">{g.name}</div>
              <div className="guest-bio">{g.bio}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
