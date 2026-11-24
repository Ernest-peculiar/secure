import Reveal from '../components/Reveal.jsx';
import { VEHICLES, waLink } from '../data/site.js';

export default function Fleet() {
  return (
    <section id="fleet" className="section section--paper">
      <div className="container stack-xl">
        <Reveal className="section__head">
          <h2 className="h2">Choose your vehicle</h2>
          <p className="muted-ink">
            Tell us the date and the vehicle you want. We confirm availability and rates by phone or WhatsApp.
          </p>
        </Reveal>

        <div className="fleet">
          {VEHICLES.map((v, i) => (
            <Reveal key={v.id} delay={i * 0.12} className="fleet__cell">
              <article className="card">
                <div className="card__media">
                  <img src={v.img} alt={v.alt} style={{ objectPosition: v.position }} loading="lazy" />
                </div>
                <div className="card__body">
                  <h3 className="card__title">{v.name}</h3>
                  <p className="card__text">{v.blurb}</p>
                  <a className="card__link" href={waLink(`Hello White Star, I'd like to book the ${v.name}.`)}>
                    Book this vehicle
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
