const items = [
  {
    num: '01',
    title: 'Welcome Reception',
    desc: 'Arrive to a champagne-and-canapé welcome in the art-filled grand salon, dressed by a local floral atelier.',
  },
  {
    num: '02',
    title: 'Fashion Presentation',
    desc: "An intimate runway experience showcasing the season's most compelling Polish collections in a theatrical setting.",
  },
  {
    num: '03',
    title: 'Seven-Course Dinner',
    desc: 'A narrative meal guided by a Michelin-recognised chef, each plate a conversation between land, sea, and season.',
  },
  {
    num: '04',
    title: 'Panel Dialogues',
    desc: 'Candid roundtable conversations between fashion editors, restaurateurs, and cultural entrepreneurs.',
  },
  {
    num: '05',
    title: 'Private Showroom',
    desc: 'Exclusive access to curated collections for purchase, with personal stylist consultation available.',
  },
  {
    num: '06',
    title: 'After-Hours Lounge',
    desc: "The evening continues with a curated cocktail programme and live music selected by Warsaw's finest DJ curators.",
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section-label reveal">The Programme</div>
      <h2 className="section-heading reveal reveal-delay-1">
        An evening of<br />deliberate <em>pleasure</em>.
      </h2>
      <div className="exp-grid reveal reveal-delay-2">
        {items.map((item) => (
          <div className="exp-item" key={item.num}>
            <span className="exp-num">{item.num}</span>
            <div className="exp-title">{item.title}</div>
            <div className="exp-desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
