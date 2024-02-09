import { ComponentProps, PropsWithChildren } from "react";

type PropsType = ComponentProps<"button">;

export default function UnstyledButton({
  className = "",
  children,
  ...props
}: PropsWithChildren<PropsType>) {
  return (
    <button className={`${className} `} {...props}>
      {children}
    </button>
  );
}
