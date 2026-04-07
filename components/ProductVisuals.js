import { useId } from "react";

export function ProductVisual({ type = "cell" }) {
  const rawId = useId();
  const id = rawId.replace(/:/g, "");

  if (type === "storage") {
    const frameId = `storageFrame-${id}`;
    const glowId = `storageGlow-${id}`;
    const panelId = `modulePanel-${id}`;
    const accentId = `moduleAccent-${id}`;
    const terminalId = `terminalAccent-${id}`;
    const neonId = `storageNeon-${id}`;

    return (
      <svg viewBox="0 0 320 180" fill="none" aria-hidden="true" role="img">
        <defs>
          <linearGradient id={frameId} x1="32" y1="26" x2="288" y2="154" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6F95FF" stopOpacity="0.26" />
            <stop offset="1" stopColor="#D04DFF" stopOpacity="0.18" />
          </linearGradient>
          <linearGradient id={glowId} x1="160" y1="34" x2="160" y2="146" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7CA1FF" stopOpacity="0.2" />
            <stop offset="1" stopColor="#FF5CCF" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id={panelId} x1="66" y1="48" x2="254" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#2A406D" stopOpacity="0.95" />
            <stop offset="1" stopColor="#1C2E52" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id={accentId} x1="76" y1="96" x2="194" y2="96" gradientUnits="userSpaceOnUse">
            <stop stopColor="#86AAFF" />
            <stop offset="1" stopColor="#B075FF" />
          </linearGradient>
          <linearGradient id={terminalId} x1="214" y1="74" x2="252" y2="112" gradientUnits="userSpaceOnUse">
            <stop stopColor="#79A8FF" />
            <stop offset="1" stopColor="#F05FFF" />
          </linearGradient>
          <filter id={neonId} x="0" y="0" width="320" height="180" filterUnits="userSpaceOnUse">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect x="32" y="26" width="256" height="128" rx="26" fill={`url(#${glowId})`} stroke={`url(#${frameId})`} />
        <rect x="66" y="48" width="188" height="84" rx="22" fill={`url(#${panelId})`} stroke="rgba(127, 163, 255, 0.32)" />

        <g filter={`url(#${neonId})`}>
          <rect x="84" y="74" width="102" height="16" rx="8" fill={`url(#${accentId})`} />
          <rect x="84" y="100" width="62" height="10" rx="5" fill="rgba(226, 236, 255, 0.7)" />
          <rect x="214" y="74" width="28" height="38" rx="7" fill={`url(#${terminalId})`} />
        </g>

        <rect x="260" y="74" width="9" height="38" rx="4.5" fill="rgba(212, 224, 255, 0.28)" />
        <circle cx="61" cy="61" r="2.5" fill="rgba(162, 193, 255, 0.55)" />
        <circle cx="259" cy="61" r="2.5" fill="rgba(225, 130, 255, 0.55)" />
      </svg>
    );
  }

  const frameId = `cellFrame-${id}`;
  const bodyId = `cellBody-${id}`;
  const coreId = `cellCore-${id}`;
  const neonId = `cellNeon-${id}`;

  return (
    <svg viewBox="0 0 320 180" fill="none" aria-hidden="true" role="img">
      <defs>
        <linearGradient id={frameId} x1="44" y1="30" x2="276" y2="150" gradientUnits="userSpaceOnUse">
          <stop stopColor="#74A2FF" stopOpacity="0.28" />
          <stop offset="1" stopColor="#D94CFF" stopOpacity="0.16" />
        </linearGradient>
        <linearGradient id={bodyId} x1="78" y1="62" x2="242" y2="116" gradientUnits="userSpaceOnUse">
          <stop stopColor="#213968" />
          <stop offset="1" stopColor="#1A2F56" />
        </linearGradient>
        <linearGradient id={coreId} x1="116" y1="86" x2="210" y2="86" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7CA6FF" />
          <stop offset="1" stopColor="#B26FFF" />
        </linearGradient>
        <filter id={neonId} x="0" y="0" width="320" height="180" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect x="44" y="30" width="232" height="120" rx="24" fill="rgba(34, 54, 88, 0.5)" stroke={`url(#${frameId})`} />
      <rect x="74" y="61" width="172" height="58" rx="29" fill={`url(#${bodyId})`} stroke="rgba(120, 160, 255, 0.32)" />
      <circle cx="92" cy="90" r="15.5" fill="rgba(215, 228, 255, 0.12)" stroke="rgba(145, 177, 255, 0.35)" />

      <g filter={`url(#${neonId})`}>
        <rect x="116" y="82" width="94" height="9" rx="4.5" fill={`url(#${coreId})`} />
        <rect x="116" y="97" width="58" height="6" rx="3" fill="rgba(230, 238, 255, 0.68)" />
      </g>

      <rect x="225" y="74" width="12" height="32" rx="6" fill="rgba(228, 237, 255, 0.28)" />
      <circle cx="61" cy="61" r="2.5" fill="rgba(156, 189, 255, 0.54)" />
      <circle cx="259" cy="61" r="2.5" fill="rgba(225, 124, 255, 0.54)" />
    </svg>
  );
}
