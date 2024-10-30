"use client";

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
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
  {
    title: "FRUITS",
    href: "/docs/primitives/alert-dialog",
    description: "A collection of beautiful fruits for your pantry.",
  },
  {
    title: "VEGETABLES",
    href: "/docs/primitives/hover-card",
    description: "Fresh vegetables for your everyday cooking needs.",
  },
  {
    title: "BEVERAGES",
    href: "/docs/primitives/progress",
    description: "Delicious beverages to refresh and energize.",
  },
  {
    title: "FROZEN FOODS",
    href: "/docs/primitives/scroll-area",
    description: "Frozen foods to simplify your meal prep.",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>HOME</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link href="/" className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                    {/* Optional logo or other elements can be added here */}
                  </Link>
                </NavigationMenuLink>
              </li>
              <p className="text-center text-gray-400 font-semibold italic bg-sky-300 hover:bg-red-200 p-4">
                Fatima Zehra online store is your go-to online shopping
                destination for all things ladies fashion! Discover a stunning
                collection featuring trendy tops, stylish shoes, elegant
                jewelry, comfortable pants, and much more.
              </p>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>GROCERIES</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              ABOUT
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/contact" passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              CONTACT
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
