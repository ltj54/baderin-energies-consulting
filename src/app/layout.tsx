import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baderin Energies Consulting",
  description: "Independent technical consultancy supporting oil, gas and energy project work.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
