"use client";

import { memo, useState } from "react";
import Image from "next/image";
import Nav from "./Nav";

// memo prevents re-rendering due scroll state effect
const Menu = memo(() => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div
      className="relative lg:hidden z-20"
      onClick={() => setOpen((open) => !open)}
    >
      {!isOpen ? (
        <Image
          className="cursor-pointer z-20"
          src="/menu.svg"
          alt="menu"
          width={25}
          height={25}
        />
      ) : (
        <Image
          className="cursor-pointer z-20"
          src="/close.svg"
          alt="close"
          width={25}
          height={25}
        />
      )}
      {isOpen ? (
        <div className="container-center absolute top-9 right-0 bg-black rounded-xl px-7 py-6 text-white">
          <Nav isVertical />
        </div>
      ) : (
        ""
      )}
    </div>
  );
});

export default Menu;
