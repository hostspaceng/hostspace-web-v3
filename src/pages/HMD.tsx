import {
  ArrowRight,
  Shield,
  Gauge,
  Activity,
  Workflow,
  Sparkles,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const databaseTypes = [
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    color: "blue",
    description: "Advanced open-source database",
    features: [
      "ACID compliance",
      "JSON support",
      "Full-text search",
      "Extensible",
    ],
  },

  {
    name: "Redis",
    icon: "/icons/redis.svg",
    color: "pink",
    description: "In-memory data structure store",
    features: [
      "Ultra-fast performance",
      "Caching",
      "Pub/sub messaging",
      "Data structures",
    ],
  },
  {
    name: "MySQL",
    icon: "/icons/mysql.svg",
    color: "cyan",
    description: "Popular relational database",
    features: [
      "High performance",
      "Proven reliability",
      "Rich ecosystem",
      "Easy to use",
    ],
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
    color: "emerald",
    description: "Document-oriented database",
    features: [
      "Flexible schema",
      "Horizontal scaling",
      "Rich queries",
      "Document model",
    ],
  },
];

const features = [
  {
    id: "automation",
    title: "Automated Management",
    icon: Workflow,
    color: "blue",
    description: "Fully automated database operations",
    details: [
      {
        title: "Provisioning",
        items: [
          "One-click setup",
          "Configuration management",
          "Resource allocation",
        ],
      },
      {
        title: "Maintenance",
        items: ["Automated backups", "Version upgrades", "Patch management"],
      },
      {
        title: "Scaling",
        items: [
          "Auto-scaling",
          "Performance optimization",
          "Resource balancing",
        ],
      },
    ],
  },
  {
    id: "security",
    title: "Enterprise Security",
    icon: Shield,
    color: "purple",
    description: "Bank-grade security features",
    details: [
      {
        title: "Protection",
        items: [
          "Encryption at rest",
          "SSL/TLS encryption",
          "Network isolation",
        ],
      },
      {
        title: "Access Control",
        items: ["IAM integration", "Role-based access", "IP allowlisting"],
      },
      {
        title: "Compliance",
        items: ["Audit logging", "Compliance reports", "Security scanning"],
      },
    ],
  },
  {
    id: "reliability",
    title: "High Availability",
    icon: Activity,
    color: "emerald",
    description: "Enterprise-grade reliability",
    details: [
      {
        title: "Replication",
        items: [
          "Automatic failover",
          "Read replicas",
          "Cross-zone replication",
        ],
      },
      {
        title: "Backup",
        items: ["Point-in-time recovery", "Automated backups", "Quick restore"],
      },
      {
        title: "Monitoring",
        items: ["Health checks", "Performance metrics", "Proactive alerts"],
      },
    ],
  },
  {
    id: "performance",
    title: "Optimized Performance",
    icon: Gauge,
    color: "amber",
    description: "Maximum database performance",
    details: [
      {
        title: "Optimization",
        items: ["Query optimization", "Index management", "Connection pooling"],
      },
      {
        title: "Monitoring",
        items: ["Real-time metrics", "Query analytics", "Resource usage"],
      },
      {
        title: "Scaling",
        items: ["Vertical scaling", "Read scaling", "Write scaling"],
      },
    ],
  },
];

const metrics = [
  {
    title: "99.99%",
    description: "Uptime SLA",
  },
  {
    title: "< 10ms",
    description: "Average Latency",
  },
  {
    title: "24/7",
    description: "Expert Support",
  },
  {
    title: "100%",
    description: "Automated Backups",
  },
];

export function HMDPage() {
  const [heroRef, heroInView] = useInView();
  const [metricsRef, metricsInView] = useInView();
  const [databasesRef, databasesInView] = useInView();
  const [featuresRef, featuresInView] = useInView();

  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [activeDatabase, setActiveDatabase] = useState<string | null>(null);

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={`relative pt-32 pb-20 overflow-hidden ${
          heroInView ? "fade-in" : ""
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
        <div className="max-w-[1200px] mx-auto px-6 relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium bg-emerald-600/10 text-emerald-600">
              HostSpace Managed Databases
              <span className="px-2 py-0.5 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 rounded-full">
                Coming Soon
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Fully Managed
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
                Database Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Focus on your applications while we handle the complexities of
              database management. Enterprise-grade databases, fully managed and
              optimized for performance.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button className="cta-button w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-medium transition-colors duration-300 border border-border hover:border-foreground">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section
        ref={metricsRef}
        className={`py-24 relative ${metricsInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.title} className="text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
                  {metric.title}
                </div>
                <div className="mt-2 text-muted-foreground">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Database Types Section */}
      <section
        ref={databasesRef}
        className={`py-24 bg-emerald-50/50 dark:bg-emerald-950/20 relative ${
          databasesInView ? "fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Supported Databases
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from our selection of popular databases, each fully managed
              and optimized for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {databaseTypes.map((database) => {
              return (
                <div
                  key={database.name}
                  className={`group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl transition-all duration-300 ${
                    activeDatabase === database.name
                      ? "scale-105 shadow-xl border-emerald-500/50"
                      : "hover:scale-102 hover:shadow-lg"
                  }`}
                  onMouseEnter={() => setActiveDatabase(database.name)}
                  onMouseLeave={() => setActiveDatabase(null)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-${database.color}-600/5 to-${database.color}-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${database.color}-600/10 flex items-center justify-center mb-6`}
                    >
                      <img
                        src={database.icon}
                        className={`h-6 w-6 text-${database.color}-600`}
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">
                      {database.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {database.description}
                    </p>
                    <ul className="space-y-3">
                      {database.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-${database.color}-600/70`}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              Everything you need for production-ready database management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`group relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl transition-all duration-300 ${
                  activeFeature === feature.id
                    ? "scale-105 shadow-xl border-emerald-500/50"
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

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 to-cyan-600">
            <div className="absolute inset-0 bg-grid-white/10" />
            <div className="relative px-8 py-12 sm:px-12 sm:py-16 md:py-20 lg:px-16 lg:py-24 text-white text-center">
              <div className="mx-auto max-w-2xl space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium">
                  <Sparkles className="h-4 w-4" />
                  Coming Soon
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Be the First to Know
                </h2>
                <p className="text-lg text-emerald-100">
                  Join our waitlist to get early access and exclusive benefits
                  when we launch our managed database service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-emerald-100 focus:outline-none focus:ring-2 focus:ring-white/20"
                  />
                  <button className="shrink-0 bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-full font-medium transition-colors">
                    Join Waitlist
                  </button>
                </div>
                <p className="text-sm text-emerald-100">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
