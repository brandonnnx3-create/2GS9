import type { CSSProperties } from "react";
import type { Product } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import { Bottle } from "./Bottle";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
  /** Nivel del título según la jerarquía de la página donde se use. */
  headingLevel?: 2 | 3;
};

export function ProductCard({ product, headingLevel = 3 }: ProductCardProps) {
  const Heading = `h${headingLevel}` as const;
  const caption = `${product.concentration} · ${product.volumeMl} ml`;
  const accent = {
    "--accent": product.liquid.mid,
    "--accent-light": product.liquid.light,
  } as CSSProperties;

  return (
    <article className={styles.card} style={accent}>
      <div className={styles.media}>
        <span className={styles.index}>Nº {product.number}</span>
        <Bottle
          id={`card-${product.slug}`}
          liquid={product.liquid}
          number={product.number}
          name={product.name}
          caption={caption}
          className={styles.bottle}
          decorative
        />
      </div>
      <div className={styles.body}>
        <div className={styles.head}>
          <Heading className={styles.name}>{product.name}</Heading>
          <p className={styles.price}>{formatPrice(product.price)}</p>
        </div>
        <p className={styles.tagline}>{product.tagline}</p>
        <p className={styles.meta}>
          <span>{product.notes.join(" · ")}</span>
          <span>{caption}</span>
        </p>
      </div>
    </article>
  );
}
