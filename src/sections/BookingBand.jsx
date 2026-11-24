import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import starWhite from '../assets/star-white.png';
import { SITE, waLink } from '../data/site.js';

/** Red call-to-action band. Pass `variant="review"` for the testimonials page. */
export default function BookingBand({ variant = 'book' }) {
  const review = variant === 'review';
  return (
    <section className="band">
      <img className="band__watermark spin-slow" src={starWhite} alt="" aria-hidden="true" />
      <div className="container band__inner">
        <Reveal className="band__copy">
          <h2 className="h2 h2--md">{review ? 'Rode with White Star?' : 'Send your dates and the vehicle you want'}</h2>
          <p>{review ? 'Send us a message about your trip. It helps the next client choose.' : 'We reply with availability and rates.'}</p>
        </Reveal>
        <Reveal variant="right" className="band__actions">
          {review ? (
            <>
              <a className="btn btn--white" href={waLink('Hello White Star, here is my feedback on my trip: ')}>
                Send your review on WhatsApp
              </a>
              <Link className="btn btn--ghost-white" to="/">
                Back to home
              </Link>
            </>
          ) : (
            <>
              <a className="btn btn--white" href={waLink()}>
                Book on WhatsApp
              </a>
              <a className="btn btn--ghost-white" href={`tel:${SITE.phoneTel}`}>
                Call {SITE.phoneDisplay}
              </a>
            </>
          )}
        </Reveal>
      </div>
    </section>
  );
}
