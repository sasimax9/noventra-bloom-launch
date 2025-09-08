import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Team = () => {
  const teamMembers = [
    { name: 'Sarah Johnson', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face' },
    { name: 'Michael Chen', role: 'CTO', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face' },
    { name: 'Emily Rodriguez', role: 'Lead Designer', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face' },
    { name: 'David Kim', role: 'Senior Developer', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">Meet Our Team</h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in technology, design, and business strategy to deliver exceptional results for our clients.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center group">
                  <div className="relative mb-6">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-40 h-40 rounded-full mx-auto object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 bg-gradient-subtle rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <a href="/contact" className="gradient-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover-lift transition-smooth">
                View Open Positions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;