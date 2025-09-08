import { ArrowRight, CheckCircle, Zap, Users, Target } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.png';

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Transform Your 
              <span className="gradient-primary bg-clip-text text-transparent"> Business</span> with
              <span className="gradient-accent bg-clip-text text-transparent"> Innovation</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              We empower startups and enterprises with cutting-edge technology solutions that drive growth, 
              enhance efficiency, and create exceptional user experiences.
            </p>

            {/* Features */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Expert Team</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Proven Results</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-smooth hover-lift inline-flex items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="/services"
                className="bg-card text-foreground px-8 py-4 rounded-lg font-semibold border border-border transition-smooth hover:border-primary hover:text-primary inline-flex items-center justify-center gap-2"
              >
                View Services
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="NoventraOne - Modern Technology Solutions"
                className="w-full h-auto max-w-lg mx-auto lg:max-w-none"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 pt-16 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Solutions Delivered</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="p-3 bg-secondary/10 rounded-lg">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Satisfied Clients</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Target className="h-6 w-6 text-accent" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">99%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;