"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from "/public/images/logo/logo.svg";

import Container from "./Container";
import { menuItems } from "@/data/menuItems";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent fixed top-4 md:top-0 left-0 right-0 md:absolute z-50 w-full">
      <Container>
        <nav className="rounded-full md:rounded-none border-2 border-white/10 md:border-none shadow shadow-white/5 backdrop-blur-md md:shadow-none md:backdrop-blur-none bg-white/5 md:bg-transparent w-full flex justify-between items-center py-3 px-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* <FaFingerprint className="text-foreground min-w-fit w-7 h-7" /> */}
            <Image src={Logo} alt="Brandigo" className="h-[50px] w-max md:h-full" />
            {/* <span className="manrope text-xl font-semibold text-foreground cursor-pointer">
                            {siteDetails.siteName}
                        </span> */}
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 gap-[52px] items-center">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-white font-[700] text-[18px] leading-[23px] hover:text-foreground-accent transition-colors"
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="relative h-[45px] inline-flex items-center border-2 border-black justify-center text-md font-[400] px-16  text-black bg-white rounded-full shadow-[4px_4px_0px_0px_rgba(252,186,40,1)]"
              >
                Try it yourself
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-white focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Menu className="h-7 w-7" aria-hidden="true" />
              )}
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu with Transition */}
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div id="mobile-menu" className="md:hidden p-6 m-4 rounded-[30px] border-2 border-white/10 shadow shadow-white/5 backdrop-blur-md bg-white/5">
          <ul className="flex flex-col space-y-4 px-2">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-white font-[700] text-[18px] leading-[23px] hover:text-foreground-accent transition-colors"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <Link
                href="#cta"
                className="w-fit h-[50px] inline-flex items-center border-2 border-black justify-center text-md font-[400] px-10 text-black bg-white rounded-full shadow-[4px_4px_0px_0px_rgba(252,186,40,1)]"
                onClick={toggleMenu}
              >
                Try it yourself
              </Link>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
