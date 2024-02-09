import {
  IconList,
  IconToolsKitchen2,
  IconUserSquare,
} from "@tabler/icons-react";
import UnstyledButton from "../ui/UnstyledButton";

type PropsType = { className?: string };

export default function Nav({ className = "" }: PropsType) {
  const t = (str: string) => str;

  return (
    <nav className={className}>
      <ul className="grid grid-cols-3 gap-4 lg:gap-8">
        <li className="">
          <UnstyledButton className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg p-4 transition-colors hover:bg-secondary-light/10">
            <IconUserSquare size="2rem" />
            <p className="font-medium">{t("Account")}</p>
          </UnstyledButton>
        </li>

        <li className="">
          <UnstyledButton className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg bg-secondary p-4 text-primary transition-colors">
            <IconList size="2rem" />
            <p className="font-medium">{t("Orders")}</p>
          </UnstyledButton>
        </li>

        <li className="">
          <UnstyledButton className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-lg p-4 transition-colors hover:bg-secondary-light/10">
            <IconToolsKitchen2 size="2rem" />
            <p className="font-medium">{t("Menu")}</p>
          </UnstyledButton>
        </li>
      </ul>
    </nav>
  );
}
