# GS9 — Dirección creativa

## Concepto

**Lo que queda cuando te vas.** Un perfume vale por lo que deja después de que la persona se va: la estela. Eso se cruza con lo que muestran las referencias: la ciudad a contraluz justo antes de la noche y una luz que recorta figuras sobre la oscuridad. GS9 se presenta como una marca nocturna, urbana y de presencia fuerte, no como una perfumería genérica.

## Análisis de las referencias

| Referencia                | Qué muestra                                                                                                                                       | Qué tomamos                                                                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Logo G.S.9**            | Serif ancha, de remates triangulares y bajo contraste, en blanco sobre negro. Los puntos entre letras le dan aire de sigla, de monograma clásico. | Se usa como elemento protagonista: gigante en el hero y como textura en el footer. Blanco hueso en vez de blanco puro, para que no "queme" sobre negro.                                          |
| **Skyline al atardecer**  | Siluetas negras contra un degradé que va del azul profundo al ámbar. Mucho cielo vacío arriba, agua oscura abajo.                                 | La paleta (negro, azul de la hora azul, ámbar del horizonte), el contraluz como forma de iluminar el frasco y la composición en capas: cielo, ciudad, agua.                                      |
| **Retrato en claroscuro** | Luz dura y lateral, blanco y negro, mirada introspectiva, mucho negro en el encuadre.                                                             | Solo la **dirección de luz**: figuras que salen de la sombra. Se aplica en el manifiesto (el texto se "enciende" al scrollear) y en los fondos de las tarjetas. La foto no se usa (ver Riesgos). |

## Paleta

| Token       | Hex                   | Uso                                                      |
| ----------- | --------------------- | -------------------------------------------------------- |
| `--ink`     | `#0a0a0b`             | Fondo general.                                           |
| `--ink-2/3` | `#111112` / `#19191a` | Superficies (tarjetas).                                  |
| `--bone`    | `#f3eee6`             | Texto principal, logo, botón principal.                  |
| `--mist`    | `#8e8881`             | Texto secundario, metadatos.                             |
| `--amber`   | `#e39a52`             | Único acento: énfasis del título, hover del botón, foco. |
| `--dusk`    | `#1b2a44`             | Reservado para degradés de cielo.                        |

El ámbar se usa poco a propósito: si aparece en todos lados, deja de marcar la jerarquía.

## Tipografía

- **Display — Cormorant Garamond (300/400, con itálica).** Le da contraste a la serif pesada del logo: el logo pone la fuerza y los titulares, la elegancia. La itálica en ámbar marca la segunda mitad de cada título ("_cuando te vas._", "_de quedarse._").
- **Texto e interfaz — Manrope.** Es una sans de proporciones anchas, como el logo. En navegación y etiquetas se usa en mayúsculas con mucho tracking (0.2–0.28em), un recurso típico de marcas premium.

## Hero

- **Escritorio (≥1024 px):** composición editorial en capas. El logotipo ocupa el cielo y el frasco se para sobre el agua como un edificio más del skyline, con su reflejo. El mensaje y el CTA van abajo a la izquierda; abajo a la derecha, el producto que aparece en el frasco (nombre y notas).
- **Móvil y tablet:** columna centrada con logotipo, frasco, título, bajada y CTA. Se verificó que el CTA entre en el primer pantallazo desde 375×667 (iPhone SE).
- **Movimiento:** la foto se asienta con un zoom lento, el logotipo se revela de abajo hacia arriba y después entran el frasco y el texto en cascada. Todo es CSS, sin librerías, y se desactiva con `prefers-reduced-motion`.
- **Header:** queda transparente sobre el hero y oculta el logo chico mientras se ve el gigante. Al scrollear se vuelve sólido con blur.

## Copy

- **Título:** "Lo que queda cuando te vas." Habla de la estela y la duración, dos cosas que cualquiera evalúa al comprar un perfume, sin caer en un "los mejores perfumes al mejor precio".
- **Bajada:** "Perfumes intensos, hechos para la noche y para durar más que ella."
- **Alternativa si GS9 tiene relación con el 9:** "Después de las nueve." No la usamos porque no sabemos qué significa el nombre.

## Decisiones UX / CRO

- **Un solo CTA primario en el hero** ("Explorar perfumes" → `/perfumes`). Dos botones del mismo peso dividen la atención.
- **Precio, concentración y volumen visibles en cada tarjeta.** En perfumería, el precio por ml y la concentración (EDP vs. Extrait) definen la comparación.
- **Productos inmediatamente después del hero.** El manifiesto va después, para quien todavía no decidió.

## Riesgos y pendientes

1. **Licencia de la foto del skyline.** No conocemos su origen ni si tiene licencia de uso comercial. Sirve para el prototipo, pero hay que reemplazarla por una foto propia o con licencia antes de publicar la tienda. El repositorio es público, así que la imagen ya queda expuesta ahí.
2. **Retrato del chico: no se usó, por decisión.** Muestra a un menor, aparentemente sin model release para uso comercial, y asociar una estética de pobreza a un producto de lujo es un riesgo reputacional alto. De esa foto se tomó solo la iluminación. Para campañas: modelos adultos y sesión propia con esa misma luz.
3. **Fotografía de producto.** El frasco del hero y de las tarjetas es un **SVG provisorio** (`src/components/product/Bottle.tsx`). El brief pide fotografía real: se reemplaza cambiando ese componente por un `<Image>`.
4. **Logo vectorial.** El SVG se vectorizó a partir de un JPG de baja resolución. Conviene conseguir el archivo vectorial original del diseñador.
5. **Resolución del fondo.** La foto mide 1199 px de ancho: en pantallas grandes se agranda y pierde nitidez. El grano y la corrección de color lo disimulan, pero una foto propia debería tener al menos 2400 px de ancho.
