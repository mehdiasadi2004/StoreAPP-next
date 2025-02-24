"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // بررسی تم ذخیره شده در localStorage
    const savedTheme = localStorage.getItem("theme");
    // بررسی ترجیحات سیستم کاربر
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // اگر تم ذخیره شده وجود دارد از آن استفاده کن، در غیر این صورت از ترجیحات سیستم استفاده کن
    const initialTheme = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDarkMode(initialTheme);

    if (initialTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      // ذخیره تم در localStorage
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      // اعمال کلاس dark به html
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newTheme;
    });
  };

  const value = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
