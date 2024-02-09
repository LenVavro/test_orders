import { DateISOStringType, PriceType } from ".";

export const OrderViewEnum = {
  COMPLETED: "COMPLETED",
  PENDING: "PENDING",
} as const;
export type OrderViewEnum = keyof typeof OrderViewEnum;

export type OrderStateType =
  | "new"
  | "waiting_for_confirmation"
  | "confirmed"
  | "completed"
  | "canceled_by_customer"
  | "rejected"
  | "expired"
  | "failed";

export type OrderType = {
  totalPrice: PriceType;
  state: OrderStateType;
  orderItems: OrderItemType[];
  id: string;
  createdAt: DateISOStringType;
};

export type OrderItemType = {
  quantity: number;
  orderMenuItem: OrderMenuItemType;
  finalPrice: PriceType;
  id: string;
  createdAt: DateISOStringType;
};

export type OrderMenuItemType = {
  price: PriceType;
  translations: {
    en: {
      orderMenuItem: string;
      name: string;
      description: string;
      locale: "en";
      id: string;
    };
    sk: {
      orderMenuItem: string;
      name: string;
      description: string;
      locale: "sk";
      id: string;
    };
  };
};
