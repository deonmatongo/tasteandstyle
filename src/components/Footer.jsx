import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();
  const tf = t.footer;

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/pictures/photo_0001.jpg" alt="Taste & Style by Agnessitta" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline">{tf.tagline.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-link">Ig</a>
              <a href="#" className="footer-social-link">Li</a>
              <a href="#" className="footer-social-link">Fb</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div className="footer-col-title">{tf.colEditions}</div>
              <div className="footer-links">
                <Link to="/events">{tf.upcoming}</Link>
                <Link to="/events">{tf.past}</Link>
                <Link to="/about">{tf.story}</Link>
              </div>
            </div>
            <div>
              <div className="footer-col-title">{tf.colInfo}</div>
              <div className="footer-links">
                <a href="mailto:hello@tasteandstyle.pl">{tf.contact}</a>
                <a href="#">{tf.press}</a>
                <a href="#">{tf.private}</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">{tf.colLegal}</div>
              <div className="footer-links">
                <a href="#">{tf.privacy}</a>
                <a href="#">{tf.terms}</a>
                <a href="#">{tf.cookies}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© {year} Taste &amp; Style. {tf.rights}</span>
        <span className="footer-copy">{tf.curated}</span>
      </div>
    </footer>
  );
}
