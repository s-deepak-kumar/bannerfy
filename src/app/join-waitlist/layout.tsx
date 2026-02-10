import "../globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { siteDetails } from "@/data/siteDetails";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: "https://bannerfy.brandigo.io/join-waitlist",
    type: 'website',
    images: [
      {
        url: 'https://bannerfy.brandigo.io/images/large-image.png',
        width: 1280,
        height: 832,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['https://bannerfy.brandigo.io/images/large-image.png'],
  },
};

export default function JoinWaitlistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${FigtreeFont.className} overflow-hidden`}>
      {children}
      <Toaster richColors position="top-center" />
      <Analytics />
    </div>
  );
}
