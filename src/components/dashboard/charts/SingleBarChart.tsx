import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

interface SingleBarChartProps {
  data: Array<{ name: string; total: number; [key: string]: any }>;
  onBarClick?: (data: any) => void;
  formatValue?: (value: number) => string;
  color?: string;
}

export function SingleBarChart({ 
  data, 
  onBarClick, 
  formatValue = (value) => value.toLocaleString(),
  color = 'hsl(var(--chart-primary))'
}: SingleBarChartProps) {
  
  const handleBarClick = (data: any) => {
    if (onBarClick) {
      onBarClick(data);
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      
      return (
        <div className="bg-popover border border-border rounded-lg p-4 shadow-lg min-w-[200px]">
          <p className="font-semibold text-foreground mb-3">{label}</p>
          <div className="space-y-2">
            <div className="flex justify-between items-center border-b border-border pb-2">
              <span className="text-sm font-medium text-muted-foreground">Total:</span>
              <span className="font-semibold text-foreground">${formatValue(data.total)}</span>
            </div>
            
            {/* Property breakdown */}
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground mb-2">Property Breakdown:</p>
              {data.riverstoneResi && (
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Riverstone Resi...:</span>
                  <span className="font-medium">${formatValue(data.riverstoneResi)}</span>
                </div>
              )}
              {data.skylineBusiness && (
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Skyline Business...:</span>
                  <span className="font-medium">${formatValue(data.skylineBusiness)}</span>
                </div>
              )}
              {data.crystalUnit && (
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Crystal Unit Po...:</span>
                  <span className="font-medium">${formatValue(data.crystalUnit)}</span>
                </div>
              )}
              {data.helloWorld && (
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Hello World:</span>
                  <span className="font-medium">${formatValue(data.helloWorld)}</span>
                </div>
              )}
              {data.crescentHeight && (
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">Crescent Height...:</span>
                  <span className="font-medium">${formatValue(data.crescentHeight)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={data} 
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        onClick={handleBarClick}
      >
        <defs>
          <linearGradient id="singleBarGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.9} />
            <stop offset="100%" stopColor={color} stopOpacity={0.7} />
          </linearGradient>
        </defs>
        <CartesianGrid 
          strokeDasharray="2 4" 
          stroke="hsl(var(--border))" 
          strokeOpacity={0.3}
          vertical={false}
        />
        <XAxis 
          dataKey="name" 
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
          tickFormatter={formatValue}
        />
        <Tooltip content={<CustomTooltip />} />
        
        <Bar 
          dataKey="total"
          fill="url(#singleBarGradient)"
          radius={[4, 4, 0, 0]}
          style={{ cursor: onBarClick ? 'pointer' : 'default' }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}