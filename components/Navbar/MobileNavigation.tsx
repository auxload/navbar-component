"use client";
import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Navigation from "./Navigation";
import useToggleNav from "./useToggleNav";
import { cn } from "@/lib/utils";

const MobileNavigation = () => {
  const [open, setOpen] = useState<boolean | false>(false);
  const menuBtnRef = useRef<any>();
  useEffect(() => {
    window.addEventListener("click", handleWindowClick);

    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);
  function handleWindowClick(e: MouseEvent) {
    if (menuBtnRef.current && !menuBtnRef.current.contains(e.target as Node)) {
      setOpen(false);
      return;
    }
    setOpen(true);
  }
  const navMenuStyle =
    "md:hidden absolute transition top-0 right-0 bg-background p-3 h-screen w-1/2";
  return (
    <>
      <Menu
        ref={menuBtnRef}
        className="h-6 w-6 cursor-pointer md:hidden ml-auto"
      />
      <div>
        <X
          className={`${
            !open && "hidden"
          } md:hidden cursor-pointer h-7 w-7 z-30 absolute p-0 mt-2 mx-6  right-0`}
        />
        <Navigation
          orientation={"vertical"}
          className={cn(
            `${!open && "translate-x-full"} ${
              open && "shadow-[0_0px_0px_9999px_rgba(0,0,0,0.7)]"
            }`,
            navMenuStyle
          )}
        />
      </div>
    </>
  );
};

export default MobileNavigation;
