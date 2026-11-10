import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baderin Energies Consulting",
  description: "Independent oil, gas and energy consultancy led by project lead and installation engineer Toyese Baderin.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
