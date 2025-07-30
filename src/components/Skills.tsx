import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Settings, User, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "C++", "C", "Python"],
      color: "text-blue-400"
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"],
      color: "text-green-400"
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      skills: ["Git & GitHub", "VS Code", "IntelliJ IDEA", "Linux"],
      color: "text-purple-400"
    },
    {
      title: "Soft Skills",
      icon: User,
      skills: ["Team Collaboration", "Problem Solving", "Presentation Skills", "Time Management", "Self-Learning"],
      color: "text-orange-400"
    },
    {
      title: "CS Fundamentals",
      icon: Brain,
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming"],
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and soft skills that enable me to build robust solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                      <category.icon className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 inline-block">
              <div className="p-6">
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">Continuous Learning:</span> Always exploring new technologies and methodologies to stay current with industry trends
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;