import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Search, 
  TrendingUp, 
  Palette, 
  BarChart3, 
  Zap, 
  Shield,
  ArrowRight,
  Check,
  Layers,
  Target,
  RefreshCw,
  Globe
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const mainFeatures = [
  {
    icon: Search,
    title: "Intelligent Account Audits",
    description: "Our AI performs deep analysis of your ad accounts, examining every campaign, ad group, and keyword to identify inefficiencies and optimization opportunities.",
    benefits: [
      "Identify wasted spend instantly",
      "Discover hidden opportunities",
      "Get actionable recommendations",
      "Automated health scoring",
    ],
    color: "from-ryze-teal to-ryze-purple",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuous AI-driven optimization that adjusts bids, refines audiences, and allocates budgets to maximize your return on ad spend.",
    benefits: [
      "Real-time bid adjustments",
      "Audience refinement",
      "Budget optimization",
      "Predictive performance",
    ],
    color: "from-primary to-ryze-coral-light",
  },
  {
    icon: Palette,
    title: "AI Creative Generation",
    description: "Generate high-converting ad creatives, compelling copy variations, and A/B test winners automatically with our advanced AI models.",
    benefits: [
      "Generate ad copy at scale",
      "Create image variations",
      "A/B testing automation",
      "Brand voice consistency",
    ],
    color: "from-ryze-purple to-primary",
  },
  {
    icon: BarChart3,
    title: "Unified Analytics Dashboard",
    description: "One dashboard to rule them all. Get cross-platform insights, predictive metrics, and custom reports all in one place.",
    benefits: [
      "Cross-platform reporting",
      "Custom dashboards",
      "Predictive analytics",
      "Automated reports",
    ],
    color: "from-ryze-gold to-primary",
  },
];

const additionalFeatures = [
  {
    icon: Zap,
    title: "Automated Scaling",
    description: "Automatically identify and scale winning campaigns while maintaining profitability targets.",
  },
  {
    icon: Shield,
    title: "Budget Protection",
    description: "Real-time monitoring and alerts prevent overspending and catch issues instantly.",
  },
  {
    icon: Layers,
    title: "Multi-Platform Support",
    description: "Manage Google Ads, Meta, ChatGPT, and Perplexity from a single dashboard.",
  },
  {
    icon: Target,
    title: "Audience Intelligence",
    description: "AI-powered audience insights and lookalike recommendations for better targeting.",
  },
  {
    icon: RefreshCw,
    title: "24/7 Optimization",
    description: "Your campaigns are continuously monitored and optimized around the clock.",
  },
  {
    icon: Globe,
    title: "API & Integrations",
    description: "Connect with your existing tools via our robust API and integration ecosystem.",
  },
];

const Features = () => {
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
              Powerful Features for
              <span className="block gradient-text">Powerful Results</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8">
              Everything you need to manage, optimize, and scale your paid advertising 
              campaigns across all major platforms.
            </p>
            <Link to="/demo">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Main Features */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}>
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className={`aspect-square rounded-3xl bg-gradient-to-br ${feature.color} p-1`}>
                    <div className="w-full h-full rounded-[22px] bg-card flex items-center justify-center">
                      <div className="text-center p-8">
                        <feature.icon className="w-24 h-24 text-muted-foreground/30 mx-auto mb-4" />
                        <p className="text-muted-foreground text-sm">Dashboard Preview</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              And So Much More
            </h2>
            <p className="text-lg text-muted-foreground">
              Every feature designed to save you time and maximize your ad performance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-background">
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
                Ready to See These Features in Action?
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                Book a personalized demo and see exactly how Ryze can transform your ad performance.
              </p>
              <Link to="/demo">
                <Button variant="hero" size="xl" className="group">
                  Book Your Demo
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

export default Features;
