import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Frame } from "@/components/Frame";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yajat Lakhanpal — Systems, Backend, Research",
  description:
    "Personal portfolio of Yajat Lakhanpal — dual degree student at IIIT Hyderabad building distributed systems, backends, and adaptive learning platforms.",
  openGraph: {
    title: "Yajat Lakhanpal",
    description: "Systems · Backend · Research",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${outfit.variable}`}>
      <body>
        <SmoothScroll>
          <Frame />
          <div className="site-shell">{children}</div>
        </SmoothScroll>
      </body>
    </html>
  );
}
