import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Users, Lightbulb, Award } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "We measure our success by the success of our customers. Every feature we build is designed to deliver measurable ROI.",
  },
  {
    icon: Users,
    title: "Customer-First",
    description: "We listen to our customers and build what they need. Our product roadmap is shaped by real feedback from real marketers.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We're constantly pushing the boundaries of what AI can do for advertising. Innovation is in our DNA.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We hold ourselves to the highest standards. From code quality to customer support, we strive for excellence in everything.",
  },
];

const audiences = [
  {
    title: "Marketing Agencies",
    description: "Manage multiple client accounts efficiently, deliver consistent results, and scale your operations without adding headcount.",
    icon: "🏢",
  },
  {
    title: "E-Commerce Brands",
    description: "Maximize your ROAS across Google Shopping, Meta catalogs, and emerging AI platforms with intelligent automation.",
    icon: "🛒",
  },
  {
    title: "Performance Marketers",
    description: "Take your campaigns to the next level with AI-powered optimization that works 24/7 while you focus on strategy.",
    icon: "📈",
  },
  {
    title: "SaaS Companies",
    description: "Optimize your customer acquisition costs and scale your growth campaigns with precision targeting.",
    icon: "💻",
  },
];

const pressLogos = [
  "TechCrunch",
  "Forbes",
  "VentureBeat",
  "AdWeek",
  "MarTech",
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
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
              We're Building the Future of
              <span className="block gradient-text">Advertising</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70">
              Ryze was founded with a simple mission: make AI work for advertisers, 
              not the other way around.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that AI should amplify human creativity and strategy, not replace it. 
                Our mission is to give every advertiser—from solo entrepreneurs to enterprise teams—
                access to the same sophisticated optimization capabilities that were once reserved 
                for the world's largest brands.
              </p>
              <p className="text-lg text-muted-foreground">
                By automating the tedious parts of ad management and providing intelligent insights, 
                we free marketers to focus on what they do best: creating compelling campaigns that 
                connect with audiences and drive business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-ryze-purple p-1">
                <div className="w-full h-full rounded-[22px] bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl mb-4">🚀</div>
                    <p className="text-muted-foreground">Empowering advertisers worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Story */}
      <section className="section-padding bg-muted/50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p>
                Ryze was born out of frustration. Our founders, former performance marketers and 
                machine learning engineers, spent years watching advertisers struggle with the 
                same problems: wasted ad spend, manual optimization tasks, and a lack of 
                actionable insights.
              </p>
              <p>
                In 2023, we set out to solve these problems once and for all. We combined our 
                deep expertise in digital advertising with cutting-edge AI to build a platform 
                that truly understands the needs of modern marketers.
              </p>
              <p>
                Today, Ryze helps thousands of advertisers manage millions of dollars in ad 
                spend across Google, Meta, ChatGPT, and Perplexity. We're just getting started.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border card-hover text-center"
              >
                <div className="w-14 h-14 rounded-xl cta-gradient flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Ryze is built for advertisers who demand results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="text-4xl mb-4">{audience.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {audience.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="py-16 bg-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
              As featured in
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {pressLogos.map((logo) => (
                <span
                  key={logo}
                  className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
                >
                  {logo}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/50">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
          >
            <div className="absolute inset-0 hero-gradient" />
            <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
            
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
                Join Us on Our Mission
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                Ready to transform your advertising performance? Let's talk about how Ryze can help.
              </p>
              <Link to="/demo">
                <Button variant="hero" size="xl" className="group">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
