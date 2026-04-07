import { useId } from "react";

export function ProductVisual({ type = "cell" }) {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");

  if (type === "storage") {
    const frameId = `storageFrame-${id}`;
    const strokeId = `storageStroke-${id}`;
    const glowId = `storageGlow-${id}`;
    const neonId = `storageNeon-${id}`;

    return (
      <svg viewBox="0 0 320 180" fill="none" aria-hidden="true" role="img">
        <defs>
          <linearGradient id={frameId} x1="30" y1="28" x2="290" y2="152" gradientUnits="userSpaceOnUse">
            <stop stopColor="#72A2FF" stopOpacity="0.24" />
            <stop offset="1" stopColor="#D34CFF" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id={strokeId} x1="96" y1="62" x2="230" y2="122" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7DAAFF" />
            <stop offset="1" stopColor="#EB63FF" />
          </radialGradient>
          <radialGradient id={glowId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160 96) rotate(90) scale(72 126)">
            <stop stopColor="#7EAFFF" stopOpacity="0.2" />
            <stop offset="1" stopColor="#D857FF" stopOpacity="0.05" />
          </linearGradient>
          <filter id={neonId} x="0" y="0" width="320" height="180" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="5.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="30" y="28" width="260" height="124" rx="24" fill={`url(#${glowId})`} stroke={`url(#${frameId})`} />

        <g filter={`url(#${neonId})`}>
          <path d="M88 118L226 118L242 66L104 66L88 118Z" stroke={`url(#${strokeId})`} strokeWidth="2.8" />
          <path d="M108 66L92 118" stroke="rgba(130, 177, 255, 0.75)" strokeWidth="1.5" />
          <path d="M136 66L120 118" stroke="rgba(130, 177, 255, 0.75)" strokeWidth="1.5" />
          <path d="M164 66L148 118" stroke="rgba(130, 177, 255, 0.75)" strokeWidth="1.5" />
          <path d="M192 66L176 118" stroke="rgba(130, 177, 255, 0.75)" strokeWidth="1.5" />
          <path d="M220 66L204 118" stroke="rgba(130, 177, 255, 0.75)" strokeWidth="1.5" />
          <path d="M99 84H237" stroke="rgba(214, 163, 255, 0.6)" strokeWidth="1.5" />
          <path d="M94 101H232" stroke="rgba(214, 163, 255, 0.6)" strokeWidth="1.5" />
        </g>

        <path d="M158 118L145 136" stroke="rgba(153, 192, 255, 0.68)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M170 118L183 136" stroke="rgba(211, 131, 255, 0.68)" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M136 136H192" stroke="rgba(226, 237, 255, 0.5)" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }

  const frameId = `cellFrame-${id}`;
  const strokeId = `cellStroke-${id}`;
  const glowId = `cellGlow-${id}`;
  const neonId = `cellNeon-${id}`;

  return (
    <svg viewBox="0 0 320 180" fill="none" aria-hidden="true" role="img">
      <defs>
        <linearGradient id={frameId} x1="44" y1="28" x2="276" y2="152" gradientUnits="userSpaceOnUse">
          <stop stopColor="#73A6FF" stopOpacity="0.24" />
          <stop offset="1" stopColor="#D84BFF" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id={strokeId} x1="142" y1="34" x2="178" y2="148" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7BADFF" />
          <stop offset="1" stopColor="#E25DFF" />
        </radialGradient>
        <radialGradient id={glowId} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(160 90) rotate(90) scale(72 56)">
          <stop stopColor="#7EAFFF" stopOpacity="0.2" />
          <stop offset="1" stopColor="#D857FF" stopOpacity="0.04" />
        </linearGradient>
        <filter id={neonId} x="0" y="0" width="320" height="180" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="5.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g filter={`url(#${neonId})`}>
        <rect x="44" y="28" width="232" height="124" rx="24" fill={`url(#${glowId})`} stroke={`url(#${frameId})`} />
        <rect x="138" y="42" width="44" height="100" rx="22" stroke={`url(#${strokeId})`} strokeWidth="3" />
        <ellipse cx="160" cy="42" rx="22" ry="7" stroke="rgba(213, 234, 255, 0.9)" strokeWidth="2.2" />
        <ellipse cx="160" cy="42" rx="12" ry="3.5" stroke="rgba(138, 177, 255, 0.75)" strokeWidth="1.4" />
        <path d="M146 68V120" stroke="rgba(124, 175, 255, 0.62)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M160 62V120" stroke="rgba(124, 175, 255, 0.62)" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M174 68V120" stroke="rgba(227, 129, 255, 0.52)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}
