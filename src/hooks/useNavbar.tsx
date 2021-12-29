import { useEffect, useState } from "react";

const useNavbar = (navHeight: number) => {
  const [showNav, setShowNav] = useState(true);
  const [scrollDown, setNavScrollDown] = useState(false);

  useEffect(() => {
    let windowOffset = 0;
    const onScrollFunc = () => {
      let currentScroll = window.scrollY;
      if (currentScroll > navHeight) {
        setShowNav(false);
        if (currentScroll < windowOffset) {
          setNavScrollDown(true);
        } else {
          setNavScrollDown(false);
        }
      } else {
        setShowNav(true);
      }
      windowOffset = window.pageYOffset;
    };

    window.addEventListener("scroll", onScrollFunc);
    return () => window.removeEventListener("scroll", onScrollFunc);
  }, []);
  return { showNav, scrollDown };
};

export default useNavbar;
