import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, 3);

  return (
    <article>
      <div className={`bg-gradient-to-br ${post.cover} py-20`}>
        <div className="container-content">
          <Link href="/blog" className="text-sm font-semibold text-cream/80 hover:text-cream">
            &larr; Back to all posts
          </Link>
          <span className="tag-pill mt-6 inline-flex bg-cream/90 text-green">
            {post.category}
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl text-cream md:text-5xl">{post.title}</h1>
          <div className="mt-5 flex items-center gap-3 text-sm text-cream/80">
            <span>{post.readTime}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </div>

      <div className="container-content grid gap-12 py-16 md:grid-cols-[2fr_1fr]">
        <div className="prose-content max-w-2xl">
          <p className="text-lg font-medium leading-relaxed text-charcoal">{post.excerpt}</p>
          <div className="mt-8 space-y-6">
            {post.content.map((paragraph, i) => (
              <p key={i} className="leading-relaxed text-charcoal-light">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-card border border-charcoal/10 bg-white/50 p-6">
            <p className="eyebrow">Written by</p>
            <p className="mt-3 font-heading text-xl font-semibold text-green">
              The Wealth Habit
            </p>
            <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
              Practical money guidance, one habit at a time.
            </p>
            <Link href="/about" className="mt-4 inline-block text-sm font-semibold text-green hover:text-gold-dark">
              More about me &rarr;
            </Link>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="border-t border-charcoal/10 bg-cream-dark/50 py-16">
          <div className="container-content">
            <p className="eyebrow">Keep reading</p>
            <h2 className="mt-3 text-3xl">More like this</h2>
            <div className="masonry mt-10">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Newsletter />
    </article>
  );
}
