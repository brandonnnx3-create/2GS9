import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.page}>
      <p className="eyebrow">Error 404</p>
      <h1 className={styles.title}>
        Esta página <em>no dejó rastro.</em>
      </h1>
      <Link href="/" className={styles.link}>
        Volver al inicio
      </Link>
    </section>
  );
}
