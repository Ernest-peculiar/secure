import starWhite from '../assets/star-white.png';
import { SITE } from '../data/site.js';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={starWhite} alt="" width="44" height="43" />
            <span>{SITE.legalName}</span>
          </div>
          <div className="footer__col">
            <h3>Office</h3>
            <p>
              {SITE.addressLines[0]},
              <br />
              {SITE.addressLines[1]}
            </p>
          </div>
          <div className="footer__col">
            <h3>Phone and WhatsApp</h3>
            <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
          </div>
          <div className="footer__col">
            <h3>Online</h3>
            <a href={`https://www.instagram.com/${SITE.instagram}`} target="_blank" rel="noreferrer">
              Instagram: @{SITE.instagram}
            </a>
            <a href={`mailto:${SITE.email}`} className="wrap-anywhere">
              {SITE.email}
            </a>
          </div>
        </div>
        <p className="footer__legal">
          &copy; {new Date().getFullYear()} {SITE.legalName}. Lagos, Nigeria.
        </p>
      </div>
    </footer>
  );
}
