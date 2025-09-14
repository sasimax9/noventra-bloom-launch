import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Mobile = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">Healthcare & Life Sciences</h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Build powerful, user-friendly mobile applications for iOS and Android that engage your customers and grow your business.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Native & Cross-Platform Development</h2>
                <p className="text-muted-foreground mb-6">
                  We develop both native and cross-platform mobile applications that deliver exceptional user experiences across all devices.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">iOS</span>
                    </div>
                    <span className="text-foreground">Native iOS Development (Swift)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">AND</span>
                    </div>
                    <span className="text-foreground">Native Android Development (Kotlin)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">RN</span>
                    </div>
                    <span className="text-foreground">React Native (Cross-platform)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">FL</span>
                    </div>
                    <span className="text-foreground">Flutter (Cross-platform)</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-subtle rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">App Features We Develop</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>• User authentication and profiles</div>
                  <div>• Push notifications</div>
                  <div>• Real-time messaging and chat</div>
                  <div>• GPS and location services</div>
                  <div>• Payment gateway integration</div>
                  <div>• Social media integration</div>
                  <div>• Offline functionality</div>
                  <div>• Analytics and reporting</div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Our Development Process</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary-foreground">1</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Discovery</h3>
                  <p className="text-sm text-muted-foreground">Understanding your needs and goals</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary-foreground">2</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Design</h3>
                  <p className="text-sm text-muted-foreground">Creating intuitive user interfaces</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary-foreground">3</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Development</h3>
                  <p className="text-sm text-muted-foreground">Building robust, scalable apps</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary-foreground">4</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Launch</h3>
                  <p className="text-sm text-muted-foreground">App store deployment and support</p>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-subtle rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Build Your Mobile App?</h2>
              <p className="text-muted-foreground mb-6">
                Let's turn your mobile app idea into reality with our expert development team.
              </p>
              <a href="/contact" className="gradient-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover-lift transition-smooth">
               Quick Connect
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mobile;