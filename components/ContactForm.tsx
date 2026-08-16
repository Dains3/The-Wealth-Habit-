"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-card border border-gold/40 bg-gold/10 p-6 text-green">
        <p className="font-heading text-xl font-semibold">Message sent.</p>
        <p className="mt-2 text-sm text-charcoal-light">
          Thanks for reaching out — I read every message and reply within a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-card border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-card border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-charcoal">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="w-full rounded-card border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="w-full resize-none rounded-card border border-charcoal/15 bg-white px-4 py-3 text-sm text-charcoal focus:border-gold focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-700">
          Something went wrong sending your message. Please try again in a moment.
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-fit disabled:opacity-60">
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
