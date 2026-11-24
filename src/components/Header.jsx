import { Link, NavLink } from 'react-router-dom';
import starWhite from '../assets/star-white.png';
import { SITE } from '../data/site.js';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="brand" aria-label={`${SITE.name} home`}>
          <img className="brand__star" src={starWhite} alt="" width="42" height="41" />
          <span className="brand__name">
            {SITE.name}
            <small>{SITE.tagline}</small>
          </span>
        </Link>
        <nav className="nav" aria-label="Main">
          <Link to={{ pathname: '/', hash: '#fleet' }}>Fleet</Link>
          <Link to={{ pathname: '/', hash: '#services' }}>Services</Link>
          <Link to={{ pathname: '/', hash: '#experience' }}>Experience</Link>
          <NavLink to="/testimonials">Testimonials</NavLink>
          <Link to={{ pathname: '/', hash: '#contact' }}>Contact</Link>
          <a className="btn btn--gold" href={`tel:${SITE.phoneTel}`}>
            {SITE.phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
