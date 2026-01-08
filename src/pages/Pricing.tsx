import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Check, X, Zap, Building2, Rocket, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for small businesses and solo marketers",
    price: { monthly: 99, annual: 79 },
    adSpend: "Up to $10K/month",
    features: [
      { name: "1 Ad Account", included: true },
      { name: "Google Ads + Meta", included: true },
      { name: "Weekly AI Audits", included: true },
      { name: "Basic Recommendations", included: true },
      { name: "Email Reports", included: true },
      { name: "Creative Generation", included: false },
      { name: "Dedicated Support", included: false },
      { name: "Custom Integrations", included: false },
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Growth",
    icon: Rocket,
    description: "For growing teams scaling their ad operations",
    price: { monthly: 299, annual: 249 },
    adSpend: "Up to $100K/month",
    features: [
      { name: "5 Ad Accounts", included: true },
      { name: "All Platforms", included: true },
      { name: "Daily AI Audits", included: true },
      { name: "Advanced Recommendations", included: true },
      { name: "Real-time Alerts", included: true },
      { name: "AI Creative Generation", included: true },
      { name: "Priority Support", included: true },
      { name: "Custom Integrations", included: false },
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Building2,
    description: "For agencies and large teams with complex needs",
    price: { monthly: null, annual: null },
    adSpend: "Unlimited",
    features: [
      { name: "Unlimited Accounts", included: true },
      { name: "All Platforms + API", included: true },
      { name: "Real-time AI Audits", included: true },
      { name: "Custom AI Models", included: true },
      { name: "White-label Reports", included: true },
      { name: "Unlimited Creatives", included: true },
      { name: "Dedicated CSM", included: true },
      { name: "Custom Integrations", included: true },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const faqs = [
  {
    question: "What counts as an ad account?",
    answer: "An ad account is a single advertising account on any platform (e.g., one Google Ads account or one Meta Business account). Each connected account counts toward your plan limit.",
  },
  {
    question: "Can I change plans at any time?",
    answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing accordingly.",
  },
  {
    question: "What platforms do you support?",
    answer: "We support Google Ads, Meta (Facebook & Instagram), LinkedIn Ads, TikTok Ads, and emerging AI platforms like ChatGPT Ads and Perplexity. More platforms are added regularly.",
  },
  {
    question: "Is there a free trial?",
    answer: "Yes! All plans come with a 14-day free trial. No credit card required to start. You'll get full access to all features in your chosen plan.",
  },
  {
    question: "How does AI creative generation work?",
    answer: "Our AI analyzes your top-performing ads and generates new creative variations optimized for your target audience. You can generate ad copy, headlines, and get image suggestions.",
  },
  {
    question: "Do you offer discounts for agencies?",
    answer: "Yes! We offer special agency pricing for those managing multiple client accounts. Contact our sales team for custom pricing based on your needs.",
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Simple, Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Invest in{" "}
              <span className="gradient-text">Better Ads</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Choose the plan that fits your ad spend. All plans include a 14-day free trial.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1.5 rounded-full bg-muted">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isAnnual
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                  isAnnual
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Annual
                <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-accent text-accent-foreground border-2 border-primary shadow-xl scale-105"
                    : "bg-card border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <plan.icon className={`w-10 h-10 mx-auto mb-4 ${plan.popular ? "text-primary" : "text-primary"}`} />
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.popular ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>

                  {plan.price.monthly ? (
                    <div className="mb-2">
                      <span className="text-5xl font-display font-bold">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className={plan.popular ? "text-accent-foreground/70" : "text-muted-foreground"}>
                        /month
                      </span>
                    </div>
                  ) : (
                    <div className="text-3xl font-display font-bold mb-2">Custom</div>
                  )}
                  <p className={`text-sm ${plan.popular ? "text-accent-foreground/70" : "text-muted-foreground"}`}>
                    {plan.adSpend} ad spend
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className={`w-5 h-5 flex-shrink-0 ${plan.popular ? "text-accent-foreground/30" : "text-muted-foreground/50"}`} />
                      )}
                      <span className={feature.included ? "" : plan.popular ? "text-accent-foreground/50" : "text-muted-foreground"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.price.monthly ? "/demo" : "/demo"} className="block">
                  <Button
                    variant={plan.popular ? "hero" : "outline"}
                    size="lg"
                    className="w-full gap-2"
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Compare All Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See exactly what's included in each plan
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Growth</th>
                  <th className="text-center py-4 px-4 font-semibold text-foreground">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Ad Accounts", starter: "1", growth: "5", enterprise: "Unlimited" },
                  { feature: "Audit Frequency", starter: "Weekly", growth: "Daily", enterprise: "Real-time" },
                  { feature: "Platforms", starter: "2", growth: "All", enterprise: "All + API" },
                  { feature: "AI Recommendations", starter: "Basic", growth: "Advanced", enterprise: "Custom" },
                  { feature: "Creative Generation", starter: "—", growth: "50/month", enterprise: "Unlimited" },
                  { feature: "Support", starter: "Email", growth: "Priority", enterprise: "Dedicated CSM" },
                  { feature: "Reports", starter: "Standard", growth: "Custom", enterprise: "White-label" },
                ].map((row, index) => (
                  <tr key={row.feature} className="border-b border-border/50">
                    <td className="py-4 px-4 text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.starter}</td>
                    <td className="py-4 px-4 text-center font-medium text-foreground">{row.growth}</td>
                    <td className="py-4 px-4 text-center text-muted-foreground">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-tight">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <HelpCircle className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-3xl md:text-4xl font-display font-bold text-accent-foreground mb-4">
              Start Your Free Trial Today
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              No credit card required. Get full access for 14 days and see how Ryze can transform your ad performance.
            </p>
            <Link to="/demo">
              <Button variant="hero" size="lg" className="gap-2">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
