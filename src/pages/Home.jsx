import Hero from '../sections/Hero.jsx';
import Ticker from '../sections/Ticker.jsx';
import Fleet from '../sections/Fleet.jsx';
import Experience from '../sections/Experience.jsx';
import Services from '../sections/Services.jsx';
import Protection from '../sections/Protection.jsx';
import Steps from '../sections/Steps.jsx';
import TestimonialTeaser from '../sections/TestimonialTeaser.jsx';
import BookingBand from '../sections/BookingBand.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Fleet />
      <Experience />
      <Services />
      <Protection />
      <Steps />
      <TestimonialTeaser />
      <BookingBand />
    </>
  );
}
