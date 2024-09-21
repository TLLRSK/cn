import Link from "next/link";
import React from "react";
import Info from "./Info";

function Navbar() {
  return (
    <nav className="bg-main border-b-[1px] border-secondary flex items-center justify-between px-xs sticky">
      <Link href="/" className="text-xs font-medium uppercase">
        cn
      </Link>
      <Info />
    </nav>
  );
}

export default Navbar;
