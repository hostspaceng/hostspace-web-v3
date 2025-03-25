import { useState } from "react";
import {
  Calculator,
  HelpCircle,
  Plus,
  Minus,
  Server,
  Cloud,
  Shield,
  AlertCircle,
} from "lucide-react";

type HKEPLAN = "custom" | "professional" | "ultimate";

interface PlanQuantities {
  [key: string]: number;
}

const planDetails = {
  custom: {
    price: 20000,
    description:
      "Bring your own servers. You provide the hardware, we manage the Kubernetes cluster.",
    icon: Server,
    color: "blue",
  },
  professional: {
    price: 50000,
    description: "4 vCPU & 6GB RAM per node. Perfect for production workloads.",
    specs: {
      cpu: 4,
      ram: 6,
    },
    icon: Cloud,
    color: "purple",
  },
  ultimate: {
    price: 100000,
    description:
      "6 vCPU & 16GB RAM per node. For resource-intensive applications.",
    specs: {
      cpu: 6,
      ram: 16,
    },
    icon: Shield,
    color: "emerald",
  },
};

export function HKECalculator() {
  const [quantities, setQuantities] = useState<PlanQuantities>({
    custom: 0,
    professional: 0,
    ultimate: 0,
  });

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleQuantityChange = (plan: string, value: number) => {
    setQuantities((prev) => ({
      ...prev,
      [plan]: Math.max(0, value), // Ensure quantity doesn't go below 0
    }));
  };

  const calculateTotal = () => {
    return Object.entries(quantities).reduce((total, [plan, quantity]) => {
      return total + planDetails[plan as HKEPLAN].price * quantity;
    }, 0);
  };

  const calculateTotalResources = () => {
    let totalCPU = 0;
    let totalRAM = 0;

    Object.entries(quantities).forEach(([plan, quantity]) => {
      const details = planDetails[plan as HKEPLAN];

      //   @ts-expect-error error
      if (details.specs) {
        //   @ts-expect-error error

        totalCPU += details.specs.cpu * quantity;
        //   @ts-expect-error error

        totalRAM += details.specs.ram * quantity;
      }
    });

    return { totalCPU, totalRAM };
  };

  const { totalCPU, totalRAM } = calculateTotalResources();

  return (
    <div className="bg-card border rounded-xl p-6 space-y-6 text-left">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-purple-600/10 flex items-center justify-center">
          <Calculator className="h-5 w-5 text-purple-600" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">
            Kubernetes Cluster Calculator
          </h3>
          <p className="text-sm text-muted-foreground">
            Calculate costs and resources based on your cluster requirements
          </p>
        </div>
      </div>

      {/* Info Alert */}
      <div className="flex items-start gap-4 p-4 bg-blue-600/10 text-blue-600 rounded-lg">
        <AlertCircle className="h-5 w-5 mt-0.5" />
        <div className="text-sm">
          <strong>How it works:</strong> Each plan represents a separate
          Kubernetes cluster. You can mix and match different plans based on
          your needs. For example, you might want a Professional cluster for
          production and a Custom cluster for development.
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          {Object.entries(planDetails).map(([plan, details]) => {
            const Icon = details.icon;
            return (
              <div key={plan} className="space-y-2">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`w-8 h-8 rounded-lg bg-${details.color}-600/10 flex items-center justify-center`}
                  >
                    <Icon className={`h-4 w-4 text-${details.color}-600`} />
                  </div>
                  <div>
                    <label className="font-medium">
                      {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan
                    </label>
                    <div className="text-sm text-muted-foreground">
                      {details.description}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    Price per node
                  </span>
                  <span className="text-sm font-medium">
                    {formatCurrency(details.price)}/month
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      handleQuantityChange(plan, quantities[plan] - 1)
                    }
                    disabled={quantities[plan] === 0}
                    className="p-2 rounded-lg border hover:bg-secondary transition-colors disabled:opacity-50"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min="0"
                    value={quantities[plan]}
                    onChange={(e) =>
                      handleQuantityChange(plan, parseInt(e.target.value) || 0)
                    }
                    className="w-20 px-3 py-2 text-center rounded-lg bg-background border border-input focus:border-purple-600 focus:ring focus:ring-purple-600/20 transition-colors"
                  />
                  <button
                    onClick={() =>
                      handleQuantityChange(plan, quantities[plan] + 1)
                    }
                    className="p-2 rounded-lg border hover:bg-secondary transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-secondary/50 rounded-xl p-6">
          <h4 className="font-medium mb-4">Summary</h4>
          <div className="space-y-6">
            {/* Cost Breakdown */}
            <div className="space-y-3">
              <h5 className="text-sm font-medium text-muted-foreground">
                Cost Breakdown
              </h5>
              {Object.entries(quantities).map(
                ([plan, quantity]) =>
                  quantity > 0 && (
                    <div
                      key={plan}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-muted-foreground">
                        {plan.charAt(0).toUpperCase() + plan.slice(1)} Plan ×{" "}
                        {quantity}
                      </span>
                      <span>
                        {formatCurrency(
                          planDetails[plan as HKEPLAN].price * quantity
                        )}
                      </span>
                    </div>
                  )
              )}
              <div className="pt-3 mt-3 border-t">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Monthly Total</span>
                  <span className="text-xl font-bold">
                    {formatCurrency(calculateTotal())}
                  </span>
                </div>
              </div>
            </div>

            {/* Resource Summary */}
            {(totalCPU > 0 || totalRAM > 0) && (
              <div className="space-y-3">
                <h5 className="text-sm font-medium text-muted-foreground">
                  Total Resources
                </h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded bg-background/40 p-3">
                    <div className="text-sm text-muted-foreground">
                      Total CPU
                    </div>
                    <div className="text-xl font-bold">{totalCPU} Cores</div>
                  </div>
                  <div className="rounded bg-background/40 p-3">
                    <div className="text-sm text-muted-foreground">
                      Total RAM
                    </div>
                    <div className="text-xl font-bold">{totalRAM} GB</div>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <HelpCircle className="h-4 w-4 shrink-0 mt-0.5" />
              <p>
                Each node represents a separate machine in your Kubernetes
                cluster. The total resources shown are the sum across all nodes
                in your selected plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
