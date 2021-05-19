import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [theme, setTheme] = useState("light");

  const setMode = (mode: "dark" | "light") => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () =>
    theme === "light" ? setMode("dark") : setMode("light");

  useEffect(() => {
    console.log("mounted");
    const localTheme = window.localStorage.getItem("theme");
    localTheme;
    localTheme
      ? setTheme(localTheme)
      : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ? setMode("dark")
      : setMode("light");
  }, []);

  return { theme, themeToggler };
};
