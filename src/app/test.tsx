"use client";

import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import useMeasure, { type RectReadOnly } from "react-use-measure";
import QuoteIcon from "/public/images/ic-quote.svg";
import Image from "next/image";

const testimonials = [
  {
    img: "/images/testimonial-1.webp",
    name: "Tina Yards",
    title: "VP of Sales, Protocol",
    quote:
      "I used to design covers using design software, but since I'm not a professional, my designs often looked similar. However, with Brandingo, I was able to create covers using fresh and diverse templates.",
  },
  {
    img: "/images/testimonial-2.webp",
    name: "Conor Neville",
    title: "Head of Customer Success, TaxPal",
    quote:
      "Radiant made undercutting all of our competitors an absolute breeze.",
  },
  {
    img: "/images/testimonial-3.webp",
    name: "Amy Chase",
    title: "Head of GTM, Pocket",
    quote:
      "We closed a deal in literally a few minutes because we knew their exact budget.",
  },
  {
    img: "/images/testimonial-1.webp",
    name: "Veronica Winton",
    title: "CSO, Planeteria",
    quote:
      "We've managed to put two of our main competitors out of business in 6 months.",
  },
  {
    img: "/images/testimonial-2.webp",
    name: "Dillon Lenora",
    title: "VP of Sales, Detax",
    quote: "I was able to replace 80% of my team with RadiantAI bots.",
  },
  {
    img: "/images/testimonial-1.webp",
    name: "Harriet Arron",
    title: "Account Manager, Commit",
    quote:
      "I've smashed all my targets without having to speak to a lead in months.",
  },
];

function TestimonialCard({
  name,
  title,
  img,
  children,
  isActive,
  ...props
}: {
  img: string;
  name: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      className={`relative flex shrink-0 lg:!w-[750px] md:!w-[500px] !w-full flex-col  items-start lg:!h-[400px] overflow-hidden transition-all duration-300 sm:aspect-3/4 bg-white px-8 pt-10  border-[8px] border-[#F53C95] 
      }`}
    >
      <Image src={QuoteIcon} alt="Quote Icon" className="mx-auto" />

      <figure className="p-4 w-full">
        <blockquote>
          <p className="text-[18px] font-[400] text-black line-clamp-3 min-h-[4.5em] max-h-[4.5em]">
            {children}
          </p>
        </blockquote>

        <figcaption className="w-full mt-8 mx-auto text-center">
          <div className="flex items-center justify-center h-[80px] w-[80px] bg-[#F53C95] rounded-full mx-auto">
            <Image
              src={img}
              alt={`${name} avatar`}
              width={65}
              height={65}
              className="rounded-full "
            />
          </div>

          <p className="text-[20px] font-[700] text-black mt-2">{name}</p>
          <p className="text-sm/6 font-medium">
            <span className=" text-md font-[400] text-black mt-2">{title}</span>
          </p>
        </figcaption>
      </figure>
    </motion.div>
  );
}

function CallToAction() {
  return (
    <div>
      <p className="max-w-sm text-sm/6 text-gray-600">
        Join the best sellers in the business and start using Radiant to hit
        your targets today.
      </p>
      <div className="mt-2">
        <Link
          href="#"
          className="inline-flex items-center gap-2 text-sm/6 font-medium text-pink-600"
        >
          Get started
          <ArrowRight className="size-5" />
        </Link>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = useCallback(() => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  }, []);

  const scrollTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Calculate visible indices with wrap-around
  const getVisibleIndices = () => {
    const indices = [];
    const total = testimonials.length;

    // Previous item (left)
    const prevIndex = activeIndex === 0 ? total - 1 : activeIndex - 1;
    indices.push(prevIndex);

    // Active item (center)
    indices.push(activeIndex);

    // Next item (right)
    const nextIndex = activeIndex === total - 1 ? 0 : activeIndex + 1;
    indices.push(nextIndex);

    return indices;
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="overflow-hidden py-2">
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
        >
          <ChevronLeft className="size-6" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg hover:bg-white"
        >
          <ChevronRight className="size-6" />
        </button>

        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative flex items-center justify-center overflow-hidden px-4"
        >
          <div className="flex w-full justify-center gap-8">
            {visibleIndices.map((index, position) => (
              <TestimonialCard
                key={`${index}-${position}`}
                name={testimonials[index].name}
                title={testimonials[index].title}
                img={testimonials[index].img}
                isActive={position === 1}
                // style={{
                //   position: 'absolute',
                //   left: position === 0 ? '10%' : position === 1 ? '50%' : '90%',
                //   transform: position === 1
                //     ? 'translateX(-50%)'
                //     : position === 0
                //       ? 'translateX(-80%)'
                //       : 'translateX(-20%)',
                // }}
                onClick={() => position !== 1 && scrollTo(index)}
              >
                {testimonials[index].quote}
              </TestimonialCard>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2">
        <div className="flex justify-between">
          <CallToAction />
          <div className="hidden sm:flex sm:gap-2">
            {testimonials.map((_, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => scrollTo(testimonialIndex)}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                aria-label={`Scroll to testimonial ${testimonialIndex + 1}`}
                className={clsx(
                  "size-2.5 rounded-full border border-transparent bg-gray-300 transition",
                  "data-[active]:bg-gray-400 hover:bg-gray-400",
                  "forced-colors:data-[active]:bg-[Highlight] forced-colors:focus:outline-offset-4"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
