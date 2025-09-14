import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Story = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8">
              Our Story
            </h1>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Every great idea starts with a problem. At NoventraOne, our
                journey began with a simple realization—small and mid-scale
                businesses often struggle to harness the full potential of their
                data and technology.
              </p>
              <p>
                While large enterprises have access to cutting-edge IT
                infrastructure and data solutions, many growing businesses are
                left behind with outdated systems, limited scalability, and high
                costs. We set out to change that.
              </p>
              <p>
                Our story is driven by the vision to make enterprise-grade data
                solutions accessible, affordable, and impactful for
                organizations of all sizes. By combining expertise in data
                engineering, cloud infrastructure, visualization, and AI/ML,
                we’ve built a holistic approach that enables businesses to
                modernize, innovate, and compete in today’s digital-first world.
              </p>
              <p>
                From helping clients migrate their data to the cloud to
                designing intelligent systems that uncover insights and drive
                smarter decisions, we’ve grown into more than just a solutions
                provider—we’ve become a trusted partner in digital
                transformation.
              </p>
              <p>
                Our story is still being written, and we’re excited to continue
                empowering businesses to turn their data into opportunityand
                their challenges into growth.
              </p>
              {/* <div className="bg-gradient-subtle rounded-lg p-8 mt-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Our Milestones
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                      2020
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Company Founded
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Team Members
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Story;
