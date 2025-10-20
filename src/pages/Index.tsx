import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Layout>
        <Hero />
        <HowItWorks />
        <Features />
        <CallToAction />
      </Layout>
    </div>
  );
};

export default Index;
