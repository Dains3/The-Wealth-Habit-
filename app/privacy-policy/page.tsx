import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Wealth Habit collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="container-content py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Legal</p>
        <h1 className="mt-3 text-4xl md:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-charcoal-light">Last updated: August 16, 2026</p>

        <div className="prose-content mt-10 space-y-8">
          <div>
            <h2 className="text-2xl">1. Overview</h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              The Wealth Habit (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
              respects your privacy. This policy explains what information we collect
              when you visit thewealthhabit.com, how we use it, and the choices you
              have. By using this site, you agree to the practices described here.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">2. Information We Collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-charcoal-light">
              <li>
                <strong className="text-charcoal">Contact form submissions:</strong> your
                name, email address, and message when you use the contact form.
              </li>
              <li>
                <strong className="text-charcoal">Newsletter sign-ups:</strong> your
                email address when you subscribe.
              </li>
              <li>
                <strong className="text-charcoal">Usage data:</strong> standard analytics
                information such as pages visited, browser type, and approximate
                location, collected automatically via cookies or similar technologies.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl">3. How We Use Your Information</h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              We use the information we collect to respond to your messages, send the
              newsletter you signed up for, understand how the site is used so we can
              improve it, and maintain the security of the site. We do not sell your
              personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">4. Cookies</h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              This site may use cookies and similar technologies for analytics and to
              remember your preferences. You can disable cookies through your browser
              settings, though some features of the site may not function as intended.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">5. Third-Party Services</h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              We may use third-party services for email delivery, analytics, or
              newsletter management. These providers process data on our behalf and
              are contractually required to protect it in accordance with this policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">6. Your Choices</h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              You can unsubscribe from the newsletter at any time using the link in
              any email we send. You may also contact us to request access to,
              correction of, or deletion of your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">7. Children&rsquo;s Privacy</h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              This site is not directed at children under 13, and we do not knowingly
              collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">8. Changes to This Policy</h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              We may update this policy from time to time. Changes will be posted on
              this page with an updated revision date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl">9. Contact Us</h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              Questions about this policy can be sent to hello@thewealthhabit.com or
              through our{" "}
              <a href="/contact" className="font-semibold text-green hover:text-gold-dark">
                contact page
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
