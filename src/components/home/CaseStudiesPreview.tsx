import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    company: "E-Commerce Brand",
    industry: "Fashion & Apparel",
    result: "312% increase in ROAS",
    description: "How a D2C fashion brand scaled from $50k to $500k monthly ad spend while maintaining profitability.",
    gradient: "from-ryze-purple to-ryze-coral",
  },
  {
    company: "SaaS Startup",
    industry: "B2B Software",
    result: "68% reduction in CAC",
    description: "A B2B SaaS company used Ryze to optimize their lead generation campaigns across Google and LinkedIn.",
    gradient: "from-ryze-teal to-ryze-purple",
  },
  {
    company: "Marketing Agency",
    industry: "Professional Services",
    result: "4.2x client retention",
    description: "How an agency used Ryze to manage 50+ client accounts and deliver consistent results.",
    gradient: "from-primary to-ryze-gold",
  },
];

export const CaseStudiesPreview = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              See how companies like yours are achieving breakthrough results with Ryze.
            </p>
          </div>
          <Button variant="outline" className="group self-start md:self-auto">
            View All Case Studies
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border card-hover"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${study.gradient}`} />
              
              <div className="p-8">
                {/* Industry Tag */}
                <span className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm mb-4">
                  {study.industry}
                </span>

                {/* Result */}
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-xl font-bold text-foreground">{study.result}</span>
                </div>

                {/* Company */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {study.company}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6">
                  {study.description}
                </p>

                {/* Link */}
                <Button variant="link" className="p-0 h-auto group/btn">
                  Read Case Study
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
