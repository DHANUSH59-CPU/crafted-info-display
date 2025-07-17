import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { SparklesCore } from "@/components/ui/sparkles";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="hsl(var(--primary))"
          speed={1}
        />
      </div>
      <div className="relative z-10">
        <Header />
        <div className="space-y-0">
          <div className="animate-fade-in">
            <Hero />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <About />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Projects />
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
