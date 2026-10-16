import type { Product } from "@/data/catalog";
import { ProductCard } from "./ProductCard";
import styles from "./ProductGrid.module.css";

type ProductGridProps = {
  products: Product[];
  headingLevel?: 2 | 3;
};

export function ProductGrid({ products, headingLevel }: ProductGridProps) {
  return (
    <ul className={styles.grid}>
      {products.map((product) => (
        <li key={product.slug}>
          <ProductCard product={product} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  );
}
