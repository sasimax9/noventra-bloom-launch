import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DataEngineering = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">
              Data Engineering
            </h1>
            <p className="text-lg text-muted-foreground text-left max-w-6xl mx-auto">
              Our Data Engineering services focus on building the backbone of
              modern data-driven enterprises. We design and implement scalable
              data pipelines that seamlessly connect multiple sources—databases,
              APIs, cloud, and on-prem systems—into a unified data ecosystem.
            </p>
            <p className="text-lg text-muted-foreground text-left max-w-6xl mx-auto"></p>
            <p className="text-lg text-muted-foreground text-left max-w-6xl mx-auto">
              By leveraging cloud-native platforms and cutting-edge
              technologies, we ensure that data is not only accessible but also
              reliable, secure, and ready for advanced analytics and AI/ML
              applications. Beyond integration, we place strong emphasis on data
              quality, governance, and performance optimization.
            </p>
            <p className="text-lg text-muted-foreground text-left max-w-6xl mx-auto">
              Our solutions ensure that businesses can trust their data, meet
              compliance standards, and access insights in real time without
              latency issues.
            </p>
            <p className="text-lg text-muted-foreground text-left mb-16 max-w-6xl mx-auto">
              With a foundation built on scalability and efficiency, we empower
              organizations to streamline decision-making, unlock new
              opportunities, and stay ahead in a competitive, data-driven world
            </p>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Data migration
                </h2>
                <p className="text-lg text-muted-foreground text-left max-w-6xl mx-auto">
                  We help businesses seamlessly migrate their data from legacy
                  systems to modern platforms with minimal downtime and zero
                  data loss. Our approach ensures secure, reliable, and
                  cost-effective transfers across databases, applications, and
                  cloud environments. Using automation and industry-best
                  practices, we simplify complex migration processes, enabling
                  startups and growing enterprises to unlock the full potential
                  of their data without disruption to business operations.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  What We Offer
                </h2>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Scalable data pipelines for seamless data flow and
                      integration
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Data warehousing solutions for structured storage and fast
                      analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Real-time data streaming for instant insights and
                      decision-making
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Data lake architecture for handling large volumes of
                      diverse data
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 gradient-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      ETL/ELT automation to ensure clean, reliable, and
                      ready-to-use data
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-subtle rounded-lg p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Technologies We Use
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>Apache Spark </div>
                  <div>Databricks</div>
                  <div>Snowflake</div>
                  <div>Apache Kafka</div>
                  <div>Azure Data Factory (ADF)</div>
                  <div>More...</div>
                </div>
              </div>
            </div>

            {/* <div className="grid md:grid-cols-3 gap-8 mb-16">
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
            </div> */}

            <div className="text-center bg-gradient-subtle rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Ready to Start Your Project?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let's connect & create something
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

export default DataEngineering;
