import Link from "next/link";
import { ArrowIcon } from "@/components/brand/ArrowIcon";
import { ProductGrid } from "@/components/product/ProductGrid";
import { getBrands, getFeaturedProducts } from "@/data/catalog";
import styles from "./FeaturedCollection.module.css";

const listFormat = new Intl.ListFormat("es", { type: "conjunction" });

export function FeaturedCollection() {
  const products = getFeaturedProducts();

  return (
    <section id="seleccion" className={styles.section} aria-labelledby="seleccion-title">
      <header className={styles.header}>
        <div>
          <p className="eyebrow">Selección GS9</p>
          <h2 id="seleccion-title" className={styles.title}>
            Fragancias que <em>se quedan.</em>
          </h2>
        </div>
        <div className={styles.side}>
          <p>Perfumes originales de {listFormat.format(getBrands(products))}.</p>
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
