import starGold from '../assets/star-gold.png';
import heroImg from '../assets/lc200-convoy.jpg';
import { SITE, waLink } from '../data/site.js';

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero__watermark spin-slow" src={starGold} alt="" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__copy">
          <img className="hero__star hero-star glow" src={starGold} alt="White Star logo" width="84" height="82" />
          <h1 className="hero__title">
            <span className="ha ha--1">Book a luxury</span>
            <span className="ha ha--2 text-gold">ride in Lagos</span>
          </h1>
          <p className="hero__lead ha ha--3">
            Safe, comfortable and premium car rental. Armored SUVs are available when you want extra protection on the
            road.
          </p>
          <div className="hero__actions ha ha--4">
            <a className="btn btn--gold" href={waLink()}>
              Book on WhatsApp
            </a>
            <a className="btn btn--ghost" href={`tel:${SITE.phoneTel}`}>
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__block slide-block" aria-hidden="true" />
          <div className="hero__photo clip-in">
            <img
              className="drift"
              src={heroImg}
              alt="Three black and dark red Toyota Land Cruisers parked in a row"
            />
          </div>
          <div className="hero__badge floaty">
            <div className="hex hex--gold">
              <div className="hex hex--brown">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#E2B24C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <span className="hex__small">Our location</span>
                <span className="hex__rule" />
                <span className="hex__big">Lagos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
