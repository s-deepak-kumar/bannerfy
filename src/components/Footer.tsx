"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import LogoFooter from "../../public/images/logo/logo-footer.svg";
import StripeIcon from "../../public/images/ic-stripe.png";

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-32">
      {/* Logo positioned outside - SEPARATE from the clipped div */}
      <div className="absolute left-1/2 top-0 -translate-y-12 -translate-x-1/2 flex flex-col items-center justify-center z-20">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.8, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -5, transition: { duration: 0.3 } }}
        >
          <Image src={LogoFooter} alt="Bannerfy" />
        </motion.div>
      </div>

      {/* Main footer container with clipping */}
      <div
        className="pt-24 lg:pt-36 text-foreground bg-amber-400"
        style={{
          clipPath: "ellipse(100% 100% at 50% 100%)",
        }}
      >
        <div className="flex justify-center w-7xl">
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-32 w-max items-center text-black mx-auto">
            {footerDetails.quickLinks.map((link) => (
              <li key={link.text} className="md:max-w-32 text-center">
                <Link
                  href={link.url}
                  className="text-[20px] lg:text-[22px] font-[700] hover:text-foreground break-words transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 lg:mt-16 flex flex-col md:flex-row gap-4 justify-between items-center md:text-center text-black px-4 md:px-24 py-5 border-t border-black">
          <ul className="flex items-center text-black gap-8">
            {footerDetails.importantLinks.map((link) => (
              <li key={link.text}>
                <Link
                  href={link.url}
                  className="text-[16px] font-semibold hover:text-foreground transition-colors"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-[14px] font-[400]">
            &copy; Copyright {new Date().getFullYear()} {siteDetails.siteName}.
          </p>
          <p className="flex items-center gap-4 text-[14px] font-[700] text-black">
            Secured payments with{" "}
            <Image src={StripeIcon} height={43} alt="Stripe"/>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
