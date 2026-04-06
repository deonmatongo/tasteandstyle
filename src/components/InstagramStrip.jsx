import { Camera } from 'lucide-react';

const posts = [
  { photo: '/pictures/photo_0002.jpg', likes: '1.2k', caption: 'Valentine Opulence · Edition IV' },
  { photo: '/pictures/photo_0007.jpg', likes: '984', caption: 'La Dolce Afro vibes 🌍' },
  { photo: '/pictures/photo_0009.jpg', likes: '2.1k', caption: 'Fashion circle, front row' },
  { photo: '/pictures/photo_0006.jpg', likes: '1.7k', caption: 'Evening moments, Edition III' },
  { photo: '/pictures/photo_0011.jpg', likes: '876', caption: 'Portrait series by the lens' },
  { photo: '/pictures/photo_0014.jpg', likes: '1.4k', caption: 'After hours · the vibe never stops' },
];

export default function InstagramStrip() {
  return (
    <section className="insta-strip">
      <div className="insta-strip-header reveal">
        <div className="insta-strip-handle">
          <Camera size={18} strokeWidth={1.5} />
          <span>@tasteandstyle.official</span>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="insta-follow-btn"
        >
          Follow us
        </a>
      </div>

      <div className="insta-grid">
        {posts.map((p, i) => (
          <a
            key={i}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`insta-post reveal reveal-delay-${(i % 4) + 1}`}
          >
            <img src={p.photo} alt={p.caption} className="insta-post-img" loading="lazy" />
            <div className="insta-post-overlay">
              <Camera size={20} strokeWidth={1.5} className="insta-post-icon" />
              <span className="insta-post-likes">♥ {p.likes}</span>
              <span className="insta-post-caption">{p.caption}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
