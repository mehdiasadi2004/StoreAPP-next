"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import nextConfig from "../../next.config.js";

type ThemeColors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  accent: string;
};

type ThemeType = "light" | "dark" | "forest" | "ocean";

interface ColorThemeContextType {
  currentTheme: ThemeType;
  colors: ThemeColors;
  changeTheme: (theme: ThemeType) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const ColorThemeContext = createContext<ColorThemeContextType | undefined>(
  undefined
);

const themes = nextConfig.theme.themes;

export function ColorThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("light");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // بررسی تم ذخیره شده
    const savedTheme = localStorage.getItem("colorTheme") as ThemeType;
    const savedDarkMode = localStorage.getItem("darkMode");

    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }

    if (savedDarkMode) {
      setIsDarkMode(savedDarkMode === "true");
      if (savedDarkMode === "true") {
        document.documentElement.classList.add("dark");
      }
    } else {
      // بررسی ترجیحات سیستم
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const changeTheme = (theme: ThemeType) => {
    if (themes[theme]) {
      setCurrentTheme(theme);
      localStorage.setItem("colorTheme", theme);

      // اعمال متغیرهای CSS
      const root = document.documentElement;
      Object.entries(themes[theme]).forEach(([key, value]) => {
        root.style.setProperty(`--${key}`, value as string);
      });
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const newValue = !prev;
      localStorage.setItem("darkMode", String(newValue));
      document.documentElement.classList.toggle("dark");
      return newValue;
    });
  };

  const value = {
    currentTheme,
    colors: themes[currentTheme],
    changeTheme,
    isDarkMode,
    toggleDarkMode,
  };

  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
}

export const useColorTheme = () => {
  const context = useContext(ColorThemeContext);
  if (context === undefined) {
    throw new Error("useColorTheme must be used within a ColorThemeProvider");
  }
  return context;
};
