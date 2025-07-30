import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated computer science student with a passion for technology and innovation
            </p>
          </div>

          {/* Education Card */}
          <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in mb-8">
            <div className="p-8">
              <div className="flex items-start gap-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      B.Tech in Computer Science
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar size={16} />
                      <span>Sept 2024 - Sept 2027</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-primary mb-2">
                    Sagar Institute of Science & Technology
                  </p>
                  <p className="text-muted-foreground mb-3">
                    Gandhinagar, Bhopal, M.P
                  </p>
                  
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    <span>GPA: 7.0</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* About Description */}
          <div className="grid lg:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Academic Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my Bachelor's degree in Computer Science, where I'm building a strong 
                  foundation in programming fundamentals, data structures, algorithms, and object-oriented programming. 
                  My academic journey has equipped me with both theoretical knowledge and practical skills.
                </p>
              </div>
            </Card>

            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Development Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in full-stack web development, machine learning applications, and system development. 
                  My hands-on experience includes building desktop applications, web platforms, and real-time systems 
                  using modern technologies and frameworks.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;