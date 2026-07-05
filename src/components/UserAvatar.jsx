import './UserAvatar.css';

export default function UserAvatar({ name, variant = 'rounded', className = '' }) {
  return (
    <div
      className={`user-avatar user-avatar--${variant} ${className}`}
      role="img"
      aria-label={name ? `${name}'s avatar` : 'User avatar'}
    >
      <svg
        className="user-avatar__svg"
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
      >
        <rect width="120" height="120" rx="16" fill="#EFF6FF" />
        <circle cx="60" cy="42" r="16" fill="#2B6FE8" fillOpacity="0.6" />
        <ellipse cx="60" cy="88" rx="34" ry="26" fill="#2B6FE8" fillOpacity="0.6" />
      </svg>
    </div>
  );
}