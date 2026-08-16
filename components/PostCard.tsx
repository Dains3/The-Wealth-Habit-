import Link from "next/link";
import type { Post } from "@/lib/posts";

export default function PostCard({ post, tall = false }: { post: Post; tall?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group masonry-item block overflow-hidden rounded-card border border-charcoal/10 bg-white/60 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
    >
      <div
        className={`relative flex items-end bg-gradient-to-br ${post.cover} ${
          tall ? "h-64" : "h-44"
        } p-5`}
      >
        <span className="tag-pill bg-cream/90 text-green">{post.category}</span>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold leading-snug text-green group-hover:text-green-light">
          {post.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-light">{post.excerpt}</p>
        <div className="mt-4 flex items-center gap-3 text-xs font-medium text-charcoal/50">
          <span>{post.readTime}</span>
          <span aria-hidden="true">&middot;</span>
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
      </div>
    </Link>
  );
}
