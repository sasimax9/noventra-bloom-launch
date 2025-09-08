import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Strategy = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">Digital Strategy</h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Transform your business with strategic digital solutions that drive growth, improve efficiency, and create competitive advantages.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Strategic Planning</h2>
                <p className="text-muted-foreground mb-6">
                  We help businesses navigate digital transformation by developing comprehensive strategies that align technology with business objectives.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Digital transformation roadmaps</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Technology stack optimization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Process automation strategies</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Data-driven decision frameworks</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-subtle rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Our Approach</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">📊</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Analysis</div>
                      <div className="text-sm text-muted-foreground">Current state assessment</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">🎯</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Strategy</div>
                      <div className="text-sm text-muted-foreground">Goal-oriented planning</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-xs text-primary-foreground">🚀</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Execution</div>
                      <div className="text-sm text-muted-foreground">Implementation support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Key Service Areas</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-6 border border-border rounded-lg">
                  <div className="text-4xl mb-4">💼</div>
                  <h3 className="font-semibold text-foreground mb-3">Business Process Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Streamline operations and eliminate inefficiencies with digital process improvements.
                  </p>
                </div>
                
                <div className="text-center p-6 border border-border rounded-lg">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="font-semibold text-foreground mb-3">Growth Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    Develop digital channels and strategies to accelerate business growth.
                  </p>
                </div>
                
                <div className="text-center p-6 border border-border rounded-lg">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="font-semibold text-foreground mb-3">Change Management</h3>
                  <p className="text-sm text-muted-foreground">
                    Support organizational change with effective digital transformation strategies.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-subtle rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Industries We Serve</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div>• Healthcare</div>
                  <div>• Financial Services</div>
                  <div>• E-commerce</div>
                  <div>• Manufacturing</div>
                  <div>• Education</div>
                  <div>• Real Estate</div>
                  <div>• Technology</div>
                  <div>• Non-profit</div>
                </div>
              </div>
              
              <div className="bg-gradient-subtle rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Deliverables</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• Strategic roadmap documents</div>
                  <div>• Implementation timelines</div>
                  <div>• ROI projections and KPIs</div>
                  <div>• Technology recommendations</div>
                  <div>• Risk assessment reports</div>
                  <div>• Change management plans</div>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-subtle rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Transform Your Business?</h2>
              <p className="text-muted-foreground mb-6">
                Let's develop a digital strategy that positions your business for long-term success.
              </p>
              <a href="/contact" className="gradient-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover-lift transition-smooth">
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Strategy;