import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface PortfolioOccupancyChartData {
  propertyName: string;
  occupancy: number;
  totalUnits: number;
  occupiedUnits?: number;
  month: string; // Month for X-axis
}

interface PortfolioOccupancyChartProps {
  data: PortfolioOccupancyChartData[];
  selectedProperties?: string[];
  onBarClick?: (data: any) => void;
  showLegend?: boolean;
}

export function PortfolioOccupancyChart({ 
  data, 
  selectedProperties = [], 
  onBarClick,
  showLegend = true
}: PortfolioOccupancyChartProps) {
  // Transform data for multi-line chart
  const processedData = data.reduce((acc: any[], item) => {
    const existingMonth = acc.find(d => d.month === item.month);
    if (existingMonth) {
      existingMonth[item.propertyName] = item.occupancy;
    } else {
      acc.push({
        month: item.month,
        [item.propertyName]: item.occupancy
      });
    }
    return acc;
  }, []);

  // Get unique property names for creating lines
  const propertyNames = [...new Set(data.map(item => item.propertyName))];
  
  // Filter properties if selection is made
  const displayedProperties = selectedProperties.length > 0 
    ? propertyNames.filter(prop => selectedProperties.includes(prop))
    : propertyNames;

  const handleLineClick = (data: any, event: any) => {
    if (onBarClick) {
      onBarClick(data);
    }
  };

  // Color palette for different properties
  const colors = [
    'hsl(var(--chart-primary))',
    'hsl(var(--chart-secondary))',
    'hsl(var(--chart-accent))',
    'hsl(var(--chart-muted))',
    '#8B5CF6',
    '#F59E0B',
    '#EF4444',
    '#10B981'
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          <div className="space-y-1">
            {payload.map((entry: any, index: number) => (
              <div key={index} className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-muted-foreground">{entry.dataKey}:</span>
                </div>
                <span className="font-medium text-foreground">{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart 
        data={processedData} 
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        onClick={handleLineClick}
      >
        <CartesianGrid 
          strokeDasharray="1 4" 
          stroke="hsl(var(--border))" 
          strokeOpacity={0.3}
        />
        
        <XAxis 
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
          tickMargin={8}
        />
        
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
          tickMargin={8}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        
        <Tooltip content={<CustomTooltip />} />
        {showLegend && <Legend />}
        
        {displayedProperties.map((propertyName, index) => (
          <Line
            key={propertyName}
            type="monotone"
            dataKey={propertyName}
            stroke={colors[index % colors.length]}
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
            connectNulls={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}