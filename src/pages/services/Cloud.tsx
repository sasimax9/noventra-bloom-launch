import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Cloud = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">Cloud Solutions</h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Scale your business with secure, reliable, and cost-effective cloud infrastructure solutions that grow with your needs.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">Cloud Services</h2>
                <p className="text-muted-foreground mb-6">
                  We provide comprehensive cloud solutions that help businesses modernize their infrastructure, improve scalability, and reduce operational costs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Cloud migration and modernization</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Infrastructure as a Service (IaaS)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Platform as a Service (PaaS)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Serverless computing solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">Cloud security and compliance</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-subtle rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6">Cloud Platforms</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">AWS</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Amazon Web Services</div>
                      <div className="text-sm text-muted-foreground">EC2, S3, Lambda, RDS</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">AZ</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Microsoft Azure</div>
                      <div className="text-sm text-muted-foreground">Virtual Machines, Storage, Functions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                      <span className="text-xs text-primary-foreground font-bold">GCP</span>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Google Cloud Platform</div>
                      <div className="text-sm text-muted-foreground">Compute Engine, Cloud Storage</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Why Choose Cloud?</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 border border-border rounded-lg">
                  <div className="text-3xl mb-4">💰</div>
                  <h3 className="font-semibold text-foreground mb-2">Cost Effective</h3>
                  <p className="text-sm text-muted-foreground">Pay only for what you use with flexible pricing models</p>
                </div>
                
                <div className="text-center p-6 border border-border rounded-lg">
                  <div className="text-3xl mb-4">📈</div>
                  <h3 className="font-semibold text-foreground mb-2">Scalable</h3>
                  <p className="text-sm text-muted-foreground">Scale resources up or down based on demand</p>
                </div>
                
                <div className="text-center p-6 border border-border rounded-lg">
                  <div className="text-3xl mb-4">🔒</div>
                  <h3 className="font-semibold text-foreground mb-2">Secure</h3>
                  <p className="text-sm text-muted-foreground">Enterprise-grade security and compliance</p>
                </div>
                
                <div className="text-center p-6 border border-border rounded-lg">
                  <div className="text-3xl mb-4">🌍</div>
                  <h3 className="font-semibold text-foreground mb-2">Global</h3>
                  <p className="text-sm text-muted-foreground">Deploy applications worldwide with ease</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-gradient-subtle rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Migration Services</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>• Assessment and planning</div>
                  <div>• Data migration strategies</div>
                  <div>• Application modernization</div>
                  <div>• Testing and validation</div>
                  <div>• Go-live support</div>
                  <div>• Post-migration optimization</div>
                </div>
              </div>
              
              <div className="bg-gradient-subtle rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">Ongoing Support</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>• 24/7 monitoring and alerts</div>
                  <div>• Performance optimization</div>
                  <div>• Security updates and patches</div>
                  <div>• Cost optimization reviews</div>
                  <div>• Disaster recovery planning</div>
                  <div>• Technical support and training</div>
                </div>
              </div>
            </div>

            <div className="text-center bg-gradient-subtle rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-muted-foreground mb-6">
                Let our cloud experts help you design and implement the perfect cloud strategy for your business.
              </p>
              <a href="/contact" className="gradient-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover-lift transition-smooth">
                Get Cloud Assessment
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cloud;