# GS9 — Dirección creativa

## Concepto

**Lo que queda cuando te vas.** Un perfume vale por lo que deja después de que la persona se va: la estela. Eso se cruza con lo que muestran las referencias: la ciudad a contraluz justo antes de la noche y una luz que recorta figuras sobre la oscuridad. GS9 no fabrica perfumes: vende originales de otras casas, sobre todo árabes. Se presenta como una perfumería con criterio, nocturna, urbana y de presencia fuerte, no como un catálogo genérico.

## Análisis de las referencias

| Referencia                | Qué muestra                                                                                                                                       | Qué tomamos                                                                                                                                                     |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Logo G.S.9**            | Serif ancha, de remates triangulares y bajo contraste, en blanco sobre negro. Los puntos entre letras le dan aire de sigla, de monograma clásico. | Se usa como elemento protagonista: gigante en el hero y como textura en el footer. Blanco hueso en vez de blanco puro, para que no "queme" sobre negro.         |
| **Skyline al atardecer**  | Siluetas negras contra un degradé que va del azul profundo al ámbar. Mucho cielo vacío arriba, agua oscura abajo.                                 | La paleta (negro, azul de la hora azul, ámbar del horizonte), y la composición en capas: cielo, ciudad, agua.                                                   |
| **Retrato en claroscuro** | Luz dura y lateral, blanco y negro, mirada introspectiva, mucho negro en el encuadre.                                                             | Solo la **dirección de luz**: figuras que salen de la sombra. Se aplica en el manifiesto (el texto se "enciende" al scrollear) La foto no se usa (ver Riesgos). |

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

- **Display — Cormorant Garamond (300/400, con itálica).** Le da contraste a la serif pesada del logo: el logo pone la fuerza y los titulares, la elegancia. La itálica en ámbar marca la segunda mitad de cada título ("_cuando te vas._", "_se quedan._").
- **Texto e interfaz — Manrope.** Es una sans de proporciones anchas, como el logo. En navegación y etiquetas se usa en mayúsculas con mucho tracking (0.2–0.28em), un recurso típico de marcas premium.

## Hero

- **Escritorio (≥1024 px):** composición editorial en capas. El logotipo ocupa el cielo y un producto real (hoy, Afnan 9pm Night Out) se para entre los edificios: la foto tiene los bordes difuminados para fundirse con la ciudad en vez de verse como un recuadro. El mensaje y el CTA van abajo a la izquierda; abajo a la derecha, el nombre y los datos del producto en foto.
- **Cambiar el producto del hero:** se marca con `heroImage` en `src/data/catalog.ts`. Conviene un frasco sobre fondo oscuro y un recorte vertical sin la caja.
- **Móvil y tablet:** columna centrada con logotipo, producto, título, bajada y CTA. El cielo se oscurece detrás del producto para que la foto no se recorte. Se verificó que el CTA entre en el primer pantallazo desde 375×667 (iPhone SE).
- **Movimiento:** la foto se asienta con un zoom lento, el logotipo se revela de abajo hacia arriba y después entran el producto y el texto en cascada. Todo es CSS, sin librerías, y se desactiva con `prefers-reduced-motion`.
- **Header:** queda transparente sobre el hero y oculta el logo chico mientras se ve el gigante. Al scrollear se vuelve sólido con blur.

## Copy

- **Título:** "Lo que queda cuando te vas." Habla de la estela y la duración, dos cosas que cualquiera evalúa al comprar un perfume, sin caer en un "los mejores perfumes al mejor precio".
- **Bajada:** "Perfumes originales, elegidos para durar más que la noche." La primera versión decía "hechos para la noche": se cambió porque GS9 no fabrica perfumes.
- **Manifiesto:** "No vendemos perfumes para pasar desapercibido. Elegimos los que se quedan…" El valor de GS9 está en la selección.
- **Alternativa si GS9 tiene relación con el 9:** "Después de las nueve." No la usamos porque no sabemos qué significa el nombre.

## Decisiones UX / CRO

- **Un solo CTA primario en el hero** ("Explorar perfumes" → `/perfumes`). Dos botones del mismo peso dividen la atención.
- **Marca, concentración, volumen y precio visibles en cada tarjeta.** En perfumería, la casa, la concentración (EDT, EDP, Extrait) y el precio por ml definen la comparación. Lo que todavía no está confirmado no se inventa: el precio aparece como "a confirmar".
- **Grilla de 3 columnas.** Con 6 productos llena dos filas completas, sin huérfanos.
- **Productos inmediatamente después del hero.** El manifiesto va después, para quien todavía no decidió.

## Riesgos y pendientes

1. **Licencia de la foto del skyline.** No conocemos su origen ni si tiene licencia de uso comercial. Sirve para el prototipo, pero hay que reemplazarla por una foto propia o con licencia antes de publicar la tienda. El repositorio es público, así que la imagen ya queda expuesta ahí.
2. **Retrato del chico: no se usó, por decisión.** Muestra a un menor, aparentemente sin model release para uso comercial, y asociar una estética de pobreza a un producto de lujo es un riesgo reputacional alto. De esa foto se tomó solo la iluminación. Para campañas: modelos adultos y sesión propia con esa misma luz.
3. **Fotografía de producto.** Las fotos originales miden 560 × 560 px. Se limpiaron los artefactos JPEG, se escalaron a 1680 px (Lanczos) y se les recuperó nitidez: se ven mejor en tarjetas, pero **no es HD real**, porque el detalle que no está en el archivo no se recupera. La solución de fondo es pedirle al distribuidor o a cada marca sus fotos oficiales en alta resolución, que además resuelve la cuestión de derechos de uso. Las fotos también tienen fondos y estilos muy distintos entre sí: para una grilla más prolija conviene una sesión propia con fondo uniforme.
4. **Logo vectorial.** El SVG se vectorizó a partir de un JPG de baja resolución. Conviene conseguir el archivo vectorial original del diseñador.
5. **Resolución del fondo.** La foto mide 1199 px de ancho: en pantallas grandes se agranda y pierde nitidez. El grano y la corrección de color lo disimulan, pero una foto propia debería tener al menos 2400 px de ancho.
