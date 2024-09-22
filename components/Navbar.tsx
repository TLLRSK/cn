import Link from "next/link";
import React from "react";
import Info from "./Info";

function Navbar() {
  return (
    <nav className="bg-main flex items-center justify-between px-sm py-xs md:px-md md:py-xs fixed top-0 right-0 left-0 z-50 border-b-[1px] border-secondary">
      <Link href="/" className="text-xs font-black lg:text-md uppercase">
        cn
      </Link>
      <Info />
    </nav>
  );
}

export default Navbar;
