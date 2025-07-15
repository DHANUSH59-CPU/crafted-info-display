import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AdvancedNeuralNetworkBackground from "@/components/AdvancedNeuralNetworkBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <AdvancedNeuralNetworkBackground />
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
