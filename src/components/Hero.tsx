"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="text-center mt-4">
        <div className="flex items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={heroDetails.leftImageSrc}
              quality={100}
              priority={true}
              unoptimized={true}
              alt="app mockup"
              className="hidden lg:block"
            />
          </motion.div>
          
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-white text-4xl md:text-[65px] md:leading-[58px] font-bold max-w-lg md:max-w-2xl mx-auto"
            >
              Design stunning <br />
              <span className="text-primary-accent">
                social media cover{" "}
              </span>{" "}
              <br />
              photos in minutes
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-white text-[20px] max-w-3xl mx-auto"
            >
              {heroDetails.subheading}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto"
            >
              <Link
                href="/join-waitlist"
                className="relative h-[55px] inline-flex items-center gap-2 border-2 border-black justify-center text-[20px] font-[400] px-12 py-3 text-white bg-secondary rounded-full shadow-[0px_5px_0px_0px_rgba(252,186,40,1)] hover:shadow-[0px_2px_0px_0px_rgba(252,186,40,1)] hover:translate-y-[3px] transition-all duration-200 animate-pulse-subtle"
              >
                Join Waitlist
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </motion.svg>
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 60, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <Image
              src={heroDetails.rightImageSrc}
              quality={100}
              priority={true}
              unoptimized={true}
              alt="app mockup"
              className="hidden lg:block"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
