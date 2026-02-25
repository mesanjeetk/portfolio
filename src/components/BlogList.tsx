import { Calendar, User, ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building High-Performance React Applications",
    excerpt:
      "Learn advanced techniques to optimize your React apps including code splitting, lazy loading, and memoization strategies.",
    author: "Sanjeet Kumar",
    date: "February 2024",
    category: "React",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg",
    slug: "high-performance-react",
  },
  {
    id: 2,
    title: "Modern CSS: Mastering Grid and Flexbox",
    excerpt:
      "A comprehensive guide to CSS Grid and Flexbox layouts. Discover practical examples and real-world use cases.",
    author: "Sanjeet Kumar",
    date: "January 2024",
    category: "CSS",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg",
    slug: "modern-css-guide",
  },
  {
    id: 3,
    title: "Database Design Best Practices",
    excerpt:
      "Explore normalization, indexing strategies, and query optimization to build efficient and scalable databases.",
    author: "Sanjeet Kumar",
    date: "December 2023",
    category: "Database",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/8439048/pexels-photo-8439048.jpeg",
    slug: "database-best-practices",
  },
  {
    id: 4,
    title: "TypeScript Tips for Better Code Quality",
    excerpt:
      "Discover advanced TypeScript features that can improve your code quality and make debugging easier.",
    author: "Sanjeet Kumar",
    date: "November 2023",
    category: "TypeScript",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3945696/pexels-photo-3945696.jpeg",
    slug: "typescript-tips",
  },
  {
    id: 5,
    title: "Web Performance Optimization Guide",
    excerpt:
      "Master techniques to improve Core Web Vitals, reduce bundle size, and enhance user experience.",
    author: "Sanjeet Kumar",
    date: "October 2023",
    category: "Performance",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/8606991/pexels-photo-8606991.jpeg",
    slug: "web-performance",
  },
  {
    id: 6,
    title: "Building API with Node.js and Express",
    excerpt:
      "Learn how to build scalable REST APIs with proper error handling, validation, and authentication.",
    author: "Sanjeet Kumar",
    date: "September 2023",
    category: "Backend",
    readTime: "11 min read",
    image: "https://images.pexels.com/photos/8239266/pexels-photo-8239266.jpeg",
    slug: "nodejs-api-guide",
  },
];

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
