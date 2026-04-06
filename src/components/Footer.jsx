import { Link } from 'react-router-dom';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/pictures/photo_0001.jpg" alt="Taste & Style by Agnessitta" className="footer-logo-img" />
            </Link>
            <p className="footer-tagline">Where taste meets style,<br />edition after edition.</p>
            <div className="footer-social-links">
              <a href="#" className="footer-social-link">Ig</a>
              <a href="#" className="footer-social-link">Li</a>
              <a href="#" className="footer-social-link">Fb</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <div className="footer-col-title">Editions</div>
              <div className="footer-links">
                <Link to="/events">Upcoming Events</Link>
                <Link to="/events">Past Editions</Link>
                <Link to="/about">Our Story</Link>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Info</div>
              <div className="footer-links">
                <a href="mailto:hello@tasteandstyle.pl">Contact</a>
                <a href="#">Press &amp; Media</a>
                <a href="#">Private Events</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Legal</div>
              <div className="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span className="footer-copy">© {year} Taste &amp; Style. All rights reserved.</span>
        <span className="footer-copy">Curated Editions · by Agnessitta</span>
      </div>
    </footer>
  );
}
