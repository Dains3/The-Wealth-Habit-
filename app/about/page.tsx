import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "The story behind The Wealth Habit and why it exists to help you budget, save, and earn on your own terms.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-charcoal/10">
        <div className="container-content grid gap-12 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-24">
          <div className="h-72 rounded-card bg-gradient-to-br from-green via-green-light to-gold shadow-card md:h-full" />
          <div className="flex flex-col justify-center">
            <p className="eyebrow">About Me</p>
            <h1 className="mt-3 text-4xl md:text-5xl">Hi, I&rsquo;m glad you&rsquo;re here.</h1>
            <p className="mt-6 leading-relaxed text-charcoal-light">
              I started The Wealth Habit after realizing most personal finance advice
              online falls into two camps: overwhelming spreadsheets built for people
              who already have their finances figured out, or vague motivational
              posts with nothing you can actually do today.
            </p>
            <p className="mt-4 leading-relaxed text-charcoal-light">
              I wanted something in between — grounded, specific, and built around
              the idea that money habits compound the same way interest does. Small,
              boring, repeatable actions, done consistently, beat a single dramatic
              overhaul every time.
            </p>
          </div>
        </div>
      </section>

      <section className="container-content py-16">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="eyebrow">What I write about</p>
            <ul className="mt-4 space-y-2 text-charcoal-light">
              <li>Budgeting systems that survive real life</li>
              <li>Saving on autopilot</li>
              <li>Making money online, realistically</li>
              <li>Side hustles that fit around a full-time job</li>
              <li>The mindset shifts that make it all stick</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">What I won&rsquo;t do</p>
            <ul className="mt-4 space-y-2 text-charcoal-light">
              <li>Promise you&rsquo;ll get rich quick</li>
              <li>Shame you for past money decisions</li>
              <li>Recommend anything I wouldn&rsquo;t use myself</li>
              <li>Pretend one budget fits every income</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">A quick disclaimer</p>
            <p className="mt-4 leading-relaxed text-charcoal-light">
              I&rsquo;m not a licensed financial advisor, and nothing here is
              personalized financial advice. Think of this as a well-researched
              friend sharing what&rsquo;s worked — always do your own homework
              for decisions specific to your situation.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-card border border-gold/30 bg-gold/10 p-8 text-center">
          <h2 className="text-2xl text-green">Got a question or a topic request?</h2>
          <p className="mx-auto mt-2 max-w-md text-sm text-charcoal-light">
            I read every message that comes through the contact page — send me a note.
          </p>
          <Link href="/contact" className="btn-primary mt-6 inline-flex">
            Say Hello
          </Link>
        </div>
      </section>
    </>
  );
}
