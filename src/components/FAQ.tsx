"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import { faqs } from "@/data/faq";
import { ChevronDown } from "lucide-react";

const FAQ: React.FC = () => {
  const ref = useScrollAnimation(0.15);
  
  return (
    <div ref={ref as any} id="faq" className="mt-12 px-4 lg:px-48 stagger-children">
      <div className="flex flex-col gap-4 w-full mx-auto">
        {faqs.map((faq, index) => (
          <div key={index}>
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-5 bg-[#F9F4DA] text-left hover:bg-[#f5efc7] transition-colors">
                    <span className="text-md font-[500]">{faq.question}</span>
                    <div className="transition-transform duration-300" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                      <ChevronDown className="h-8 w-8 text-black" />
                    </div>
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
