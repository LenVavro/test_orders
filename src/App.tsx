import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Layout from "./components/Layout/Layout";
import Orders from "./components/Order/Orders";

// Create a client
const queryClient = new QueryClient();

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      sk: {
        translation: {
          Account: "Účet",
          Orders: "Objednávky",
          Pending: "Čakajúce",
          Completed: "Hotové",
          at: "o",
          Total: "Spolu",
          Cancel: "Zrušiť",
          new: "Nová",
          waiting_for_confirmation: "Čaká na potvrdenie",
          completed: "Hotová",
          confirmed: "Potvrdená",
          canceled_by_customer: "Zrušená zákazníkom",
          rejected: "Odmietnutá",
          expired: "Vypršaná",
          failed: "Neúspešná",
          "Unknown item": "Neznáma položka",
          "Unable to load orders": "Nepodarilo sa načítať objednávky",
        },
      },
      en: {
        translation: {
          new: "New",
          waiting_for_confirmation: "Waiting for confirmation",
          confirmed: "Confirmed",
          completed: "Completed",
          canceled_by_customer: "Canceled by customer",
          rejected: "Rejected",
          expired: "Expired",
          failed: "Failed",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Orders />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
