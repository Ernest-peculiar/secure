import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import starGold from '../assets/star-gold.png';
import { STATS } from '../data/site.js';

export default function Experience() {
  return (
    <section id="experience" className="section section--dark2 experience">
      <img className="experience__watermark spin-mid" src={starGold} alt="" aria-hidden="true" />
      <div className="container stack-xl experience__inner">
        <Reveal className="section__head">
          <h2 className="h2">Our experience</h2>
          <p className="muted">Every trip is planned around your time, your comfort and your safety.</p>
        </Reveal>
        <div className="stats">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12} className="stat">
              <div className="stat__value">
                <Counter to={s.value} />
              </div>
              <div className="stat__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
