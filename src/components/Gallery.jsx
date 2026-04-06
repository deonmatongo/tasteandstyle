import { Wine, Footprints, Soup, Leaf, Gem, Cake, Music, Flower } from 'lucide-react';

const items = [
  { Icon: Wine, caption: 'Champagne Welcome' },
  { Icon: Footprints, caption: 'Designer Pieces' },
  { Icon: Soup, caption: 'Course IV · Umami' },
  { Icon: Leaf, caption: 'Table Arrangement' },
  { Icon: Gem, caption: 'Jewellery Showcase' },
  { Icon: Cake, caption: 'Patisserie Finale' },
  { Icon: Music, caption: 'After Hours Music' },
  { Icon: Flower, caption: 'Floral Installation' },
];

export default function Gallery() {
  const doubled = [...items, ...items];

  return (
    <section className="gallery">
      <div className="gallery-track">
        {doubled.map((item, i) => (
          <div className="gallery-item" key={i}>
            <item.Icon size={32} strokeWidth={1.2} />
            <div className="gallery-caption">{item.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
