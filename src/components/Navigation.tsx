import { useState } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';

interface SubMenuItem {
  title: string;
  href: string;
  description?: string;
}

interface MenuItem {
  title: string;
  href: string;
  subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
  { title: 'Home', href: '/' },
  { 
    title: 'About Us', 
    href: '/about',
    subItems: [
      { title: 'Our Story', href: '/about/story', description: 'Learn about our journey' },
      { title: 'Team', href: '/about/team', description: 'Meet our experts' },
      { title: 'Mission & Vision', href: '/about/mission', description: 'Our purpose and goals' }
    ]
  },
  { 
    title: 'Services', 
    href: '/services',
    subItems: [
      { title: 'Supply Chain & Manufacturing', href: '/services/web', description: 'Transforming supply chains with data-driven intelligence for agility and resilience.' },
      { title: 'Healthcare & Life Sciences', href: '/services/mobile', description: 'Enabling better patient outcomes and operational efficiency through secure data solutions.' },
      { title: 'FinTech & Financial Services', href: '/services/strategy', description: 'Driving smarter decisions, risk reduction, and innovation in digital finance.' },
      { title: 'Cross-Industry Value', href: '/services/cloud', description: 'No matter the domain, our expertise ensures:' }
    ]
  },
  { 
    title: 'Case Studies', 
    href: '/case-studies',
    subItems: [
      { title: 'E-commerce', href: '/case-studies/ecommerce', description: 'Online retail solutions' },
      { title: 'Healthcare', href: '/case-studies/healthcare', description: 'Medical tech innovations' },
      { title: 'FinTech', href: '/case-studies/fintech', description: 'Financial technology' }
    ]
  },
  { title: 'Contact Us', href: '/contact' }
];

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              NoventraOne
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => item.subItems && handleMouseEnter(item.title)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-smooth flex items-center gap-1"
                  >
                    {item.title}
                    {item.subItems && (
                      <ChevronDown className="h-4 w-4 transition-transform duration-200" 
                        style={{ transform: activeDropdown === item.title ? 'rotate(180deg)' : 'rotate(0deg)' }} 
                      />
                    )}
                  </a>

                  {/* Dropdown Menu */}
                  {item.subItems && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-strong border border-border z-50">
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-smooth"
                          >
                            <div className="font-medium">{subItem.title}</div>
                            {subItem.description && (
                              <div className="text-xs text-muted-foreground mt-1">{subItem.description}</div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-smooth p-2 rounded-md"
              title="Call Us"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-smooth p-2 rounded-md"
              title="Message Us"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <a
              href="/contact"
              className="gradient-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-smooth hover-lift"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-foreground hover:text-primary p-2 rounded-md transition-smooth"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;