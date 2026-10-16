/**
 * Catálogo de GS9.
 *
 * GS9 vende perfumes originales de otras casas. Hoy hay una sola categoría,
 * pero el modelo ya separa categorías de productos: para sumar una nueva
 * alcanza con agregarla a `categories` y cargar productos con ese `category`.
 * La ruta `/[category]` la genera sola.
 *
 * Los datos de cada producto salen de lo que se lee en su foto. Lo que no se ve
 * (precio, volumen o concentración en algunos casos, notas) queda sin cargar
 * hasta confirmarlo: la interfaz lo muestra como pendiente en vez de inventarlo.
 */
import type { StaticImageData } from "next/image";
import amberOudBlackEdition from "@/assets/products/amber-oud-black-edition.jpg";
import clubDeNuitIntenseMan from "@/assets/products/club-de-nuit-intense-man.jpg";
import erbaPura from "@/assets/products/erba-pura.jpg";
import leMaleElixir from "@/assets/products/le-male-elixir.jpg";
import nineNightOut from "@/assets/products/9pm-night-out.jpg";
import nineNightOutHero from "@/assets/products/9pm-night-out-hero.jpg";
import odysseyMandarinSky from "@/assets/products/odyssey-mandarin-sky.jpg";

export type Category = {
  slug: string;
  name: string;
  /** Bajada corta que se muestra en el encabezado del listado. */
  description: string;
};

export type Product = {
  slug: string;
  category: Category["slug"];
  brand: string;
  name: string;
  concentration?: string;
  volumeMl?: number;
  edition?: string;
  /** Precio en la moneda definida en `lib/format.ts`. Sin precio se muestra "a confirmar". */
  price?: number;
  notes?: string[];
  /** Foto cuadrada del producto con su caja. */
  image: StaticImageData;
  /** Recorte vertical del frasco para el hero de la home. */
  heroImage?: StaticImageData;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "perfumes",
    name: "Perfumes",
    description: "Perfumes originales, elegidos para durar más que la noche.",
  },
];

export const products: Product[] = [
  {
    slug: "9pm-night-out",
    category: "perfumes",
    brand: "Afnan",
    name: "9pm Night Out",
    concentration: "Extrait de Parfum",
    volumeMl: 100,
    image: nineNightOut,
    heroImage: nineNightOutHero,
    featured: true,
  },
  {
    slug: "club-de-nuit-intense-man",
    category: "perfumes",
    brand: "Armaf",
    name: "Club de Nuit Intense Man",
    concentration: "Eau de Toilette",
    volumeMl: 105,
    image: clubDeNuitIntenseMan,
    featured: true,
  },
  {
    slug: "amber-oud-black-edition",
    category: "perfumes",
    brand: "Al Haramain",
    name: "Amber Oud Black Edition",
    image: amberOudBlackEdition,
    featured: true,
  },
  {
    slug: "odyssey-mandarin-sky",
    category: "perfumes",
    brand: "Armaf",
    name: "Odyssey Mandarin Sky",
    concentration: "Eau de Parfum",
    edition: "Edición limitada",
    image: odysseyMandarinSky,
    featured: true,
  },
  {
    slug: "erba-pura",
    category: "perfumes",
    brand: "Xerjoff",
    name: "Erba Pura",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    image: erbaPura,
    featured: true,
  },
  {
    slug: "le-male-elixir",
    category: "perfumes",
    brand: "Jean Paul Gaultier",
    name: "Le Male Elixir",
    image: leMaleElixir,
    featured: true,
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return products.filter((product) => product.category === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getHeroProduct(): Product & { heroImage: StaticImageData } {
  const product = products.find((item) => item.heroImage);
  if (!product?.heroImage) throw new Error("Ningún producto tiene `heroImage` para el hero.");
  return product as Product & { heroImage: StaticImageData };
}

/** Marcas del catálogo, sin repetir, en el orden en que aparecen. */
export function getBrands(items: Product[] = products): string[] {
  return [...new Set(items.map((product) => product.brand))];
}

/** "Extrait de Parfum · 100 ml · Edición limitada", con lo que esté cargado. */
export function describeProduct(product: Product): string {
  return [product.concentration, product.volumeMl && `${product.volumeMl} ml`, product.edition]
    .filter(Boolean)
    .join(" · ");
}
