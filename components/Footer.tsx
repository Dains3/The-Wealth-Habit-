import Link from "next/link";
import { categories } from "@/lib/posts";

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-green text-cream">
      <div className="container-content grid gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-heading text-2xl font-semibold text-cream">The Wealth Habit</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/75">
            Practical, judgment-free money guidance for building better habits around
            budgeting, saving, and income — one small decision at a time.
          </p>
        </div>

        <div>
          <p className="eyebrow text-gold-light before:bg-gold-light">Explore</p>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            {categories.map((c) => (
              <li key={c}>
                <Link
                  href={`/blog?category=${encodeURIComponent(c)}`}
                  className="hover:text-gold-light"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow text-gold-light before:bg-gold-light">Site</p>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            <li>
              <Link href="/about" className="hover:text-gold-light">
                About Me
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-light">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-gold-light">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} The Wealth Habit. All rights reserved.</p>
          <p>Educational content only — not personalized financial advice.</p>
        </div>
      </div>
    </footer>
  );
}
