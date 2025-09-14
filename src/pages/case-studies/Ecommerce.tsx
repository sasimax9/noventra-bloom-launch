import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Ecommerce = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">E-commerce Solutions</h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their retail operations with cutting-edge e-commerce platforms and strategies.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <div className="bg-gradient-subtle rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Featured Case Study: Fashion Forward</h2>
                  <p className="text-muted-foreground mb-6">
                    A luxury fashion retailer approached us to modernize their online presence and create a seamless omnichannel experience for their customers.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">300%</div>
                      <div className="text-sm text-muted-foreground">Increase in Online Sales</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">65%</div>
                      <div className="text-sm text-muted-foreground">Faster Page Load Times</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">40%</div>
                      <div className="text-sm text-muted-foreground">Higher Conversion Rate</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">The Challenge</h3>
                    <p className="text-muted-foreground">
                      The client's existing e-commerce platform was outdated, slow, and not mobile-friendly. They were losing customers to competitors with better online experiences and needed a complete digital transformation.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Our Solution</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div>• Built a modern, responsive e-commerce platform using Shopify Plus</div>
                      <div>• Implemented advanced search and filtering capabilities</div>
                      <div>• Integrated with existing inventory management systems</div>
                      <div>• Added personalized product recommendations</div>
                      <div>• Optimized for mobile shopping experience</div>
                      <div>• Implemented secure payment processing with multiple options</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-subtle rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-foreground mb-4">Project Timeline</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Discovery & Planning</span>
                      <span className="text-foreground">2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Design & Development</span>
                      <span className="text-foreground">8 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Testing & Launch</span>
                      <span className="text-foreground">2 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-subtle rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Technologies Used</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• Shopify Plus</div>
                    <div>• React.js</div>
                    <div>• Node.js</div>
                    <div>• Stripe Payment Gateway</div>
                    <div>• Google Analytics</div>
                    <div>• Mailchimp Integration</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">More E-commerce Success Stories</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Electronics Retailer</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Modernized legacy system with advanced inventory management and real-time order tracking.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium text-primary">250%</span>
                      <span className="text-muted-foreground"> increase in mobile sales</span>
                    </div>
                    <span className="text-xs text-muted-foreground">6 months</span>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Artisan Marketplace</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Created multi-vendor platform connecting local artisans with customers worldwide.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium text-primary">500+</span>
                      <span className="text-muted-foreground"> active vendors</span>
                    </div>
                    <span className="text-xs text-muted-foreground">8 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">🛒</div>
                <h3 className="font-semibold text-foreground mb-2">Custom Platforms</h3>
                <p className="text-sm text-muted-foreground">Tailored e-commerce solutions built for your specific needs</p>
              </div>
              
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-semibold text-foreground mb-2">Mobile Commerce</h3>
                <p className="text-sm text-muted-foreground">Optimized shopping experiences across all devices</p>
              </div>
              
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="font-semibold text-foreground mb-2">System Integration</h3>
                <p className="text-sm text-muted-foreground">Seamless integration with existing business systems</p>
              </div>
            </div>

            <div className="text-center bg-gradient-subtle rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Ready to Transform Your E-commerce?</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help you create an exceptional online shopping experience for your customers.
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

export default Ecommerce;