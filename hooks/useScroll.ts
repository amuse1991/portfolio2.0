import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import * as _ from "lodash";

const useScroll = () => {
  const router = useRouter();
  const saveScroll = () => {
    window.sessionStorage.setItem("scrollY", String(window.scrollY));
  };
  const loadScroll = () => {
    const scrollY = window.sessionStorage.getItem("scrollY");
    if (scrollY) {
      window.scrollBy({ top: Number(scrollY) });
      window.sessionStorage.setItem("scrollY", String(0));
    }
  };

  useEffect(() => {
    router.events.on("routeChangeStart", saveScroll);
    return () => {
      router.events.off("routeChangeStart", saveScroll);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    loadScroll();
  }, [router.events]);
};

export default useScroll;
