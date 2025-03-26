import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import hsLogo from "/icons/hs-logo.svg";

const navLinks = [
  {
    name: "Products",
    type: "dropdown",
    items: [
      {
        name: "HostSpace Container Services",
        href: "/products/container-service",
        img: "/HCS-Icon.svg",
        description: "Powerful container management made simple",
      },
      {
        name: "HostSpace Kubernetes Engine",
        href: "/products/kubernetes-engine",
        img: "/HKE-Icon.svg",
        description: "Enterprise-grade Kubernetes orchestration",
      },
      {
        name: "HostSpace Managed Databases",
        href: "/products/managed-databases",
        icon: Database,
        description: "Fully managed database solutions",
        // badge: "Coming Soon",
      },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Careers", href: "/careers" },
  { name: "Change logs", href: "/logs" },
  { name: "Contact us", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-background/80 backdrop-blur-xl border-b ",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b"
          : "bg-transparent md:bg-transparent md:backdrop-blur-0 md:border-0"
      )}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
            <img src={hsLogo} alt="HostSpace Logo" />
            <span className="text-lg font-semibold tracking-tight">
              HostSpace
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative text-left">
                {link.type === "dropdown" ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className="text-sm  text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1"
                    >
                      {link.name}
                      <svg
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          activeDropdown === link.name ? "rotate-180" : ""
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                        <div className="w-[520px] bg-background/80 backdrop-blur-xl border rounded-xl shadow-lg p-4">
                          {link.items?.map((item) => (
                            <div key={item.name} className="space-y-2">
                              <Link
                                to={item.href}
                                className="flex items-start gap-4 p-4 rounded-lg hover:bg-foreground/5 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex-shrink-0">
                                  <div className="w-10 h-10 rounded-lg bg-white border shadow-sm flex items-center justify-center">
                                    {item.img && (
                                      <img
                                        src={`/icons/${item.img}`}
                                        className="p-1 object-cover text-foreground"
                                      />
                                    )}
                                  </div>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-base">
                                      {item.name}
                                    </span>
                                    {/* {item.badge && (
                                      <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                                        {item.badge}
                                      </span>
                                    )} */}
                                  </div>
                                  <div className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                  </div>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    onClick={() => setActiveDropdown(null)}
                    to={link.href ?? "#"}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="https://ui.hostspacecloud.com/login" target="_blank">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out text-left",
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <div className="space-y-3">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.type === "dropdown" ? (
                  <div className="space-y-2">
                    <button
                      onClick={() => handleDropdownToggle(link.name)}
                      className="flex items-center justify-between w-full py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.name}
                      <svg
                        className={cn(
                          "ml-1 h-4 w-4 transition-transform duration-200",
                          activeDropdown === link.name ? "rotate-180" : ""
                        )}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 space-y-2">
                        {link.items?.map((item) => (
                          <div key={item.name} className="space-y-2">
                            <Link
                              to={item.href}
                              className="flex items-center gap-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                              onClick={() => {
                                setActiveDropdown(null);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              <div className="w-8 h-8 rounded-lg bg-white border shadow-sm flex items-center justify-center">
                                <img
                                  src={`/icons/${item.img}`}
                                  className="h-4 w-4 text-foreground"
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <span>{item.name}</span>
                                {/* {item.badge && (
                                  <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                                    {item.badge}
                                  </span>
                                )} */}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href ?? ""}
                    className="block py-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="https://ui.hostspacecloud.com/login" target="_blank">
              <button className="w-full bg-primary text-primary-foreground rounded-full py-2 text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
