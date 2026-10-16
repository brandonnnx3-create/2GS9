/**
 * Catálogo de GS9.
 *
 * Hoy la marca vende solo perfumes, pero el modelo ya separa categorías de
 * productos: para sumar una categoría nueva alcanza con agregarla a
 * `categories` y cargar productos con ese `category`. La ruta `/[category]`
 * la genera sola.
 *
 * IMPORTANTE: los productos, notas y precios de abajo son PLACEHOLDERS para
 * maquetar. Reemplazarlos por el catálogo real (o por la fuente de datos de la
 * plataforma de e-commerce que se elija) antes de publicar.
 */

export type Category = {
  slug: string;
  name: string;
  /** Bajada corta que se muestra en el encabezado del listado. */
  description: string;
};

/** Tres tonos del líquido para iluminar el frasco: luz, medio y sombra. */
export type LiquidTone = {
  light: string;
  mid: string;
  dark: string;
};

export type Product = {
  slug: string;
  category: Category["slug"];
  /** Número de fragancia dentro de la colección ("01", "02"…). */
  number: string;
  name: string;
  concentration: string;
  volumeMl: number;
  /** Precio en la moneda definida en `lib/format.ts`. */
  price: number;
  notes: string[];
  tagline: string;
  liquid: LiquidTone;
  featured?: boolean;
};

export const categories: Category[] = [
  {
    slug: "perfumes",
    name: "Perfumes",
    description: "Fragancias intensas, pensadas para la noche y hechas para durar más que ella.",
  },
];

export const products: Product[] = [
  {
    slug: "ultima-luz",
    category: "perfumes",
    number: "01",
    name: "Última Luz",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    price: 129000,
    notes: ["Ámbar", "Cuero", "Bergamota"],
    tagline: "El último minuto del atardecer.",
    liquid: { light: "#f7c98a", mid: "#d77a2c", dark: "#5c2508" },
    featured: true,
  },
  {
    slug: "hora-azul",
    category: "perfumes",
    number: "02",
    name: "Hora Azul",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    price: 129000,
    notes: ["Iris", "Lavanda", "Almizcle"],
    tagline: "Cuando el cielo todavía no decide.",
    liquid: { light: "#c3d0ee", mid: "#6c84bd", dark: "#1a2547" },
    featured: true,
  },
  {
    slug: "asfalto",
    category: "perfumes",
    number: "03",
    name: "Asfalto",
    concentration: "Eau de Parfum",
    volumeMl: 100,
    price: 119000,
    notes: ["Vetiver", "Incienso", "Pimienta negra"],
    tagline: "La ciudad después de la lluvia.",
    liquid: { light: "#d9d6cc", mid: "#8a877d", dark: "#262522" },
    featured: true,
  },
  {
    slug: "claroscuro",
    category: "perfumes",
    number: "04",
    name: "Claroscuro",
    concentration: "Extrait de Parfum",
    volumeMl: 50,
    price: 149000,
    notes: ["Oud", "Tabaco", "Vainilla negra"],
    tagline: "Luz justa. Sombra de sobra.",
    liquid: { light: "#e0957a", mid: "#9c3a2a", dark: "#2e0b08" },
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

export function getHeroProduct(): Product {
  return products[0];
}
