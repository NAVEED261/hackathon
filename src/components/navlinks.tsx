'use client';

import * as React from "react";
import Link from "next/link";

const components = [
  { title: "FRUITS", href: "/grocessories/fruits", description: "A collection of beautiful fruits for your pantry." },
  { title: "VEGETABLES", href: "/grocessories/vegetables", description: "Fresh vegetables for your everyday cooking needs." },
  { title: "BEVERAGES", href: "/grocessories/beverages", description: "Delicious beverages to refresh and energize." },
  { title: "FROZEN FOODS", href: "/grocessories/frozen", description: "Frozen foods to simplify your meal prep." },
];

export function NavigationMenuDemo() {
  return (
    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
      <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
      <Link href="/about" className="text-blue-500 hover:text-blue-700">About</Link>
      <Link href="/contact" className="text-blue-500 hover:text-blue-700">Contact</Link>
      <div className="relative group">
        <span className="text-blue-500 cursor-pointer hover:text-blue-700">Groceries</span>
        <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 p-4 w-40 z-10 border border-gray-200">
          {components.map((component) => (
            <li key={component.title} className="p-2 hover:bg-gray-100 rounded-lg">
              <Link href={component.href} className="text-gray-700 hover:text-gray-900">{component.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
