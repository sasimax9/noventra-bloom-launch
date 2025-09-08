import { Code, Smartphone, Cloud, BarChart3, Palette, Shield } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
    features: ['React & Next.js', 'Full-stack Solutions', 'API Integration', 'Responsive Design']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that engage users and drive business growth.',
    features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Optimization']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services for enhanced reliability and performance.',
    features: ['AWS & Azure', 'DevOps', 'Microservices', 'Auto-scaling']
  },
  {
    icon: BarChart3,
    title: 'Digital Strategy',
    description: 'Data-driven strategies to transform your business and accelerate digital growth.',
    features: ['Market Analysis', 'Technology Roadmap', 'Process Optimization', 'Growth Hacking']
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that create memorable user experiences and drive conversions.',
    features: ['User Research', 'Prototyping', 'Design Systems', 'Usability Testing']
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and customer data.',
    features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response']
  }
];

const Services = () => {
  return (
    <section className="py-20 lg:py-32" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive technology solutions designed to accelerate your business growth 
            and create lasting competitive advantages.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-8 shadow-soft hover-lift border border-border"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-border">
                <a
                  href="/contact"
                  className="text-primary font-medium text-sm hover:text-primary-dark transition-smooth inline-flex items-center gap-1"
                >
                  Learn More 
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="gradient-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold transition-smooth hover-lift inline-flex items-center gap-2"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;