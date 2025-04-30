"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

import logo from "@/assets/logo/logo.png";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [cartTotal] = useState("500");

  const navLinks = [
    { name: "HOME", href: "/", id: "home" },
    { name: "SHOP", href: "/shop", id: "shop" },
    { name: "DELIVERY", href: "/delivery", id: "delivery" },
  ];

  const rightNavLinks = [
    { name: "ABOUT", href: "/about", id: "about" },
    { name: "CONTACT", href: "/contact", id: "contact" },
  ];

  return (
    <nav className="w-full bg-black text-white border-b border-zinc-800 font-industry">
      <div className="container mx-auto flex items-center justify-between h-16 px-0">
        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden pl-4">
            <button className="p-2" aria-label="Menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="bg-black text-white w-[250px] p-0"
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                <div className="w-8 h-8 relative">
                  <Image src={logo} alt="logo.png" width={40} height={40} />
                </div>
              </div>
              <div className="flex flex-col p-4 space-y-4">
                {[...navLinks, ...rightNavLinks].map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    className={cn(
                      "py-2 border-b border-transparent transition-colors font-industry",
                      activeLink === link.id
                        ? "text-white border-b-2 border-orange-500"
                        : "text-zinc-500 hover:text-white"
                    )}
                    onClick={() => setActiveLink(link.id)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="mt-auto pt-4 border-t border-zinc-800">
                  <Link
                    href="/cart"
                    className="flex items-center space-x-2 text-sm font-industry"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>CART ({cartTotal}$)</span>
                  </Link>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        {/* Left navigation links - hidden on mobile */}
        <div className="hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <div key={link.id} className="relative flex items-center">
              <Link
                href={link.href}
                className={cn(
                  "px-8 py-5 font-industry tracking-wider transition-colors",
                  activeLink === link.id
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                )}
                onClick={() => setActiveLink(link.id)}
              >
                {link.name}
                {activeLink === link.id && (
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-orange-500"></div>
                )}
              </Link>
              {index < navLinks.length - 1 && <Border />}
            </div>
          ))}
        </div>

        {/* Logo - centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <Link href="/" className="flex items-center">
            <Image src={logo} alt="logo.png" width={40} height={40} />
          </Link>
        </div>

        {/* Right navigation links - hidden on mobile */}
        <div className="hidden md:flex items-center">
          {rightNavLinks.map((link, index) => (
            <div key={link.id} className="relative flex items-center">
              <Link
                href={link.href}
                className={cn(
                  "px-8 py-5 font-industry tracking-wider transition-colors",
                  activeLink === link.id
                    ? "text-white"
                    : "text-zinc-500 hover:text-white"
                )}
                onClick={() => setActiveLink(link.id)}
              >
                {link.name}
                {activeLink === link.id && (
                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-orange-500"></div>
                )}
              </Link>
              {index < rightNavLinks.length - 1 && <Border />}
            </div>
          ))}
          <Border />
          <Link
            href="/cart"
            className="flex items-center space-x-2 px-8 py-5 font-industry tracking-wider text-white"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="flex flex-col items-center">
              CART{" "}
              <span className="text-zinc-500 hover:text-white">
                ({cartTotal}$)
              </span>
            </span>
          </Link>
        </div>

        {/* Mobile cart icon */}
        <Link href="/cart" className="md:hidden pr-4">
          <ShoppingCart className="h-5 w-5" />
        </Link>
      </div>
    </nav>
  );
}

function Border() {
  return (
    <div className="border-r border-zinc-800 h-16 flex items-center justify-center relative">
      <div className="h-2 w-2 rounded-full bg-zinc-700 absolute"></div>
    </div>
  );
}
