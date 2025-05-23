"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

// memo prevents re-rendering due scroll state effect
const Nav = ({ isVertical }: NavPropsType) => {
  const pathName = usePathname();
  const navClassNames = isVertical
    ? "container-center flex-col gap-3 "
    : "flex justify-center align-center gap-9 max-lg:hidden";

  return (
    <nav className={navClassNames}>
      {links.map(({ href, title }, index) => (
        <StyledLink key={index} href={href} isActive={href === pathName}>
          {title}
        </StyledLink>
      ))}
      <div
        className={`container-center cursor-pointer z-20  ${
          isVertical ? "w-full mt-2.5 pt-5 border-t border-fade-white" : ""
        }`}
      >
        <Image src="/user.png" alt="user avatar" width={30} height={30} />
      </div>
    </nav>
  );
};

const StyledLink = ({
  href,
  isActive,
  children,
  ...props
}: StyleLinkPropsType) => {
  return (
    <Link
      href={href}
      className={`container-center text-[15px] font-myInter font-extralight hover:color- ${
        isActive ? "text-hover" : "text-white"
      }`}
      onClick={props.onClick}
      {...props}
    >
      {children}
    </Link>
  );
};

const links: LinkType[] = [
  { title: "Home", href: "/" },
  { title: "Dashboard", href: "/admin" },
];

type StyleLinkPropsType = React.ComponentProps<"a"> & {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
};

type LinkType = {
  title: string;
  href: string;
};

type NavPropsType = {
  isVertical: boolean;
};

export default memo(Nav);
