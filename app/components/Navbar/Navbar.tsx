"use client";

import { Logo, Menu, Nav } from "./components";
import useScroll from "@/hooks/useScroll";

const Navbar = () => {
  const { hasYOffset } = useScroll();

  return (
    <div className="fixed top-3 left-0 container-center w-full">
      <div
        className={`flex items-center justify-between py-5 transition-all ease-linear duration-300 ${
          hasYOffset
            ? "w-[800px] border border-fade-white rounded-2xl px-5 bg-fade-gray shadow-lg backdrop-blur-xl max-lg:mx-5"
            : "w-limit px-10"
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
