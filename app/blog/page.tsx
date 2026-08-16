import type { Metadata } from "next";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { posts, categories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "All posts on budgeting, saving, making money online, and side hustles from The Wealth Habit.",
};

export default function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const activeCategory = searchParams.category;
  const filtered = activeCategory
    ? posts.filter((p) => p.category === activeCategory)
    : posts;

  return (
    <section className="container-content py-16">
      <div className="mb-4">
        <p className="eyebrow">The Archive</p>
        <h1 className="mt-3 text-4xl md:text-5xl">All Posts</h1>
        <p className="mt-3 max-w-xl text-charcoal-light">
          Everything on budgeting, saving, and building income on the side — filter by
          topic or browse the whole board.
        </p>
      </div>

      <div className="mb-12 mt-8 flex flex-wrap gap-2.5">
        <Link
          href="/blog"
          className={`tag-pill ${!activeCategory ? "bg-green text-cream" : "hover:bg-gold/20"}`}
        >
          All
        </Link>
        {categories.map((c) => (
          <Link
            key={c}
            href={`/blog?category=${encodeURIComponent(c)}`}
            className={`tag-pill ${activeCategory === c ? "bg-green text-cream" : "hover:bg-gold/20"}`}
          >
            {c}
          </Link>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="masonry">
          {filtered.map((post, i) => (
            <PostCard key={post.slug} post={post} tall={i % 3 === 1} />
          ))}
        </div>
      ) : (
        <p className="text-charcoal-light">No posts in this category yet — check back soon.</p>
      )}
    </section>
  );
}
