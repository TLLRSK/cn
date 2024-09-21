import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

export const metadata: Metadata = {
  title: "Coke Navarro",
  description: "Illustrator and comic artist",
  keywords: "Illustration, Illustrator, Comic, Comic artist",
};

const inter = Inter({ subsets: ["latin"] });

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="eng">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default HomeLayout;
