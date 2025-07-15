import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const skills = [
    "HTML5", "CSS", "JavaScript", "Node.js", "React", "Express.js", "MongoDB", "Java", "C++"
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Hello
                <span className="text-accent">.</span>
              </h1>
              <div className="mt-4">
                <span className="text-muted-foreground text-lg">I'm </span>
                <span className="text-2xl sm:text-3xl font-bold text-foreground">Dhanush Kumar</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 text-foreground">
                Software Developer
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Got a project?
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                My resume
              </Button>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-secondary/50 text-muted-foreground hover:bg-secondary/80 transition-all duration-300 hover:scale-110 hover:shadow-md cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 p-2 transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <img
                  src="/lovable-uploads/dfc1ad83-77fe-4b37-8dc9-1c9bf5efbe6d.png"
                  alt="Dhanush Kumar S R"
                  className="w-full h-full rounded-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-accent rotate-45 opacity-20 transition-all duration-700 group-hover:rotate-90 group-hover:scale-110"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-accent rotate-12 opacity-20 transition-all duration-700 group-hover:-rotate-12 group-hover:scale-110"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;