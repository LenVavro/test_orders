import { IconCircleCheck, IconProgressCheck } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { OrderViewEnum } from "../../types/order";
import { parseOrderView } from "../../utils/order";
import UnstyledButton from "../ui/UnstyledButton";

type PropsType = {
  view: OrderViewEnum;
  isActive: boolean;
  onClick: () => void;
};

export default function OrderViewItem({ view, isActive, onClick }: PropsType) {
  const { t } = useTranslation();

  // const Icon = view === "COMPLETED" ? IconCircleCheck : IconCircleDashed;
  const Icon = view === "COMPLETED" ? IconCircleCheck : IconProgressCheck;
  // const Icon = view === "COMPLETED" ? IconListCheck : IconList;

  return (
    <UnstyledButton
      onClick={onClick}
      className={`${isActive ? "bg-secondary" : "hover:bg-secondary/40"} flex w-full items-center justify-center gap-2 rounded p-4 text-lg transition-colors`}
    >
      <Icon size="1.5rem" />
      <p>{t(parseOrderView(view))}</p>
    </UnstyledButton>
  );
}
