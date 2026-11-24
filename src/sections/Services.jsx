import Reveal from '../components/Reveal.jsx';
import img from '../assets/prado-studio.jpg';
import { SERVICES } from '../data/site.js';

export default function Services() {
  return (
    <section id="services" className="section section--white">
      <div className="container split">
        <Reveal variant="left" className="split__media zoom">
          <img src={img} alt="Black Toyota Land Cruiser Prado seen from the front left" loading="lazy" />
        </Reveal>
        <Reveal variant="right" className="split__copy">
          <h2 className="h2">What we do</h2>
          <div className="services">
            {SERVICES.map((s) => (
              <div className="services__item" key={s.title}>
                <h3>{s.title}</h3>
                <p className="muted-ink">{s.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
