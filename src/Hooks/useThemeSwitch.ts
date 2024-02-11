"use client";

import { useEffect, useState } from "react";

export default function useThemeSwitch(): [
  string,
  React.Dispatch<React.SetStateAction<string>>
] {
  const preferDarkQuery = "(prefers-color-scheme:dark)";
  const storageKey = "theme";

  function toggleTheme(theme: string) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  }

  function getUserPreference() {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  }

  const [mode, setMode] = useState("initial");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);

    function handleChange() {
      const newMode = getUserPreference();
      setMode(newMode);
      if (mode !== "initial") toggleTheme(mode);
    }

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (mode !== "initial") toggleTheme(mode);
  }, [mode]);

  return [mode, setMode];
}
