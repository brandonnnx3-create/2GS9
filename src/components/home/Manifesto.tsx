import styles from "./Manifesto.module.css";

/**
 * Manifiesto: texto que se enciende al scrollear, como una cara saliendo de la
 * sombra (la referencia de claroscuro). Sin JS: usa scroll-driven animations
 * donde el navegador las soporta y queda estático donde no.
 */
export function Manifesto() {
  return (
    <section id="manifiesto" className={styles.section} aria-labelledby="manifiesto-title">
      <div className={styles.inner}>
        <h2 id="manifiesto-title" className="eyebrow">
          Manifiesto
        </h2>
        <p className={styles.statement}>
          <span>No hacemos perfumes para pasar desapercibido.</span>{" "}
          <span>
            Los hacemos para <em>lo que viene después:</em>
          </span>{" "}
          <span>cuando baja la luz, la ciudad se enciende</span> <span>y alguien todavía recuerda cómo olías.</span>
        </p>
      </div>
    </section>
  );
}
