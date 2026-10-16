import Image from "next/image";
import Link from "next/link";
import skyline from "@/assets/hero-skyline.jpg";
import { Logo } from "@/components/brand/Logo";
import { ArrowIcon } from "@/components/brand/ArrowIcon";
import { Bottle } from "@/components/product/Bottle";
import { getHeroProduct } from "@/data/catalog";
import styles from "./Hero.module.css";

export function Hero() {
  const product = getHeroProduct();
  const caption = `${product.concentration} · ${product.volumeMl} ml`;

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden>
        <Image src={skyline} alt="" fill priority sizes="100vw" placeholder="blur" className={styles.photo} />
      </div>
      <div className={styles.shade} aria-hidden />
      <div className={styles.grain} aria-hidden />

      <div className={styles.frame}>
        <Logo className={styles.wordmark} />

        <div className={styles.stage}>
          <div className={styles.halo} aria-hidden />
          <Bottle
            id="hero"
            liquid={product.liquid}
            number={product.number}
            name={product.name}
            caption={caption}
            className={styles.bottle}
          />
          <Bottle
            id="hero-reflejo"
            liquid={product.liquid}
            number={product.number}
            name={product.name}
            caption={caption}
            className={styles.reflection}
            decorative
          />
        </div>

        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>Colección 01 — Eau de Parfum</p>
          <h1 id="hero-title" className={styles.title}>
            Lo que queda <em>cuando te vas.</em>
          </h1>
          <p className={styles.lede}>Perfumes intensos, hechos para la noche y para durar más que ella.</p>
          <Link href="/perfumes" className={styles.cta}>
            Explorar perfumes
            <ArrowIcon className={styles.ctaIcon} />
          </Link>
        </div>

        <div className={styles.aside}>
          <p className="eyebrow">En el frasco</p>
          <p className={styles.asideName}>
            Nº {product.number} — {product.name}
          </p>
          <p className={styles.asideNotes}>{product.notes.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
