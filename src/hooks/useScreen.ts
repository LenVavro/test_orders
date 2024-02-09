import { useEffect, useState } from "react";

const screens = {
  sm: "640px",
  // => @media (min-width: 640px) { ... }
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

export function useScreen(screen: keyof typeof screens) {
  const query = `(min-width: ${screens[screen]})`;

  const [isMatched, setIsMatched] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const updateMatchStatus = (event: MediaQueryListEvent) => {
      setIsMatched(event.matches);
    };

    mediaQueryList.addEventListener("change", updateMatchStatus);

    return () => {
      mediaQueryList.removeEventListener("change", updateMatchStatus);
    };
  }, [query]);

  return isMatched;
}
