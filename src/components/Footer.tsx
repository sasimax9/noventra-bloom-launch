import { MessageCircle, Phone, Mail, Linkedin, Twitter, Github, ArrowUp } from 'lucide-react';

const footerLinks = {
  services: [
    { title: 'Web Development', href: '/services/web' },
    { title: 'Mobile Development', href: '/services/mobile' },
    { title: 'Cloud Solutions', href: '/services/cloud' },
    { title: 'Digital Strategy', href: '/services/strategy' }
  ],
  company: [
    { title: 'About Us', href: '/about' },
    { title: 'Our Team', href: '/about/team' },
    { title: 'Careers', href: '/careers' },
    { title: 'News & Blog', href: '/blog' }
  ],
  resources: [
    { title: 'Case Studies', href: '/case-studies' },
    { title: 'Documentation', href: '/docs' },
    { title: 'Support Center', href: '/support' },
    { title: 'Privacy Policy', href: '/privacy' }
  ]
};

const socialLinks = [
  { icon: Linkedin, href: '#', name: 'LinkedIn' },
  { icon: Twitter, href: '#', name: 'Twitter' },
  { icon: Github, href: '#', name: 'GitHub' }
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold mb-4 block">
              NoventraOne
            </a>
            <p className="text-background/80 mb-6 max-w-md leading-relaxed">
              Transforming businesses through innovative technology solutions. 
              We empower companies to achieve their digital goals with cutting-edge development and strategic guidance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@noventraone.com"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-smooth"
              >
                <Mail className="h-4 w-4" />
                hello@noventraone.com
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-smooth"
              >
                <Phone className="h-4 w-4" />
                +1 (555) 123-4567
              </a>
              <a
                href="/contact"
                className="flex items-center gap-3 text-background/80 hover:text-background transition-smooth"
              >
                <MessageCircle className="h-4 w-4" />
                Live Chat Support
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-background mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-background mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-background transition-smooth text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-background/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-background mb-2">Stay Updated</h3>
              <p className="text-background/80 text-sm">
                Get the latest insights on technology trends and business innovation.
              </p>
            </div>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:border-background/40 focus:outline-none"
              />
              <button className="px-6 py-2 bg-background text-foreground rounded-lg font-medium hover:bg-background/90 transition-smooth">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-background/80 text-sm">
              © {new Date().getFullYear()} NoventraOne. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center text-background/80 hover:text-background hover:bg-background/20 transition-smooth"
                  title={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center text-background/80 hover:text-background hover:bg-background/20 transition-smooth"
              title="Back to Top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;