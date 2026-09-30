// The two marks, served from /brand at the widths the page draws them.
export function Wordmark({ className = '', eager = false, alt = 'SouthBound' }) {
  return (
    <img
      src="/brand/southbound-wordmark-1280.webp"
      srcSet="/brand/southbound-wordmark-640.webp 640w, /brand/southbound-wordmark-1280.webp 1280w"
      sizes="(max-width: 640px) 90vw, 720px"
      width="1280"
      height="385"
      alt={alt}
      fetchPriority={eager ? 'high' : undefined}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`h-auto object-contain ${className}`}
    />
  );
}

export function Monogram({ className = '', alt = 'SB' }) {
  return (
    <img
      src="/brand/sb-mark-320.webp"
      srcSet="/brand/sb-mark-160.webp 160w, /brand/sb-mark-320.webp 320w, /brand/sb-mark-640.webp 640w"
      sizes="(max-width: 640px) 40vw, 240px"
      width="320"
      height="244"
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-auto object-contain ${className}`}
    />
  );
}
