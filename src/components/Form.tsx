import Link from "next/link";
import { ChangeEvent } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { containerVariants, itemVariants } from "@/animation-variants";

interface FormProps {
  name: string;
  email: string;
  handleNameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  loading: boolean;
}

export default function Form({
  name,
  email,
  handleNameChange,
  handleEmailChange,
  handleSubmit,
  loading,
}: FormProps) {
  return (
    <motion.div
      className="mt-6 flex w-full max-w-[350px] md:max-w-lg flex-col z-10 gap-2 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible">
      <motion.div variants={itemVariants}>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          autoComplete="name"
          value={name}
          onChange={handleNameChange}
          className="text-[20px] text-white border border-white rounded-md bg-black block w-full py-3 px-6 font-[400] text-black outline-0 placeholder:text-[#BFBFBF]"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Your Email Address"
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
          className="text-[20px] text-white border border-white rounded-md bg-black block w-full py-3 px-6 font-[400] text-black outline-0 placeholder:text-[#BFBFBF]"
        />
      </motion.div>
      <motion.div variants={itemVariants}>
        <div className="mx-auto mt-2 flex w-fit flex-col items-center sm:flex-row sm:gap-4">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="relative h-[55px] inline-flex items-center border-2 border-black justify-center text-[20px] font-[400] px-12 py-3 text-white bg-[#0FA85B] rounded-full shadow-[0px_5px_0px_0px_rgba(252,186,40,1)]">
            {loading ? "Loading..." : "Join Waitlist!"}
          </button>
        </div>
      </motion.div>
      <motion.div
        variants={itemVariants}
        className="mt-2 flex w-full items-center justify-center gap-1 text-[#BFBFBF] text-sm font-[400]">
        <p>For any queries, reach out at </p>
        <Link
          href="https://x.com/sdeepakkumar_"
          rel="noopener noreferrer"
          target="_blank">
          <FaXTwitter className="h-4 w-4 transition-all duration-200 ease-linear hover:text-yellow-200" />
        </Link>
        or
        <Link
          href="https://github.com/s-deepak-kumar"
          rel="noopener noreferrer"
          target="_blank">
          <FaGithub className="ml-0.5 h-5 w-5 transition-all duration-200 ease-linear hover:text-yellow-200" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
