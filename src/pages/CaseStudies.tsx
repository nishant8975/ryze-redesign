import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, DollarSign, Target, Users, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const caseStudies = [
  {
    id: "ecommerce-brand",
    company: "StyleHouse",
    industry: "E-commerce Fashion",
    logo: "SH",
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800",
    headline: "3.2x ROAS Improvement in 60 Days",
    summary: "How StyleHouse transformed their ad performance and scaled profitably with Ryze AI optimization.",
    challenge: "StyleHouse was spending $150K/month on Meta and Google Ads but struggling with inconsistent ROAS and high customer acquisition costs.",
    solution: "Ryze AI analyzed their entire ad account, identified $40K in wasted spend, and restructured campaigns with AI-optimized creative and bidding.",
    results: [
      { metric: "ROAS", before: "1.8x", after: "5.7x", change: "+217%" },
      { metric: "CPA", before: "$68", after: "$29", change: "-57%" },
      { metric: "Revenue", before: "$270K", after: "$855K", change: "+217%" },
    ],
    testimonial: {
      quote: "Ryze completely transformed our ad strategy. We went from barely breaking even to having our best quarter ever.",
      author: "Sarah Chen",
      role: "Head of Marketing",
    },
    platforms: ["Meta", "Google Ads"],
    color: "from-ryze-coral to-orange-400",
  },
  {
    id: "saas-startup",
    company: "CloudFlow",
    industry: "B2B SaaS",
    logo: "CF",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    headline: "68% Reduction in Customer Acquisition Cost",
    summary: "CloudFlow leveraged Ryze to optimize their B2B lead generation across Google and LinkedIn.",
    challenge: "As a Series A startup, CloudFlow needed to prove efficient growth to investors. Their CAC was too high at $340 per qualified lead.",
    solution: "Ryze's AI audited their campaigns, identified underperforming ad groups, and suggested new keyword strategies based on competitor analysis.",
    results: [
      { metric: "CAC", before: "$340", after: "$108", change: "-68%" },
      { metric: "Qualified Leads", before: "145/mo", after: "420/mo", change: "+190%" },
      { metric: "Pipeline Value", before: "$580K", after: "$1.7M", change: "+193%" },
    ],
    testimonial: {
      quote: "The insights Ryze provided in the first week alone saved us $20K. The ROI on this tool is insane.",
      author: "Marcus Rivera",
      role: "VP of Growth",
    },
    platforms: ["Google Ads", "LinkedIn"],
    color: "from-ryze-teal to-emerald-400",
  },
  {
    id: "agency-scale",
    company: "Momentum Digital",
    industry: "Performance Agency",
    logo: "MD",
    heroImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    headline: "Managing 50+ Client Accounts with AI",
    summary: "How a boutique agency scaled their client base 3x without adding headcount using Ryze.",
    challenge: "Momentum Digital was maxed out at 18 clients with their team of 4. They needed to scale without sacrificing quality or burning out.",
    solution: "Ryze automated their audit process, creative generation, and reporting—giving each team member the capacity of 3 people.",
    results: [
      { metric: "Clients Managed", before: "18", after: "56", change: "+211%" },
      { metric: "Avg Client ROAS", before: "2.4x", after: "4.1x", change: "+71%" },
      { metric: "Time Saved/Week", before: "0", after: "40hrs", change: "Per person" },
    ],
    testimonial: {
      quote: "Ryze is like having a senior media buyer for every account. We've tripled our capacity while improving results.",
      author: "Jessica Park",
      role: "Founder & CEO",
    },
    platforms: ["Meta", "Google Ads", "TikTok"],
    color: "from-ryze-purple to-violet-400",
  },
];

const statsOverview = [
  { icon: TrendingUp, label: "Average ROAS Lift", value: "2.4x" },
  { icon: DollarSign, label: "Ad Spend Optimized", value: "$50M+" },
  { icon: Target, label: "Campaigns Improved", value: "10,000+" },
  { icon: Users, label: "Happy Customers", value: "500+" },
];

export default function CaseStudies() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Success Stories
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Real Results from{" "}
              <span className="gradient-text">Real Brands</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              See how leading companies are transforming their ad performance with Ryze AI. 
              From startups to enterprises, our customers are achieving record-breaking results.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          >
            {statsOverview.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding">
        <div className="container-wide space-y-20">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center`}>
                    <span className="text-white font-display font-bold">{study.logo}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{study.company}</h3>
                    <p className="text-sm text-muted-foreground">{study.industry}</p>
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {study.headline}
                </h2>
                <p className="text-muted-foreground mb-6">{study.summary}</p>

                {/* Results Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result) => (
                    <div key={result.metric} className="p-4 rounded-xl bg-muted/50 text-center">
                      <div className="text-xs text-muted-foreground mb-1">{result.metric}</div>
                      <div className="text-lg font-bold text-foreground">{result.after}</div>
                      <div className="text-xs font-medium text-primary">{result.change}</div>
                    </div>
                  ))}
                </div>

                {/* Platforms */}
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-sm text-muted-foreground">Platforms:</span>
                  {study.platforms.map((platform) => (
                    <span
                      key={platform}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="border-l-4 border-primary pl-4 mb-6">
                  <p className="text-foreground italic mb-2">"{study.testimonial.quote}"</p>
                  <footer className="text-sm text-muted-foreground">
                    — {study.testimonial.author}, {study.testimonial.role}
                  </footer>
                </blockquote>
              </div>

              {/* Image */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={study.heroImage}
                    alt={study.company}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center gap-4">
                      <BarChart3 className="w-10 h-10 text-white" />
                      <div>
                        <div className="text-white font-semibold">Full Case Study</div>
                        <div className="text-white/70 text-sm">See the complete breakdown</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-accent to-accent/90">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join 500+ companies already using Ryze to transform their ad performance. 
              Start your free audit today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo">
                <Button variant="hero" size="lg" className="gap-2">
                  Book a Demo <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="hero-outline" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
                  Explore Features
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
