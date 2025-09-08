import { ExternalLink, ArrowRight } from 'lucide-react';

const caseStudies = [
  {
    title: 'E-Commerce Revolution',
    client: 'TechMart Solutions',
    category: 'E-commerce Platform',
    description: 'Complete digital transformation of a traditional retail business into a modern e-commerce powerhouse.',
    results: [
      '300% increase in online sales',
      '50% improvement in user engagement',
      '40% reduction in operational costs'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
  },
  {
    title: 'Healthcare Innovation',
    client: 'MediCare Plus',
    category: 'Healthcare Technology',
    description: 'Revolutionary patient management system that streamlines healthcare delivery and improves patient outcomes.',
    results: [
      '60% faster patient processing',
      '90% reduction in paperwork',
      '99.9% system uptime achieved'
    ],
    technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop'
  },
  {
    title: 'FinTech Breakthrough',
    client: 'SecureWallet',
    category: 'Financial Technology',
    description: 'Advanced digital wallet solution with blockchain integration for secure and instant transactions.',
    results: [
      '1M+ active users in 6 months',
      '99.99% transaction success rate',
      '200% growth in daily transactions'
    ],
    technologies: ['Angular', 'Blockchain', 'Java', 'Redis'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop'
  }
];

const CaseStudies = () => {
  return (
    <section className="py-20 lg:py-32" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success <span className="gradient-accent bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we've helped businesses transform their operations and achieve remarkable growth 
            through innovative technology solutions.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div
              key={study.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden shadow-medium hover-lift">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-64 sm:h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  {study.category}
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                  {study.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4">Client: {study.client}</p>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-foreground mb-3">Key Results:</h4>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                        <span className="text-muted-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-smooth"
                >
                  View Full Case Study
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <a
            href="/case-studies"
            className="gradient-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold transition-smooth hover-lift inline-flex items-center gap-2"
          >
            View All Case Studies
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;