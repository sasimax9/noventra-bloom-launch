import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Fintech = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">Financial Technology</h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Discover how we're revolutionizing financial services with secure, scalable, and user-friendly fintech solutions that drive innovation and growth.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <div className="bg-gradient-subtle rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Featured Case Study: PayStream Digital Wallet</h2>
                  <p className="text-muted-foreground mb-6">
                    We developed a comprehensive digital wallet solution for a leading fintech startup, enabling secure peer-to-peer payments, bill management, and investment tracking.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">1M+</div>
                      <div className="text-sm text-muted-foreground">Active Users</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">$50M+</div>
                      <div className="text-sm text-muted-foreground">Transactions Processed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">99.9%</div>
                      <div className="text-sm text-muted-foreground">Uptime Achieved</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">The Challenge</h3>
                    <p className="text-muted-foreground">
                      A fintech startup needed to build a comprehensive digital wallet from scratch that could compete with established players while ensuring bank-level security and regulatory compliance across multiple jurisdictions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Our Solution</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div>• Built scalable microservices architecture with real-time transaction processing</div>
                      <div>• Implemented multi-layer security with biometric authentication</div>
                      <div>• Integrated with major banks and payment processors</div>
                      <div>• Developed AI-powered fraud detection and prevention system</div>
                      <div>• Created intuitive mobile apps for iOS and Android</div>
                      <div>• Ensured PCI DSS compliance and regulatory adherence</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Core Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">💳</span>
                        </div>
                        <span className="text-muted-foreground">Instant P2P Payments</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">📊</span>
                        </div>
                        <span className="text-muted-foreground">Investment Portfolio</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">🔒</span>
                        </div>
                        <span className="text-muted-foreground">Biometric Security</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">📱</span>
                        </div>
                        <span className="text-muted-foreground">Bill Management</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-subtle rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-foreground mb-4">Project Metrics</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Development Time</span>
                      <span className="text-foreground">14 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Team Size</span>
                      <span className="text-foreground">12 developers</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Security Rating</span>
                      <span className="text-foreground">AAA+</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-subtle rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Tech Stack</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• React Native (Mobile)</div>
                    <div>• Node.js Microservices</div>
                    <div>• PostgreSQL Database</div>
                    <div>• Redis (Caching)</div>
                    <div>• AWS Cloud Platform</div>
                    <div>• Blockchain Integration</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">More Fintech Innovations</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Lending Platform</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    AI-powered lending platform with automated credit scoring, risk assessment, and loan management for SMEs.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium text-primary">$100M+</span>
                      <span className="text-muted-foreground"> loans processed</span>
                    </div>
                    <span className="text-xs text-muted-foreground">16 months</span>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Crypto Exchange</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Secure cryptocurrency trading platform with advanced charting, portfolio management, and DeFi integration.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium text-primary">50K+</span>
                      <span className="text-muted-foreground"> daily traders</span>
                    </div>
                    <span className="text-xs text-muted-foreground">12 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">🛡️</div>
                <h3 className="font-semibold text-foreground mb-2">Bank-Level Security</h3>
                <p className="text-sm text-muted-foreground">Military-grade encryption and fraud prevention</p>
              </div>
              
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-semibold text-foreground mb-2">Real-Time Processing</h3>
                <p className="text-sm text-muted-foreground">Instant transactions and settlements</p>
              </div>
              
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="font-semibold text-foreground mb-2">Regulatory Compliance</h3>
                <p className="text-sm text-muted-foreground">PCI DSS, KYC, AML compliant solutions</p>
              </div>
              
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="font-semibold text-foreground mb-2">AI & ML Integration</h3>
                <p className="text-sm text-muted-foreground">Smart analytics and automated decisions</p>
              </div>
            </div>

            <div className="text-center bg-gradient-subtle rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Innovate in Fintech?</h2>
              <p className="text-muted-foreground mb-6">
                Let's build the next generation of financial technology solutions that transform how people manage and move money.
              </p>
              <a href="/contact" className="gradient-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover-lift transition-smooth">
                Discuss Your Project
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Fintech;