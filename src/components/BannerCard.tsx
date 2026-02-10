import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface CardProps {
  image: string;
}

export const BannerCard: React.FC<CardProps> = ({ image }) => {
    const [showOverlay, setShowOverlay] = useState(false);
  
    return (
      <motion.div
        className="relative overflow-hidden h-[200px] min-w-[600px] bg-slate-400 flex justify-center items-center rounded-xl"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute inset-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
              <motion.h1
                className="bg-white font-semibold text-sm z-10 px-3 py-2 rounded-full"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
              >
                <span>Explore Now</span>
                <Arrow className="h-4 w-4" />
              </motion.h1> */}
            </motion.div>
          )}
        </AnimatePresence>
        <Image src={image} alt={image} fill style={{ objectFit: "cover" }} />
      </motion.div>
    );
  };
  