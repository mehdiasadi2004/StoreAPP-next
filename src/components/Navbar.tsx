"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCartIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import { useColorTheme } from "@/context/ColorThemeContext";
import { useShppingCartContext } from "@/context/ShoppingCartContext";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const { isDarkMode, toggleDarkMode, currentTheme, changeTheme } =
    useColorTheme();
  const { cartItem } = useShppingCartContext();
  const pathmname = usePathname();

  const navLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
    },
    {
      href: "/dashboard",
      title: "Dashboard",
    },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-background shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Store</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div>
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  className={`mr-4 ${
                    pathmname === item.href ? "text-sky-500" : null
                  }`}
                  href={item.href}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Items */}
          <div className="flex items-center gap-4">
            {/* Theme Selector */}
            <select
              value={currentTheme}
              onChange={(e) => changeTheme(e.target.value as any)}
              className="px-3 py-1 rounded-md text-sm bg-background text-text
                border border-primary outline-none 
                focus:ring-2 focus:ring-primary transition-all duration-200"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="forest">Forest</option>
              <option value="ocean">Ocean</option>
            </select>

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-background text-text
                hover:bg-secondary/10 transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </motion.button>

            {/* Shopping Cart */}
            <motion.div className="relative cursor-pointer">
              <ShoppingCartIcon className="h-6 w-6 text-text" />
              {cartItem.length > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-primary text-white 
                  text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {cartItem.length}
                </span>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
