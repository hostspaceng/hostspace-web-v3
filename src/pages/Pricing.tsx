import { Check, Server, Cloud, Database } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const hcsPlans = [
  {
    name: "Free Plan",
    price: "-",
    features: [
      "Shared Server",
      "Shared CPU and Memory",
      "Shared Storage",
      "Up to 3 active deployments",
      "Monitoring & Logging",
      "SSL/TLS Management",
    ],
  },
  {
    name: "Basic",
    price: "₦20,000",
    features: [
      "Dedicated Server",
      "1 vCPU & 2 GB RAM",
      "30GB Storage",
      "Unlimited deployments",
      "Monitoring & Logging",
      "Security Insights ",
      "SSL/TLS Management",
      "Scaling Recommendations",
      "Alerts & Notifications",
      "Webhooks & Automation",
    ],
  },
  {
    name: "Professional",
    price: "₦50,000",
    features: [
      "Dedicated Server",
      "4 vCPU & 6 GB RAM",
      "400GB Storage",
      "Unlimited deployments",
      "Monitoring & Logging",
      "Security Insights ",
      "SSL/TLS Management",
      "Backup & Restore",
      "Scaling Recommendations",
      "Alerts & Notifications",
      "Webhooks & Automation",
    ],
  },
  {
    name: "Ultimate",
    price: "₦100,000",
    features: [
      "Dedicated Server",
      "6 vCPU & 16 GB RAM",
      "400GB Storage",
      "Unlimited Deployment",
      "Monitoring & Logging",
      "Security Insights ",
      "SSL/TLS Management",
      "Backup & Restore",
      "Scaling Recommendations",
      "Alerts & Notifications",
      "Webhooks & Automation",
      "Advanced Support",
    ],
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
  },
];

// Coming soon placeholder plans for managed databases
const dbPlans = [
  {
    name: "Basic",
    price: "Coming Soon",
    features: [
      "Single Database Instance",
      "Automated Backups",
      "Basic Monitoring",
      "SSL/TLS Encryption",
      "99.9% Uptime SLA",
      "Email Support",
    ],
  },
  {
    name: "Professional",
    price: "Coming Soon",
    features: [
      "High Availability Setup",
      "Automated Backups",
      "Advanced Monitoring",
      "SSL/TLS Encryption",
      "99.99% Uptime SLA",
      "Point-in-Time Recovery",
      "Read Replicas",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Coming Soon",
    features: [
      "Multi-Region Setup",
      "Automated Backups",
      "Enterprise Monitoring",
      "SSL/TLS Encryption",
      "99.995% Uptime SLA",
      "Point-in-Time Recovery",
      "Read Replicas",
      "Dedicated Support Team",
      "Custom Backup Policies",
      "Advanced Security Features",
    ],
  },
];

export function Pricing() {
  const [activeProduct, setActiveProduct] = useState<'hcs' | 'hke' | 'db'>('hcs');

  const getProductInfo = () => {
    switch (activeProduct) {
      case 'hcs':
        return {
          name: 'HostSpace Container Service',
          description: 'Deploy and manage containers with ease. Perfect for teams of all sizes.',
          plans: hcsPlans,
          gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
          popularIndex: 3,
        };
      case 'hke':
        return {
          name: 'HostSpace Kubernetes Engine',
          description: 'Enterprise-grade Kubernetes orchestration for production workloads.',
          plans: hkePlans,
          gridCols: 'grid-cols-1 md:grid-cols-3',
          popularIndex: 2,
        };
      case 'db':
        return {
          name: 'HostSpace Managed Databases',
          description: 'Fully managed database solutions for your applications.',
          plans: dbPlans,
          gridCols: 'grid-cols-1 md:grid-cols-3',
          popularIndex: 1,
          comingSoon: true,
        };
      default:
        return {
          name: 'HostSpace Container Service',
          description: 'Deploy and manage containers with ease. Perfect for teams of all sizes.',
          plans: hcsPlans,
          gridCols: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
          popularIndex: 3,
        };
    }
  };

  const productInfo = getProductInfo();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-[1200px] mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl font-bold tracking-tight">
            Simple, transparent pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business with our flexible pricing options
          </p>
        </div>

        {/* Product Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full p-1 bg-secondary">
            <button
              onClick={() => setActiveProduct('hcs')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeProduct === 'hcs'
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary-foreground/10"
              )}
            >
              <Server className="h-4 w-4" />
              Container Service
            </button>
            <button
              onClick={() => setActiveProduct('hke')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeProduct === 'hke'
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary-foreground/10"
              )}
            >
              <Cloud className="h-4 w-4" />
              Kubernetes Engine
            </button>
            <button
              onClick={() => setActiveProduct('db')}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeProduct === 'db'
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary-foreground/10"
              )}
            >
              <Database className="h-4 w-4" />
              Databases
            </button>
          </div>
        </div>

        {/* Product Description */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <h2 className="text-2xl font-bold">{productInfo.name}</h2>
            {productInfo.comingSoon && (
              <span className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full">
                Coming Soon
              </span>
            )}
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {productInfo.description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className={cn(
          "grid gap-8",
          productInfo.gridCols
        )}>
          {productInfo.plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl bg-background border",
                index === productInfo.popularIndex
                  ? "border-blue-600/50"
                  : "border-border"
              )}
            >
              {index === productInfo.popularIndex && !productInfo.comingSoon && (
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
                    <span className="text-lg font-medium text-muted-foreground">Coming Soon</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== "-" && (
                        <span className="ml-1 text-sm text-muted-foreground">/month</span>
                      )}
                    </>
                  )}
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-600 mt-1" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}
        </div>

        {/* Contact Sales */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Need a custom plan? {" "}
            <a href="#" className="text-blue-600 hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}