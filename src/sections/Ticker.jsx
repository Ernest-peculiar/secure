import StarIcon from '../components/StarIcon.jsx';
import { PROMISES } from '../data/site.js';

function Row({ hidden }) {
  return (
    <div className="ticker__row" aria-hidden={hidden || undefined}>
      {PROMISES.map((text) => (
        <span className="ticker__item" key={text}>
          <span>{text}</span>
          <StarIcon size={16} color="#15110F" />
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <section className="ticker" aria-label="Our promises">
      <div className="ticker__track">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
