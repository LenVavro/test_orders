import { IconWorld } from "@tabler/icons-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Nav from "./components/Layout/Nav";
import Logo from "./components/Logo/Logo";
import Orders from "./components/Order/Orders";
import UnstyledButton from "./components/ui/UnstyledButton";

// Create a client
const queryClient = new QueryClient();

function App() {
  const t = (str: string) => str;

  return (
    <QueryClientProvider client={queryClient}>
      <section className="grid grid-cols-1 gap-4 bg-primary p-6 sm:p-8 md:rounded-2xl">
        <header className="flex items-center justify-between gap-4 text-white">
          <Logo className="h-10" />

          <Nav className="ml-auto hidden md:block" />

          <div className="hidden h-full w-px bg-white/20 md:block" />

          <UnstyledButton className="flex h-full flex-col items-center justify-center gap-2 rounded-lg p-4 px-8 transition-colors hover:bg-secondary-light/10">
            <IconWorld size="2rem" />
            <p className="font-medium lowercase">{t("sk")}</p>
          </UnstyledButton>
        </header>
        <main>
          <Orders />
        </main>
      </section>

      <aside className="fixed bottom-0 left-0 right-0 z-50 bg-white !pb-[env(safe-area-inset-bottom)]">
        <Nav />
      </aside>
    </QueryClientProvider>
  );
}

export default App;
