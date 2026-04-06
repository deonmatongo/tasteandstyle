import { Sparkles, Music2, Gift, Shirt, Camera, Glasses, Flower, Zap, Star, Cherry } from 'lucide-react';

const items = [
  { photo: '/pictures/photo_0006.jpg', caption: 'Evening Guests', Icon: Sparkles },
  { photo: '/pictures/photo_0007.jpg', caption: 'La Dolce Afro', Icon: Music2 },
  { photo: '/pictures/photo_0008.jpg', caption: 'Brand Gifting', Icon: Gift },
  { photo: '/pictures/photo_0009.jpg', caption: 'Fashion Circle', Icon: Shirt },
  { photo: '/pictures/photo_0010.jpg', caption: 'Style Editorial', Icon: Camera },
  { photo: '/pictures/photo_0011.jpg', caption: 'Portrait', Icon: Glasses },
  { photo: '/pictures/photo_0012.jpg', caption: 'The Collective', Icon: Flower },
  { photo: '/pictures/photo_0013.jpg', caption: 'Runway Ready', Icon: Zap },
  { photo: '/pictures/photo_0014.jpg', caption: 'Front Row', Icon: Star },
  { photo: '/pictures/photo_0015.jpg', caption: 'Sweet Finale', Icon: Cherry },
];

const doubled = [...items, ...items];

export default function GalleryPreview() {
  return (
    <section className="gallery-strip">
      <div className="gallery-strip-header reveal">
        <span className="section-label">Visual Stories</span>
        <h2 className="section-heading">From past <em>editions</em></h2>
      </div>
      <div className="gallery-track-outer">
        <div className="gallery-track">
          {doubled.map((item, i) => (
            <div className="gallery-item gallery-item-photo" key={i}>
              <img
                src={item.photo}
                alt={item.caption}
                className="gallery-item-img"
                loading="lazy"
              />
              <div className="gallery-item-photo-overlay">
                <item.Icon size={20} strokeWidth={1.5} />
                <span className="gallery-item-caption">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
