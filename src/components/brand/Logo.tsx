import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
};

/**
 * Logotipo GS9. Se pinta con `currentColor` usando el SVG como máscara, así
 * un solo archivo cacheado sirve para cualquier color o degradé.
 */
export function Logo({ className }: LogoProps) {
  return <span role="img" aria-label="GS9" className={[styles.logo, className].filter(Boolean).join(" ")} />;
}
