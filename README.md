# GS9 — Tienda online de perfumes

Sitio de e-commerce de **GS9**, que vende perfumes originales de otras casas (sobre todo árabes). Por ahora solo perfumes, pero el catálogo está modelado por categorías para poder sumar otras.

La dirección creativa (análisis de referencias, paleta, tipografía, decisiones de UX/CRO y riesgos) está en [`docs/direccion-creativa.md`](docs/direccion-creativa.md).

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Cache Components) + React 19 + TypeScript
- CSS Modules con tokens de marca en `src/app/globals.css`, sin framework de estilos
- Fuentes: Cormorant Garamond y Manrope, autoalojadas con `next/font`

## Comandos

```bash
npm install
npm run dev          # desarrollo en http://localhost:3000
npm run build        # build de producción
npm run start        # sirve el build
npm run lint         # ESLint
npm run format       # Prettier
```

## Estructura

```
src/
  app/
    page.tsx              Home: hero, selección y manifiesto
    [category]/page.tsx   Listado por categoría (/perfumes, y las que se agreguen)
    layout.tsx            Fuentes, metadata, header y footer
    globals.css           Tokens de marca y estilos base
  components/
    brand/                Logo (SVG como máscara) e íconos
    home/                 Secciones de la home
    layout/               Header (con menú móvil) y footer
    product/              Tarjeta y grilla de productos
  assets/products/        Fotos de producto procesadas
  data/catalog.ts         Categorías y productos
  lib/format.ts           Moneda y formato de precios
public/brand/             Logo vectorial
docs/                     Dirección creativa
```

## Agregar una categoría

1. Sumarla a `categories` en `src/data/catalog.ts`.
2. Cargar productos con `category` igual al `slug` de esa categoría.

La ruta `/<slug>` se genera sola y aparece en el footer.

## Agregar un producto

1. Poner la foto (cuadrada, idealmente de 1600 px o más) en `src/assets/products/<slug>.jpg`.
2. Importarla en `src/data/catalog.ts` y sumar el producto al array `products` con su marca, nombre y los datos que estén confirmados. Lo que falte (precio, volumen, concentración) puede quedar sin cargar.

## Pendiente antes de publicar

- **Precios:** ningún producto tiene precio cargado; se muestran como "a confirmar".
- **Datos que no se ven en las fotos:** volumen de Odyssey Mandarin Sky, Amber Oud Black Edition y Le Male Elixir; concentración de Amber Oud Black Edition y Le Male Elixir.
- **Fotos de producto** (`src/assets/products/`): están mejoradas a partir de originales de 560 px. Conviene reemplazarlas por las fotos oficiales en alta resolución de cada marca o distribuidor.
- **Foto del hero** (`src/assets/hero-skyline.jpg`): se desconoce su licencia. Hay que reemplazarla por una foto propia o licenciada.
- **Moneda** (`src/lib/format.ts`): se asume ARS.

## Pendiente (requiere decisiones de negocio)

- Plataforma de venta: checkout, pagos, stock y envíos (por ejemplo, Shopify o Tiendanube en modo headless, o una integración propia con Mercado Pago).
- Página de producto, carrito y búsqueda.
- Políticas comerciales visibles (envíos, cuotas, cambios), que tienen alto impacto en conversión.
