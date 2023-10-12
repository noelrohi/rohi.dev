import { useMounted } from "@/hooks/use-mounted";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", t);
    setTheme(t);
  };

  const mounted = useMounted();

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  return mounted ? (
    <Button role="button" onClick={toggleTheme} variant={"ghost"} size={"icon"}>
      <span className="sr-only">Toggle theme mode</span>
      {theme !== "dark" ? (
        <SunIcon className="w-[1.2rem] h-[1.2rem]" />
      ) : (
        <MoonIcon className="w-[1.2rem] h-[1.2rem]" />
      )}
    </Button>
  ) : (
    <div />
  );
}
