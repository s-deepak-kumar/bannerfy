import "../globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { siteDetails } from "@/data/siteDetails";

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <meta property="og:image" content="https://www.brandigo.io/images/twitter-image.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="832" />
      <meta
        property="og:site_name"
        content={siteDetails.metadata.title}
      />
      <meta
        property="og:url"
        content="https://brandigo.io/"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://www.brandigo.io/images/twitter-image.png" />
      <meta name="twitter:image:type" content="image/png" />
      <meta name="twitter:image:width" content="1280" />
      <meta name="twitter:image:height" content="832" />
      <body className={`${FigtreeFont.className} overflow-hidden`}>
        {children}
        <Toaster richColors position="top-center" />
        <Analytics />
      </body>
    </html>
  );
}
