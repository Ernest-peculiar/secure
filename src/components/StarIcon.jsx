/** Plain five-point star, used for ratings and the ticker. */
export default function StarIcon({ size = 20, color = 'currentColor', ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" {...rest}>
      <polygon points="12,1 15,9 23,9.5 17,15 19,23 12,18.5 5,23 7,15 1,9.5 9,9" fill={color} />
    </svg>
  );
}
