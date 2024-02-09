import { ComponentProps, PropsWithChildren } from "react";

type PropsType = ComponentProps<"button">;

export default function UnstyledButton({
  className = "",
  children,
  ...props
}: PropsWithChildren<PropsType>) {
  return (
    <button
      className={`${className} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary`}
      {...props}
    >
      {children}
    </button>
  );
}
