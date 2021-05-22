import { useEffect, useState } from "react";
import throttle from "lodash/throttle";

const useAppearOnScroll = (ref: React.RefObject<HTMLDivElement>) => {
  const [appear, setAppear] = useState(false);

  const easeContent = throttle(() => {
    ref.current!.getBoundingClientRect().top < globalThis.innerHeight &&
      setAppear(true);
  }, 1000);

  useEffect(() => {
    globalThis.addEventListener("scroll", easeContent);
    return () => globalThis.removeEventListener("scroll", easeContent);
  }, []);

  return { appear };
};

export default useAppearOnScroll;
