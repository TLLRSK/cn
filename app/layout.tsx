import Navbar from "@/components/navbar";
import "./globals.css";
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "Next.js Project",
  description: "A Next.js project with TypeScript and TailwindCSS",
  keywords: "Next.js, Typescript, TailwindCSS",
};

const HomeLayout = ({children}) => {
  return (
    <html lang="eng">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default HomeLayout