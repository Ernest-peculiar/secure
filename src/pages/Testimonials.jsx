import Reveal from '../components/Reveal.jsx';
import Rating from '../components/Rating.jsx';
import BookingBand from '../sections/BookingBand.jsx';
import starGold from '../assets/star-gold.png';
import { FEATURED_TESTIMONIAL, TESTIMONIALS } from '../data/site.js';

export default function Testimonials() {
  return (
    <>
      <section className="hero hero--center">
        <img className="hero__watermark hero__watermark--center spin-slow" src={starGold} alt="" aria-hidden="true" />
        <div className="container t-hero">
          <img className="hero-star glow" src={starGold} alt="White Star logo" width="72" height="70" />
          <h1 className="hero__title ha ha--1">What our clients say</h1>
          <Rating size={34} animate delay={0.5} />
          <p className="hero__lead ha ha--3">Real words from people who rode with us in Lagos.</p>
        </div>
      </section>

      <section className="featured">
        <Reveal variant="zoom" className="featured__inner">
          <svg width="56" height="56" viewBox="0 0 24 24" fill="#E2B24C" aria-hidden="true">
            <path d="M4 17.5V12c0-4 2-6.5 5.5-7l.5 1.8C8 7.3 7.2 8.5 7.2 10H10v7.5zM14 17.5V12c0-4 2-6.5 5.5-7l.5 1.8c-2 .5-2.8 1.7-2.8 3.2H20v7.5z" />
          </svg>
          <blockquote>{FEATURED_TESTIMONIAL.quote}</blockquote>
          <div className="person">
            <span>{FEATURED_TESTIMONIAL.name}</span>
            <span className="muted">{FEATURED_TESTIMONIAL.detail}</span>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="container t-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 0.12} className="t-grid__cell">
              <article className="tcard">
                <Rating size={20} />
                <p className="tcard__quote">{t.quote}</p>
                <div className="person">
                  <span>{t.name}</span>
                  <span className="muted">{t.detail}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <BookingBand variant="review" />
    </>
  );
}
