import Link from "next/link";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import { posts, categories } from "@/lib/posts";

export default function HomePage() {
  const featured = posts.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-charcoal/10">
        <div className="container-content grid gap-12 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div className="flex flex-col justify-center">
            <p className="eyebrow">Budgeting &middot; Saving &middot; Side Income</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-green md:text-6xl">
              Small money habits.
              <br />
              <span className="text-gold-dark">Compounding results.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal-light">
              The Wealth Habit is a quiet corner of the internet for people who want to
              budget better, save on purpose, and build income on the side — without the
              guilt-trips or get-rich-quick noise.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/blog" className="btn-primary">
                Start Reading
              </Link>
              <Link href="/about" className="btn-secondary">
                Meet the Author
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 grid grid-cols-2 gap-4">
              <div className="mt-10 h-64 rounded-card bg-gradient-to-br from-green to-green-light shadow-card" />
              <div className="h-48 rounded-card bg-gradient-to-br from-gold to-gold-light shadow-card" />
              <div className="h-48 rounded-card bg-gradient-to-br from-charcoal to-green shadow-card" />
              <div className="mt-[-2rem] h-64 rounded-card bg-gradient-to-br from-gold-dark to-gold shadow-card" />
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="border-b border-charcoal/10 bg-cream-dark/60">
        <div className="container-content flex flex-wrap items-center justify-center gap-3 py-8">
          {categories.map((c) => (
            <Link key={c} href={`/blog?category=${encodeURIComponent(c)}`} className="tag-pill hover:bg-gold/20">
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured posts — Pinterest-style masonry */}
      <section className="container-content py-20">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow">From the blog</p>
            <h2 className="mt-3 text-3xl md:text-4xl">Recently pinned to the habit board</h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-green hover:text-gold-dark">
            View all posts &rarr;
          </Link>
        </div>

        <div className="masonry">
          {featured.map((post, i) => (
            <PostCard key={post.slug} post={post} tall={i % 3 === 0} />
          ))}
        </div>
      </section>

      <Newsletter />

      {/* Why this blog */}
      <section className="container-content grid gap-10 py-20 md:grid-cols-3">
        {[
          {
            title: "No guilt, ever",
            body: "Money advice that meets you where you are — not where an influencer thinks you should be.",
          },
          {
            title: "Actually actionable",
            body: "Every post ends with something you can do today, not just something to think about.",
          },
          {
            title: "Built on habits",
            body: "Real financial change comes from small, repeatable systems — not one big overhaul.",
          },
        ].map((item) => (
          <div key={item.title} className="rounded-card border border-charcoal/10 bg-white/50 p-7">
            <div className="mb-4 h-1 w-10 rounded-full bg-gold" />
            <h3 className="text-xl font-semibold text-green">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{item.body}</p>
          </div>
        ))}
      </section>
    </>
  );
}
