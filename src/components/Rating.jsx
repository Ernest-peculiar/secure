import StarIcon from './StarIcon.jsx';

/** Five gold stars. `animate` pops them in one by one. */
export default function Rating({ size = 20, animate = false, delay = 0 }) {
  return (
    <div className="rating" role="img" aria-label="Five star rating">
      {[0, 1, 2, 3, 4].map((i) => (
        <StarIcon
          key={i}
          size={size}
          color="#E2B24C"
          className={animate ? 'star-pop' : undefined}
          style={animate ? { animationDelay: `${delay + i * 0.15}s` } : undefined}
        />
      ))}
    </div>
  );
}
