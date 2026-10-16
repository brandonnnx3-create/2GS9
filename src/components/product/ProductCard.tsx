import Image from "next/image";
import { describeProduct, type Product } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import styles from "./ProductCard.module.css";

type ProductCardProps = {
  product: Product;
  /** Nivel del título según la jerarquía de la página donde se use. */
  headingLevel?: 2 | 3;
};

export function ProductCard({ product, headingLevel = 3 }: ProductCardProps) {
  const Heading = `h${headingLevel}` as const;
  const details = describeProduct(product);

  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <Image
          src={product.image}
          alt={`${product.brand} ${product.name}, frasco y caja`}
          fill
          sizes="(min-width: 1100px) 30vw, 50vw"
          placeholder="blur"
          className={styles.photo}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.brand}>{product.brand}</p>
        <Heading className={styles.name}>{product.name}</Heading>
        {details && <p className={styles.details}>{details}</p>}
        <p className={styles.price} data-pending={product.price === undefined || undefined}>
          {product.price === undefined ? "Precio a confirmar" : formatPrice(product.price)}
        </p>
      </div>
    </article>
  );
}
