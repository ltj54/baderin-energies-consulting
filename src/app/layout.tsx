import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baderin Energies Consulting – concept preview",
  description: "Norwegian engineering and technical consultancy supporting oil, gas and energy projects across the project lifecycle.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
