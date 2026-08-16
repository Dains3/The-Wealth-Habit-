import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Wealth Habit — Budgeting, Saving & Making Money Online",
    template: "%s | The Wealth Habit",
  },
  description:
    "Practical, judgment-free personal finance guidance on budgeting, saving, side hustles, and making money online — built around small, repeatable habits.",
  metadataBase: new URL("https://thewealthhabit.com"),
  openGraph: {
    title: "The Wealth Habit",
    description:
      "Practical, judgment-free personal finance guidance on budgeting, saving, side hustles, and making money online.",
    siteName: "The Wealth Habit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Wealth Habit",
    description:
      "Practical, judgment-free personal finance guidance on budgeting, saving, side hustles, and making money online.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
