import { stringSentenceCase } from ".";
import { OrderStateType, OrderType, OrderViewEnum } from "../types/order";

/**
 *
 * @param view
 * @returns
 */
export function parseOrderView(view: OrderViewEnum) {
  return stringSentenceCase(view);
}

/**
 *
 * @param state
 * @returns
 */
export function isOrderPending(state: OrderType["state"]) {
  const pendingStates: OrderStateType[] = [
    "new",
    "waiting_for_confirmation",
    "confirmed",
  ];

  return pendingStates.includes(state);
}
