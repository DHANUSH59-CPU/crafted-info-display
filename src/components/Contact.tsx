import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Github, Download, Code } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "College Email",
      value: "dhsr22aiml@cmrit.ac.in",
      href: "mailto:dhsr22aiml@cmrit.ac.in"
    },
    {
      icon: Mail,
      label: "Personal Email",
      value: "dhanushjoelucky@gmail.com",
      href: "mailto:dhanushjoelucky@gmail.com"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 9916705053",
      href: "tel:+919916705053"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dhanush-kumar-11b994333",
      href: "http://www.linkedin.com/in/dhanush-kumar-11b994333"
    }
  ];

  const certifications = [
    "DSA course on Udemy",
    "Namaste React.js by Akshay Saini",
    "Namaste Node.js by Akshay Saini"
  ];

  const activities = [
    "Participated in Aptitude Hackathon conducted by OMRIT",
    "Completed in AptiCode 2025, showcasing problem-solving and coding skills"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Let's Connect</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="text-muted-foreground hover:text-accent transition-colors break-all"
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Download Resume</h4>
                <p className="text-muted-foreground mb-4">
                  Get a detailed overview of my experience, skills, and projects.
                </p>
                <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                  <a href="https://drive.google.com/file/d/11sSzZ7FnQXbuOEUFN35UVMPMWBIXVQ85/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF Resume
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {/* Certifications */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Certifications</h4>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Activities */}
            <Card className="bg-card/50 border-border/50">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Activities & Achievements</h4>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-3 mt-1">•</span>
                      <span className="text-muted-foreground">{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="https://github.com/DHANUSH59-CPU" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="http://www.linkedin.com/in/dhanush-kumar-11b994333" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="lg" className="flex-1" asChild>
                <a href="https://leetcode.com/u/zorodhanu/" target="_blank" rel="noopener noreferrer">
                  <Code className="w-5 h-5 mr-2" />
                  LeetCode
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;