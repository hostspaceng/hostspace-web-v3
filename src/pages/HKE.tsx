import {
  Cloud,
  ArrowRight,
  Shield,
  Activity,
  Lock,
  Database,
  Network,
  Workflow,
  Plus,
  FilePenLine,
  Server,
  Archive,
  FolderKanban,
  Bot,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { Link } from "react-router-dom";

const marketplaceCategories = [
  {
    name: "CMS",
    icon: FilePenLine,
    color: "purple",
    services: ["WordPress"],
  },
  {
    name: "DevOps Tools",
    icon: Workflow,
    color: "purple",
    services: ["ArgoCD"],
  },
  {
    name: "Storage",
    icon: Archive,
    color: "purple",
    services: ["NFS"],
  },
  {
    name: "Management",
    icon: FolderKanban,
    color: "purple",
    services: ["Portainer"],
  },
  {
    name: "Security",
    icon: Shield,
    color: "purple",
    services: ["Cert Manager"],
  },
  {
    name: "AI/ML",
    icon: Bot,
    color: "purple",
    services: ["KubeAI"],
  },
  {
    name: "Monitoring",
    icon: Activity,
    color: "purple",
    services: ["VictoriaMetrics", "KubePrometheusStack", "Loki"],
  },
  {
    name: "Networking",
    icon: Network,
    color: "purple",
    services: ["MetalLB", "Nginx Ingress"],
  },

  {
    name: "Database",
    icon: Database,
    color: "purple",
    services: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
  },
];

// const features = [
//   {
//     id: "cluster-management",
//     title: "Cluster Management",
//     icon: Cloud,
//     color: "blue",
//     description: "Simplified cluster creation and management",
//     details: [
//       {
//         title: "Creation",
//         items: ["Version selection", "Node configuration", "SSH integration"],
//       },
//       {
//         title: "Management",
//         items: ["Node scaling", "Version upgrades", "Backup management"],
//       },
//       {
//         title: "Access Control",
//         items: ["RBAC management", "Kubeconfig generation", "User management"],
//       },
//     ],
//   },
//   {
//     id: "monitoring",
//     title: "Monitoring",
//     icon: Activity,
//     color: "purple",
//     description: "Comprehensive monitoring and observability",
//     details: [
//       {
//         title: "Metrics",
//         items: [
//           "Resource utilization",
//           "Performance metrics",
//           "Custom metrics",
//         ],
//       },
//       {
//         title: "Logging",
//         items: ["Centralized logging", "Log aggregation", "Search & analysis"],
//       },
//       {
//         title: "Alerting",
//         items: ["Custom alerts", "Alert routing", "Incident management"],
//       },
//     ],
//   },
//   {
//     id: "security",
//     title: "Security",
//     icon: Shield,
//     color: "emerald",
//     description: "Enterprise-grade security features",
//     details: [
//       {
//         title: "Access Control",
//         items: ["RBAC policies", "Network policies", "Pod security"],
//       },
//       {
//         title: "Encryption",
//         items: ["TLS encryption", "Secret management", "Certificate rotation"],
//       },
//       {
//         title: "Compliance",
//         items: ["Security scanning", "Audit logging", "Compliance reports"],
//       },
//     ],
//   },
//   {
//     id: "marketplace",
//     title: "Marketplace",
//     icon: Blocks,
//     color: "amber",
//     description: "One-click application deployment",
//     details: [
//       {
//         title: "Applications",
//         items: ["Curated apps", "Version management", "Dependency handling"],
//       },
//       {
//         title: "Integration",
//         items: ["GitOps ready", "CI/CD tools", "Monitoring stacks"],
//       },
//       {
//         title: "Management",
//         items: ["Updates & patches", "Configuration", "Lifecycle management"],
//       },
//     ],
//   },
//   {
//     id: "networking",
//     title: "Networking",
//     icon: Network,
//     color: "rose",
//     description: "Advanced networking capabilities",
//     details: [
//       {
//         title: "Service Mesh",
//         items: ["Traffic management", "Service discovery", "Load balancing"],
//       },
//       {
//         title: "Ingress",
//         items: ["Automatic SSL/TLS", "Domain routing", "Traffic rules"],
//       },
//       {
//         title: "Security",
//         items: ["Network policies", "Encryption", "Access control"],
//       },
//     ],
//   },
//   {
//     id: "optimization",
//     title: "Optimization",
//     icon: Gauge,
//     color: "cyan",
//     description: "Intelligent resource optimization",
//     details: [
//       {
//         title: "Resources",
//         items: ["Auto-scaling", "Resource quotas", "Cost optimization"],
//       },
//       {
//         title: "Performance",
//         items: [
//           "Performance tuning",
//           "Bottleneck detection",
//           "Recommendations",
//         ],
//       },
//       {
//         title: "Efficiency",
//         items: ["Workload analysis", "Resource tracking", "Optimization tips"],
//       },
//     ],
//   },
// ];

export function HKEPage() {
  const [heroRef, heroInView] = useInView();
  const [clusterRef, clusterInView] = useInView();
  const [marketplaceRef, marketplaceInView] = useInView();
  const [featuresRef, featuresInView] = useInView();

  // const [activeFeature, setActiveFeature] = useState<string | null>(null);
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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-purple-600/10 text-purple-600">
              HostSpace Kubernetes Engine
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Simplifying Kubernetes
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                For Everyone
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience seamless Kubernetes orchestration with our powerful,
              yet simple platform. Built for teams who want enterprise-grade
              container orchestration without the complexity.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link to="https://ui.hostspacecloud.com/login" target="_blank">
                <button className="cta-button w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                </button>
              </Link>
              {/* <button className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium transition-colors duration-300 border border-border hover:border-foreground">
                Schedule Demo
              </button> */}
            </div>
          </div>
        </div>
      </section>
      <img
        src="/mockups/HKE-mockup-2.png"
        className="object-contain rounded-2xl  flex items-center justify-center"
      />{" "}
      {/* Cluster Creation Section */}
      <section
        ref={clusterRef}
        className={`py-24 relative ${clusterInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6 text-left">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Create Clusters in Minutes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deploy production-ready Kubernetes clusters with just a few clicks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Version Selection */}
            <div className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center mb-6">
                  <Cloud className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Version Selection
                </h3>
                <p className="text-muted-foreground">
                  Choose from multiple Kubernetes versions with automated
                  upgrades.
                </p>
              </div>
            </div>

            {/* Node Configuration */}
            <div className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-pink-600/10 flex items-center justify-center mb-6">
                  <Server className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Node Configuration
                </h3>
                <p className="text-muted-foreground">
                  Customize your cluster with flexible node configurations.
                </p>
              </div>
            </div>

            {/* Access Control */}
            <div className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-purple-600/10 flex items-center justify-center mb-6">
                  <Lock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Access Control</h3>
                <p className="text-muted-foreground">
                  Secure your cluster with built-in RBAC and authentication.
                </p>
              </div>
            </div>

            {/* Monitoring Setup */}
            <div className="group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 to-pink-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-pink-600/10 flex items-center justify-center mb-6">
                  <Activity className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Monitoring Setup</h3>
                <p className="text-muted-foreground">
                  Get instant visibility with pre-configured monitoring tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Marketplace Section */}
      <img
        src="/mockups/HKE-mockup-1.png"
        className="object-contain rounded-2xl  flex items-center justify-center"
      />{" "}
      <section
        ref={marketplaceRef}
        className={`py-24 bg-purple-50/50 dark:bg-purple-950/20 relative ${
          marketplaceInView ? "fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              One-Click Application Deployment
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Deploy production-ready applications instantly with our curated
              marketplace
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketplaceCategories.map((category) => (
              <div
                key={category.name}
                className={` group relative bg-background/40 backdrop-blur-xl border border-input p-8 rounded-xl transition-all duration-300 ${
                  activeCategory === category.name
                    ? "scale-105 shadow-xl border-purple-500/50"
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
                  {/* <div className="mt-6 pt-6 border-t border-border/50">
                    <button className="text-sm font-medium text-purple-600 hover:text-purple-700 dark:text-purple-500 dark:hover:text-purple-400 inline-flex items-center gap-2">
                      View All Applications
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-6">
              Don't see what you need? Go to Hostspace Kubernetes Engine
            </p>
            <button className="cta-button bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
              Explore HKE marketplace <Plus className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
      {/* Features Grid */}
      <section
        ref={featuresRef}
        className={`py-24 relative ${featuresInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          {/* <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run Kubernetes in production
            </p>
          </div> */}

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl transition-all duration-300 ${
                  activeFeature === feature.id
                    ? "scale-105 shadow-xl border-purple-500/50"
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
          </div> */}
        </div>
      </section>
    </main>
  );
}
