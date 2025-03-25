import { useState } from "react";
import { Calculator, HelpCircle } from "lucide-react";

interface DatabasePricing {
  name: string;
  baseCost: number;
  storagePerGB: number;
  readOpsPerMillion: number;
  writeOpsPerMillion: number;
}

const databasePricing: DatabasePricing[] = [
  {
    name: "PostgreSQL",
    baseCost: 3400,
    storagePerGB: 340,
    readOpsPerMillion: 85,
    writeOpsPerMillion: 85,
  },
  {
    name: "Redis",
    baseCost: 3400,
    storagePerGB: 170,
    readOpsPerMillion: 68,
    writeOpsPerMillion: 68,
  },
  {
    name: "DragonFly",
    baseCost: 5100,
    storagePerGB: 255,
    readOpsPerMillion: 85,
    writeOpsPerMillion: 85,
  },
  {
    name: "KeyDB",
    baseCost: 3400,
    storagePerGB: 170,
    readOpsPerMillion: 68,
    writeOpsPerMillion: 68,
  },
  {
    name: "ClickHouse",
    baseCost: 6800,
    storagePerGB: 425,
    readOpsPerMillion: 102,
    writeOpsPerMillion: 102,
  },
  {
    name: "MongoDB",
    baseCost: 5100,
    storagePerGB: 340,
    readOpsPerMillion: 85,
    writeOpsPerMillion: 85,
  },
  {
    name: "MySQL",
    baseCost: 3400,
    storagePerGB: 340,
    readOpsPerMillion: 85,
    writeOpsPerMillion: 85,
  },
  {
    name: "MariaDB",
    baseCost: 3400,
    storagePerGB: 340,
    readOpsPerMillion: 85,
    writeOpsPerMillion: 85,
  },
];

export function HMDPricingCalculator() {
  const [selectedDb, setSelectedDb] = useState<string>(databasePricing[0].name);
  const [storage, setStorage] = useState<number>(1);
  const [readOps, setReadOps] = useState<number>(1);
  const [writeOps, setWriteOps] = useState<number>(1);

  const selectedPricing = databasePricing.find((db) => db.name === selectedDb)!;

  const calculateTotal = () => {
    const baseCost = selectedPricing.baseCost;
    const storageCost = storage * selectedPricing.storagePerGB;
    const readOpsCost = readOps * selectedPricing.readOpsPerMillion;
    const writeOpsCost = writeOps * selectedPricing.writeOpsPerMillion;
    return baseCost + storageCost + readOpsCost + writeOpsCost;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="bg-card border rounded-xl p-6 space-y-6 text-left">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center">
          <Calculator className="h-5 w-5 text-blue-600" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">Custom Pricing Calculator</h3>
          <p className="text-sm text-muted-foreground">
            Estimate your monthly costs based on usage
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Database Type
            </label>
            <select
              value={selectedDb}
              onChange={(e) => setSelectedDb(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
            >
              {databasePricing.map((db) => (
                <option key={db.name} value={db.name}>
                  {db.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Storage (GB)
            </label>
            <input
              type="number"
              min="1"
              value={storage}
              onChange={(e) =>
                setStorage(Math.max(1, parseInt(e.target.value) || 0))
              }
              className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Read Operations (millions/month)
            </label>
            <input
              type="number"
              min="1"
              value={readOps}
              onChange={(e) =>
                setReadOps(Math.max(1, parseInt(e.target.value) || 0))
              }
              className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1.5 block">
              Write Operations (millions/month)
            </label>
            <input
              type="number"
              min="1"
              value={writeOps}
              onChange={(e) =>
                setWriteOps(Math.max(1, parseInt(e.target.value) || 0))
              }
              className="w-full px-4 py-2 rounded-lg bg-background border border-input focus:border-blue-600 focus:ring focus:ring-blue-600/20 transition-colors"
            />
          </div>
        </div>

        <div className="bg-secondary/50 rounded-xl p-6">
          <h4 className="font-medium mb-4">Cost Breakdown</h4>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Base Cost</span>
              <span>{formatCurrency(selectedPricing.baseCost)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Storage Cost</span>
              <span>
                {formatCurrency(storage * selectedPricing.storagePerGB)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Read Operations Cost
              </span>
              <span>
                {formatCurrency(readOps * selectedPricing.readOpsPerMillion)}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">
                Write Operations Cost
              </span>
              <span>
                {formatCurrency(writeOps * selectedPricing.writeOpsPerMillion)}
              </span>
            </div>
            <div className="pt-3 mt-3 border-t">
              <div className="flex items-center justify-between">
                <span className="font-medium">Estimated Monthly Total</span>
                <span className="text-xl font-bold">
                  {formatCurrency(calculateTotal())}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
            <HelpCircle className="h-4 w-4 shrink-0 mt-0.5" />
            <p>
              Actual costs may vary based on your usage patterns and additional
              features. Contact our sales team for detailed pricing information.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
