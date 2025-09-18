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
import { SingleBarChart } from "@/components/dashboard/charts/SingleBarChart";

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


const portfolioMixData = [
  { name: 'Retail', value: 18.5 },
  { name: 'Office', value: 15.2 },
  { name: 'Industrial', value: 12.8 },
  { name: 'Mixed Use', value: 11.3 },
  { name: 'Residential', value: 9.7 },
  { name: 'Healthcare', value: 8.4 },
  { name: 'Hospitality', value: 6.9 },
  { name: 'Education', value: 5.1 },
  { name: 'Data Centers', value: 4.3 },
  { name: 'Logistics', value: 3.8 },
  { name: 'Entertainment', value: 2.2 },
  { name: 'Government', value: 1.8 },
];

// Enhanced multi-series data
const leaseExpiryMultiData = [
  { name: 'Q1 2024', retail: 2, office: 1, industrial: 0, mixedUse: 1 },
  { name: 'Q2 2024', retail: 3, office: 2, industrial: 1, mixedUse: 0 },
  { name: 'Q3 2024', retail: 1, office: 0, industrial: 2, mixedUse: 1 },
  { name: 'Q4 2024', retail: 2, office: 1, industrial: 1, mixedUse: 2 },
];

const portfolioOccupancyData = [
  // Riverstone Resi... - Full year data
  { propertyName: 'Riverstone Resi...', occupancy: 92, totalUnits: 45, month: 'Jan' },
  { propertyName: 'Riverstone Resi...', occupancy: 88, totalUnits: 45, month: 'Feb' },
  { propertyName: 'Riverstone Resi...', occupancy: 94, totalUnits: 45, month: 'Mar' },
  { propertyName: 'Riverstone Resi...', occupancy: 91, totalUnits: 45, month: 'Apr' },
  { propertyName: 'Riverstone Resi...', occupancy: 89, totalUnits: 45, month: 'May' },
  { propertyName: 'Riverstone Resi...', occupancy: 95, totalUnits: 45, month: 'Jun' },
  { propertyName: 'Riverstone Resi...', occupancy: 93, totalUnits: 45, month: 'Jul' },
  { propertyName: 'Riverstone Resi...', occupancy: 96, totalUnits: 45, month: 'Aug' },
  { propertyName: 'Riverstone Resi...', occupancy: 90, totalUnits: 45, month: 'Sep' },
  { propertyName: 'Riverstone Resi...', occupancy: 87, totalUnits: 45, month: 'Oct' },
  { propertyName: 'Riverstone Resi...', occupancy: 92, totalUnits: 45, month: 'Nov' },
  { propertyName: 'Riverstone Resi...', occupancy: 94, totalUnits: 45, month: 'Dec' },
  
  // Skyline Business... - Full year data
  { propertyName: 'Skyline Business...', occupancy: 78, totalUnits: 32, month: 'Jan' },
  { propertyName: 'Skyline Business...', occupancy: 82, totalUnits: 32, month: 'Feb' },
  { propertyName: 'Skyline Business...', occupancy: 80, totalUnits: 32, month: 'Mar' },
  { propertyName: 'Skyline Business...', occupancy: 84, totalUnits: 32, month: 'Apr' },
  { propertyName: 'Skyline Business...', occupancy: 86, totalUnits: 32, month: 'May' },
  { propertyName: 'Skyline Business...', occupancy: 88, totalUnits: 32, month: 'Jun' },
  { propertyName: 'Skyline Business...', occupancy: 85, totalUnits: 32, month: 'Jul' },
  { propertyName: 'Skyline Business...', occupancy: 87, totalUnits: 32, month: 'Aug' },
  { propertyName: 'Skyline Business...', occupancy: 83, totalUnits: 32, month: 'Sep' },
  { propertyName: 'Skyline Business...', occupancy: 81, totalUnits: 32, month: 'Oct' },
  { propertyName: 'Skyline Business...', occupancy: 79, totalUnits: 32, month: 'Nov' },
  { propertyName: 'Skyline Business...', occupancy: 85, totalUnits: 32, month: 'Dec' },
  
  // Crystal Unit Po... - Full year data
  { propertyName: 'Crystal Unit Po...', occupancy: 95, totalUnits: 28, month: 'Jan' },
  { propertyName: 'Crystal Unit Po...', occupancy: 93, totalUnits: 28, month: 'Feb' },
  { propertyName: 'Crystal Unit Po...', occupancy: 97, totalUnits: 28, month: 'Mar' },
  { propertyName: 'Crystal Unit Po...', occupancy: 94, totalUnits: 28, month: 'Apr' },
  { propertyName: 'Crystal Unit Po...', occupancy: 96, totalUnits: 28, month: 'May' },
  { propertyName: 'Crystal Unit Po...', occupancy: 98, totalUnits: 28, month: 'Jun' },
  { propertyName: 'Crystal Unit Po...', occupancy: 95, totalUnits: 28, month: 'Jul' },
  { propertyName: 'Crystal Unit Po...', occupancy: 97, totalUnits: 28, month: 'Aug' },
  { propertyName: 'Crystal Unit Po...', occupancy: 93, totalUnits: 28, month: 'Sep' },
  { propertyName: 'Crystal Unit Po...', occupancy: 92, totalUnits: 28, month: 'Oct' },
  { propertyName: 'Crystal Unit Po...', occupancy: 94, totalUnits: 28, month: 'Nov' },
  { propertyName: 'Crystal Unit Po...', occupancy: 96, totalUnits: 28, month: 'Dec' },
  
  // Hello World - Full year data
  { propertyName: 'Hello World', occupancy: 85, totalUnits: 15, month: 'Jan' },
  { propertyName: 'Hello World', occupancy: 90, totalUnits: 15, month: 'Feb' },
  { propertyName: 'Hello World', occupancy: 87, totalUnits: 15, month: 'Mar' },
  { propertyName: 'Hello World', occupancy: 92, totalUnits: 15, month: 'Apr' },
  { propertyName: 'Hello World', occupancy: 88, totalUnits: 15, month: 'May' },
  { propertyName: 'Hello World', occupancy: 94, totalUnits: 15, month: 'Jun' },
  { propertyName: 'Hello World', occupancy: 91, totalUnits: 15, month: 'Jul' },
  { propertyName: 'Hello World', occupancy: 89, totalUnits: 15, month: 'Aug' },
  { propertyName: 'Hello World', occupancy: 86, totalUnits: 15, month: 'Sep' },
  { propertyName: 'Hello World', occupancy: 83, totalUnits: 15, month: 'Oct' },
  { propertyName: 'Hello World', occupancy: 87, totalUnits: 15, month: 'Nov' },
  { propertyName: 'Hello World', occupancy: 90, totalUnits: 15, month: 'Dec' },
];

// Units/Space Sold Data
const unitsSoldData = [
  { name: 'Jan', total: 8, riverstoneResi: 2, skylineBusiness: 1, crystalUnit: 2, helloWorld: 1, crescentHeight: 1, others: 1 },
  { name: 'Feb', total: 12, riverstoneResi: 3, skylineBusiness: 2, crystalUnit: 3, helloWorld: 2, crescentHeight: 1, others: 1 },
  { name: 'Mar', total: 6, riverstoneResi: 1, skylineBusiness: 1, crystalUnit: 1, helloWorld: 1, crescentHeight: 1, others: 1 },
  { name: 'Apr', total: 15, riverstoneResi: 4, skylineBusiness: 3, crystalUnit: 3, helloWorld: 2, crescentHeight: 2, others: 1 },
  { name: 'May', total: 10, riverstoneResi: 2, skylineBusiness: 2, crystalUnit: 2, helloWorld: 1, crescentHeight: 2, others: 1 },
  { name: 'Jun', total: 18, riverstoneResi: 5, skylineBusiness: 4, crystalUnit: 4, helloWorld: 2, crescentHeight: 2, others: 1 },
  { name: 'Jul', total: 14, riverstoneResi: 3, skylineBusiness: 3, crystalUnit: 3, helloWorld: 2, crescentHeight: 2, others: 1 },
  { name: 'Aug', total: 11, riverstoneResi: 2, skylineBusiness: 2, crystalUnit: 3, helloWorld: 1, crescentHeight: 2, others: 1 },
  { name: 'Sep', total: 9, riverstoneResi: 2, skylineBusiness: 1, crystalUnit: 2, helloWorld: 1, crescentHeight: 2, others: 1 },
  { name: 'Oct', total: 13, riverstoneResi: 3, skylineBusiness: 2, crystalUnit: 3, helloWorld: 2, crescentHeight: 2, others: 1 },
  { name: 'Nov', total: 16, riverstoneResi: 4, skylineBusiness: 3, crystalUnit: 4, helloWorld: 2, crescentHeight: 2, others: 1 },
  { name: 'Dec', total: 20, riverstoneResi: 5, skylineBusiness: 4, crystalUnit: 5, helloWorld: 3, crescentHeight: 2, others: 1 },
];

const rentPerSqftData = [
  { name: 'Jan', riverstoneResi: 2.8, skylineBusiness: 3.2, crystalUnit: 4.1, helloWorld: 2.9, crescentHeight: 3.5 },
  { name: 'Feb', riverstoneResi: 2.9, skylineBusiness: 3.3, crystalUnit: 4.2, helloWorld: 3.0, crescentHeight: 3.6 },
  { name: 'Mar', riverstoneResi: 2.8, skylineBusiness: 3.1, crystalUnit: 4.0, helloWorld: 2.8, crescentHeight: 3.4 },
  { name: 'Apr', riverstoneResi: 3.0, skylineBusiness: 3.4, crystalUnit: 4.3, helloWorld: 3.1, crescentHeight: 3.7 },
  { name: 'May', riverstoneResi: 3.1, skylineBusiness: 3.5, crystalUnit: 4.4, helloWorld: 3.2, crescentHeight: 3.8 },
  { name: 'Jun', riverstoneResi: 3.2, skylineBusiness: 3.6, crystalUnit: 4.5, helloWorld: 3.3, crescentHeight: 3.9 },
  { name: 'Jul', riverstoneResi: 3.1, skylineBusiness: 3.4, crystalUnit: 4.3, helloWorld: 3.1, crescentHeight: 3.7 },
  { name: 'Aug', riverstoneResi: 3.3, skylineBusiness: 3.7, crystalUnit: 4.6, helloWorld: 3.4, crescentHeight: 4.0 },
  { name: 'Sep', riverstoneResi: 3.2, skylineBusiness: 3.5, crystalUnit: 4.4, helloWorld: 3.2, crescentHeight: 3.8 },
  { name: 'Oct', riverstoneResi: 3.4, skylineBusiness: 3.8, crystalUnit: 4.7, helloWorld: 3.5, crescentHeight: 4.1 },
  { name: 'Nov', riverstoneResi: 3.5, skylineBusiness: 3.9, crystalUnit: 4.8, helloWorld: 3.6, crescentHeight: 4.2 },
  { name: 'Dec', riverstoneResi: 3.6, skylineBusiness: 4.0, crystalUnit: 4.9, helloWorld: 3.7, crescentHeight: 4.3 },
];

// NOI Data - Combined totals with property breakdown
const noiData = [
  { 
    name: 'Jan', 
    total: 77000,
    riverstoneResi: 18500, 
    skylineBusiness: 15200, 
    crystalUnit: 22800, 
    helloWorld: 8400, 
    crescentHeight: 12100 
  },
  { 
    name: 'Feb', 
    total: 79900,
    riverstoneResi: 19200, 
    skylineBusiness: 15800, 
    crystalUnit: 23500, 
    helloWorld: 8800, 
    crescentHeight: 12600 
  },
  { 
    name: 'Mar', 
    total: 76000,
    riverstoneResi: 18800, 
    skylineBusiness: 15000, 
    crystalUnit: 22200, 
    helloWorld: 8100, 
    crescentHeight: 11900 
  },
  { 
    name: 'Apr', 
    total: 83400,
    riverstoneResi: 20100, 
    skylineBusiness: 16500, 
    crystalUnit: 24200, 
    helloWorld: 9200, 
    crescentHeight: 13400 
  },
  { 
    name: 'May', 
    total: 86700,
    riverstoneResi: 20800, 
    skylineBusiness: 17200, 
    crystalUnit: 25100, 
    helloWorld: 9600, 
    crescentHeight: 14000 
  },
  { 
    name: 'Jun', 
    total: 89700,
    riverstoneResi: 21500, 
    skylineBusiness: 17800, 
    crystalUnit: 25800, 
    helloWorld: 10000, 
    crescentHeight: 14600 
  },
  { 
    name: 'Jul', 
    total: 86000,
    riverstoneResi: 20900, 
    skylineBusiness: 17000, 
    crystalUnit: 24800, 
    helloWorld: 9500, 
    crescentHeight: 13800 
  },
  { 
    name: 'Aug', 
    total: 92900,
    riverstoneResi: 22200, 
    skylineBusiness: 18500, 
    crystalUnit: 26500, 
    helloWorld: 10500, 
    crescentHeight: 15200 
  },
  { 
    name: 'Sep', 
    total: 88900,
    riverstoneResi: 21600, 
    skylineBusiness: 17600, 
    crystalUnit: 25400, 
    helloWorld: 9900, 
    crescentHeight: 14400 
  },
  { 
    name: 'Oct', 
    total: 96400,
    riverstoneResi: 23000, 
    skylineBusiness: 19200, 
    crystalUnit: 27200, 
    helloWorld: 11000, 
    crescentHeight: 16000 
  },
  { 
    name: 'Nov', 
    total: 99700,
    riverstoneResi: 23800, 
    skylineBusiness: 19900, 
    crystalUnit: 28000, 
    helloWorld: 11400, 
    crescentHeight: 16600 
  },
  { 
    name: 'Dec', 
    total: 102800,
    riverstoneResi: 24500, 
    skylineBusiness: 20500, 
    crystalUnit: 28800, 
    helloWorld: 11800, 
    crescentHeight: 17200 
  },
];

// Rent Growth Data - Combined totals with property breakdown
const rentGrowthData = [
  { 
    name: 'Jan', 
    total: 126000,
    riverstoneResi: 28000, 
    skylineBusiness: 25600, 
    crystalUnit: 32800, 
    helloWorld: 14500, 
    crescentHeight: 25100 
  },
  { 
    name: 'Feb', 
    total: 130500,
    riverstoneResi: 29000, 
    skylineBusiness: 26400, 
    crystalUnit: 33600, 
    helloWorld: 15000, 
    crescentHeight: 26500 
  },
  { 
    name: 'Mar', 
    total: 124800,
    riverstoneResi: 28000, 
    skylineBusiness: 24800, 
    crystalUnit: 32000, 
    helloWorld: 14000, 
    crescentHeight: 26000 
  },
  { 
    name: 'Apr', 
    total: 135600,
    riverstoneResi: 30000, 
    skylineBusiness: 27200, 
    crystalUnit: 34400, 
    helloWorld: 15500, 
    crescentHeight: 28500 
  },
  { 
    name: 'May', 
    total: 141200,
    riverstoneResi: 31000, 
    skylineBusiness: 28000, 
    crystalUnit: 35200, 
    helloWorld: 16000, 
    crescentHeight: 31000 
  },
  { 
    name: 'Jun', 
    total: 147800,
    riverstoneResi: 32000, 
    skylineBusiness: 28800, 
    crystalUnit: 36000, 
    helloWorld: 16500, 
    crescentHeight: 34500 
  },
  { 
    name: 'Jul', 
    total: 143200,
    riverstoneResi: 31000, 
    skylineBusiness: 27200, 
    crystalUnit: 34400, 
    helloWorld: 15500, 
    crescentHeight: 35100 
  },
  { 
    name: 'Aug', 
    total: 152800,
    riverstoneResi: 33000, 
    skylineBusiness: 29600, 
    crystalUnit: 36800, 
    helloWorld: 17000, 
    crescentHeight: 36400 
  },
  { 
    name: 'Sep', 
    total: 148600,
    riverstoneResi: 32000, 
    skylineBusiness: 28000, 
    crystalUnit: 35200, 
    helloWorld: 16400, 
    crescentHeight: 37000 
  },
  { 
    name: 'Oct', 
    total: 158200,
    riverstoneResi: 34000, 
    skylineBusiness: 30400, 
    crystalUnit: 37600, 
    helloWorld: 17500, 
    crescentHeight: 38700 
  },
  { 
    name: 'Nov', 
    total: 164800,
    riverstoneResi: 35000, 
    skylineBusiness: 31200, 
    crystalUnit: 38400, 
    helloWorld: 18000, 
    crescentHeight: 42200 
  },
  { 
    name: 'Dec', 
    total: 171500,
    riverstoneResi: 36000, 
    skylineBusiness: 32000, 
    crystalUnit: 39200, 
    helloWorld: 18500, 
    crescentHeight: 45800 
  },
];

// Top Tenants Data (80/20 rule applied) - Q4 2024 data
const topTenantsData = [
  { name: 'MegaCorp Ltd', revenue: 45000, percentage: 18.2 },
  { name: 'TechGlobal Inc', revenue: 38000, percentage: 15.4 },
  { name: 'Healthcare Plus', revenue: 32000, percentage: 13.0 },
  { name: 'RetailMax Group', revenue: 28000, percentage: 11.4 },
  { name: 'Finance Solutions', revenue: 25000, percentage: 10.1 },
  { name: 'Others (15 tenants)', revenue: 79000, percentage: 31.9 },
];

// Top 5 Performing Properties Data
const topPerformingPropertiesData = [
  { 
    name: 'Crystal Unit Po...', 
    totalIncome: 389200, 
    noi: 311360, 
    occupancy: 95.2 
  },
  { 
    name: 'Riverstone Resi...', 
    totalIncome: 372000, 
    noi: 288600, 
    occupancy: 92.4 
  },
  { 
    name: 'Crescent Height...', 
    totalIncome: 358400, 
    noi: 179200, 
    occupancy: 88.7 
  },
  { 
    name: 'Skyline Business...', 
    totalIncome: 332800, 
    noi: 216320, 
    occupancy: 83.8 
  },
  { 
    name: 'Hello World', 
    totalIncome: 198000, 
    noi: 118800, 
    occupancy: 88.9 
  },
];

// Market & Competitor Analysis Data by Property
const competitorAnalysisData = {
  'Crystal Unit Po...': [
    { name: 'Jan', myProperty: 4.1, 'Competitor A': 3.8, 'Competitor B': 3.9, 'Competitor C': 4.0, marketAverage: 3.95 },
    { name: 'Feb', myProperty: 4.2, 'Competitor A': 3.9, 'Competitor B': 4.0, 'Competitor C': 4.1, marketAverage: 4.05 },
    { name: 'Mar', myProperty: 4.0, 'Competitor A': 3.7, 'Competitor B': 3.8, 'Competitor C': 3.9, marketAverage: 3.85 },
    { name: 'Apr', myProperty: 4.3, 'Competitor A': 4.0, 'Competitor B': 4.1, 'Competitor C': 4.2, marketAverage: 4.15 },
    { name: 'May', myProperty: 4.4, 'Competitor A': 4.1, 'Competitor B': 4.2, 'Competitor C': 4.3, marketAverage: 4.25 },
    { name: 'Jun', myProperty: 4.5, 'Competitor A': 4.2, 'Competitor B': 4.3, 'Competitor C': 4.4, marketAverage: 4.35 },
    { name: 'Jul', myProperty: 4.3, 'Competitor A': 4.0, 'Competitor B': 4.1, 'Competitor C': 4.2, marketAverage: 4.15 },
    { name: 'Aug', myProperty: 4.6, 'Competitor A': 4.3, 'Competitor B': 4.4, 'Competitor C': 4.5, marketAverage: 4.45 },
    { name: 'Sep', myProperty: 4.4, 'Competitor A': 4.1, 'Competitor B': 4.2, 'Competitor C': 4.3, marketAverage: 4.25 },
    { name: 'Oct', myProperty: 4.7, 'Competitor A': 4.4, 'Competitor B': 4.5, 'Competitor C': 4.6, marketAverage: 4.55 },
    { name: 'Nov', myProperty: 4.8, 'Competitor A': 4.5, 'Competitor B': 4.6, 'Competitor C': 4.7, marketAverage: 4.65 },
    { name: 'Dec', myProperty: 4.9, 'Competitor A': 4.6, 'Competitor B': 4.7, 'Competitor C': 4.8, marketAverage: 4.75 },
  ],
  'Riverstone Resi...': [
    { name: 'Jan', myProperty: 2.8, 'Competitor X': 2.6, 'Competitor Y': 2.7, 'Competitor Z': 2.9, marketAverage: 2.75 },
    { name: 'Feb', myProperty: 2.9, 'Competitor X': 2.7, 'Competitor Y': 2.8, 'Competitor Z': 3.0, marketAverage: 2.85 },
    { name: 'Mar', myProperty: 2.8, 'Competitor X': 2.5, 'Competitor Y': 2.6, 'Competitor Z': 2.8, marketAverage: 2.68 },
    { name: 'Apr', myProperty: 3.0, 'Competitor X': 2.8, 'Competitor Y': 2.9, 'Competitor Z': 3.1, marketAverage: 2.95 },
    { name: 'May', myProperty: 3.1, 'Competitor X': 2.9, 'Competitor Y': 3.0, 'Competitor Z': 3.2, marketAverage: 3.05 },
    { name: 'Jun', myProperty: 3.2, 'Competitor X': 3.0, 'Competitor Y': 3.1, 'Competitor Z': 3.3, marketAverage: 3.15 },
    { name: 'Jul', myProperty: 3.1, 'Competitor X': 2.8, 'Competitor Y': 2.9, 'Competitor Z': 3.1, marketAverage: 2.98 },
    { name: 'Aug', myProperty: 3.3, 'Competitor X': 3.1, 'Competitor Y': 3.2, 'Competitor Z': 3.4, marketAverage: 3.25 },
    { name: 'Sep', myProperty: 3.2, 'Competitor X': 2.9, 'Competitor Y': 3.0, 'Competitor Z': 3.2, marketAverage: 3.08 },
    { name: 'Oct', myProperty: 3.4, 'Competitor X': 3.2, 'Competitor Y': 3.3, 'Competitor Z': 3.5, marketAverage: 3.35 },
    { name: 'Nov', myProperty: 3.5, 'Competitor X': 3.3, 'Competitor Y': 3.4, 'Competitor Z': 3.6, marketAverage: 3.45 },
    { name: 'Dec', myProperty: 3.6, 'Competitor X': 3.4, 'Competitor Y': 3.5, 'Competitor Z': 3.7, marketAverage: 3.55 },
  ]
};

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
  const [selectedCompetitorProperty, setSelectedCompetitorProperty] = useState<string>('Crystal Unit Po...');

  // Chart interaction handlers
  const handleChartClick = (data: any, seriesKey: string, chartType?: string) => {
    console.log('Chart clicked:', { data, seriesKey, chartType });
    // Here you would implement drill-down logic
  };

  const handleSingleChartClick = (data: any) => {
    handleChartClick(data, 'total', 'single-bar-chart');
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
                showLegend={false}
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
                showLegend={false}
              />
            </ChartCard>

            <ChartCard
              title="Total Units/Space Sold"
              description="Monthly units sold with property breakdown on hover"
            >
              <EnhancedBarChart 
                data={unitsSoldData}
                series={[
                  { dataKey: 'riverstoneResi', name: 'Riverstone Resi...', color: 'hsl(var(--chart-primary))' },
                  { dataKey: 'skylineBusiness', name: 'Skyline Business...', color: 'hsl(var(--chart-secondary))' },
                  { dataKey: 'crystalUnit', name: 'Crystal Unit Po...', color: 'hsl(var(--chart-accent))' },
                  { dataKey: 'helloWorld', name: 'Hello World', color: 'hsl(var(--chart-muted))' },
                  { dataKey: 'crescentHeight', name: 'Crescent Height...', color: 'hsl(var(--chart-destructive))' },
                  { dataKey: 'others', name: 'Others', color: 'hsl(var(--chart-neutral))' }
                ]}
                stacked={true}
                showLegend={false}
                onBarClick={handleChartClick}
              />
            </ChartCard>

            <ChartCard
              title="Portfolio Industry Mix"
              description="Property distribution by type"
            >
              <ModernDonutChart data={portfolioMixData} />
            </ChartCard>
          </div>

          {/* New Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Rent per Square Feet"
              description="Monthly rent per sqft by property"
            >
              <EnhancedLineChart 
                data={rentPerSqftData}
                series={[
                  { dataKey: 'riverstoneResi', name: 'Riverstone Resi...', color: 'hsl(var(--chart-primary))' },
                  { dataKey: 'skylineBusiness', name: 'Skyline Business...', color: 'hsl(var(--chart-secondary))' },
                  { dataKey: 'crystalUnit', name: 'Crystal Unit Po...', color: 'hsl(var(--chart-accent))' },
                  { dataKey: 'helloWorld', name: 'Hello World', color: 'hsl(var(--chart-muted))' },
                  { dataKey: 'crescentHeight', name: 'Crescent Height...', color: 'hsl(var(--chart-destructive))' }
                ]}
                showLegend={false}
                onPointClick={handleChartClick}
              />
            </ChartCard>

            <ChartCard
              title="Net Operating Income (NOI)"
              description="Combined monthly NOI with property breakdown on hover"
            >
              <SingleBarChart 
                data={noiData}
                onBarClick={handleSingleChartClick}
                color="hsl(var(--chart-primary))"
              />
            </ChartCard>
          </div>

          {/* Additional Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ChartCard
              title="Rent Trend Growth Rate"
              description="Combined monthly rent growth with property breakdown on hover"
            >
              <SingleBarChart 
                data={rentGrowthData}
                onBarClick={handleSingleChartClick}
                color="hsl(var(--chart-accent))"
              />
            </ChartCard>

            <ChartCard
              title="Top Revenue Contributors (Q4 2024)"
              description="80% contributors vs 20% (Others) based on selected timeframe"
            >
              <EnhancedBarChart 
                data={topTenantsData}
                series={[
                  { dataKey: 'revenue', name: 'Revenue ($)', color: 'hsl(var(--chart-primary))' }
                ]}
                onBarClick={handleChartClick}
              />
            </ChartCard>
          </div>

          {/* Final Charts Row */}
          <div className="grid grid-cols-1 gap-6">
            <ChartCard
              title="Top 5 Performing Properties"
              description="Total income, NOI, and occupancy rate by property"
            >
              <ComboChart 
                data={topPerformingPropertiesData}
                series={[
                  { dataKey: 'totalIncome', name: 'Total Income ($)', color: 'hsl(var(--chart-primary))', type: 'bar', yAxisId: 'left' },
                  { dataKey: 'noi', name: 'NOI ($)', color: 'hsl(var(--chart-secondary))', type: 'bar', yAxisId: 'left' },
                  { dataKey: 'occupancy', name: 'Occupancy (%)', color: 'hsl(var(--chart-accent))', type: 'bar', yAxisId: 'right' }
                ]}
                leftAxisLabel="Revenue ($)"
                rightAxisLabel="Occupancy (%)"
                showLegend={false}
                onElementClick={handleChartClick}
              />
            </ChartCard>
          </div>

          {/* Market Analysis - Full Width */}
          <div className="grid grid-cols-1 gap-6">
            <ChartCard
              title="Market & Competitor Analysis"
              description={`Rent per sqft comparison for ${selectedCompetitorProperty}`}
            >
              <div className="mb-4">
                <select 
                  value={selectedCompetitorProperty}
                  onChange={(e) => setSelectedCompetitorProperty(e.target.value)}
                  className="px-3 py-2 border border-border rounded-md bg-background text-foreground"
                >
                  {Object.keys(competitorAnalysisData).map(property => (
                    <option key={property} value={property}>{property}</option>
                  ))}
                </select>
              </div>
              <EnhancedLineChart 
                data={competitorAnalysisData[selectedCompetitorProperty]}
                series={[
                  { dataKey: 'myProperty', name: selectedCompetitorProperty, color: 'hsl(var(--chart-primary))' },
                  { dataKey: 'Competitor A', name: 'Competitor A', color: 'hsl(var(--chart-secondary))' },
                  { dataKey: 'Competitor B', name: 'Competitor B', color: 'hsl(var(--chart-accent))' },
                  { dataKey: 'Competitor C', name: 'Competitor C', color: 'hsl(var(--chart-muted))' },
                  { dataKey: 'marketAverage', name: 'Market Average', color: 'hsl(var(--chart-destructive))' }
                ]}
                showLegend={true}
                onPointClick={handleChartClick}
              />
            </ChartCard>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
