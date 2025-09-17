import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

interface PortfolioOccupancyChartData {
  propertyName: string;
  occupancy: number;
  totalUnits?: number;
  occupiedUnits?: number;
}

interface PortfolioOccupancyChartProps {
  data: PortfolioOccupancyChartData[];
  selectedProperties?: string[];
  onBarClick?: (data: any) => void;
}

export function PortfolioOccupancyChart({ 
  data, 
  selectedProperties = [], 
  onBarClick 
}: PortfolioOccupancyChartProps) {
  // Filter data based on selected properties
  const filteredData = selectedProperties.length > 0 
    ? data.filter(item => selectedProperties.includes(item.propertyName))
    : data;

  const handleBarClick = (data: any, event: any) => {
    if (onBarClick) {
      onBarClick(data);
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">Occupancy Rate:</span>
              <span className="font-medium text-foreground">{data.occupancy}%</span>
            </div>
            {data.totalUnits && (
              <>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">Occupied Units:</span>
                  <span className="font-medium text-foreground">{data.occupiedUnits || Math.round(data.totalUnits * data.occupancy / 100)}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted-foreground">Total Units:</span>
                  <span className="font-medium text-foreground">{data.totalUnits}</span>
                </div>
              </>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={filteredData} 
        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
        onClick={handleBarClick}
      >
        <defs>
          <linearGradient id="occupancyGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--chart-primary))" stopOpacity={0.8} />
            <stop offset="100%" stopColor="hsl(var(--chart-primary))" stopOpacity={0.3} />
          </linearGradient>
        </defs>
        
        <CartesianGrid 
          strokeDasharray="1 4" 
          stroke="hsl(var(--border))" 
          strokeOpacity={0.3}
          horizontal={true}
          vertical={false}
        />
        
        <XAxis 
          dataKey="propertyName" 
          axisLine={false}
          tickLine={false}
          tick={{ 
            fontSize: 11, 
            fill: 'hsl(var(--muted-foreground))',
            textAnchor: 'end'
          }}
          tickMargin={8}
          angle={-45}
          height={80}
          interval={0}
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
        
        <Bar 
          dataKey="occupancy" 
          fill="url(#occupancyGradient)"
          radius={[4, 4, 0, 0]}
          cursor="pointer"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}