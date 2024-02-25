"use client";
import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Navigation from "./Navigation";

const MobileNavigation = () => {
  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger >
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Navigation mobile />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MobileNavigation;
