"use client";

import { useState, FormEvent } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your email provider (ConvertKit, Mailchimp, Beehiiv, etc.)
    setStatus("submitted");
  }

  return (
    <section className="bg-green">
      <div className="container-content flex flex-col items-center gap-6 py-16 text-center">
        <p className="eyebrow text-gold-light before:bg-gold-light">Free weekly note</p>
        <h2 className="max-w-xl text-3xl text-cream md:text-4xl">
          One habit-building money tip, every Sunday morning.
        </h2>
        <p className="max-w-md text-sm text-cream/75">
          No spam, no fluff — just one useful idea you can actually act on. Unsubscribe
          any time.
        </p>

        {status === "submitted" ? (
          <p className="rounded-card border border-gold/40 bg-cream/10 px-6 py-3 text-sm text-gold-light">
            You&rsquo;re in. Check your inbox to confirm.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-card border border-cream/25 bg-cream/5 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold focus:bg-cream/10 focus:outline-none"
            />
            <button type="submit" className="btn-primary bg-gold text-green hover:bg-gold-dark shrink-0">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
