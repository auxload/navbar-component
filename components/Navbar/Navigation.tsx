"use client";

import { services } from "./navLinks";
import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ListItem } from "./ListItem";

export default function Navigation({
  className,
}: {
  mobile?: boolean | undefined;
  className?: string;
}) {
  return (
    <NavigationMenu className={cn("m-auto ", className)}>
      <NavigationMenuList className={`max-w-none  w-full`}>
        {services.map((link, index) => {
          if (!link.children) {
            return (
              <NavigationMenuItem key={link.id}>
                <Link href={link.path || ""} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {link.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={link.id}>
              <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px]   ">
                  {services[index]?.children?.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
