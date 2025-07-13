import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe } from "lucide-react";

const About = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Building responsive and modern web applications using React, Node.js, and latest technologies."
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end application development with expertise in MERN stack and modern frameworks."
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Creating robust APIs and database solutions using Node.js, Express.js, and MongoDB."
    }
  ];

  const stats = [
    { number: "5+", label: "Completed Projects", symbol: "" },
    { number: "3", label: "Certifications", symbol: "+" }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left - Services */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div key={service.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                {index < services.length - 1 && (
                  <div className="absolute left-6 mt-12 w-px h-8 bg-accent/20"></div>
                )}
              </div>
            ))}
          </div>

          {/* Right - About Me */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">About me</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I am a passionate B.Tech Computer Science Engineering student at Ramgarh Engineering College, 
                  graduating in 2026. My journey in software development started with a curiosity for creating 
                  digital solutions that make a difference.
                </p>
                <p>
                  With expertise in modern web technologies including React.js, Node.js, Express.js, and MongoDB, 
                  I have developed several full-stack applications including Netflix-GPT, DevMatch, and Bolt-New SAAS Clone. 
                  I'm constantly learning and staying updated with the latest technologies and best practices.
                </p>
                <p>
                  When I'm not coding, I enjoy participating in hackathons, completing online courses, 
                  and contributing to open-source projects. I believe in continuous learning and 
                  always strive to write clean, efficient, and scalable code.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label} className="bg-card/50 border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-accent mb-2">
                      {stat.number}
                      <span className="text-accent/70">{stat.symbol}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;