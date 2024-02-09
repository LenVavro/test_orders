import { stringSentenceCase } from ".";
import { OrderStateType, OrderViewEnum } from "../types/order";

/**
 *  Split text by delimiter `_`, capitalize every word and join with space
 *   - works for single & multi word status
 *
 * @param status
 * @returns
 */
export function parseOrderStatus(status: OrderStateType) {
  return status.split("_").map(stringSentenceCase).join(" ");
}

/**
 *
 * @param view
 * @returns
 */
export function parseOrderView(view: OrderViewEnum) {
  return stringSentenceCase(view);
}
