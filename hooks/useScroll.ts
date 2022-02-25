import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as _ from "lodash";

const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      setScrollY(window.scrollY);
    }, 1000);
    const loadScroll = () => {
      const y = window.sessionStorage.getItem("scrollY");
      if (y) {
        window.scrollBy({ top: Number(y) });
        window.sessionStorage.setItem("scrollY", String(0));
      }
    };
    handleScroll();
    loadScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saveScroll = url => {
      window.sessionStorage.setItem("scrollY", String(scrollY));
    };
    router.events.on("routeChangeStart", saveScroll);
    return () => {
      router.events.off("routeChangeStart", saveScroll);
    };
  }, [router.events, scrollY]);
};

export default useScroll;
