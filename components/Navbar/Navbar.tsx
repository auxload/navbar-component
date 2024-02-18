import React from "react";
import Wrapper from "../Layouts/Wrapper";
import Branding from "./Branding";
import { MountainIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <header className="border-b">
      <Wrapper>
        <nav className="flex h-14 w-full items-center ">
          <Branding />
          <Navigation variant={"center"} className={"hidden md:flex"} />
          <Button size="sm" className="ml-6 hidden md:inline-flex ">
            Contact
          </Button>
          <MobileNavigation />
        </nav>
      </Wrapper>
    </header>
  );
};

export default Navbar;
