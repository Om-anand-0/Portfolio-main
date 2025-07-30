import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow">
                <img 
                  src={profileAvatar} 
                  alt="Om An - Portfolio" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 animate-glow"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Om An
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground">
                Computer Science Student & Developer
              </p>
            </div>

            <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
              Passionate about creating innovative solutions through code. Currently pursuing B.Tech in Computer Science 
              with expertise in full-stack development, machine learning, and problem-solving.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Bhopal, M.P</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>9142959347</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>om.d3v.21@gmail.com</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
                size="lg"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <a href="https://portfolio-sevenchi-44.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Portfolio
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start pt-6">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;