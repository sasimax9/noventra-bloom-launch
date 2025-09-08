import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Healthcare = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">Healthcare Technology</h1>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Explore our innovative healthcare solutions that improve patient outcomes, streamline operations, and enhance the overall healthcare experience.
            </p>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <div className="bg-gradient-subtle rounded-lg p-8 mb-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-4">Featured Case Study: MedConnect Platform</h2>
                  <p className="text-muted-foreground mb-6">
                    We developed a comprehensive telemedicine platform that connects patients with healthcare providers, enabling secure virtual consultations and remote monitoring.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">10K+</div>
                      <div className="text-sm text-muted-foreground">Active Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">500+</div>
                      <div className="text-sm text-muted-foreground">Healthcare Providers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">95%</div>
                      <div className="text-sm text-muted-foreground">Patient Satisfaction</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">The Challenge</h3>
                    <p className="text-muted-foreground">
                      A regional healthcare network needed to expand access to care, especially in rural areas, while maintaining high-quality patient experiences and ensuring HIPAA compliance for all interactions.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Our Solution</h3>
                    <div className="space-y-3 text-muted-foreground">
                      <div>• Built HIPAA-compliant telemedicine platform with end-to-end encryption</div>
                      <div>• Integrated video consultations with electronic health records (EHR)</div>
                      <div>• Developed mobile apps for both patients and healthcare providers</div>
                      <div>• Implemented prescription management and digital pharmacy integration</div>
                      <div>• Added AI-powered symptom checker and triage system</div>
                      <div>• Created secure messaging system for follow-up care</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">Key Features</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">📹</span>
                        </div>
                        <span className="text-muted-foreground">HD Video Consultations</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">📊</span>
                        </div>
                        <span className="text-muted-foreground">Real-time Health Monitoring</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">💊</span>
                        </div>
                        <span className="text-muted-foreground">Digital Prescriptions</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-xs text-primary-foreground">🔒</span>
                        </div>
                        <span className="text-muted-foreground">HIPAA Compliance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-gradient-subtle rounded-lg p-6 mb-6">
                  <h3 className="font-semibold text-foreground mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Project Duration</span>
                      <span className="text-foreground">12 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Team Size</span>
                      <span className="text-foreground">8 specialists</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Compliance</span>
                      <span className="text-foreground">HIPAA, SOC 2</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-subtle rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Technology Stack</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• React Native (Mobile Apps)</div>
                    <div>• Node.js & Express</div>
                    <div>• WebRTC (Video Calls)</div>
                    <div>• MongoDB (Database)</div>
                    <div>• AWS (Cloud Infrastructure)</div>
                    <div>• Twilio (Communications)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">Additional Healthcare Solutions</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Hospital Management System</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive system for managing patient records, scheduling, billing, and inventory across multiple hospital locations.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium text-primary">5 hospitals</span>
                      <span className="text-muted-foreground"> connected</span>
                    </div>
                    <span className="text-xs text-muted-foreground">18 months</span>
                  </div>
                </div>

                <div className="border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-3">Mental Health Platform</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Digital therapy platform with mood tracking, therapeutic exercises, and secure therapist communication.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="font-medium text-primary">2K+</span>
                      <span className="text-muted-foreground"> users helped</span>
                    </div>
                    <span className="text-xs text-muted-foreground">10 months</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">🔐</div>
                <h3 className="font-semibold text-foreground mb-2">Security First</h3>
                <p className="text-sm text-muted-foreground">HIPAA compliant with end-to-end encryption</p>
              </div>
              
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-semibold text-foreground mb-2">Mobile Ready</h3>
                <p className="text-sm text-muted-foreground">Native apps for iOS and Android platforms</p>
              </div>
              
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="font-semibold text-foreground mb-2">EHR Integration</h3>
                <p className="text-sm text-muted-foreground">Seamless integration with existing systems</p>
              </div>
              
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">📊</div>
                <h3 className="font-semibold text-foreground mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">Comprehensive reporting and insights</p>
              </div>
            </div>

            <div className="text-center bg-gradient-subtle rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Transform Healthcare with Technology</h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can help you improve patient care and streamline operations with innovative healthcare technology.
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

export default Healthcare;