"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import Logo from "../../public/images/logo/logo.svg";

import Container from "./Container";
import { menuItems } from "@/data/menuItems";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header 
      className={`bg-transparent fixed left-0 right-0 z-50 w-full transition-all duration-500 ${scrolled ? 'top-4' : 'top-4 md:top-0'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <Container>
        <motion.nav 
          className={`border-2 shadow w-full flex justify-between items-center py-3 px-3 md:px-6 transition-all duration-500 ${
            scrolled 
              ? 'rounded-full md:rounded-full border-white/10 shadow-black/30 bg-black/40 backdrop-blur-xl backdrop-saturate-150' 
              : 'rounded-full md:rounded-none border-white/10 md:border-none shadow-white/5 md:shadow-none backdrop-blur-md md:backdrop-blur-none bg-white/5 md:bg-transparent'
          }`}
          animate={{
            scale: scrolled ? 0.95 : 1,
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={Logo} alt="Bannerfy" className="h-[50px] w-max md:h-full" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 gap-[52px] items-center">
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.text}
                initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={item.url}
                  className="text-white font-[700] text-[18px] leading-[23px] hover:text-primary transition-colors"
                >
                  {item.text}
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6, delay: menuItems.length * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href="/join-waitlist"
                className="relative h-[45px] inline-flex items-center gap-2 border-2 border-black justify-center text-md font-[400] px-12 text-black bg-white rounded-full shadow-[4px_4px_0px_0px_rgba(252,186,40,1)] hover:shadow-[2px_2px_0px_0px_rgba(252,186,40,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
              >
                Get Started
                <motion.svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </motion.svg>
              </Link>
            </motion.li>
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
        </motion.nav>
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
        <div id="mobile-menu" className="md:hidden p-6 m-4 rounded-[30px] border-2 border-white/10 shadow shadow-white/5 backdrop-blur-md bg-black/40">
          <ul className="flex flex-col space-y-4 px-2">
            {menuItems.map((item) => (
              <li key={item.text}>
                <Link
                  href={item.url}
                  className="text-white font-[700] text-[18px] leading-[23px] hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
            <Link
                href="/join-waitlist"
                className="w-fit h-[50px] inline-flex items-center gap-2 border-2 border-black justify-center text-md font-[400] px-10 text-black bg-white rounded-full shadow-[4px_4px_0px_0px_rgba(252,186,40,1)]"
                onClick={toggleMenu}
              >
                Get Started
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
          </ul>
        </div>
      </Transition>
    </motion.header>
  );
};

export default Header;
