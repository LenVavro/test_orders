type PropsType = { className?: string };

export default function Skeleton({ className }: PropsType) {
  return <div className={`${className} animate-pulse bg-secondary-lightest`} />;
}
