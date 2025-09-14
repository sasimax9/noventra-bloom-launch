import { MessageCircle, Phone, Mail, MapPin, Send, Clock } from 'lucide-react';

const contactMethods = [
  // {
  //   icon: MessageCircle,
  //   title: 'Live Chat',
  //   description: 'Get instant support from our team',
  //   action: 'Start Chat',
  //   href: '#chat',
  //   color: 'text-accent'
  // },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our experts',
    action: '+919845980524',
    href: 'tel:+919611220524',
    color: 'text-primary'
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a detailed message',
    action: 'group@noventraone.com',
    href: 'mailto:group@noventraone.com',
    color: 'text-secondary'
  }
];

const Contact = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Let's <span className="gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Get in touch with our team and let's discuss how we can 
            help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={method.title} className="group">
                    <a
                      href={method.href}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-smooth"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-opacity-10 flex items-center justify-center ${method.color.replace('text-', 'bg-')}`}>
                        <method.icon className={`h-6 w-6 ${method.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-smooth">
                          {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                        <p className={`text-sm font-medium ${method.color}`}>{method.action}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Info */}
            <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Mon - Fri</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 6:00 PM EST</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Remote First</p>
                    <p className="text-sm text-muted-foreground">Serving clients globally</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  >
                    <option value="">Select a service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-development">Mobile Development</option>
                    <option value="cloud-solutions">Cloud Solutions</option>
                    <option value="digital-strategy">Digital Strategy</option>
                    <option value="ui-ux-design">UI/UX Design</option>
                    <option value="cybersecurity">Cybersecurity</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Tell us about your project or how we can help..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <p className="text-sm text-muted-foreground">
                    We'll get back to you within 24 hours.
                  </p>
                  <button
                    type="submit"
                    className="gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-smooth hover-lift inline-flex items-center gap-2"
                  >
                    Send Message
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Chat Widget Placeholder */}
        {/* <div className="fixed bottom-6 right-6 z-50">
          <button
            className="w-14 h-14 bg-accent hover:bg-accent-light text-accent-foreground rounded-full shadow-strong hover-lift flex items-center justify-center transition-smooth"
            title="Start Live Chat"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;