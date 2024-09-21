import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="border-b-[1px] border-secondary flex items-center justify-between px-xs">
      <Link href="/" className="text-xs font-bold uppercase">
        cn
      </Link>
      <label htmlFor="info" className="h-fit">
        <input
          type="checkbox"
          name="info"
          id="info"
          className="absolute appearance-none"
        />
        <span className="uppercase text-xs font-bold">info</span>
      </label>
    </nav>
  );
}

export default Navbar;