import { IconWorld } from "@tabler/icons-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "./components/Layout/Nav/Nav";
import Logo from "./components/Logo/Logo";
import Orders from "./components/Order/Orders";
import UnstyledButton from "./components/ui/UnstyledButton";
import { useScreen } from "./hooks/useScreen";

// Create a client
const queryClient = new QueryClient();

function App() {
  const t = (str: string) => str;

  const md = useScreen("md");

  return (
    <QueryClientProvider client={queryClient}>
      <section className="mb-[4.5rem] grid grid-cols-1 gap-4 bg-primary p-6 sm:mb-[5rem] sm:p-8 md:mb-0 md:rounded-2xl">
        <header className="flex items-center justify-between gap-4 text-white">
          <Logo className="h-10" />

          {md && <Nav className="ml-auto hidden md:block" />}

          {md && <div className="h-full w-px bg-white/20" />}

          <UnstyledButton className="flex h-full flex-col items-center justify-center gap-2 rounded-lg p-4 px-8 transition-colors hover:bg-secondary-light/10">
            <IconWorld size="2rem" />
            <p className="font-medium lowercase">{t("sk")}</p>
          </UnstyledButton>
        </header>

        <main className="mt-10 md:mt-8">
          <Orders />
        </main>
      </section>

      {!md && (
        <aside className="fixed bottom-0 left-0 right-0 z-50 grid h-[4.5rem] items-center border-t border-primary/10 bg-white !pb-[env(safe-area-inset-bottom)] sm:h-[5rem]">
          <Nav className=" text-primary" />
        </aside>
      )}
    </QueryClientProvider>
  );
}

export default App;
