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
import { ChartFilters } from "@/components/dashboard/ChartFilters";
import { ModernLineChart } from "@/components/dashboard/charts/LineChart";
import { ModernBarChart } from "@/components/dashboard/charts/BarChart";
import { ModernAreaChart } from "@/components/dashboard/charts/AreaChart";
import { ModernDonutChart } from "@/components/dashboard/charts/DonutChart";
import { EnhancedBarChart } from "@/components/dashboard/charts/EnhancedBarChart";
import { EnhancedLineChart } from "@/components/dashboard/charts/EnhancedLineChart";
import { ComboChart } from "@/components/dashboard/charts/ComboChart";
import { TimelineChart } from "@/components/dashboard/charts/TimelineChart";
import { LeaseExpiryChart } from "@/components/dashboard/charts/LeaseExpiryChart";
import { PortfolioOccupancyChart } from "@/components/dashboard/charts/PortfolioOccupancyChart";

// Lease Expiry Schedule data - specific buckets and properties
const leaseExpiryScheduleData = [
  { bucket: '0-3 months', riverstoneResi: 1, skylineBusiness: 1, crystalUnit: 0, helloWorld: 0, crescentHeight: 0 },
  { bucket: '4-6 months', riverstoneResi: 0, skylineBusiness: 4, crystalUnit: 4, helloWorld: 1, crescentHeight: 0 },
  { bucket: '6-9 months', riverstoneResi: 0, skylineBusiness: 0, crystalUnit: 1, helloWorld: 0, crescentHeight: 0 },
  { bucket: '9-12 months', riverstoneResi: 0, skylineBusiness: 8, crystalUnit: 6, helloWorld: 0, crescentHeight: 1 },
];

const leaseExpiryProperties = [
  { key: 'riverstoneResi', name: 'Riverstone Resi...', color: '#3B82F6' },
  { key: 'skylineBusiness', name: 'Skyline Business...', color: '#10B981' },
  { key: 'crystalUnit', name: 'Crystal unit Po...', color: '#F59E0B' },
  { key: 'helloWorld', name: 'hello world', color: '#EF4444' },
  { key: 'crescentHeight', name: 'Crescent Height...', color: '#8B5CF6' },
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

// Enhanced multi-series data
const leaseExpiryMultiData = [
  { name: 'Q1 2024', retail: 2, office: 1, industrial: 0, mixedUse: 1 },
  { name: 'Q2 2024', retail: 3, office: 2, industrial: 1, mixedUse: 0 },
  { name: 'Q3 2024', retail: 1, office: 0, industrial: 2, mixedUse: 1 },
  { name: 'Q4 2024', retail: 2, office: 1, industrial: 1, mixedUse: 2 },
];

const portfolioOccupancyData = [
  { propertyName: 'Riverstone Resi...', occupancy: 92, totalUnits: 45, month: 'Jan' },
  { propertyName: 'Riverstone Resi...', occupancy: 88, totalUnits: 45, month: 'Feb' },
  { propertyName: 'Riverstone Resi...', occupancy: 94, totalUnits: 45, month: 'Mar' },
  { propertyName: 'Skyline Business...', occupancy: 78, totalUnits: 32, month: 'Jan' },
  { propertyName: 'Skyline Business...', occupancy: 82, totalUnits: 32, month: 'Feb' },
  { propertyName: 'Skyline Business...', occupancy: 80, totalUnits: 32, month: 'Mar' },
  { propertyName: 'Crystal Unit Po...', occupancy: 95, totalUnits: 28, month: 'Jan' },
  { propertyName: 'Crystal Unit Po...', occupancy: 93, totalUnits: 28, month: 'Feb' },
  { propertyName: 'Crystal Unit Po...', occupancy: 97, totalUnits: 28, month: 'Mar' },
  { propertyName: 'Hello World', occupancy: 85, totalUnits: 15, month: 'Jan' },
  { propertyName: 'Hello World', occupancy: 90, totalUnits: 15, month: 'Feb' },
  { propertyName: 'Hello World', occupancy: 87, totalUnits: 15, month: 'Mar' },
];

const revenueVsExpensesData = [
  { name: 'Jan', revenue: 85000, expenses: 65000, profit: 20000 },
  { name: 'Feb', revenue: 88000, expenses: 67000, profit: 21000 },
  { name: 'Mar', revenue: 92000, expenses: 69000, profit: 23000 },
  { name: 'Apr', revenue: 87000, expenses: 66000, profit: 21000 },
  { name: 'May', revenue: 95000, expenses: 71000, profit: 24000 },
  { name: 'Jun', revenue: 98750, expenses: 73000, profit: 25750 },
];

const timelineEventsData = [
  { name: 'Jan 2024', date: '2024-01', occupancy: 85, events: 2, maintenance: 1 },
  { name: 'Feb 2024', date: '2024-02', occupancy: 88, events: 1, maintenance: 3 },
  { name: 'Mar 2024', date: '2024-03', occupancy: 82, events: 0, maintenance: 2 },
  { name: 'Apr 2024', date: '2024-04', occupancy: 90, events: 3, maintenance: 1 },
  { name: 'May 2024', date: '2024-05', occupancy: 87, events: 1, maintenance: 0 },
  { name: 'Jun 2024', date: '2024-06', occupancy: 92, events: 2, maintenance: 2 },
];

// Filter configurations
const timeframeFilters = [
  {
    key: 'timeframe',
    label: 'Timeframe',
    options: [
      { value: 'month', label: 'This Month' },
      { value: 'quarter', label: 'This Quarter' },
      { value: 'year', label: 'Year to Date' },
      { value: 'all', label: 'All Time' }
    ],
    defaultValue: 'year'
  }
];

const propertyFilters = [
  {
    key: 'selectedProperties',
    label: 'Properties',
    options: [
      { value: 'all', label: 'All Properties' },
      { value: 'riverstoneResi', label: 'Riverstone Resi...' },
      { value: 'skylineBusiness', label: 'Skyline Business...' },
      { value: 'crystalUnit', label: 'Crystal unit Po...' },
      { value: 'helloWorld', label: 'hello world' },
      { value: 'crescentHeight', label: 'Crescent Height...' }
    ],
    defaultValue: 'all'
  }
];

const Index = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);

  // Chart interaction handlers
  const handleChartClick = (data: any, seriesKey: string, chartType?: string) => {
    console.log('Chart clicked:', { data, seriesKey, chartType });
    // Here you would implement drill-down logic
  };

  const handleSingleChartClick = (data: any) => {
    handleChartClick(data, data.propertyName || 'unknown', 'portfolio-occupancy');
  };

  const handleFiltersChange = (filters: Record<string, string | number>) => {
    console.log('Filters changed:', filters);
    
    // Handle property filtering
    if (filters.selectedProperties) {
      if (filters.selectedProperties === 'all') {
        setSelectedProperties([]);
      } else {
        setSelectedProperties([filters.selectedProperties as string]);
      }
    }
  };

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

          {/* Filters Section */}
          <div className="bg-card rounded-xl border border-border p-6">
            <ChartFilters 
              configs={[...timeframeFilters, ...propertyFilters]} 
              onFiltersChange={handleFiltersChange}
            />
          </div>

          {/* Enhanced Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Lease Expiry Schedule"
              description="Lease expirations by property over time buckets"
            >
              <LeaseExpiryChart 
                data={leaseExpiryScheduleData}
                properties={leaseExpiryProperties}
                selectedProperties={selectedProperties}
                onBarClick={handleChartClick}
              />
            </ChartCard>

            <ChartCard
              title="Portfolio Wise Occupancy Trends"
              description="Occupancy rates by property"
            >
              <PortfolioOccupancyChart 
                data={portfolioOccupancyData}
                selectedProperties={selectedProperties}
                onBarClick={handleSingleChartClick}
              />
            </ChartCard>

            <ChartCard
              title="Revenue vs Expenses"
              description="Monthly financial performance with profit trend"
            >
              <ComboChart 
                data={revenueVsExpensesData}
                series={[
                  { dataKey: 'revenue', name: 'Revenue', color: 'hsl(var(--chart-primary))', type: 'bar', yAxisId: 'left' },
                  { dataKey: 'expenses', name: 'Expenses', color: 'hsl(var(--chart-secondary))', type: 'bar', yAxisId: 'left' },
                  { dataKey: 'profit', name: 'Profit Trend', color: 'hsl(var(--chart-accent))', type: 'line', yAxisId: 'right', strokeWidth: 3 }
                ]}
                leftAxisLabel="Revenue ($)"
                rightAxisLabel="Profit ($)"
                onElementClick={handleChartClick}
              />
            </ChartCard>

            <ChartCard
              title="Portfolio Industry Mix"
              description="Property distribution by type"
            >
              <ModernDonutChart data={portfolioMixData} />
            </ChartCard>
          </div>

          {/* Timeline and Events */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Portfolio Events Timeline"
              description="Occupancy trends with maintenance and event markers"
            >
              <TimelineChart 
                data={timelineEventsData}
                series={[
                  { dataKey: 'occupancy', name: 'Occupancy Rate', color: 'hsl(var(--chart-primary))', type: 'line' },
                  { dataKey: 'events', name: 'Events', color: 'hsl(var(--chart-accent))', type: 'scatter', size: 8 },
                  { dataKey: 'maintenance', name: 'Maintenance', color: 'hsl(var(--chart-secondary))', type: 'scatter', size: 6 }
                ]}
                onPointClick={handleChartClick}
              />
            </ChartCard>

            <ChartCard
              title="Revenue by Top Tenants"
              description="Multi-series tenant performance comparison"
            >
              <EnhancedBarChart 
                data={[
                  { name: 'Tenant A', current: 35000, previous: 32000, target: 38000 },
                  { name: 'Tenant B', current: 28000, previous: 30000, target: 29000 },
                  { name: 'Tenant C', current: 22000, previous: 20000, target: 25000 },
                  { name: 'Tenant D', current: 18000, previous: 19000, target: 20000 },
                ]}
                series={[
                  { dataKey: 'previous', name: 'Previous Period', color: 'hsl(var(--chart-muted))' },
                  { dataKey: 'current', name: 'Current Period', color: 'hsl(var(--chart-primary))' },
                  { dataKey: 'target', name: 'Target', color: 'hsl(var(--chart-accent))' }
                ]}
                onBarClick={handleChartClick}
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
