import { IconWorld } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useScreen } from "../../hooks/useScreen";
import Logo from "../Logo/Logo";
import UnstyledButton from "../ui/UnstyledButton";
import Nav from "./Nav/Nav";

export default function Header() {
  const { i18n } = useTranslation();

  const currentLang = i18n.language;
  const newLang = currentLang === "sk" ? "en" : "sk";

  const md = useScreen("md");

  return (
    <header className="flex items-center justify-between gap-4 text-white">
      <Logo className="h-10" />

      {md && <Nav className="ml-auto hidden md:block" />}

      {md && <div className="h-full w-px bg-white/20" />}

      <UnstyledButton
        onClick={() => i18n.changeLanguage(newLang)}
        className="flex h-full flex-col items-center justify-center gap-2 rounded-lg p-4 px-8 transition-colors hover:bg-secondary-light/10"
      >
        <IconWorld size="2rem" />
        <p className="font-medium lowercase">{newLang}</p>
      </UnstyledButton>
    </header>
  );
}
