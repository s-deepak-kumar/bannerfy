"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { HiOutlineXMark, HiBars3 } from "react-icons/hi2";
import Logo from "/public/images/logo/logo.svg";

import Container from "./Container";
import { menuItems } from "@/data/menuItems";
import Image from "next/image";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 w-full">
      <Container>
        <nav className="shadow-md md:shadow-none bg-white md:bg-transparent w-full flex justify-between items-center py-3 px-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* <FaFingerprint className="text-foreground min-w-fit w-7 h-7" /> */}
            <Image src={Logo} alt="Brandigo" />
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
              className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
              ) : (
                <HiBars3 className="h-6 w-6" aria-hidden="true" />
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
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-foreground hover:text-primary block"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#cta"
                className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-full block w-fit"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </header>
  );
};

export default Header;
