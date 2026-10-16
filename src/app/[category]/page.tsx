import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product/ProductGrid";
import { categories, getCategory, getProductsByCategory } from "@/data/catalog";
import styles from "./page.module.css";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[category]">): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: category.name, description: category.description };
}

export default async function CategoryPage({ params }: PageProps<"/[category]">) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(category.slug);

  return (
    <section className={styles.page} aria-labelledby="categoria-title">
      <header className={styles.header}>
        <p className="eyebrow">Catálogo</p>
        <h1 id="categoria-title" className={styles.title}>
          {category.name}
        </h1>
        <div className={styles.meta}>
          <p className={styles.description}>{category.description}</p>
          <p className={styles.count}>
            {products.length} {products.length === 1 ? "fragancia" : "fragancias"}
          </p>
        </div>
      </header>
      <ProductGrid products={products} headingLevel={2} />
    </section>
  );
}
