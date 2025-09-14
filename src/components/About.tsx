import { Award, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our priority. We build lasting partnerships through exceptional service.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description:
      "We focus on measurable outcomes that drive real business value and growth.",
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards in every project, ensuring superior deliverables.",
  },
];

const About = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About{" "}
              <span className="gradient-secondary bg-clip-text text-transparent">
                NoventraOne
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At NoventraOne, we provide holistic data solutions that empower
              businesses to transform raw information into valuable insights and
              intelligent decisions. Our expertise spans the entire data
              lifecycle—right from engineering and infrastructure to
              visualization and advanced AI/ML applications—ensuring end-to-end
              value delivery for our clients
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced developers, designers, and strategists
              work collaboratively to deliver solutions that not only meet
              today's needs but anticipate tomorrow's challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/about"
                className="gradient-secondary text-secondary-foreground px-6 py-3 rounded-lg font-semibold transition-smooth hover-lift inline-flex items-center justify-center"
              >
                Learn Our Story
              </a>
              <a
                href="/contact"
                className="bg-card text-foreground px-6 py-3 rounded-lg font-semibold border border-border transition-smooth hover:border-secondary hover:text-secondary inline-flex items-center justify-center"
              >
                Work With Us
              </a>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-lg p-6 shadow-soft border border-border hover-lift"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-medium border border-border max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              Our Mission
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "Through innovative Data Engineering and AI/ML solutions, we simplify complexity and drive smarter decisions.
Our goal is to create scalable, future-ready systems that fuel sustainable business growth."
            </p>
            <div className="mt-6 w-16 h-1 gradient-accent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
