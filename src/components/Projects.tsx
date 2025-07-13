import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Netflix-GPT",
      description: "A Netflix clone enhanced with GPT-powered movie recommendations. Features user authentication using Firebase and integrates with TMDB API for real-time movie data.",
      technologies: ["React.js", "Redux Toolkit", "Firebase", "TMDB API", "Tailwind CSS"],
      features: [
        "User authentication with Firebase",
        "GPT-powered movie search",
        "Real-time movie data from TMDB",
        "Responsive design"
      ],
      github: "https://github.com/dhanush",
      live: "https://netflix-gpt-demo.com"
    },
    {
      title: "DevMatch",
      description: "A full-stack social platform for developers inspired by Tinder and LinkedIn, featuring real-time matching and messaging using Socket.IO.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
      features: [
        "Real-time messaging with Socket.IO",
        "Developer profile matching",
        "Authentication system",
        "Connection management"
      ],
      github: "https://github.com/dhanush/devmatch",
      live: "https://devmatch-demo.com"
    },
    {
      title: "Bolt-New SAAS Clone",
      description: "A full-stack SaaS application using React.js and Convex, enabling real-time data synchronization and dynamic content rendering.",
      technologies: ["React.js", "Redux Toolkit", "Tailwind CSS", "Convex", "OpenAI API"],
      features: [
        "Real-time data synchronization",
        "AI-assisted features",
        "Modern UI/UX design",
        "Scalable architecture"
      ],
      github: "https://github.com/dhanush/bolt-clone",
      live: "https://bolt-clone-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            modern web technologies, and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-accent mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 bg-accent hover:bg-accent/90" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;