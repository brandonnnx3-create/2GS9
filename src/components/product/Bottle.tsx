import type { LiquidTone } from "@/data/catalog";

type BottleProps = {
  /** Prefijo único por instancia: los degradés SVG necesitan ids distintos. */
  id: string;
  liquid: LiquidTone;
  number: string;
  name: string;
  caption: string;
  className?: string;
  decorative?: boolean;
};

/**
 * Frasco GS9 dibujado en SVG, iluminado a contraluz (como el skyline de la
 * dirección de arte). Es un PLACEHOLDER hasta tener fotografía de producto
 * real: el componente que lo usa solo necesita cambiarlo por un <Image>.
 */
export function Bottle({ id, liquid, number, name, caption, className, decorative }: BottleProps) {
  const ref = (key: string) => `url(#${id}-${key})`;

  return (
    <svg
      viewBox="0 0 200 470"
      className={className}
      role={decorative ? undefined : "img"}
      aria-hidden={decorative || undefined}
      aria-label={decorative ? undefined : `Frasco de ${name}`}
    >
      <defs>
        <linearGradient id={`${id}-cap`} x1="0" x2="1">
          <stop offset="0" stopColor="#0b0b0c" />
          <stop offset="0.16" stopColor="#2b2a29" />
          <stop offset="0.32" stopColor="#141414" />
          <stop offset="0.82" stopColor="#090909" />
          <stop offset="0.96" stopColor={liquid.mid} stopOpacity="0.55" />
          <stop offset="1" stopColor="#141414" />
        </linearGradient>
        <linearGradient id={`${id}-collar`} x1="0" x2="1">
          <stop offset="0" stopColor="#241b12" />
          <stop offset="0.28" stopColor="#c99d66" />
          <stop offset="0.5" stopColor="#6a4f34" />
          <stop offset="0.78" stopColor="#e7c08a" />
          <stop offset="1" stopColor="#241b12" />
        </linearGradient>
        <linearGradient id={`${id}-liquid`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={liquid.light} />
          <stop offset="0.42" stopColor={liquid.mid} />
          <stop offset="1" stopColor={liquid.dark} />
        </linearGradient>
        <radialGradient id={`${id}-glow`} cx="0.5" cy="0.12" r="0.75">
          <stop offset="0" stopColor={liquid.light} stopOpacity="0.95" />
          <stop offset="0.55" stopColor={liquid.light} stopOpacity="0.12" />
          <stop offset="1" stopColor={liquid.light} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${id}-depth`} x1="0" x2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.55" />
          <stop offset="0.16" stopColor="#000" stopOpacity="0" />
          <stop offset="0.84" stopColor="#000" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id={`${id}-glass`} x1="0" x2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.16" />
          <stop offset="0.05" stopColor="#fff" stopOpacity="0.03" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.95" stopColor="#fff" stopOpacity="0.04" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id={`${id}-base`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={liquid.mid} stopOpacity="0.55" />
          <stop offset="0.3" stopColor={liquid.dark} stopOpacity="0.5" />
          <stop offset="1" stopColor="#050505" stopOpacity="0.9" />
        </linearGradient>
      </defs>

      {/* Cuerpo de vidrio ahumado */}
      <rect x="12" y="150" width="176" height="312" rx="12" fill="#0b0b0c" />

      {/* Líquido a contraluz */}
      <rect x="25" y="176" width="150" height="236" rx="4" fill={ref("liquid")} />
      <rect x="25" y="176" width="150" height="236" rx="4" fill={ref("glow")} />
      <rect x="25" y="176" width="150" height="236" rx="4" fill={ref("depth")} />
      <rect x="25" y="176" width="150" height="2.5" fill={liquid.light} opacity="0.9" />
      <rect x="40" y="180" width="22" height="228" fill="#fff" opacity="0.07" />
      <rect x="140" y="180" width="8" height="228" fill="#fff" opacity="0.05" />

      {/* Base gruesa de vidrio */}
      <rect x="12" y="412" width="176" height="50" rx="10" fill={ref("base")} />
      <rect x="22" y="413" width="156" height="1.5" fill={liquid.light} opacity="0.55" />

      {/* Reflejos del vidrio */}
      <rect x="12" y="150" width="176" height="312" rx="12" fill={ref("glass")} />
      <rect x="12" y="150" width="176" height="26" rx="12" fill="#fff" opacity="0.05" />
      <rect x="19" y="162" width="4.5" height="288" rx="2.25" fill="#fff" opacity="0.26" />
      <rect x="27" y="170" width="1.2" height="270" fill="#fff" opacity="0.12" />
      <rect x="177" y="162" width="3.5" height="288" rx="1.75" fill={liquid.light} opacity="0.5" />
      <rect x="12.5" y="150.5" width="175" height="311" rx="11.5" fill="none" stroke="#fff" strokeOpacity="0.16" />

      {/* Etiqueta serigrafiada */}
      <image href="/brand/gs9-logo.svg" x="52" y="258" width="96" height="27.6" opacity="0.94" />
      <rect x="86" y="296" width="28" height="0.8" fill="#f3eee6" opacity="0.55" />
      <text
        x="100"
        y="314"
        textAnchor="middle"
        fill="#f3eee6"
        fillOpacity="0.88"
        fontSize="7.6"
        letterSpacing="1.8"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 600 }}
      >
        {`Nº ${number} — ${name.toUpperCase()}`}
      </text>
      <text
        x="100"
        y="328"
        textAnchor="middle"
        fill="#f3eee6"
        fillOpacity="0.6"
        fontSize="5.6"
        letterSpacing="1.6"
        style={{ fontFamily: "var(--font-sans)", fontWeight: 500 }}
      >
        {caption.toUpperCase()}
      </text>

      {/* Cuello, virola y tapa */}
      <rect x="80" y="134" width="40" height="18" fill="#101011" />
      <rect x="84" y="134" width="3" height="18" fill="#fff" opacity="0.18" />
      <rect x="72" y="121" width="56" height="15" rx="1.5" fill={ref("collar")} />
      <rect x="60" y="6" width="80" height="117" rx="3" fill={ref("cap")} />
      <rect x="60" y="6" width="80" height="2" rx="1" fill="#fff" opacity="0.16" />
    </svg>
  );
}
