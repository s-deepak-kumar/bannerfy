"use client";
import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import useMeasure from "react-use-measure";
import { BannerCard } from "./BannerCard";

const images = [
    "/images/banner/image.png",
    "/images/banner/image-1.png",
    "/images/banner/image-2.png",
    "/images/banner/image-3.png",
  ];

const Logos: React.FC = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  useEffect(() => {
    const finalPosition = -width / 2 - 4;

    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });

    return controls.stop;
  }, [xTranslation, width]);

  return (
    <motion.section id="logos" className="mt-32 -rotate-3">
      <div className="mt-5 flex flex-wrap flex-row items-center gap-5 sm:gap-10 logos-container ">
        <motion.div
          className="flex items-center gap-10 "
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...images, ...images].map((item, idx) => (
          <BannerCard image={item} key={idx} />
        ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Logos;
