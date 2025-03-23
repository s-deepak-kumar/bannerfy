"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { faqs } from "@/data/faq";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ: React.FC = () => {
  return (
    <div id="faq" className="mt-12 px-48">
      <div className="flex flex-col gap-4 w-full mx-auto">
        {faqs.map((faq, index) => (
          <div key={index}>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-5 bg-[#F9F4DA] text-left">
                    <span className="text-md font-[500]">{faq.question}</span>
                    {open ? (
                      <ChevronUp className="w-8 h-8 text-black" />
                    ) : (
                      <ChevronDown className="h-8 w-8 text-black" />
                    )}
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 py-4 text-md font-[400] text-black text-start bg-white">
                    {faq.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
