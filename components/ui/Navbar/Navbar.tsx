"use client";

import React, { ReactNode, useState, useCallback, memo } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import Button from "../Button";

interface MenuItem {
  name: string;
  link: string;
}

interface NavbarProps {
  children: ReactNode;
}

const MENU_ITEMS: MenuItem[] = [
  { name: "Menu", link: "/menu" },
  { name: "O nas", link: "/about" },
  { name: "Zarezerwuj", link: "/reserve" },
] as const;

const NavButton = memo(
  ({ item, onClick }: { item: MenuItem; onClick?: () => void }) => (
    <Button
      href={item.link}
      onClick={onClick}
      className="text-2xl hover:text-gray-600 transition-colors duration-200"
    >
      {item.name}
    </Button>
  ),
);

NavButton.displayName = "NavButton";

const Logo = memo(() => (
  <div className="flex flex-row items-center">
    <Image
      src="/logo.png"
      alt="Cafe Belga Logo"
      width={70}
      height={70}
      priority
    />
    <div className="ml-5 text-3xl font-bold font-italiana leading-tight">
      Cafe <br />
      Belga
    </div>
  </div>
));

Logo.displayName = "Logo";

const Navbar = ({ children }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <>
      <nav className="bg-gradient-to-b from-[#B1BACD] to-[#BBE0F2] to-34% sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <Logo />

          <div className="hidden md:flex space-x-6">
            {MENU_ITEMS.map((item) => (
              <NavButton key={item.link} item={item} />
            ))}
          </div>

          <Button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden w-full flex flex-col items-center p-4 space-y-4 animate-fadeIn shadow-[0_5px_5px_#595D67]">
            {MENU_ITEMS.map((item) => (
              <NavButton key={item.link} item={item} onClick={toggleMenu} />
            ))}
          </div>
        )}
      </nav>
      <main className="container mx-auto">{children}</main>
    </>
  );
};

export default memo(Navbar);
