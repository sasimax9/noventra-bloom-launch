import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AIMachineLearning = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">
              AI & Machine Learning
            </h1>
            <p className="text-lg text-muted-foreground text-left mb-16 max-w-6xl mx-auto">
              At NoventraOne, we bring the power of Artificial Intelligence and
              Machine Learning into practical business applications. Our team
              builds predictive models and intelligent systems that transform
              historical data into actionable forecasts, enabling companies to
              make smarter and faster decisions. From natural language
              processing to computer vision, we tailor AI/ML solutions that
              address industry-specific challenges and unlock new growth
              opportunities. We don’t just stop at building models—we manage the
              end-to-end ML lifecycle, from experimentation and training to
              deployment and monitoring. By combining automation, scalability,
              and domain expertise, we help organizations integrate AI into
              their core processes with confidence. The result is smarter
              operations, optimized efficiency, and solutions that evolve
              alongside your business.
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  What We Offer
                </h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Predictive analytics models to forecast business outcomes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Natural Language Processing (NLP) solutions for text and speech analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                     Computer vision applications for image and video intelligence
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>Recommendation systems to personalize customer experiences</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>AI-powered automation to optimize workflows and reduce manual effort</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-subtle rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Technologies We Use
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>TensorFlow</div>
                  <div>PyTorch</div>
                  <div>Scikit-learn</div>
                  <div>Keras</div>
                  <div>MLflow</div>
                  <div>More...</div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-semibold text-foreground mb-2">
                  Fast Performance
                </h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for speed and performance across all devices
                </p>
              </div>

              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">🔒</div>
                <h3 className="font-semibold text-foreground mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-sm text-muted-foreground">
                  Built with security best practices and reliable hosting
                </p>
              </div>

              <div className="text-center p-6 border border-border rounded-lg">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="font-semibold text-foreground mb-2">
                  Mobile First
                </h3>
                <p className="text-sm text-muted-foreground">
                  Designed for mobile users with responsive layouts
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-subtle rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Start Your Web Project?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let's discuss your web development needs and create something
                amazing together.
              </p>
              <a
                href="/contact"
                className="gradient-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover-lift transition-smooth"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AIMachineLearning;
