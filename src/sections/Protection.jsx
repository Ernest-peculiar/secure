import Reveal from '../components/Reveal.jsx';
import lagos from '../assets/escort-lagos.jpg';
import truck from '../assets/escort-truck.jpg';

export default function Protection() {
  return (
    <section className="section section--dark">
      <div className="container stack-xl">
        <Reveal className="section__head section__head--wide">
          <h2 className="h2">Moving people with protection</h2>
          <p className="muted">
            Moving an executive, a guest or a full event? Tell us the route, the date and how many vehicles you need. We
            plan the movement and quote it before you commit.
          </p>
        </Reveal>
        <div className="duo">
          <Reveal variant="left" className="duo__main zoom">
            <img
              src={lagos}
              alt="Security personnel in black tactical gear standing in front of a patrol vehicle on the Lagos waterfront"
              loading="lazy"
            />
          </Reveal>
          <Reveal variant="right" className="duo__side zoom">
            <img src={truck} alt="Security personnel riding on a pickup truck on a Nigerian street" loading="lazy" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
