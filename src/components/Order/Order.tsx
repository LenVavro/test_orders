import { IconCalendarClock, IconCircleX } from "@tabler/icons-react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { useOrderMenuItemName } from "../../hooks/useOrderMenuItemName";
import { OrderType } from "../../types/order";
import { formatPrice } from "../../utils";
import UnstyledButton from "../ui/UnstyledButton";

type PropsType = { order: OrderType };

export default function OrderItem({
  order: { createdAt, id, orderItems, state, totalPrice },
}: PropsType) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const createdAtDayjs = dayjs(createdAt);

  const getMenuItemName = useOrderMenuItemName();

  return (
    <div className="overflow-clip rounded-lg bg-white text-primary">
      <div className="bg-secondary-lightest sticky top-0 z-10 p-4 font-semibold sm:text-lg md:static">
        {id}
      </div>

      <div className="grid grid-cols-1 gap-8 p-4">
        <div className="flex items-center gap-2">
          <IconCalendarClock size="1.25rem" />
          <p className="text-sm font-medium">
            <span>{createdAtDayjs.format("DD.MM.YYYY")}</span>{" "}
            <span className="font-normal opacity-50">{t("at")}</span>{" "}
            <span>{createdAtDayjs.format("HH:mm")}</span>
          </p>
        </div>

        <div>
          <ul className="">
            {orderItems.map(({ orderMenuItem, finalPrice, quantity }, i) => (
              <li key={i} className="flex items-center gap-2">
                <p className="min-w-[2rem] font-medium">{quantity}x</p>
                <p>{getMenuItemName(orderMenuItem)}</p>
                <p className="ml-auto">{formatPrice(finalPrice, lang)}</p>
              </li>
            ))}
          </ul>

          <div className="mt-2 flex items-center justify-between gap-2 border-t border-primary/10 pt-2 text-lg font-medium">
            <p>{t("Total")}</p>
            <p>{formatPrice(totalPrice, lang)}</p>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 gap-y-2">
          <UnstyledButton className="flex items-center gap-1 text-sm font-medium text-primary/80">
            <IconCircleX size="1rem" />
            <p>{t("Cancel")}</p>
          </UnstyledButton>

          <p className="truncate rounded-full bg-secondary px-3 py-1 text-xs font-bold sm:px-4 sm:text-sm">
            {t(state)}
          </p>
        </div>
      </div>
    </div>
  );
}
