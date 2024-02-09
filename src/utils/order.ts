import { stringSentenceCase } from ".";
import { OrderViewEnum } from "../types/order";

/**
 *
 * @param view
 * @returns
 */
export function parseOrderView(view: OrderViewEnum) {
  return stringSentenceCase(view);
}
