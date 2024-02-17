"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ClassProp } from "class-variance-authority/types";

const navVariants = cva("max-w-none flex", {
  variants: {
    variant: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
    },
    orientation: {
      vertical: "flex-col items-start gap-2",
      horizontal: "space-x-1",
    },
  },
  defaultVariants: {
    variant: "center",
    orientation: "horizontal",
  },
});

type NavigationProp = {
  variant?: "start" | "end" | "center" | null | undefined;
  orientation?: "horizontal" | "vertical" | null | undefined;
  className?: string;
};

const navLinks = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About" },
  { id: 3, path: "/contact", label: "Contact" },
];

const Navigation = ({ variant, orientation, className }: NavigationProp) => {
  return (
    <NavigationMenu className={cn(navVariants({ variant }), className)}>
      <NavigationMenuList className={cn(navVariants({ orientation }))}>
        {navLinks.map((link) => (
          <NavigationMenuItem key={link.id}>
            <Link href={link.path} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {link.label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
