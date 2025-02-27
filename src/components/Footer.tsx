import { Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

const socialLinks = [
  {
    name: "Linkedin",
    icon: Linkedin,
    href: "https://ng.linkedin.com/company/hostspaceng",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/hostspaceng/",
  },
  { name: "Twitter", icon: Twitter, href: "#" },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://www.instagram.com/hostspaceng/",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://www.youtube.com/@HostSpaceCloudSolutions",
  },
];

const footerLinks = {
  company: [
    { name: "About", href: "/about" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
  products: [
    {
      name: "HostSpace Container Service",
      href: "/products/container-service",
    },
    {
      name: "HostSpace Kubernetes Engine",
      href: "/products/kubernetes-engine",
      subItems: [
        {
          name: "HostSpace Managed Databases",
          href: "#",
          // badge: "Coming Soon",
        },
      ],
    },
  ],
  support: [{ name: "Contact Us", href: "/contact" }],
};

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-700 to-cyan-700 flex items-center justify-center p-1.5">
                <img
                  src={"/icons/hs-logo-w.svg"}
                  alt="HostSpace Logo"
                  className="object-contain object-center"
                />
              </div>
              <span className="text-xl font-semibold">HostSpace</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise-grade cloud infrastructure solutions for modern
              businesses.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name} className="space-y-2">
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                  {link.subItems && (
                    <ul className="space-y-2">
                      {link.subItems.map((subItem) => (
                        <li key={subItem.name}>
                          <a
                            href={subItem.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                          >
                            {subItem.name}
                            {subItem.badge && (
                              <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                                {subItem.badge}
                              </span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t">
          <div className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} HostSpace. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
