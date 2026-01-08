import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturesGrid } from "@/components/home/FeaturesGrid";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { MetricsSection } from "@/components/home/MetricsSection";
import { CaseStudiesPreview } from "@/components/home/CaseStudiesPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <Testimonials />
      <MetricsSection />
      <CaseStudiesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
