import { IconProps } from "@tabler/icons-react";
import { ElementType } from "react";
import { useScreen } from "../../../hooks/useScreen";
import UnstyledButton from "../../ui/UnstyledButton";

type PropsType = {
  icon: ElementType<Pick<IconProps, "size">>;
  label: string;
  isActive?: boolean;
};

export default function NavItem({ icon: Icon, label, isActive }: PropsType) {
  const md = useScreen("md");
  const sm = useScreen("sm");

  return (
    <li className="">
      <UnstyledButton
        className={`${isActive ? "bg-secondary" : "hover:bg-secondary-light/10"} flex h-full w-full flex-col items-center justify-center gap-1 rounded-lg p-2 px-3 transition-colors md:gap-2 md:p-4`}
      >
        <Icon size={md ? "2rem" : sm ? "1.5rem" : "1.25rem"} />
        <p className="text-xs font-medium sm:text-sm md:text-base ">{label}</p>
      </UnstyledButton>
    </li>
  );
}
