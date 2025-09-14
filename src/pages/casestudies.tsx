import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const CaseStudies = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-8 text-center">
            Stay tuned for exciting case studies...
            </h1>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
