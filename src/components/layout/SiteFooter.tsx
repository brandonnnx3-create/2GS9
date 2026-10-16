import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { categories } from "@/data/catalog";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.tagline}>Lo que queda cuando te vas.</p>
          <nav aria-label="Pie de página">
            <ul className={styles.links}>
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/${category.slug}`}>{category.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/#manifiesto">Manifiesto</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Logo className={styles.logo} />
        {/* Año fijo: con Cache Components, `new Date()` en el shell prerenderizado rompe el build. */}
        <p className={styles.legal}>© 2026 GS9. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
