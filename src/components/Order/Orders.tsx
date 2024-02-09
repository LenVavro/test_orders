import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { OrderStateType, OrderType, OrderViewEnum } from "../../types/order";
import Order from "./Order";
import OrderViewItem from "./OrderViewItem";

export default function Orders() {
  const t = (str: string) => str;

  const [view, setView] = useState<OrderViewEnum>("PENDING");

  const {
    data: orders,
    isError,
    isLoading,
    isSuccess,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const response = await fetch(
        `https://run.mocky.io/v3/531e769c-863c-45c8-8b52-634dd6bfe18d`,
      );

      if (!response.ok) {
        throw new Error(t("Unable to load orders"));
      }

      return (await response.json()) as OrderType[];
    },
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    gcTime: Infinity,

    // In real world application filtering will be done on backend using param in url
    select: (orders) => {
      const pendingStates: OrderStateType[] = [
        "new",
        "waiting_for_confirmation",
        "confirmed",
      ];

      if (view === "COMPLETED") {
        return orders.filter(({ state }) => !pendingStates.includes(state));
      }

      return orders.filter(({ state }) => pendingStates.includes(state));
    },
  });

  return (
    <>
      <div className="grid grid-flow-row gap-2 overflow-hidden rounded-lg bg-white p-2 font-semibold text-primary md:grid-flow-col">
        <OrderViewItem
          view="PENDING"
          isActive={view === "PENDING"}
          onClick={() => setView("PENDING")}
        />
        <OrderViewItem
          view="COMPLETED"
          isActive={view === "COMPLETED"}
          onClick={() => setView("COMPLETED")}
        />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {isSuccess &&
          orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </>
  );
}
