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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import Navigation from "./Navigation";
import Link from "next/link";
import { ListItem } from "./ListItem";
import { services } from "./navLinks";

const MobileNavigation = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="md:hidden">
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="md:hidden">
        <NavigationMenu className={cn("m-auto ")}>
          <NavigationMenuList
            className={`
          flex  items-start flex-col space-x-0
          max-w-none  w-full`}
          >
            {services.map((link, index) => {
              if (!link.children) {
                return (
                  <NavigationMenuItem key={link.id}>
                    <Link href={link.path || ""} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {link.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              }
              return (
                <NavigationMenuItem key={link.id}>
                  <Accordion
                    type="single"
                    collapsible
                    className="min-w-[300px]"
                  >
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={cn("", navigationMenuTriggerStyle())}
                      >
                        {link.title}
                      </AccordionTrigger>
                      <AccordionContent className="">
                        <ul className="grid w-full gap-3 p-4 md:w-[500px]  ">
                          {services[index]?.children?.map((component) => (
                            <ListItem
                              key={component.title}
                              title={component.title}
                              href={component.href}
                            ></ListItem>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MobileNavigation;
