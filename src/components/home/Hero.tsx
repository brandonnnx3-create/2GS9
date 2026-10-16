import Image from "next/image";
import Link from "next/link";
import skyline from "@/assets/hero-skyline.jpg";
import { ArrowIcon } from "@/components/brand/ArrowIcon";
import { Logo } from "@/components/brand/Logo";
import { describeProduct, getHeroProduct } from "@/data/catalog";
import styles from "./Hero.module.css";

export function Hero() {
  const product = getHeroProduct();

  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media} aria-hidden>
        <Image src={skyline} alt="" fill priority sizes="100vw" placeholder="blur" className={styles.photo} />
      </div>
      <div className={styles.shade} aria-hidden />
      <div className={styles.grain} aria-hidden />

      <div className={styles.frame}>
        <Logo className={styles.wordmark} />

        <figure className={styles.stage}>
          <Image
            src={product.heroImage}
            alt={`${product.brand} ${product.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 240px, 40vw"
            className={styles.product}
          />
        </figure>

        <div className={styles.copy}>
          <p className={`eyebrow ${styles.eyebrow}`}>Perfumes originales</p>
          <h1 id="hero-title" className={styles.title}>
            Lo que queda <em>cuando te vas.</em>
          </h1>
          <p className={styles.lede}>Perfumes originales, elegidos para durar más que la noche.</p>
          <Link href="/perfumes" className={styles.cta}>
            Explorar perfumes
            <ArrowIcon className={styles.ctaIcon} />
          </Link>
        </div>

        <div className={styles.aside}>
          <p className="eyebrow">En la foto</p>
          <p className={styles.asideName}>
            {product.brand} — {product.name}
          </p>
          <p className={styles.asideNotes}>{describeProduct(product)}</p>
        </div>
      </div>
    </section>
  );
}
