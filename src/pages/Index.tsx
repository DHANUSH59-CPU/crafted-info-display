
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AnimatedSection from "@/components/AnimatedSection";
import { SparklesCore } from "@/components/ui/sparkles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="w-full absolute inset-0 min-h-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={120}
          className="w-full h-full min-h-screen"
          particleColor="#ffffff"
          speed={1}
        />
      </div>
      <div className="relative z-10">
        <Header />
        <div className="space-y-0">
          <AnimatedSection>
            <Hero />
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <About />
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <Projects />
          </AnimatedSection>
          <AnimatedSection delay={600}>
            <Contact />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Index;
