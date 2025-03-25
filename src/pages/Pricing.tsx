import { useState } from "react";
import { Check, Server, Cloud, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import { HMDPricingCalculator } from "@/components/HMDPricingCalculator";
import { HKECalculator } from "@/components/HKEPricingCalculator";

const hcsPlans = [
  {
    name: "Basic",
    price: "₦20,000",
    features: [
      "Dedicated Server",
      "1 vCPU & 2 GB RAM",
      "20GB Storage",
      "Up to 5 active deployments",
      "SSL/TLS Management",
      "Webhooks & Automation",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₦50,000",
    features: [
      "Dedicated Server",
      "4 vCPU & 6 GB RAM",
      "100GB Storage",
      "Unlimited Deployment",
      "Monitoring & Logging",
      "SSL/TLS Management",
      "Backup & Restore",
      "Auto-Scaling",
      "Webhooks & Automation",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "₦100,000",
    features: [
      "Dedicated Server",
      "6 vCPU & 16 GB RAM",
      "200GB Storage",
      "Unlimited Deployment",
      "Monitoring & Logging",
      "SSL/TLS Management",
      "Backup & Restore",
      "Auto-Scaling",
      "Webhooks & Automation",
    ],
    popular: false,
  },
];

const hkePlans = [
  {
    name: "Custom",
    price: "₦20,000",
    features: [
      "Dedicated Server",
      "Monitoring & Logging",
      "Security Insights",
      "SSL/TLS Management",
      "Backup & Restore",
      "Scaling Recommendations ",
      "Webhooks & Automation",
      "Cluster Advisory",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "₦50,000",
    features: [
      "Dedicated Server",
      "4 vCPU & 6 GB RAM",
      "400GB SSD Storage",
      "Monitoring & Logging",
      "Security Insights",
      "SSL/TLS Management",
      "Backup & Restore",
      "Scaling Recommendations ",
      "Webhooks & Automation",
      "Cluster Advisory",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "₦100,000",
    features: [
      "Dedicated Server",
      "6 vCPU & 16 GB RAM",
      "400GB SSD Storage",
      "Monitoring & Logging",
      "Security Insights",
      "SSL/TLS Management",
      "Backup & Restore",
      "Scaling Recommendations ",
      "Webhooks & Automation",
      "Cluster Advisory",
      "Advanced Support",
    ],
    popular: false,
  },
];

const dbPlans = [
  {
    name: "PostgreSQL",
    price: "₦3,400",
    features: [
      "Base cost includes basic setup",
      "Storage: ₦340/GB",
      "Read Operations: ₦85/million",
      "Write Operations: ₦85/million",
      "Automated Backups",
      "SSL/TLS Encryption",
      "99.9% Uptime SLA",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Redis",
    price: "₦3,400",
    features: [
      "Base cost includes basic setup",
      "Storage: ₦170/GB",
      "Read Operations: ₦68/million",
      "Write Operations: ₦68/million",
      "High-Performance Caching",
      "Data Persistence",
      "Pub/Sub Messaging",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "DragonFly",
    price: "₦5,100",
    features: [
      "Base cost includes basic setup",
      "Storage: ₦255/GB",
      "Read Operations: ₦85/million",
      "Write Operations: ₦85/million",
      "Redis Compatible",
      "Enhanced Persistence",
      "Multi-Threading Support",
      "Advanced Features",
    ],
    popular: false,
  },
  {
    name: "KeyDB",
    price: "₦3,400",
    features: [
      "Base cost includes basic setup",
      "Storage: ₦170/GB",
      "Read Operations: ₦68/million",
      "Write Operations: ₦68/million",
      "Redis Compatible",
      "Multi-Threading",
      "Active Replication",
      "High Performance",
    ],
    popular: false,
  },
  {
    name: "ClickHouse",
    price: "₦6,800",
    features: [
      "Base cost includes basic setup",
      "Storage: ₦425/GB",
      "Read Operations: ₦102/million",
      "Write Operations: ₦102/million",
      "Column-Oriented DBMS",
      "Real-Time Analytics",
      "High Performance",
      "Linear Scalability",
    ],
    popular: false,
  },
  {
    name: "MongoDB",
    price: "₦5,100",
    features: [
      "Base cost includes basic setup",
      "Storage: ₦340/GB",
      "Read Operations: ₦85/million",
      "Write Operations: ₦85/million",
      "Document Database",
      "Horizontal Scaling",
      "Advanced Querying",
      "Dedicated Support",
    ],
    popular: false,
  },
  {
    name: "MySQL",
    price: "₦3,400",
    features: [
      "Base cost includes basic setup",
      "Storage: ₦340/GB",
      "Read Operations: ₦85/million",
      "Write Operations: ₦85/million",
      "ACID Compliance",
      "High Performance",
      "Comprehensive Ecosystem",
      "Proven Reliability",
    ],
    popular: false,
  },
  {
    name: "MariaDB",
    price: "₦3,400",
    features: [
      "Base cost includes basic setup",
      "Storage: ₦340/GB",
      "Read Operations: ₦85/million",
      "Write Operations: ₦85/million",
      "MySQL Compatible",
      "Enhanced Features",
      "Better Performance",
      "Open Source",
    ],
    popular: false,
  },
];

export function Pricing() {
  const [activeProduct, setActiveProduct] = useState<"hcs" | "hke" | "db">(
    "hcs"
  );
  // const [loading, setLoading] = useState<string | null>(null);

  // const handleSubscribe = async (planName: string) => {
  //   setLoading(planName);
  //   try {
  //     // Simulate API call
  //     await new Promise((resolve) => setTimeout(resolve, 1500));
  //     console.log("Subscribing to plan:", planName);
  //     // Here you would typically:
  //     // 1. Call your subscription API
  //     // 2. Handle the response
  //     // 3. Redirect to payment page or show success message
  //   } catch (error) {
  //     console.error("Subscription error:", error);
  //   } finally {
  //     setLoading(null);
  //   }
  // };

  const getProductInfo = () => {
    switch (activeProduct) {
      case "hcs":
        return {
          name: "HostSpace Container Service",
          description:
            "Deploy and manage containers with ease. Perfect for teams of all sizes.",
          plans: hcsPlans,
          img: "/HCS-Icon.svg",
          color: "blue",
        };
      case "hke":
        return {
          name: "HostSpace Kubernetes Engine",
          description:
            "Enterprise-grade Kubernetes orchestration for production workloads.",
          plans: hkePlans,
          img: "/HKE-Icon.svg",
          color: "purple",
          showCalculator: true,
        };
      case "db":
        return {
          name: "HostSpace Managed Databases",
          description:
            "Fully managed database solutions for your applications.",
          plans: dbPlans,
          icon: Database,
          color: "emerald",
          showCalculator: true,
          // comingSoon: true,
        };
      default:
        return {
          name: "HostSpace Container Service",
          description:
            "Deploy and manage containers with ease. Perfect for teams of all sizes.",
          plans: hcsPlans,
          icon: Server,
          color: "blue",
        };
    }
  };

  const productInfo = getProductInfo();
  const Icon = productInfo.icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business with our flexible pricing
            options
          </p>
        </div>

        {/* Product Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-secondary">
            <button
              onClick={() => setActiveProduct("hcs")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeProduct === "hcs"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary-foreground/10"
              )}
            >
              <Server className="h-4 w-4" />
              HCS
            </button>
            <button
              onClick={() => setActiveProduct("hke")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeProduct === "hke"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary-foreground/10"
              )}
            >
              <Cloud className="h-4 w-4" />
              HKE
            </button>
            <button
              onClick={() => setActiveProduct("db")}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeProduct === "db"
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary-foreground/10"
              )}
            >
              <Database className="h-4 w-4" />
              HMDB
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            {productInfo.img ? (
              <img src={`/icons/${productInfo.img}`} className="h-10 w-10" />
            ) : (
              Icon && (
                <Icon className={`h-6 w-6 text-${productInfo.color}-600`} />
              )
            )}
            <h2 className="text-2xl font-bold">{productInfo.name}</h2>
            {/* {productInfo?.comingSoon && (
              <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                Coming Soon
              </span>
            )} */}
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {productInfo.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {productInfo.plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl bg-background border",
                plan.popular
                  ? "border-blue-600/50 scale-105 shadow-xl"
                  : "border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  {plan.price === "Coming Soon" ? (
                    <span className="text-lg font-medium text-muted-foreground">
                      Coming Soon
                    </span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      <span className="ml-1 text-sm text-muted-foreground">
                        /month
                      </span>
                    </>
                  )}
                </div>
                {/* <button
                  onClick={() => handleSubscribe(plan.name)}
                  disabled={
                    loading === plan.name || plan.price === "Coming Soon"
                  }
                  className={cn(
                    "mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2",
                    (loading === plan.name || plan.price === "Coming Soon") &&
                      "opacity-50 cursor-not-allowed"
                  )}
                >
                  {loading === plan.name ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button> */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-600 mt-1" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Calculator for Databases */}
        {productInfo.showCalculator && (
          <div className="my-16">
            {activeProduct === "db" ? (
              <HMDPricingCalculator />
            ) : (
              <HKECalculator />
            )}
          </div>
        )}

        {/* Contact Sales
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need a custom plan?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Contact our sales team
            </a>
          </p>
        </div> */}
      </div>
    </div>
  );
}
