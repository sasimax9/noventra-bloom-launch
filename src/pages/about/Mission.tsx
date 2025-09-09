import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Mission = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">Mission & Vision</h1>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-subtle rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become a trusted technology partner for small and mid-scale businesses worldwide by delivering innovative, sustainable, and result-driven IT solutions that fuel growth and success.
                </p>
              </div>
              
              <div className="bg-gradient-subtle rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading digital transformation partner for businesses worldwide, recognized for our innovation, expertise, and commitment to delivering exceptional results that exceed expectations and drive sustainable success.
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 border border-border rounded-lg">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-primary-foreground">💡</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                    <p className="text-sm text-muted-foreground">Constantly pushing boundaries and exploring new possibilities</p>
                  </div>
                  
                  <div className="text-center p-6 border border-border rounded-lg">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-primary-foreground">🤝</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Collaboration</h3>
                    <p className="text-sm text-muted-foreground">Working together to achieve extraordinary results</p>
                  </div>
                  
                  <div className="text-center p-6 border border-border rounded-lg">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl text-primary-foreground">⭐</span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">Excellence</h3>
                    <p className="text-sm text-muted-foreground">Delivering the highest quality in everything we do</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-subtle rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to building long-term partnerships with our clients, understanding their unique challenges, and delivering solutions that not only meet their immediate needs but also position them for future success. Our success is measured by the success of our clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mission;