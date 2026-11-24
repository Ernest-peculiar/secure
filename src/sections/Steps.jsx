import Reveal from '../components/Reveal.jsx';
import { STEPS } from '../data/site.js';

export default function Steps() {
  return (
    <section className="section section--paper">
      <div className="container stack-xl">
        <Reveal className="section__head">
          <h2 className="h2">How booking works</h2>
        </Reveal>
        <Reveal as="ol" className="steps">
          <span className="steps__line" aria-hidden="true">
            <span className="steps__fill" />
          </span>
          {STEPS.map((s, i) => (
            <li className="step" key={s.title}>
              <span className={`step__num ${i === STEPS.length - 1 ? 'step__num--last' : ''}`}>{i + 1}</span>
              <h3>{s.title}</h3>
              <p className="muted-ink">{s.text}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
