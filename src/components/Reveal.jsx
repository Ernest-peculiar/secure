import useInView from '../hooks/useInView.js';

/**
 * Fades and slides its children in when they scroll into view.
 * variant: 'up' (default) | 'left' | 'right' | 'zoom'
 */
export default function Reveal({ as: Tag = 'div', variant = 'up', delay = 0, className = '', style, children, ...rest }) {
  const [ref, seen] = useInView();
  const classes = ['reveal', `reveal--${variant}`, seen ? 'is-in' : '', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={classes} style={{ transitionDelay: `${delay}s`, ...style }} {...rest}>
      {children}
    </Tag>
  );
}
