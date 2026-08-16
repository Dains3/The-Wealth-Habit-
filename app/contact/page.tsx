import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The Wealth Habit — questions, topic requests, or collaborations.",
};

export default function ContactPage() {
  return (
    <section className="container-content py-16 md:py-20">
      <div className="grid gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="mt-3 text-4xl md:text-5xl">Let&rsquo;s talk money.</h1>
          <p className="mt-6 leading-relaxed text-charcoal-light">
            Whether you have a question about a post, a topic you&rsquo;d like covered,
            or a partnership idea — send it over. I reply to every message, usually
            within a few business days.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div>
              <p className="font-semibold text-green">Email</p>
              <p className="text-charcoal-light">hello@thewealthhabit.com</p>
            </div>
            <div>
              <p className="font-semibold text-green">Response time</p>
              <p className="text-charcoal-light">2&ndash;4 business days</p>
            </div>
          </div>
        </div>

        <div className="rounded-card border border-charcoal/10 bg-white/50 p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
