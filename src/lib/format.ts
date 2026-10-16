/**
 * Moneda y locale de la tienda. Se asume Argentina (ARS); si se vende en otro
 * mercado, cambiar estas dos constantes alcanza.
 */
const LOCALE = "es-AR";
const CURRENCY = "ARS";

const priceFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: CURRENCY,
  maximumFractionDigits: 0,
});

export function formatPrice(value: number): string {
  return priceFormatter.format(value);
}
