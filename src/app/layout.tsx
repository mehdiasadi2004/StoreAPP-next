"use client"
import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";
import { ShoppingCartContextProvider } from "@/context/ShoppingCartContext";
import Header from "@/components/Header";
import { ThemeProvider } from "@/context/ThemeContext";
import { ColorThemeProvider } from "@/context/ColorThemeContext";
import Navbar from "@/components/Navbar";
import { HeroUIProvider } from "@heroui/react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body className="min-h-screen bg-background text-text transition-colors duration-300">
        <HeroUIProvider>

        <ColorThemeProvider>
          <ShoppingCartContextProvider>
            <Layout>

            
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            </Layout>
          </ShoppingCartContextProvider>
        </ColorThemeProvider></HeroUIProvider>
      </body>
    </html>
  );
}
