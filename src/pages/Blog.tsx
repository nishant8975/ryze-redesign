import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const categories = ["All", "Strategy", "Optimization", "AI & Automation", "Case Studies", "News"];

const blogPosts = [
  {
    id: "1",
    title: "How AI is Revolutionizing Paid Advertising in 2024",
    excerpt: "Discover the latest AI trends transforming how marketers approach paid advertising across Google, Meta, and emerging platforms.",
    category: "AI & Automation",
    author: "Sarah Chen",
    date: "Jan 5, 2024",
    readTime: "8 min read",
    image: "🤖",
    featured: true,
  },
  {
    id: "2",
    title: "10 Common Google Ads Mistakes That Are Wasting Your Budget",
    excerpt: "Our AI analyzed thousands of accounts and identified the most common budget-wasting mistakes. Here's how to fix them.",
    category: "Optimization",
    author: "Michael Torres",
    date: "Jan 3, 2024",
    readTime: "6 min read",
    image: "💸",
    featured: false,
  },
  {
    id: "3",
    title: "The Complete Guide to ChatGPT Advertising",
    excerpt: "Everything you need to know about running ads on OpenAI's ChatGPT platform, from setup to optimization.",
    category: "Strategy",
    author: "Emily Rodriguez",
    date: "Dec 28, 2023",
    readTime: "12 min read",
    image: "💬",
    featured: false,
  },
  {
    id: "4",
    title: "Case Study: How TechScale Inc. Achieved 340% ROAS Improvement",
    excerpt: "A deep dive into how one of our customers transformed their advertising performance with Ryze.",
    category: "Case Studies",
    author: "David Kim",
    date: "Dec 22, 2023",
    readTime: "10 min read",
    image: "📊",
    featured: false,
  },
  {
    id: "5",
    title: "Meta Ads Best Practices for E-Commerce in 2024",
    excerpt: "Updated strategies for running profitable Facebook and Instagram campaigns for online stores.",
    category: "Strategy",
    author: "Sarah Chen",
    date: "Dec 18, 2023",
    readTime: "9 min read",
    image: "🛍️",
    featured: false,
  },
  {
    id: "6",
    title: "Understanding Attribution in a Multi-Platform World",
    excerpt: "How to properly attribute conversions when running campaigns across multiple advertising platforms.",
    category: "Optimization",
    author: "Michael Torres",
    date: "Dec 15, 2023",
    readTime: "7 min read",
    image: "🎯",
    featured: false,
  },
];

const trendingPosts = blogPosts.slice(0, 3);

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
        
        <div className="relative container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
              Ryze Blog
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70">
              Insights, strategies, and best practices for modern performance marketers.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full">
            <path
              d="M0 80L60 75C120 70 240 60 360 55C480 50 600 50 720 52.5C840 55 960 60 1080 62.5C1200 65 1320 65 1380 65L1440 65V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Posts Column */}
            <div className="lg:col-span-2">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2 mb-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Featured Post */}
              {featuredPost && selectedCategory === "All" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-12"
                >
                  <Link to={`/blog/${featuredPost.id}`}>
                    <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-ryze-purple p-1">
                      <div className="rounded-[22px] bg-card p-8 md:p-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                          Featured
                        </span>
                        <div className="text-6xl mb-6">{featuredPost.image}</div>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>{featuredPost.author}</span>
                          <span>•</span>
                          <span>{featuredPost.date}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {featuredPost.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Posts Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {regularPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link to={`/blog/${post.id}`}>
                      <article className="group h-full rounded-2xl bg-card border border-border p-6 card-hover">
                        <div className="text-4xl mb-4">{post.image}</div>
                        <span className="inline-flex items-center gap-1 text-xs font-medium text-primary mb-3">
                          <Tag className="w-3 h-3" />
                          {post.category}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-12">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="default" size="sm">1</Button>
                <Button variant="outline" size="sm">2</Button>
                <Button variant="outline" size="sm">3</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Trending Posts */}
                <div className="rounded-2xl bg-card border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-6">Trending Posts</h3>
                  <div className="space-y-4">
                    {trendingPosts.map((post, index) => (
                      <Link key={post.id} to={`/blog/${post.id}`}>
                        <div className="flex gap-4 group">
                          <span className="text-2xl font-bold text-muted-foreground/30">
                            0{index + 1}
                          </span>
                          <div>
                            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <span className="text-xs text-muted-foreground">{post.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="rounded-2xl cta-gradient p-6 text-primary-foreground">
                  <h3 className="font-semibold mb-2">Subscribe to Our Newsletter</h3>
                  <p className="text-sm text-primary-foreground/70 mb-4">
                    Get the latest insights delivered to your inbox.
                  </p>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm mb-3"
                  />
                  <Button variant="secondary" className="w-full" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
