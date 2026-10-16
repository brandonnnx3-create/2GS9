# GS9 — Tienda online de perfumes

Sitio de e-commerce de **GS9**. Por ahora la marca vende solo perfumes, pero el catálogo está modelado por categorías para poder sumar otras.

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
    page.tsx              Home: hero, colección y manifiesto
    [category]/page.tsx   Listado por categoría (/perfumes, y las que se agreguen)
    layout.tsx            Fuentes, metadata, header y footer
    globals.css           Tokens de marca y estilos base
  components/
    brand/                Logo (SVG como máscara) e íconos
    home/                 Secciones de la home
    layout/               Header (con menú móvil) y footer
    product/              Frasco, tarjeta y grilla de productos
  data/catalog.ts         Categorías y productos (placeholders)
  lib/format.ts           Moneda y formato de precios
public/brand/             Logo vectorial
docs/                     Dirección creativa
```

## Agregar una categoría

1. Sumarla a `categories` en `src/data/catalog.ts`.
2. Cargar productos con `category` igual al `slug` de esa categoría.

La ruta `/<slug>` se genera sola y aparece en el footer.

## Placeholders a reemplazar antes de publicar

- **Productos, notas y precios** de `src/data/catalog.ts`: son de maqueta.
- **Frasco SVG** (`src/components/product/Bottle.tsx`): reemplazarlo por fotografía real de producto.
- **Foto del hero** (`src/assets/hero-skyline.jpg`): se desconoce su licencia. Hay que reemplazarla por una foto propia o licenciada.
- **Moneda** (`src/lib/format.ts`): se asume ARS.

## Pendiente (requiere decisiones de negocio)

- Plataforma de venta: checkout, pagos, stock y envíos (por ejemplo, Shopify o Tiendanube en modo headless, o una integración propia con Mercado Pago).
- Página de producto, carrito y búsqueda.
- Políticas comerciales visibles (envíos, cuotas, cambios), que tienen alto impacto en conversión.
