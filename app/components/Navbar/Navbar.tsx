"use client";

import { Logo, Menu, Nav } from "./components";
import useScroll from "@/hooks/useScroll";

const Navbar = () => {
  const { hasYOffset } = useScroll();

  return (
    <div className="fixed top-3 left-0 container-center w-full z-50">
      <div
        className={`flex items-center justify-between py-5 transition-all ease-linear duration-300 ${
          hasYOffset
            ? "w-[800px] border border-fade-white rounded-2xl px-5 shadow-lg backdrop-blur-sm max-lg:mx-5"
            : "w-limit mx-10"
        }`}
      >
        <Logo />
        <Menu />
        <Nav isVertical={false} />
      </div>
    </div>
  );
};

export default Navbar;
