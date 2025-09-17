import { useState } from "react";
import { 
  Building2, 
  DollarSign, 
  Square, 
  Home, 
  TrendingUp, 
  Calendar,
  AlertTriangle,
  TrendingDown,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ChartCard } from "@/components/dashboard/ChartCard";
import { ModernLineChart } from "@/components/dashboard/charts/LineChart";
import { ModernBarChart } from "@/components/dashboard/charts/BarChart";
import { ModernAreaChart } from "@/components/dashboard/charts/AreaChart";
import { ModernDonutChart } from "@/components/dashboard/charts/DonutChart";

// Sample data for charts
const leaseExpiryData = [
  { name: 'Q1', value: 2 },
  { name: 'Q2', value: 4 },
  { name: 'Q3', value: 1 },
  { name: 'Q4', value: 3 },
];

const occupancyTrendData = [
  { name: 'Jan', value: 85 },
  { name: 'Feb', value: 88 },
  { name: 'Mar', value: 82 },
  { name: 'Apr', value: 90 },
  { name: 'May', value: 87 },
  { name: 'Jun', value: 92 },
];

const rentGrowthData = [
  { name: '2020', value: 2.5 },
  { name: '2021', value: 3.2 },
  { name: '2022', value: 4.1 },
  { name: '2023', value: 3.8 },
  { name: '2024', value: 4.5 },
];

const portfolioMixData = [
  { name: 'Retail', value: 35, color: 'hsl(var(--chart-primary))' },
  { name: 'Office', value: 25, color: 'hsl(var(--chart-secondary))' },
  { name: 'Industrial', value: 20, color: 'hsl(var(--chart-accent))' },
  { name: 'Mixed Use', value: 20, color: 'hsl(var(--chart-muted))' },
];

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <div className="fixed left-0 top-0 h-screen z-30">
        <Sidebar collapsed={sidebarCollapsed} />
      </div>
      
      <div className="flex-1 flex flex-col" style={{ marginLeft: sidebarCollapsed ? '80px' : '256px' }}>
        {/* Mobile menu button */}
        <div className="lg:hidden p-4 fixed top-0 left-0 z-40 bg-background">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        <div className="sticky top-0 z-20 bg-background border-b">
          <DashboardHeader />
        </div>
        
        <main className="flex-1 p-6 space-y-6 overflow-auto">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total Properties"
              value="12"
              icon={Building2}
            />
            <MetricCard
              title="Gross Rental Income"
              value="$124,500"
              icon={DollarSign}
            />
            <MetricCard
              title="Total Rentable SF"
              value="45,230"
              icon={Square}
            />
            <MetricCard
              title="Occupancy Rate"
              value="87.5%"
              icon={Home}
            />
          </div>

          {/* Secondary Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              title="Total NOI"
              value="$98,750"
              icon={TrendingUp}
            />
            <MetricCard
              title="Leases Expiring (12M)"
              value="8"
              icon={Calendar}
            />
            <MetricCard
              title="Total Vacant SF"
              value="5,670"
              icon={AlertTriangle}
            />
            <MetricCard
              title="Vacancy Loss"
              value="$8,250"
              icon={TrendingDown}
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Lease Expiry Schedule"
              description="Quarterly lease expiration overview"
            >
              <ModernBarChart 
                data={leaseExpiryData} 
                color="hsl(var(--chart-primary))"
              />
            </ChartCard>

            <ChartCard
              title="Portfolio Occupancy Trends"
              description="Monthly occupancy rate percentage"
            >
              <ModernAreaChart 
                data={occupancyTrendData} 
                color="hsl(var(--chart-secondary))"
              />
            </ChartCard>

            <ChartCard
              title="Rent Growth Trend"
              description="Year-over-year rent growth percentage"
            >
              <ModernLineChart 
                data={rentGrowthData} 
                color="hsl(var(--chart-accent))"
              />
            </ChartCard>

            <ChartCard
              title="Portfolio Industry Mix"
              description="Property distribution by type"
            >
              <ModernDonutChart data={portfolioMixData} />
            </ChartCard>
          </div>

          {/* Additional Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Revenue by Tenant"
              description="Top performing tenants"
            >
              <ModernBarChart 
                data={[
                  { name: 'Tenant A', value: 35000 },
                  { name: 'Tenant B', value: 28000 },
                  { name: 'Tenant C', value: 22000 },
                  { name: 'Tenant D', value: 18000 },
                ]} 
                color="hsl(var(--chart-primary))"
              />
            </ChartCard>

            <ChartCard
              title="Net Operating Income"
              description="Monthly NOI trend"
            >
              <ModernLineChart 
                data={[
                  { name: 'Jan', value: 85000 },
                  { name: 'Feb', value: 88000 },
                  { name: 'Mar', value: 92000 },
                  { name: 'Apr', value: 87000 },
                  { name: 'May', value: 95000 },
                  { name: 'Jun', value: 98750 },
                ]} 
                color="hsl(var(--chart-secondary))"
              />
            </ChartCard>
          </div>

          {/* Final Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Market & Competitor Analysis"
              description="Value per square foot comparison"
            >
              <ModernAreaChart 
                data={[
                  { name: '2019', value: 2.8 },
                  { name: '2020', value: 2.6 },
                  { name: '2021', value: 3.1 },
                  { name: '2022', value: 3.4 },
                  { name: '2023', value: 3.7 },
                  { name: '2024', value: 4.2 },
                ]} 
                color="hsl(var(--chart-accent))"
              />
            </ChartCard>

            <ChartCard
              title="Space Utilization"
              description="Square footage breakdown"
            >
              <ModernAreaChart 
                data={[
                  { name: 'Q1', value: 42000 },
                  { name: 'Q2', value: 43500 },
                  { name: 'Q3', value: 44200 },
                  { name: 'Q4', value: 45230 },
                ]} 
                color="hsl(var(--chart-primary))"
              />
            </ChartCard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
