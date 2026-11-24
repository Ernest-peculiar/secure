import { waLink } from '../data/site.js';

export default function WhatsAppButton() {
  return (
    <a className="wa" href={waLink()} aria-label="Chat with White Star on WhatsApp">
      <span className="wa__ring" aria-hidden="true" />
      <span className="wa__disc">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.3z" />
          <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.4-2-1.4-2.4-2.4l.8-1-1-2z" />
        </svg>
      </span>
    </a>
  );
}
