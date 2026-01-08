import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
        >
          {/* Background */}
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
          
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-ryze-teal/20 rounded-full blur-3xl" />

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl cta-gradient mb-8 shadow-glow"
            >
              <Sparkles className="w-8 h-8 text-primary-foreground" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
              Ready to Transform Your
              <br />
              Ad Performance?
            </h2>

            <p className="text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
              Join thousands of marketing teams who've already discovered the power of AI-driven 
              ad optimization. Start your free trial today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/demo">
                <Button variant="hero" size="xl" className="group">
                  Book a Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="hero-outline" size="xl">
                  Explore Features
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
