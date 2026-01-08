import { motion } from "framer-motion";
import { Link2, Brain, Rocket, RefreshCw } from "lucide-react";

const steps = [
  {
    icon: Link2,
    step: "01",
    title: "Connect Your Accounts",
    description: "Securely link your Google Ads, Meta, ChatGPT, and Perplexity ad accounts in minutes.",
  },
  {
    icon: Brain,
    step: "02",
    title: "AI Analysis",
    description: "Our AI audits your campaigns, identifying wasted spend and optimization opportunities.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Implement Changes",
    description: "Review AI recommendations and apply optimizations with one click.",
  },
  {
    icon: RefreshCw,
    step: "04",
    title: "Continuous Optimization",
    description: "Ryze monitors performance 24/7, automatically adjusting to maximize your ROI.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            How Ryze Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in minutes and see results within days. Our simple 4-step process 
            transforms how you manage paid advertising.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-primary/10" />
              )}
              
              <div className="text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl cta-gradient flex items-center justify-center shadow-glow">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
