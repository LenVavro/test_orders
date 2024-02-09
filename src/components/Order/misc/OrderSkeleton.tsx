import Skeleton from "../../ui/Skeleton";

export default function OrderSkeleton() {
  return (
    <div className="rounded-lg bg-white p-4">
      <Skeleton className="mb-10 mt-1 h-6 w-3/4 max-w-80 rounded" />

      <div className="my-4 flex items-center justify-between gap-4">
        <Skeleton className="h-4 w-3/4 max-w-40 rounded" />
        <Skeleton className="h-4 w-10 rounded" />
      </div>

      <div className="my-4 flex items-center justify-between gap-4">
        <Skeleton className="h-4 w-3/4 max-w-40 rounded" />
        <Skeleton className="h-4 w-10 rounded" />
      </div>

      <div className="my-4 flex items-center justify-between gap-4">
        <Skeleton className="h-4 w-3/4 max-w-40 rounded" />
        <Skeleton className="h-4 w-10 rounded" />
      </div>

      <div className="my-4 flex items-center justify-between gap-4">
        <Skeleton className="h-4 w-3/4 max-w-40 rounded" />
        <Skeleton className="h-4 w-10 rounded" />
      </div>

      <div className="mt-auto"></div>
      <Skeleton className="mt-10 h-6 w-3/4 max-w-20 rounded" />
    </div>
  );
}
