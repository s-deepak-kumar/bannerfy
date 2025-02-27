import React from "react";
import Image from "next/image";

import { heroDetails } from "@/data/hero";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
    >
      <div className="text-center mt-4">
        <div className="flex items-center justify-between gap-12">
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
            <h1 className="text-white text-4xl md:text-[65px] md:leading-[58px] font-bold max-w-lg md:max-w-2xl mx-auto">
              Design stunning <br />
              <span className="text-primary-accent">
                social media cover{" "}
              </span>{" "}
              <br />
              photos in minutes
            </h1>
            <p className="mt-6 text-white text-[20px] max-w-3xl mx-auto">
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
        <div className="mt-10 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
          <Link
            href="#cta"
            className="relative h-[55px] inline-flex items-center border-2 border-black justify-center text-[20px] font-[400] px-12 py-3 text-white bg-secondary rounded-full shadow-[0px_5px_0px_0px_rgba(252,186,40,1)]"
          >
            Create Cover Photo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
