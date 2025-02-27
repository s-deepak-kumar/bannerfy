import React from "react";
import Image from "next/image";

import { heroDetails } from "@/data/hero";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className=" flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      {/* <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div> */}

      <div className="text-center">
        <div className="flex items-center justify-between gap-8">
          <Image
            src={heroDetails.leftImageSrc}
            quality={100}
            //sizes="(max-width: 768px) 100vw, 384px"
            priority={true}
            unoptimized={true}
            alt="app mockup"
            className="hidden lg:block"
          />
          <div>
            <h1 className="text-white text-4xl md:text-[60px] md:leading-[55px] font-bold max-w-lg md:max-w-2xl mx-auto">
              Design stunning <br />
              <span className="text-primary-accent">
                social media cover{" "}
              </span>{" "}
              <br />
              photos in minutes
            </h1>
            <p className="mt-4 text-white text-[20px] max-w-3xl mx-auto">
              {heroDetails.subheading}
            </p>
          </div>
          <Image
            src={heroDetails.rightImageSrc}
            quality={100}
            //sizes="(max-width: 768px) 100vw, 384px"
            priority={true}
            unoptimized={true}
            alt="app mockup"
            className="hidden lg:block"
          />
        </div>
        <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <Link
            href="#cta"
            className="relative inline-flex items-center border-2 border-black justify-center text-[20px] font-[400] px-12 py-3 text-white bg-secondary rounded-full transition-colors 
  before:absolute before:-bottom-2 before:-left-1 before:w-[103%] before:h-full before:bg-primary before:rounded-full before:-z-10 hover:bg-green-700"
          >
            Create Cover Photo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
