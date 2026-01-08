import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Ryze identified $40,000 in wasted ad spend in our first month. The ROI was immediate and the AI recommendations were spot-on.",
    author: "Sarah Chen",
    role: "VP of Marketing",
    company: "TechScale Inc",
    avatar: "SC",
    rating: 5,
  },
  {
    quote: "We've tried every ad management tool out there. Ryze is the first one that actually delivers on its promises. Our ROAS improved by 340%.",
    author: "Michael Torres",
    role: "Founder",
    company: "GrowthLab Agency",
    avatar: "MT",
    rating: 5,
  },
  {
    quote: "The creative generation feature alone is worth the subscription. We're producing 10x more ad variations and our CTR has never been higher.",
    author: "Emily Rodriguez",
    role: "Performance Marketing Lead",
    company: "Shopify Plus Brand",
    avatar: "ER",
    rating: 5,
  },
];

export const Testimonials = () => {
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
            Trusted by Performance Marketers
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of marketing teams who've transformed their ad performance with Ryze.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-card border border-border card-hover"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-ryze-gold text-ryze-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full cta-gradient flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
