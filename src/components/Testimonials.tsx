"use client";

import * as Headless from "@headlessui/react";
import { clsx } from "clsx";
import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";
import { useCallback, useRef, useState } from "react";
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
  borderColor,
  ...props
}: {
  img: string;
  name: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  borderColor: string;
} & HTMLMotionProps<"div">) {
  return (
    <motion.div
      {...props}
      className={`relative flex shrink-0 lg:!w-[750px] md:!w-[500px] !w-full flex-col  items-start lg:!h-[420px] overflow-hidden transition-all duration-300 sm:aspect-3/4 bg-white px-8 pt-10  border-[8px] 
      }`}
      style={{
        borderColor: borderColor
      }}
    >
      <Image src={QuoteIcon} alt="Quote Icon" className="mx-auto" />

      <figure className="p-4 w-full">
        <blockquote>
          <p className="text-[18px] font-[400] text-black line-clamp-4 min-h-[5.5em] max-h-[5.5em]">
            {children}
          </p>
        </blockquote>

        <figcaption className="w-full mt-8 mx-auto text-center">
          <div className="flex items-center justify-center h-[80px] w-[80px] rounded-full mx-auto" style={{
            backgroundColor: borderColor
          }}>
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

  const borderColors = ['#F53C95',  '#3CB4F5', '#B1D20D', ];

  return (
    <div className="overflow-hidden mt-12">
      <div className="relative">
        {/* Carousel Container */}
        <div
          ref={carouselRef}
          className="relative flex items-center justify-center overflow-hidden px-4"
        >
          <div className="flex w-full justify-center gap-x-8">
            {visibleIndices.map((index, position) => (
              <TestimonialCard
                key={`${index}-${position}`}
                name={testimonials[index].name}
                title={testimonials[index].title}
                img={testimonials[index].img}
                isActive={position === 1}
                onClick={() => position !== 1 && scrollTo(index)}
                borderColor={`${borderColors[index % borderColors.length]}`}
              >
                {testimonials[index].quote}
              </TestimonialCard>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-center">
          <div className="hidden sm:flex sm:gap-2">
            {testimonials.map((_, testimonialIndex) => (
              <Headless.Button
                key={testimonialIndex}
                onClick={() => {
                    scrollTo(testimonialIndex)
                }}
                data-active={
                  activeIndex === testimonialIndex ? true : undefined
                }
                disabled={false}
                aria-label={`Scroll to testimonial ${testimonialIndex + 1}`}
                className={clsx(
                  "size-4 rounded-full border border-transparent bg-[#8A8A8A] transition",
                  "data-[active]:bg-primary hover:bg-primary",
                  "forced-colors:data-[active]:bg-[Highlight] forced-colors:focus:outline-offset-4 z-10"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}