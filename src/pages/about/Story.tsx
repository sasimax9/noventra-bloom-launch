import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Story = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8">Our Story</h1>
            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                NoventraOne was founded in 2020 with a simple yet powerful vision: to transform businesses through innovative digital solutions. What started as a small team of passionate developers and designers has grown into a full-service digital agency.
              </p>
              <p>
                Our journey began when our founders recognized the gap between traditional business practices and the digital transformation needs of modern companies. We set out to bridge that gap with cutting-edge technology and human-centered design.
              </p>
              <p>
                Today, we've helped over 200 businesses across various industries digitize their operations, enhance their customer experiences, and achieve sustainable growth in the digital age.
              </p>
              <div className="bg-gradient-subtle rounded-lg p-8 mt-12">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Our Milestones</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">2020</div>
                    <div className="text-sm text-muted-foreground">Company Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">100+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">50+</div>
                    <div className="text-sm text-muted-foreground">Team Members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Story;