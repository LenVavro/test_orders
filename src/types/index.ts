export const CurrencyEnum = {
  EUR: "EUR",
} as const;
export type CurrencyEnum = keyof typeof CurrencyEnum;

export type PriceType = {
  amount: number;
  currency: CurrencyEnum;
};

export type DateISOStringType = string;
