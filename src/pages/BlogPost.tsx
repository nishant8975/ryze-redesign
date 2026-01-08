import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2, Twitter, Linkedin, Facebook, Copy } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

// Mock blog post data
const blogPostData = {
  id: "1",
  title: "How AI is Revolutionizing Paid Advertising in 2024",
  excerpt: "Discover the latest AI trends transforming how marketers approach paid advertising across Google, Meta, and emerging platforms.",
  category: "AI & Automation",
  author: {
    name: "Sarah Chen",
    role: "VP of Marketing",
    avatar: "SC",
  },
  date: "January 5, 2024",
  readTime: "8 min read",
  image: "🤖",
  content: `
The landscape of paid advertising is undergoing a massive transformation, driven by advances in artificial intelligence. What was once the domain of massive teams and unlimited budgets is now accessible to advertisers of all sizes.

## The Rise of AI-Powered Optimization

Traditional advertising optimization relied heavily on human intuition and manual testing. Marketers would create campaigns, monitor performance, and make adjustments based on their experience and gut feelings. While this approach worked, it was time-consuming and often missed opportunities.

Today, AI systems can analyze millions of data points in real-time, identifying patterns and opportunities that would be impossible for humans to detect. These systems can:

- **Predict performance** before campaigns launch
- **Optimize bids** in real-time across thousands of keywords
- **Identify audience segments** with the highest conversion potential
- **Generate and test creative variations** at scale

## Key AI Trends for 2024

### 1. Generative AI for Creative Production

The ability to generate ad copy, images, and even video content using AI is no longer science fiction. Tools like Ryze can now create compelling ad creatives that rival human-created content, allowing advertisers to test more variations and find winners faster.

### 2. Cross-Platform Intelligence

Modern AI systems don't just optimize individual platforms—they understand how campaigns across Google, Meta, ChatGPT, and Perplexity work together. This holistic view enables better budget allocation and more consistent messaging.

### 3. Predictive Analytics

Instead of reacting to performance data, AI can now predict future performance and proactively make adjustments. This means catching problems before they impact your bottom line and capitalizing on opportunities before competitors.

## What This Means for Marketers

The role of the marketer is evolving. Rather than spending hours on manual optimization tasks, marketers can now focus on:

- **Strategy development** — defining goals and target audiences
- **Creative direction** — guiding the AI's creative output
- **Performance analysis** — understanding insights and making strategic decisions
- **Customer experience** — ensuring ads align with the overall brand experience

## Getting Started with AI Advertising

If you're new to AI-powered advertising, here are some steps to get started:

1. **Audit your current campaigns** — Understand where you're wasting spend and missing opportunities
2. **Start with automation basics** — Use platform-native automation features before adding third-party tools
3. **Invest in data quality** — AI is only as good as the data it learns from
4. **Embrace experimentation** — Let the AI test ideas you might not have considered

## The Future is Now

The advertisers who embrace AI today will have a significant advantage over those who wait. The technology is mature enough to deliver real results, and the tools are accessible enough for teams of any size.

At Ryze, we're committed to making AI-powered advertising accessible to everyone. Our platform handles the complexity so you can focus on what matters: growing your business.

---

*Ready to see how AI can transform your advertising? [Book a demo](/demo) and let us show you what's possible.*
  `,
};

const relatedPosts = [
  {
    id: "2",
    title: "10 Common Google Ads Mistakes That Are Wasting Your Budget",
    category: "Optimization",
    image: "💸",
  },
  {
    id: "3",
    title: "The Complete Guide to ChatGPT Advertising",
    category: "Strategy",
    image: "💬",
  },
  {
    id: "4",
    title: "Case Study: How TechScale Inc. Achieved 340% ROAS Improvement",
    category: "Case Studies",
    image: "📊",
  },
];

const BlogPost = () => {
  const { id } = useParams();

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blogPostData.title;
    
    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    };

    if (platform === "copy") {
      navigator.clipboard.writeText(url);
      return;
    }

    window.open(shareUrls[platform], "_blank", "width=600,height=400");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
        
        <div className="relative container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <span className="inline-block px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
              {blogPostData.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              {blogPostData.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-primary-foreground/70">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full cta-gradient flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {blogPostData.author.avatar}
                </div>
                <div>
                  <p className="text-primary-foreground font-medium">{blogPostData.author.name}</p>
                  <p className="text-sm">{blogPostData.author.role}</p>
                </div>
              </div>
              <span>{blogPostData.date}</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {blogPostData.readTime}
              </span>
            </div>
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

      {/* Article Content */}
      <article className="section-padding bg-background">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Cover Image */}
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary to-ryze-purple mb-12 flex items-center justify-center">
              <span className="text-8xl">{blogPostData.image}</span>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {blogPostData.content.split("\n").map((paragraph, index) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-display font-bold text-foreground mt-12 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={index} className="text-xl md:text-2xl font-display font-bold text-foreground mt-8 mb-4">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("- **")) {
                  const text = paragraph.replace("- **", "").replace("**", ":");
                  const [bold, rest] = text.split(":");
                  return (
                    <li key={index} className="text-muted-foreground mb-2 ml-4">
                      <strong className="text-foreground">{bold}:</strong>{rest}
                    </li>
                  );
                }
                if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ") || paragraph.startsWith("3. ") || paragraph.startsWith("4. ")) {
                  return (
                    <li key={index} className="text-muted-foreground mb-2 ml-4 list-decimal">
                      {paragraph.substring(3)}
                    </li>
                  );
                }
                if (paragraph.startsWith("---")) {
                  return <hr key={index} className="my-8 border-border" />;
                }
                if (paragraph.startsWith("*") && paragraph.endsWith("*")) {
                  return (
                    <p key={index} className="text-muted-foreground italic my-4">
                      {paragraph.replace(/\*/g, "")}
                    </p>
                  );
                }
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-muted-foreground my-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {/* Share Buttons */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share this article
                </span>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleShare("twitter")}
                    className="rounded-full"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleShare("linkedin")}
                    className="rounded-full"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleShare("facebook")}
                    className="rounded-full"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleShare("copy")}
                    className="rounded-full"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/blog/${post.id}`}>
                  <article className="group h-full rounded-2xl bg-card border border-border p-6 card-hover">
                    <div className="text-4xl mb-4">{post.image}</div>
                    <span className="text-xs font-medium text-primary mb-2 block">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPost;
