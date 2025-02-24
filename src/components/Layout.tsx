"use client"
import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import { HeroUIProvider } from "@heroui/react";

interface ILayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* <Header /> */}
      <Navbar />
      

      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="backdrop-blur-lg bg-background
              shadow-2xl rounded-2xl overflow-hidden 
              border border-gray-200/20 
              transition-all duration-300 hover:shadow-xl
              hover:scale-[1.01]"
          >
            <div className="grid gap-6 p-8">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
