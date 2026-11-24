import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the #hash target after a route change, or to the top if there is none. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
