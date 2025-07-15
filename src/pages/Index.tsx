import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import AdvancedNeuralNetworkBackground from "@/components/AdvancedNeuralNetworkBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <AdvancedNeuralNetworkBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
