import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Cell } from 'recharts';

interface PortfolioOccupancyChartData {
  propertyName: string;
  occupancy: number;
  totalUnits: number;
  occupiedUnits?: number;
  x: number; // For scatter plot positioning
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
  // Add x positioning for scatter plot and filter data
  const processedData = data.map((item, index) => ({
    ...item,
    x: index + 1,
    occupiedUnits: item.occupiedUnits || Math.round(item.totalUnits * item.occupancy / 100)
  }));
  
  const filteredData = selectedProperties.length > 0 
    ? processedData.filter(item => selectedProperties.includes(item.propertyName))
    : processedData;

  const handleBubbleClick = (data: any, event: any) => {
    if (onBarClick) {
      onBarClick(data);
    }
  };

  // Color scale based on occupancy rate
  const getColor = (occupancy: number) => {
    if (occupancy >= 90) return 'hsl(var(--chart-primary))';
    if (occupancy >= 75) return 'hsl(var(--chart-secondary))';
    if (occupancy >= 60) return 'hsl(var(--chart-accent))';
    return 'hsl(var(--chart-muted))';
  };

  // Calculate bubble size based on total units (min 20, max 80)
  const getBubbleSize = (totalUnits: number, allData: any[]) => {
    const maxUnits = Math.max(...allData.map(d => d.totalUnits));
    const minUnits = Math.min(...allData.map(d => d.totalUnits));
    const ratio = (totalUnits - minUnits) / (maxUnits - minUnits);
    return 20 + (ratio * 60); // Size between 20 and 80
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground mb-2">{data.propertyName}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">Occupancy Rate:</span>
              <span className="font-medium text-foreground">{data.occupancy}%</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">Occupied Units:</span>
              <span className="font-medium text-foreground">{data.occupiedUnits}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">Total Units:</span>
              <span className="font-medium text-foreground">{data.totalUnits}</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart 
        data={filteredData} 
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        onClick={handleBubbleClick}
      >
        <CartesianGrid 
          strokeDasharray="1 4" 
          stroke="hsl(var(--border))" 
          strokeOpacity={0.3}
          horizontal={true}
          vertical={false}
        />
        
        <XAxis 
          type="number"
          dataKey="x"
          axisLine={false}
          tickLine={false}
          tick={false}
          domain={[0, filteredData.length + 1]}
        />
        
        <YAxis 
          type="number"
          dataKey="occupancy"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
          tickMargin={8}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
        />
        
        <Tooltip content={<CustomTooltip />} />
        
        <Scatter dataKey="occupancy" fill="hsl(var(--chart-primary))">
          {filteredData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={getColor(entry.occupancy)}
              r={getBubbleSize(entry.totalUnits, filteredData)}
              style={{ cursor: 'pointer', opacity: 0.8 }}
            />
          ))}
        </Scatter>
      </ScatterChart>
    </ResponsiveContainer>
  );
}