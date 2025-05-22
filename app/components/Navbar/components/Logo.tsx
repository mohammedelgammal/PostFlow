import { memo } from "react";
import Link from "next/link";
import Image from "next/image";

// memo prevents re-rendering due scroll state effect
const Logo = memo(() => {
  return (
    <Link href="/" className="container-center select-none cursor-pointer">
      <div className="relative w-10 h-10">
        <Image
          src="/logo.png"
          fill
          alt="PostFlow Logo"
          className="object-contain"
        />
      </div>
    </Link>
  );
});

export default Logo;
