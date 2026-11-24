import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import StarIcon from '../components/StarIcon.jsx';

export default function TestimonialTeaser() {
  return (
    <section className="section section--dark2 section--tight">
      <div className="container teaser">
        <Reveal className="teaser__copy">
          <div className="rating rating--pop" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} size={30} color="#E2B24C" style={{ transitionDelay: `${0.1 + i * 0.1}s` }} />
            ))}
          </div>
          <h2 className="h2 h2--md">What our clients say</h2>
          <p className="muted">Read what clients say about their rides with White Star.</p>
        </Reveal>
        <Reveal variant="right">
          <Link className="btn btn--gold" to="/testimonials">
            Read testimonials
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
