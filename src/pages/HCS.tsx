import {
  ArrowRight,
  Shield,
  Github,
  Box,
  Dock as Docker,
  Terminal,
  Activity,
  Lock,
  Database,
  Workflow,
  Blocks,
  Layers,
  Play,
  Users,
  Search,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    name: "Automation & Workflow",
    icon: Workflow,
    color: "blue",
    services: ["ActivePieces", "N8N"],
  },
  {
    name: "Content Management",
    icon: Blocks,
    color: "blue",
    services: ["WordPress", "Directus"],
  },
  {
    name: "Development Tools",
    icon: Terminal,
    color: "blue",
    services: ["Gitea", "Jenkins"],
  },
  {
    name: "Database Tools",
    icon: Database,
    color: "blue",
    services: ["phpMyAdmin", "Adminer"],
  },
  {
    name: "File Management",
    icon: Layers,
    color: "blue",
    services: ["Filebrowser", "Nextcloud"],
  },
  {
    name: "Media Servers",
    icon: Play,
    color: "blue",
    services: ["Jellyfin", "Emby"],
  },
  {
    name: "Monitoring",
    icon: Activity,
    color: "blue",
    services: ["Grafana", "Uptime Kuma"],
  },
  {
    name: "Project Management",
    icon: Users,
    color: "blue",
    services: ["Appsmith", "Outline"],
  },
  {
    name: "Security",
    icon: Shield,
    color: "blue",
    services: ["Authentik", "Vaultwarden"],
  },
  {
    name: "Search & Discovery",
    icon: Search,
    color: "blue",
    services: ["SearXNG"],
  },
];

const features = [
  {
    id: "deployment",
    title: "Deployment",
    icon: Workflow,
    color: "blue",
    description: "Streamlined deployment process with multiple options",
    details: [
      {
        title: "Source Control",
        items: [
          "GitHub integration",
          // "GitLab support",
          // "Bitbucket connectivity",
        ],
      },
      {
        title: "Container Support",
        items: ["Docker images", "Docker Compose"],
      },
      {
        title: "Deployment Actions",
        items: ["Pause Deployment", "Restart Deployment"],
      },
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring",
    icon: Activity,
    color: "purple",
    description: "Comprehensive monitoring and observability",
    details: [
      {
        title: "Metrics",
        items: ["Resource usage", "Performance metrics", "Custom metrics"],
      },
      {
        title: "Logging",
        items: ["Centralized logs", "Log aggregation", "Search & analysis"],
      },
      {
        title: "Alerting",
        items: ["Custom thresholds", "Alert routing", "Incident management"],
      },
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
    color: "pink",
    description: "Enterprise-grade security features",
    details: [
      // {
      //   title: "Access Control",
      //   items: ["Role-based access", "SSO integration", "API authentication"],
      // },
      {
        title: "Network Security",
        items: ["SSL/TLS encryption", "Network policies", "DDoS protection"],
      },
      {
        title: "Compliance",
        items: ["Security scanning", "Audit logs", "Compliance reports"],
      },
    ],
  },
  // {
  //   id: "scaling",
  //   title: "Auto Scaling",
  //   icon: Repeat,
  //   color: "purple",
  //   description: "Intelligent scaling based on demand",
  //   details: [
  //     {
  //       title: "Scaling Types",
  //       items: ["Horizontal scaling", "Vertical scaling", "Custom metrics"],
  //     },
  //     {
  //       title: "Rules",
  //       items: ["Load-based", "Schedule-based", "Event-driven"],
  //     },
  //     {
  //       title: "Management",
  //       items: ["Scale limits", "Cost optimization", "Performance tuning"],
  //     },
  //   ],
  // },
  // {
  //   id: "networking",
  //   title: "Networking",
  //   icon: Network,
  //   color: "blue",
  //   description: "Advanced networking capabilities",
  //   details: [
  //     {
  //       title: "Load Balancing",
  //       items: ["Layer 7 routing", "SSL termination", "Health checks"],
  //     },
  //     {
  //       title: "Service Discovery",
  //       items: ["DNS integration", "Service mesh", "Service registry"],
  //     },
  //     {
  //       title: "Traffic Management",
  //       items: ["Rate limiting", "Circuit breaking", "Traffic splitting"],
  //     },
  //   ],
  // },
  // {
  //   id: "automation",
  //   title: "Automation",
  //   icon: Webhook,
  //   color: "purple",
  //   description: "Powerful automation and integration",
  //   details: [
  //     {
  //       title: "CI/CD",
  //       items: [
  //         "Pipeline integration",
  //         "Automated testing",
  //         "Release automation",
  //       ],
  //     },
  //     {
  //       title: "Webhooks",
  //       items: ["Custom events", "Third-party integration", "Event routing"],
  //     },
  //     {
  //       title: "API",
  //       items: ["RESTful API", "GraphQL support", "API versioning"],
  //     },
  //   ],
  // },
];

export function HCSPage() {
  const [heroRef, heroInView] = useInView();
  const [deploymentRef, deploymentInView] = useInView();
  const [servicesRef, servicesInView] = useInView();
  const [featuresRef, featuresInView] = useInView();

  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative pt-32 pb-20 overflow-hidden ${
          heroInView ? "fade-in" : ""
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-600/10 text-blue-600">
              HostSpace Container Service
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Deploy Containers
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
                With Confidence
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience seamless container deployment and management with our
              powerful, yet simple platform. Built for developers who want to
              focus on code, not infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link to="https://ui.hostspacecloud.com/login" target="_blank">
                <button className="cta-button w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                </button>
              </Link>

              <Link to="/pricing?product=hcs">
                <button className="w-full sm:w-auto px-4 md:px-8 py-4 rounded-full text-sm md:text-base font-medium transition-colors duration-300 border border-border hover:border-foreground">
                  View Pricing
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Application Deployment Section */}
      <section
        ref={deploymentRef}
        className={`py-24 relative ${deploymentInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Multiple Deployment Options
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deploy your applications from various sources with our flexible
              deployment options
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="md:col-span-2 lg:col-span-4">
              <img
                src="/mockups/hcs-app-deploy-options.png"
                className="object-contain rounded-2xl  flex items-center justify-center"
              />{" "}
            </div>
            {/* GitHub Public Repos */}
            <div className="group relative bg-background/40 backdrop-blur-xl border border-input   p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-6">
                  <Github className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Public GitHub</h3>
                <p className="text-muted-foreground">
                  Deploy directly from your public GitHub repositories with
                  automatic builds.
                </p>
              </div>
            </div>

            {/* GitHub Private Repos */}
            <div className="group relative bg-background/40 backdrop-blur-xl border border-input   p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center mb-6">
                  <Lock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Private GitHub</h3>
                <p className="text-muted-foreground">
                  Secure deployments from your private repositories with GitHub
                  integration.
                </p>
              </div>
            </div>

            {/* Docker Compose */}
            <div className="group relative bg-background/40 backdrop-blur-xl border border-input   p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-cyan-600/10 flex items-center justify-center mb-6">
                  <Box className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Docker Compose</h3>
                <p className="text-muted-foreground">
                  Deploy multi-container applications using Docker Compose
                  files.
                </p>
              </div>
            </div>

            {/* Dockerfile */}
            <div className="group relative bg-background/40 backdrop-blur-xl border border-input   p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-cyan-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center mb-6">
                  <Docker className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dockerfile</h3>
                <p className="text-muted-foreground">
                  Build and deploy containers directly from your Dockerfile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deployment Section */}
      <section
        ref={servicesRef}
        className={`py-24 bg-blue-50/50 dark:bg-blue-950/20 relative ${
          servicesInView ? "fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              One-Click Service Deployment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deploy popular open-source services instantly with our
              pre-configured templates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="md:col-span-2 lg:col-span-3">
              <img
                src="/mockups/hcs-service-deploy-options.png"
                className="object-contain rounded-2xl  flex items-center justify-center"
              />{" "}
            </div>
            {serviceCategories.map((category) => (
              <div
                key={category.name}
                className={`shadow-none group relative bg-background/40 backdrop-blur-xl border border-input p-8 rounded-xl transition-all duration-300 ${
                  activeCategory === category.name
                    ? "scale-105 shadow-xl border-blue-500/50"
                    : "hover:scale-102 hover:shadow-lg"
                }`}
                onMouseEnter={() => setActiveCategory(category.name)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-tr from-${category.color}-600/5 to-${category.color}-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-lg bg-${category.color}-600/10 flex items-center justify-center mb-6`}
                  >
                    <category.icon
                      className={`h-6 w-6 text-${category.color}-600`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">
                    {category.name}
                  </h3>
                  <ul className="space-y-3">
                    {category.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-${category.color}-600/70`}
                        />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Check out all our marketplace
              services.
            </p>
            <button className="cta-button w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
              Explore Marketplace
              <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Features Grid */}
      <section
        ref={featuresRef}
        className={`py-24 relative ${featuresInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run containers in production
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`group text-left relative bg-background/40 backdrop-blur-xl border border-input   p-8 rounded-xl transition-all duration-300 ${
                  activeFeature === feature.id
                    ? "scale-105 shadow-xl border-blue-500/50"
                    : "hover:scale-102 hover:shadow-lg"
                }`}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-tr from-${feature.color}-600/5 to-${feature.color}-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                />
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-lg bg-${feature.color}-600/10 flex items-center justify-center mb-6`}
                  >
                    <feature.icon
                      className={`h-6 w-6 text-${feature.color}-600`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {feature.description}
                  </p>

                  <div className="space-y-6">
                    {feature.details.map((section, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground/80">
                          {section.title}
                        </h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                            >
                              <div
                                className={`w-1.5 h-1.5 rounded-full bg-${feature.color}-600/70`}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
