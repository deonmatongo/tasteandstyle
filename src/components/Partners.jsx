const partners = [
  'Vogue Polska',
  'Elle Polska',
  "Harper's Bazaar",
  'Wysokie Obcasy',
  'Gazeta Wyborcza',
  'Radio Nowy Świat',
];

export default function Partners() {
  return (
    <section className="partners">
      <div className="partners-inner">
        <p className="partners-label reveal">As featured in</p>
        <div className="partners-grid">
          {partners.map((name, i) => (
            <div key={name} className={`partner-item reveal reveal-delay-${(i % 4) + 1}`}>
              <span className="partner-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
