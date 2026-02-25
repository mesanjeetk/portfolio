import { useParams, useNavigate, Link } from "react-router-dom";
import { Calendar, User, BookOpen, ArrowLeft, Twitter, Linkedin, Copy } from "lucide-react";
import { getBlogBySlug, blogPosts } from "../data/blogData";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/cjs/styles/prism";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const blog = getBlogBySlug(slug || "");
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-outfit font-black">Blog Post Not Found</h1>
          <p className="text-slate-400 text-lg">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/blog")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold rounded-lg hover:scale-105 transition-transform"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter((post) => post.category === blog.category && post.id !== blog.id)
    .slice(0, 3);

  // Get next and previous posts
  const currentIndex = blogPosts.findIndex((p) => p.id === blog.id);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleShare = (platform: "twitter" | "linkedin") => {
    const text = `Check out this article: ${blog.title}`;
    const url = window.location.href;

    if (platform === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
        "_blank"
      );
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank"
      );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header Navigation */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 pt-12 pb-8">
        <button
          onClick={() => navigate("/blog")}
          className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-bold mb-8"
        >
          <ArrowLeft size={16} />
          Back to Articles
        </button>
      </div>

      {/* Hero Image */}
      <div className="h-96 md:h-[500px] w-full overflow-hidden relative">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-10 py-16 lg:py-20">
        {/* Meta Information */}
        <div className="space-y-6 mb-12">
          {/* Category */}
          <div className="flex items-center gap-4">
            <span className="px-4 py-2 rounded-full bg-accent text-white text-sm font-bold uppercase tracking-wider">
              {blog.category}
            </span>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full border border-white/10 text-xs text-slate-400 hover:border-accent hover:text-accent transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-black leading-tight">
            {blog.title}
          </h1>

          {/* Author, Date, Read Time */}
          <div className="flex flex-wrap gap-6 text-sm text-slate-400 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{blog.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={16} />
              <span>{blog.readTime}</span>
            </div>
          </div>
        </div>

        {/* Share Buttons */}
        <div className="flex items-center gap-4 mb-12 p-6 bg-white/5 rounded-lg border border-white/10">
          <span className="text-sm font-bold text-slate-400">Share:</span>
          <button
            onClick={() => handleShare("twitter")}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors group"
            title="Share on Twitter"
          >
            <Twitter size={20} className="group-hover:text-blue-400" />
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors group"
            title="Share on LinkedIn"
          >
            <Linkedin size={20} className="group-hover:text-blue-500" />
          </button>
          <button
            onClick={handleCopyLink}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors group"
            title="Copy link"
          >
            <Copy size={20} className="group-hover:text-accent" />
            {copySuccess && (
              <span className="absolute ml-2 text-xs text-accent font-bold">Copied!</span>
            )}
          </button>
        </div>

        {/* Blog Content */}
        <div className="prose prose-invert max-w-none mb-16">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => (
                <h2 className="text-4xl font-outfit font-black text-white mt-12 mb-4" {...props} />
              ),
              h2: ({ node, ...props }) => (
                <h3 className="text-2xl font-outfit font-black text-white mt-8 mb-4" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h4 className="text-xl font-outfit font-bold text-white mt-6 mb-3" {...props} />
              ),
              h4: ({ node, ...props }) => (
                <h5 className="text-lg font-outfit font-bold text-white mt-4 mb-2" {...props} />
              ),
              p: ({ node, ...props }) => (
                <p className="text-slate-300 leading-relaxed mb-4" {...props} />
              ),
              strong: ({ node, ...props }) => (
                <strong className="text-accent font-bold" {...props} />
              ),
              em: ({ node, ...props }) => (
                <em className="text-slate-200 italic" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul className="list-disc list-inside space-y-2 my-4 text-slate-300" {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol className="list-decimal list-inside space-y-2 my-4 text-slate-300" {...props} />
              ),
              li: ({ node, ...props }) => (
                <li className="text-slate-300 mb-2" {...props} />
              ),
              code: ({ node, inline, className, children, ...props }: any) => {
                const match = /language-(\w+)/.exec(className || "");
                const lang = match ? match[1] : "";

                if (inline) {
                  return (
                    <code className="bg-slate-800 text-accent px-2 py-1 rounded text-sm font-mono" {...props}>
                      {children}
                    </code>
                  );
                }

                return (
                  <SyntaxHighlighter
                    language={lang || "javascript"}
                    style={nightOwl}
                    className="rounded-lg my-6 border border-white/10"
                    wrapLines
                    wrapLongLines
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                );
              },
              pre: ({ node, ...props }) => (
                <pre className="my-6 rounded-lg border border-white/10" {...props} />
              ),
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-accent pl-4 py-2 my-4 text-slate-400 italic"
                  {...props}
                />
              ),
              table: ({ node, ...props }) => (
                <div className="overflow-x-auto my-6">
                  <table className="w-full border-collapse border border-white/10" {...props} />
                </div>
              ),
              thead: ({ node, ...props }) => (
                <thead className="bg-white/5" {...props} />
              ),
              th: ({ node, ...props }) => (
                <th className="border border-white/10 px-4 py-2 text-accent font-bold text-left" {...props} />
              ),
              td: ({ node, ...props }) => (
                <td className="border border-white/10 px-4 py-2 text-slate-300" {...props} />
              ),
              a: ({ node, ...props }) => (
                <a className="text-accent hover:text-white transition-colors underline" target="_blank" rel="noopener noreferrer" {...props} />
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </div>

        {/* Author Bio */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-16">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-purple-600 flex-shrink-0"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">{blog.author}</h3>
              <p className="text-slate-400">
                Full-stack developer passionate about web performance, modern JavaScript,
                and building scalable applications.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {previousPost && (
            <Link
              to={`/blog/${previousPost.slug}`}
              className="group p-6 border border-white/10 rounded-xl hover:border-accent/30 hover:bg-white/5 transition-all"
            >
              <span className="text-xs uppercase tracking-widest text-slate-500">
                ← Previous Article
              </span>
              <h3 className="text-lg font-bold group-hover:text-accent transition-colors mt-2">
                {previousPost.title}
              </h3>
            </Link>
          )}
          {nextPost && (
            <Link
              to={`/blog/${nextPost.slug}`}
              className="group p-6 border border-white/10 rounded-xl hover:border-accent/30 hover:bg-white/5 transition-all md:ml-auto"
            >
              <span className="text-xs uppercase tracking-widest text-slate-500">
                Next Article →
              </span>
              <h3 className="text-lg font-bold group-hover:text-accent transition-colors mt-2">
                {nextPost.title}
              </h3>
            </Link>
          )}
        </div>

        {/* Related Articles */}
        {relatedPosts.length > 0 && (
          <div className="space-y-8 border-t border-white/10 pt-16">
            <h2 className="text-3xl font-outfit font-black">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group glass-panel rounded-xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all hover:translate-y-[-4px]"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs uppercase tracking-widest text-accent font-bold">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold mt-3 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-2">{post.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* CTA Section */}
      <section className="bg-white/5 border-t border-white/10 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-outfit font-black">
            Want to stay updated?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Subscribe to receive the latest articles and insights delivered to your inbox.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-accent text-white font-bold rounded-lg hover:scale-105 transition-transform"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
