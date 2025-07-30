import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "om.d3v.21@gmail.com",
      href: "mailto:om.d3v.21@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9142959347",
      href: "tel:9142959347",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bhopal, M.P",
      href: "#",
      color: "text-orange-400"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "text-blue-500"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      href: "https://portfolio-sevenchi-44.vercel.app/",
      color: "text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations, or simply connecting with fellow developers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((contact, index) => (
                <Card 
                  key={contact.label}
                  className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <a 
                      href={contact.href}
                      className="flex items-center gap-4 group-hover:text-primary transition-colors duration-300"
                    >
                      <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors duration-300">
                        <contact.icon className={`h-6 w-6 ${contact.color}`} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="text-lg font-medium text-foreground">{contact.value}</p>
                      </div>
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Let's Connect
              </h3>
              
              <Card className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-500">
                <div className="p-8 text-center space-y-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      Whether you're looking for a passionate developer to join your team, 
                      have an exciting project in mind, or just want to discuss technology, 
                      I'd love to hear from you!
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Button 
                      className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 w-full"
                      size="lg"
                      asChild
                    >
                      <a href="mailto:om.d3v.21@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </a>
                    </Button>

                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-primary/50 hover:bg-primary/10 transition-all duration-300 w-full"
                      asChild
                    >
                      <a href="tel:9142959347">
                        <Phone className="mr-2 h-4 w-4" />
                        Call Now
                      </a>
                    </Button>
                  </div>

                  {/* Social Links */}
                  <div className="pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                    <div className="flex justify-center gap-4">
                      {socialLinks.map((social) => (
                        <Button 
                          key={social.label}
                          variant="ghost" 
                          size="icon"
                          className="hover:bg-primary/20 hover:text-primary transition-all duration-300"
                          asChild
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer" title={social.label}>
                            <social.icon className={`h-5 w-5 ${social.color}`} />
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Card className="bg-gradient-card border-border/50 shadow-card">
              <div className="p-6">
                <p className="text-muted-foreground">
                  <span className="text-primary font-semibold">Available for:</span> Full-time positions, internships, freelance projects, and collaborative opportunities
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;