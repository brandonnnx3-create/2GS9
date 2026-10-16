import Link from "next/link";
import { ArrowIcon } from "@/components/brand/ArrowIcon";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getFeaturedProducts } from "@/data/catalog";
import styles from "./FeaturedCollection.module.css";

export function FeaturedCollection() {
  const products = getFeaturedProducts();

  return (
    <section id="coleccion" className={styles.section} aria-labelledby="coleccion-title">
      <header className={styles.header}>
        <div>
          <p className="eyebrow">Colección 01</p>
          <h2 id="coleccion-title" className={styles.title}>
            Cuatro maneras <em>de quedarse.</em>
          </h2>
        </div>
        <div className={styles.side}>
          <p>Cada fragancia nace de un momento de la noche. Elegí el tuyo.</p>
          <Link href="/perfumes" className={styles.link}>
            Ver todos los perfumes
            <ArrowIcon className={styles.linkIcon} />
          </Link>
        </div>
      </header>
      <ProductGrid products={products} />
    </section>
  );
}
