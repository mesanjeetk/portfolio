import { Calendar, User, ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";

export const BlogList = () => {
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  return (
    <section className="w-full py-24 px-6 md:px-10 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-accent font-outfit font-bold tracking-widest text-sm uppercase">
            INSIGHTS
          </h2>
          <h1 className="text-4xl md:text-6xl font-outfit font-black leading-tight">
            LATEST <span className="text-gradient">ARTICLES</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Thoughts on web development, design, and building better products.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest border border-white/10 hover:border-accent hover:text-accent transition-colors"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {blogPosts.map((post, idx) => (
            <article
              key={post.id}
              className={`group relative glass-panel rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 hover:translate-y-[-8px] animate-slideUp`}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 space-y-4">
                <h3 className="text-xl md:text-2xl font-outfit font-black text-white group-hover:text-accent transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-3 text-xs text-slate-500 pt-4 border-t border-white/5">
                  <div className="flex items-center gap-1">
                    <User size={12} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={12} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={12} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More */}
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-accent font-bold hover:gap-3 transition-all group mt-4"
                >
                  Read Article
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <button className="px-8 py-4 border border-accent text-accent rounded-2xl font-bold hover:bg-accent hover:text-white transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </section>
  );
};
