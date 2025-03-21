import {
  Database,
  ArrowRight,
  Shield,
  Zap,
  Box,
  Terminal,
  Lock,
  Workflow,
  Blocks,
  CloudCog,
  Key,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { Link } from "react-router-dom";

const supportedDatabases = [
  {
    name: "PostgreSQL",
    icon: Database,
    color: "blue",
    status: "stable",
    description: "Advanced open-source relational database",
    features: [
      "ACID compliance",
      "JSON support",
      "Full-text search",
      "Extensible plugins",
    ],
  },
  {
    name: "Redis",
    icon: Zap,
    color: "red",
    status: "stable",
    description: "In-memory data structure store",
    features: [
      "Ultra-fast performance",
      "Built-in replication",
      "Transactions",
      "Automatic partitioning",
    ],
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "green",
    status: "stable",
    description: "Document-oriented NoSQL database",
    features: [
      "Document model",
      "High availability",
      "Horizontal scaling",
      "Rich queries",
    ],
  },
  {
    name: "MySQL",
    icon: Database,
    color: "orange",
    status: "stable",
    description: "Popular open-source relational database",
    features: [
      "ACID compliance",
      "High performance",
      "Comprehensive ecosystem",
      "Proven reliability",
    ],
  },
  {
    name: "MariaDB",
    icon: Database,
    color: "amber",
    status: "coming-soon",
    description: "Enhanced MySQL fork with additional features",
    features: [
      "MySQL compatibility",
      "Enhanced features",
      "Better performance",
      "Open source",
    ],
  },
  {
    name: "ClickHouse",
    icon: Blocks,
    color: "yellow",
    status: "coming-soon",
    description: "Column-oriented DBMS for analytics",
    features: [
      "Fast analytics",
      "Column storage",
      "Real-time queries",
      "Linear scalability",
    ],
  },
  {
    name: "DragonFly",
    icon: Database,
    color: "purple",
    status: "coming-soon",
    description: "Modern in-memory datastore",
    features: [
      "Redis compatibility",
      "Enhanced persistence",
      "Advanced features",
      "High throughput",
    ],
  },
  {
    name: "KeyDB",
    icon: Key,
    color: "indigo",
    status: "coming-soon",
    description: "Multithreaded Redis alternative",
    features: [
      "Redis compatible",
      "Multithreaded",
      "Higher performance",
      "Active-replication",
    ],
  },
];

const features = [
  {
    title: "Private Network Security",
    description:
      "Databases are hosted in private networks without direct internet access",
    icon: Shield,
    color: "blue",
  },
  {
    title: "Cloudflare Tunnel Access",
    description: "Secure encrypted connections via Cloudflare tunnels",
    icon: Lock,
    color: "purple",
  },
  {
    title: "Container Integration",
    description: "Seamless integration with Docker and Kubernetes",
    icon: Box,
    color: "emerald",
  },
  {
    title: "Automated Management",
    description: "Automated backups, updates, and maintenance",
    icon: Workflow,
    color: "amber",
  },
];

const deploymentTypes = [
  {
    title: "Docker Compose",
    description: "Connect using Docker Compose with Cloudflare sidecar",
    icon: Box,
    code: `version: '3.8'

services:
  app:
    image: your-app-image:latest
    environment:
      DATABASE_HOST: "cloudflared"
      DATABASE_PORT: "5432"
    depends_on:
      - cloudflared
    networks:
      - app-network

  cloudflared:
    image: cloudflare/cloudflared:latest
    command: ["access", "tcp", "--hostname", "ls0g0c.hcsapp.cloud", "--url", "0.0.0.0:5432"]
    ports:
      - "5432"
    networks:
      - app-network

networks:
  app-network:`,
  },
  {
    title: "Kubernetes",
    description: "Deploy with Kubernetes using sidecar container",
    icon: CloudCog,
    code: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deployment
spec:
  template:
    spec:
      containers:
      - name: app
        env:
        - name: DATABASE_HOST
          value: "localhost"
        - name: DATABASE_PORT
          value: "5432"

      - name: cloudflared
        image: cloudflare/cloudflared:latest
        args: ["access", "tcp", "--hostname", "ls0g0c.hcsapp.cloud", "--url", "0.0.0.0:5432"]
        ports:
        - containerPort: 5432`,
  },
  {
    title: "Linux Service",
    description: "Run as a systemd service on Linux servers",
    icon: Terminal,
    code: `[Unit]
Description=Cloudflare Access Tunnel
After=network.target

[Service]
ExecStart=/usr/local/bin/cloudflared access tcp --hostname ls0g0c.hcsapp.cloud --url 0.0.0.0:5432
Restart=on-failure
User=nobody
Group=nogroup

[Install]
WantedBy=multi-user.target`,
  },
];

export function HMDPage() {
  const [heroRef, heroInView] = useInView();
  const [databasesRef, databasesInView] = useInView();
  const [featuresRef, featuresInView] = useInView();
  const [deploymentRef, deploymentInView] = useInView();
  const [activeDeployment, setActiveDeployment] = useState(
    deploymentTypes[0].title
  );

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
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              Fully Managed
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-cyan-600">
                Database Solutions
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Highly available and scalable database solutions with
              enterprise-grade security, automated management, and seamless
              integration capabilities.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link to="https://ui.hostspacecloud.com/login" target="_blank">
                <button className="cta-button w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center justify-center">
                  Get Started <ArrowRight className="ml-2 h-4 w-4 arrow-icon" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Databases Grid */}
      <section
        ref={databasesRef}
        className={`py-24 relative ${databasesInView ? "fade-in" : ""}`}
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
            {supportedDatabases.map((db) => {
              const Icon = db.icon;
              return (
                <div
                  key={db.name}
                  className="group text-left relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-${db.color}-600/5 to-${db.color}-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${db.color}-600/10 flex items-center justify-center mb-6`}
                    >
                      <Icon className={`h-6 w-6 text-${db.color}-600`} />
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <h3 className="text-xl font-semibold">{db.name}</h3>
                      {
                        db.status === "stable" && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded-full">
                            Stable
                          </span>
                        )
                        //  : (
                        //   <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                        //     Coming Soon
                        //   </span>
                        // )
                      }
                    </div>
                    <p className="text-muted-foreground mb-6">
                      {db.description}
                    </p>
                    <ul className="space-y-2">
                      {db.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full bg-${db.color}-600/70`}
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

      {/* Features Section */}
      <section
        ref={featuresRef}
        className={`py-24 bg-emerald-50/50 dark:bg-emerald-950/20 relative ${
          featuresInView ? "fade-in" : ""
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Enterprise-Grade Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with security, reliability, and ease of use in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="group text-left relative bg-background/40 backdrop-blur-xl border border-white/10 p-8 rounded-xl hover-lift"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-${feature.color}-600/5 to-${feature.color}-400/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity`}
                  />
                  <div className="relative">
                    <div
                      className={`w-12 h-12 rounded-lg bg-${feature.color}-600/10 flex items-center justify-center mb-6`}
                    >
                      <Icon className={`h-6 w-6 text-${feature.color}-600`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deployment Section */}
      <section
        ref={deploymentRef}
        className={`py-24 relative ${deploymentInView ? "fade-in" : ""}`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Easy Integration
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect to your databases securely using Cloudflare tunnels
            </p>
          </div>

          <div className="grid lg:grid-cols-[300px_1fr] gap-8">
            <div className="space-y-4">
              {deploymentTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button
                    key={type.title}
                    onClick={() => setActiveDeployment(type.title)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      activeDeployment === type.title
                        ? "bg-emerald-600 text-white"
                        : "hover:bg-secondary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5" />
                      <div>
                        <div className="font-medium">{type.title}</div>
                        <div className="text-sm opacity-80">
                          {type.description}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-600/5 to-cyan-600/5 rounded-xl" />
              <div className="relative bg-background/40 backdrop-blur-xl border border-white/10 rounded-xl p-6">
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="language-yaml">
                    {
                      deploymentTypes.find((t) => t.title === activeDeployment)
                        ?.code
                    }
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
