import { motion } from "framer-motion";
import { 
  Search, 
  TrendingUp, 
  Palette, 
  BarChart3, 
  Zap, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Smart Account Audits",
    description: "Deep analysis of your ad accounts to identify inefficiencies, wasted spend, and hidden opportunities.",
    color: "text-ryze-teal",
    bgColor: "bg-ryze-teal/10",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "AI-driven bid adjustments, audience refinement, and budget allocation to maximize your ROAS.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Palette,
    title: "Creative Generation",
    description: "Generate high-converting ad creatives, copy variations, and A/B test winners automatically.",
    color: "text-ryze-purple",
    bgColor: "bg-ryze-purple/10",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Unified reporting dashboard with cross-platform insights and predictive performance metrics.",
    color: "text-ryze-gold",
    bgColor: "bg-ryze-gold/10",
  },
  {
    icon: Zap,
    title: "Automated Scaling",
    description: "Identify winning campaigns and automatically scale them while maintaining profitability.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Budget Protection",
    description: "Real-time monitoring and alerts to prevent overspending and catch issues before they cost you.",
    color: "text-ryze-teal",
    bgColor: "bg-ryze-teal/10",
  },
];

export const FeaturesGrid = () => {
  return (
    <section className="section-padding bg-background">
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
            Everything You Need to
            <span className="gradient-text"> Dominate Paid Ads</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From audits to automation, Ryze provides the complete toolkit for managing 
            and scaling your paid advertising campaigns.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 card-hover"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-5`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
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
  );
};
