import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baderin Energies Consulting – concept preview",
  description: "A first website concept for Baderin Energies Consulting, covering oil, gas and energy consulting across the project lifecycle.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
