import Navbar from "@/components/Navbar";
import "./globals.css";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";

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
        {/* <Grid/> */}
        <Navbar />
        <main className="max-w-[1480px] mx-auto border-secondary xl:border-r-[1px] xl:border-l-[1px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default HomeLayout;
