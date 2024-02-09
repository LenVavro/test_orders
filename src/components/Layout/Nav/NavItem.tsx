import { IconProps } from "@tabler/icons-react";
import { useScreen } from "../../../hooks/useScreen";
import UnstyledButton from "../../ui/UnstyledButton";

type PropsType = {
  icon: React.ForwardRefExoticComponent<
    Omit<IconProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  isActive?: boolean;
};

export default function NavItem({ icon: Icon, label, isActive }: PropsType) {
  const t = (str: string) => str;

  const md = useScreen("md");
  const sm = useScreen("sm");

  return (
    <li className="">
      <UnstyledButton
        className={`${isActive ? "bg-secondary" : "hover:bg-secondary-light/10"} flex h-full w-full flex-col items-center justify-center gap-1 rounded-lg p-2 px-3 transition-colors md:gap-2 md:p-4`}
      >
        <Icon size={md ? "2rem" : sm ? "1.5rem" : "1.25rem"} />
        <p className="text-xs font-medium sm:text-sm md:text-base ">
          {t(label)}
        </p>
      </UnstyledButton>
    </li>
  );
}
