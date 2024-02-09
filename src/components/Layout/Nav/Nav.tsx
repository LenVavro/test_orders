import {
  IconList,
  IconToolsKitchen2,
  IconUserSquare,
} from "@tabler/icons-react";
import NavItem from "./NavItem";

type PropsType = { className?: string };

export default function Nav({ className = "" }: PropsType) {
  return (
    <nav className={`${className}`}>
      <ul className="grid grid-cols-3 justify-evenly md:justify-normal md:gap-4 lg:gap-8">
        <NavItem icon={IconUserSquare} label="Account" />
        <NavItem icon={IconList} label="Orders" isActive />
        <NavItem icon={IconToolsKitchen2} label="Menu" />
      </ul>
    </nav>
  );
}
