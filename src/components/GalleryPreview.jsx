import { Sparkles, Music2, Gift, Shirt, Camera, Glasses, Flower, Zap, Star, Cherry } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const photos = [
  '/pictures/photo_0006.jpg', '/pictures/photo_0007.jpg', '/pictures/photo_0008.jpg',
  '/pictures/photo_0009.jpg', '/pictures/photo_0010.jpg', '/pictures/photo_0011.jpg',
  '/pictures/photo_0012.jpg', '/pictures/photo_0013.jpg', '/pictures/photo_0014.jpg',
  '/pictures/photo_0015.jpg',
];
const icons = [Sparkles, Music2, Gift, Shirt, Camera, Glasses, Flower, Zap, Star, Cherry];

export default function GalleryPreview() {
  const { t } = useLanguage();
  const items = photos.map((photo, i) => ({ photo, caption: t.gallery.captions[i], Icon: icons[i] }));
  const doubled = [...items, ...items];

  return (
    <section className="gallery-strip">
      <div className="gallery-strip-header reveal">
        <span className="section-label">{t.gallery.label}</span>
        <h2 className="section-heading">{t.gallery.heading} <em>{t.gallery.headingEm}</em></h2>
      </div>
      <div className="gallery-track-outer">
        <div className="gallery-track">
          {doubled.map((item, i) => (
            <div className="gallery-item gallery-item-photo" key={i}>
              <img src={item.photo} alt={item.caption} className="gallery-item-img" loading="lazy" />
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
