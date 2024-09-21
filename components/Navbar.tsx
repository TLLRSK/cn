import Link from "next/link";
import React from "react";
import Info from "./Info";

function Navbar() {
  return (
    <nav className="bg-main border-b-[1px] border-secondary flex items-center justify-between px-xs fixed top-0 right-0 left-0">
      <Link href="/" className="text-xs font-medium uppercase">
        cn
      </Link>
      <Info />
    </nav>
  );
}

export default Navbar;
