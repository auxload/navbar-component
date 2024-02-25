import React from "react";
import Wrapper from "../Layouts/Wrapper";
import Branding from "./Branding";

import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const Navbar = () => {
  return (
    <header className="border-b">
      <Wrapper>
        <div className="flex  w-full  justify-between md:justify-normal">
          <Branding />
          <Navigation className="hidden md:flex flex-1"/>
          <MobileNavigation />
        </div>
      </Wrapper>
    </header>
  );
};

export default Navbar;
