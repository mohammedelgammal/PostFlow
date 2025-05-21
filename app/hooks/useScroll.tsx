import { useEffect, useState } from "react";

const Y_OFFSET = 50;

const useScroll: () => useScrollPropsType = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const handleScroll: () => void = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Maintains scrollBar last position 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { scrollY, hasYOffset: scrollY > Y_OFFSET };
};

type useScrollPropsType = {
  scrollY: number;
  hasYOffset: boolean;
};

export default useScroll;
