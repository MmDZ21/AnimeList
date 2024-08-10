import React from "react";

import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-[#17212B] h-[72px] w-full flex justify-between items-center">
      {/* logo */}
      {/* navbar */}
      <div>
        <Logo className="text-white lg:text-primary-500" />
      </div>
      {/* search */}
      {/* login */}
      {/* subscription */}
      <div></div>
    </header>
  );
}
