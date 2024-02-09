import { PriceType } from "./../types/index";

/**
 *
 * @param price
 * @param locale
 * @returns
 */
export function formatPrice(price: PriceType, locale: string) {
  const formatter = new Intl.NumberFormat(
    `${locale.toLowerCase()}-${locale.toUpperCase()}`,
    {
      style: "currency",
      currency: price.currency,

      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    },
  );

  return formatter.format(price.amount);
}

/**
 *
 * @param object
 * @returns
 */
export function objectKeys<T extends Record<string, unknown>>(object: T) {
  return Object.keys(object) as (keyof T)[];
}

/**
 * Make first letter in sentence uppercase
 *
 * @param value
 * @returns
 */
export function stringSentenceCase(value: string) {
  return value.length > 0
    ? `${value[0].toUpperCase()}${value.slice(1).toLowerCase()}`
    : value;
}
