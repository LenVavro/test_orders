import {
  IconList,
  IconToolsKitchen2,
  IconUserSquare,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import NavItem from "./NavItem";

type PropsType = { className?: string };

export default function Nav({ className }: PropsType) {
  const { t } = useTranslation();

  return (
    <nav className={className}>
      <ul className="grid grid-cols-3 justify-evenly md:justify-normal md:gap-2 lg:gap-4">
        <NavItem icon={IconUserSquare} label={t("Account")} />
        <NavItem icon={IconList} label={t("Orders")} isActive />
        <NavItem icon={IconToolsKitchen2} label={t("Menu")} />
      </ul>
    </nav>
  );
}
