const tickets = [
  {
    badge: 'Access',
    tier: 'Essential',
    price: '490',
    perks: [
      'Evening reception & welcome drinks',
      'Fashion presentation access',
      'Three-course dinner',
      'Event programme booklet',
    ],
    featured: false,
  },
  {
    badge: 'Most Selected',
    tier: 'Signature',
    price: '890',
    perks: [
      'Full seven-course tasting dinner',
      'Premium sommelier wine pairing',
      'Front-row fashion presentation',
      'Private showroom access',
      'Curated gift experience',
      'After-hours lounge entry',
    ],
    featured: true,
  },
  {
    badge: 'Exclusive',
    tier: 'Atelier',
    price: '1490',
    perks: [
      'Everything in Signature',
      "Chef's table seating",
      'Meet-and-greet with designers',
      'Personal stylist session',
      'Priority invitation to next edition',
    ],
    featured: false,
  },
];

export default function Tickets() {
  return (
    <section className="tickets" id="tickets">
      <div className="tickets-header">
        <div className="section-label reveal">Reservations</div>
        <h2 className="section-heading reveal reveal-delay-1">
          Secure your <em>invitation</em>.
        </h2>
      </div>
      <div className="ticket-grid reveal reveal-delay-2">
        {tickets.map((t) => (
          <div className={`ticket-card${t.featured ? ' featured' : ''}`} key={t.tier}>
            <div className="ticket-badge">{t.badge}</div>
            <div className="ticket-tier">{t.tier}</div>
            <div className="ticket-price">
              <span className="ticket-currency">zł</span>
              {t.price}
            </div>
            <ul className="ticket-perks">
              {t.perks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <button className="ticket-btn">Reserve Now</button>
          </div>
        ))}
      </div>
    </section>
  );
}
