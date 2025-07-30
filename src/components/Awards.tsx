import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Users, Code2 } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      title: "Samadhan Hackathon",
      subtitle: "Calm Chase Project",
      date: "Dec 2024",
      organization: "",
      description: "Built a web-based chatbot using Flask to assist users with services like appointments, doctors, and contact info.",
      achievements: [
        "Implemented multi-page routing system",
        "Created dynamic response mechanisms",
        "Designed clean user interaction interface",
        "Developed modular Python logic architecture"
      ],
      technologies: ["Flask", "Python", "Web Development"],
      icon: Code2,
      color: "text-blue-400"
    },
    {
      title: "Lake City Hack Hackathon",
      subtitle: "Civic Issues Reporting App",
      date: "April 2025",
      organization: "Jagran Lakecity University",
      description: "Developed a responsive web application for reporting civic issues and road hazards with comprehensive user management.",
      achievements: [
        "User authentication system implementation",
        "Media upload and location tagging features",
        "Role-based dashboards for users and admins",
        "Clean MVC architecture for scalability",
        "Report submission and tracking system"
      ],
      technologies: ["Web Development", "Authentication", "MVC Architecture"],
      icon: Users,
      color: "text-green-400"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Participating in hackathons and competitions to challenge myself and build innovative solutions
            </p>
          </div>

          {/* Awards Grid */}
          <div className="space-y-8">
            {awards.map((award, index) => (
              <Card 
                key={award.title}
                className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="p-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    {/* Award Icon & Info */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                      <div className="p-4 bg-primary/20 rounded-xl group-hover:bg-primary/30 transition-colors duration-300 mb-4">
                        <Trophy className="h-12 w-12 text-primary" />
                      </div>
                      
                      <div className="text-center lg:text-left">
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Calendar size={16} />
                          <span className="text-sm font-medium">{award.date}</span>
                        </div>
                        
                        <Badge 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          Participant
                        </Badge>
                      </div>
                    </div>

                    {/* Award Details */}
                    <div className="lg:col-span-3 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-1">
                          {award.title}
                        </h3>
                        <p className="text-lg text-primary font-medium mb-2">
                          {award.subtitle}
                        </p>
                        {award.organization && (
                          <p className="text-muted-foreground">
                            {award.organization}
                          </p>
                        )}
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        {award.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-3">Key Achievements:</h4>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {award.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {award.technologies.map((tech) => (
                            <Badge 
                              key={tech}
                              variant="outline"
                              className="border-primary/30 text-primary hover:bg-primary/10"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Motivation Section */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 inline-block">
              <div className="p-6">
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">Competitive Spirit:</span> Actively participating in hackathons to enhance problem-solving skills and collaborate with talented developers
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;