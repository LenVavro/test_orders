import { PropsWithChildren } from "react";
import { useScreen } from "../../hooks/useScreen";
import Header from "./Header";
import Nav from "./Nav/Nav";

export default function Layout({ children }: PropsWithChildren) {
  const md = useScreen("md");

  return (
    <>
      <section className="mb-[4.5rem] grid grid-cols-1 gap-4 bg-primary p-6 sm:mb-[5rem] sm:p-8 md:mb-0 md:rounded-2xl">
        <Header />

        <main className="mt-10 md:mt-8">{children}</main>
      </section>

      {!md && (
        <aside className="fixed bottom-0 left-0 right-0 z-50 grid h-[4.5rem] items-center border-t border-primary/10 bg-white !pb-[env(safe-area-inset-bottom)] sm:h-[5rem]">
          <Nav className=" text-primary" />
        </aside>
      )}
    </>
  );
}
