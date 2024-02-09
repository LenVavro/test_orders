import { useTranslation } from "react-i18next";
import { OrderMenuItemType } from "../types/order";

export function useOrderMenuItemName() {
  const { t, i18n } = useTranslation();

  const lang = i18n.language as keyof OrderMenuItemType["translations"];
  const otherLang = lang === "sk" ? "en" : "sk";

  return (item: Pick<OrderMenuItemType, "translations">) =>
    lang in item.translations
      ? item.translations[lang].name
      : otherLang in item.translations
        ? item.translations[otherLang].name
        : t("Unknown item");
}
