import { motion } from "framer-motion";

const metrics = [
  {
    value: "340%",
    label: "Average ROAS Improvement",
    description: "Our users see dramatic returns on their ad spend",
  },
  {
    value: "47%",
    label: "Lower CPC",
    description: "Smarter bidding means lower cost per click",
  },
  {
    value: "2.8x",
    label: "Better CTR",
    description: "AI-generated creatives drive more engagement",
  },
  {
    value: "$2.1M",
    label: "Wasted Spend Saved",
    description: "Average savings per enterprise customer annually",
  },
];

export const MetricsSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />

      <div className="relative container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Real metrics from real customers using Ryze
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text mb-2">
                {metric.value}
              </p>
              <p className="text-primary-foreground font-semibold mb-1">
                {metric.label}
              </p>
              <p className="text-sm text-primary-foreground/60">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
