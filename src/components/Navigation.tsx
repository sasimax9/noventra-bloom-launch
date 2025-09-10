import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight, Menu, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "@/components/ui/sheet";

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
  { title: "Home", href: "/" },
  {
    title: "About Us",
    href: "/about",
    subItems: [
      { title: "Our Story", href: "/about/story", description: "Learn about our journey" },
      { title: "Team", href: "/about/team", description: "Meet our experts" },
      { title: "Mission & Vision", href: "/about/mission", description: "Our purpose and goals" },
    ],
  },
  {
    title: "Services",
    href: "/services",
    subItems: [
      {
        title: "Supply Chain & Manufacturing",
        href: "/services/web",
        description: "Transforming supply chains with data-driven intelligence for agility and resilience.",
      },
      {
        title: "Healthcare & Life Sciences",
        href: "/services/mobile",
        description: "Enabling better patient outcomes and operational efficiency through secure data solutions.",
      },
      {
        title: "FinTech & Financial Services",
        href: "/services/strategy",
        description: "Driving smarter decisions, risk reduction, and innovation in digital finance.",
      },
      { title: "Cross-Industry Value", href: "/services/cloud", description: "No matter the domain, our expertise ensures:" },
    ],
  },
  {
    title: "Case Studies",
    href: "/case-studies",
    subItems: [
      { title: "E-commerce", href: "/case-studies/ecommerce", description: "Online retail solutions" },
      { title: "Healthcare", href: "/case-studies/healthcare", description: "Medical tech innovations" },
      { title: "FinTech", href: "/case-studies/fintech", description: "Financial technology" },
    ],
  },
  { title: "Contact Us", href: "/contact" },
];

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => setActiveDropdown(title);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              NoventraOne
            </Link>
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
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-smooth flex items-center gap-1"
                  >
                    {item.title}
                    {item.subItems && (
                      <ChevronDown
                        className="h-4 w-4 transition-transform duration-200"
                        style={{ transform: activeDropdown === item.title ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.subItems && activeDropdown === item.title && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-strong border border-border z-50">
                      <div className="py-2">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.title}
                            to={sub.href}
                            className="block px-4 py-3 text-sm text-foreground hover:bg-muted transition-smooth"
                          >
                            <div className="font-medium">{sub.title}</div>
                            {sub.description && <div className="text-xs text-muted-foreground mt-1">{sub.description}</div>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Actions (desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-smooth p-2 rounded-md"
              title="Call Us"
              aria-label="Call Us"
            >
              <Phone className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="text-muted-foreground hover:text-primary transition-smooth p-2 rounded-md"
              title="Message Us"
              aria-label="Message Us"
            >
              <MessageCircle className="h-5 w-5" />
            </Link>
            <Link to="/contact" className="gradient-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium transition-smooth hover-lift">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu (Sheet Drawer) */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button type="button" variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80 p-0">
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <span className="text-base font-semibold">Menu</span>
                </div>

                <nav className="p-2">
                  {menuItems.map((item) =>
                    item.subItems ? (
                      <details key={item.title} className="group">
                        <summary className="flex items-center justify-between cursor-pointer rounded-md px-4 py-3 text-base hover:bg-accent">
                          <span>{item.title}</span>
                          <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                        </summary>
                        <div className="pl-2">
                          {item.subItems.map((sub) => (
                            <SheetClose asChild key={sub.title}>
                              <Link
                                to={sub.href}
                                className="block rounded-md px-6 py-3 text-sm hover:bg-muted"
                              >
                                {sub.title}
                              </Link>
                            </SheetClose>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <SheetClose asChild key={item.title}>
                        <Link to={item.href} className="block rounded-md px-4 py-3 text-base hover:bg-accent">
                          {item.title}
                        </Link>
                      </SheetClose>
                    )
                  )}

                  <div className="mt-2 grid grid-cols-2 gap-2 px-2">
                    <SheetClose asChild>
                      <Link to="/contact" className="flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent">
                        <Phone className="h-4 w-4" /> Call
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link to="/contact" className="flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-accent">
                        <MessageCircle className="h-4 w-4" /> Message
                      </Link>
                    </SheetClose>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
