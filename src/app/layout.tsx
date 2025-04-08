import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Source_Sans_3, Manrope } from "next/font/google";

//import Header from "@/components/Header";
import { siteDetails } from '@/data/siteDetails';

import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] });
const sourceSans = Source_Sans_3({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: siteDetails.siteUrl,
    type: 'website',
    images: [
      {
        url: 'https://www.brandigo.io/images/twitter-image.png',
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ['https://www.brandigo.io/images/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
  //headerVisible = true
}: Readonly<{
  children: React.ReactNode;
  //headerVisible: boolean;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} ${sourceSans.className} antialiased bg-background`}
      >
        {siteDetails.googleAnalyticsId && <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />}
        {/* {headerVisible && <Header />} */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
