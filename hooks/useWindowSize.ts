import { useEffect, useState } from "react";

type TWindowSize = {
  width?: number;
  height?: number;
};

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState<TWindowSize>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return windowSize;
}
