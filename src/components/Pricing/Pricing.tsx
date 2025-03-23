"use client";
import clsx from "clsx";
import Link from "next/link";

interface PricingTier {
    name: string;
    id: string;
    href: string;
    price: { amount: number; label: string };
    features: string[];
    mostPopular: boolean;
  }
  

const pricing: { tiers: PricingTier[] } = {
  tiers: [
    {
      name: "Starter",
      id: "tier-starter",
      href: "#",
      price: { amount: 2, label: "per cover" },
      features: [
        "Choose from any cover",
        "Charge will be only for the downloads",
        "No limit of making templates in drafts",
        "No watermark",
        "No auto subscription",
        "Full refund if not satisfied",
      ],
      mostPopular: false,
    },
    {
      name: "Professional",
      id: "tier-professional",
      href: "#",
      price: { amount: 30, label: "100 covers" },
      features: [
        "Choose from any cover",
        "Charge will be only for the downloads",
        "Notification to choose plan again after 100 cover downloads",
        "No charge in case of minor editing",
        "Plan validity is 6 months",
        "No limit of making templates in drafts",
        "No watermark",
        "No auto subscription",
        "Scratch card surprise offer after buying",
        "Full refund if not satisfied",
      ],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "#",
      price: { amount: 100, label: "per month" },
      features: [
        "Choose from any cover",
        "Charge will be only for the downloads",
        "No charge in case of minor editing",
        "Plan validity is 12 months",
        "No limit of making templates in drafts",
        "No watermark",
        "No auto subscription",
        "Scratch card surprise offer after buying",
        "Full refund if not satisfied",
      ],
      mostPopular: false,
    },
  ],
};

const Pricing: React.FC = () => {
  return (
    <div className="mt-12 mx-auto w-full px-4 md:px-24">
      <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {pricing.tiers.map((tier: PricingTier, tierIdx: number) => (
          <div
            key={tier.id}
            className={clsx(
              tier.mostPopular
                ? "border-[#F9F4DA] bg-secondary"
                : "lg:mt-16 border-[#535353] bg-[#0F0D0E]",
              tierIdx === 0 ? "lg:rounded-r-none" : "",
              tierIdx === pricing.tiers.length - 1 ? "lg:rounded-l-none" : "",
              "relative flex flex-col justify-between border-[6px] lg:z-10 p-8 xl:p-10"
            )}
          >
            <div>
              <div className="flex items-center justify-center gap-x-4">
                <h1
                  id={tier.id}
                  className={clsx(
                    "text-white text-[40px] font-[700] text-center py-4"
                  )}
                >
                  {tier.name}
                </h1>
                {tier.mostPopular ? (
                  <p className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 transform border border-black bg-primary-accent px-6 py-2 text-[16px] font-[700] text-black">
                    Best Value
                  </p>
                ) : null}
              </div>
              <p className="mt-6 flex justify-center gap-x-1">
                <div className="flex flex-col items-start gap-4">
                  <span className="text-[48px] font-[700] tracking-tight text-white">
                    ${tier.price.amount}
                  </span>
                  <span className="text-[20px] font-[500] text-white">
                    {tier.price.label}
                  </span>
                </div>
              </p>

              <Link
                href="#cta"
                className={clsx(
                  tier.mostPopular
                    ? "bg-primary shadow-[0px_7px_0px_0px_rgba(16,13,14,1)]"
                    : "bg-white shadow-[0px_7px_0px_0px_rgba(83,83,83,1)]",
                  "mt-8 w-full relative inline-flex items-center justify-center text-[20px] font-[700] px-12 py-4 text-black rounded-full transition-colors",
                )}
              >
                Get Started
              </Link>



              <ul
                role="list"
                className={clsx(
                  "mt-10 space-y-4 text-md text-white",
                  tier.mostPopular ? "font-[400]" : "font-[500]"
                )}
              >
                {tier.features.map((feature: string) => (
                  <li key={feature} className="flex gap-x-3 text-start">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
