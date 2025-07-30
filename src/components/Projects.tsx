import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Eye, Cpu } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Java ERP System",
      description: "Designed and developed an Employee Dashboard using Java Swing and FlatLaf with comprehensive attendance tracking and user management features.",
      features: [
        "Employee Dashboard with modern UI",
        "Attendance tracking with date-picker",
        "Toggle buttons for easy interaction",
        "Authentication and user profile mapping",
        "MySQL database integration"
      ],
      technologies: ["Java", "MySQL", "Swing", "FlatLaf"],
      icon: Database,
      color: "text-blue-400"
    },
    {
      title: "Selection Sort Visualizer",
      description: "Created a real-time visualizer for the Selection Sort algorithm using SFML to provide visual feedback on the sorting process.",
      features: [
        "Real-time sorting visualization",
        "Interactive SFML graphics",
        "Step-by-step algorithm breakdown",
        "Educational sorting demonstration",
        "Performance metrics display"
      ],
      technologies: ["C++", "SFML"],
      icon: Eye,
      color: "text-green-400",
      github: "https://github.com/Om-anand-0/civic-storm"
    },
    {
      title: "Real-Time Face Recognition System",
      description: "Built a real-time facial recognition application using webcam input with advanced computer vision techniques.",
      features: [
        "Real-time webcam face detection",
        "Face encoding and identification",
        "Color-coded bounding boxes",
        "Name tag display system",
        "Modular architecture for scalability",
        "Error handling and validation"
      ],
      technologies: ["Python", "NumPy", "OpenCV", "face_recognition"],
      icon: Cpu,
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of innovative solutions built with modern technologies and best practices
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Project Info */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                          <project.icon className={`h-8 w-8 ${project.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-3">Key Features:</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies & Actions */}
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="secondary"
                              className="bg-primary/10 text-primary border-primary/20"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col gap-3">
                        {project.github && (
                          <Button 
                            variant="outline"
                            size="sm"
                            className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
                            asChild
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </a>
                          </Button>
                        )}
                        <Button 
                          variant="ghost"
                          size="sm"
                          className="hover:bg-primary/20 hover:text-primary transition-all duration-300"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;