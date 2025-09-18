import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ScrollArea } from '@/components/ui/scroll-area';

interface DonutChartProps {
  data: Array<{ name: string; value: number; color?: string }>;
}

const COLORS = [
  'hsl(var(--chart-primary))',
  'hsl(var(--chart-secondary))',
  'hsl(var(--chart-accent))',
  'hsl(var(--chart-muted))',
  'hsl(20 70% 50%)',
  'hsl(25 75% 55%)',
  'hsl(280 65% 60%)',
  'hsl(340 75% 55%)',
  'hsl(45 85% 55%)',
  'hsl(160 75% 45%)',
  'hsl(200 80% 50%)',
  'hsl(300 70% 55%)',
];

export function ModernDonutChart({ data }: DonutChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex items-center gap-6 w-full h-full">
      {/* Chart Container */}
      <div className="flex-1 h-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              {COLORS.map((color, index) => (
                <linearGradient key={`gradient-${index}`} id={`donutGradient-${index}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={color} stopOpacity={0.9} />
                  <stop offset="100%" stopColor={color} stopOpacity={0.7} />
                </linearGradient>
              ))}
            </defs>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={110}
              paddingAngle={2}
              dataKey="value"
              labelLine={false}
              label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
              style={{
                transition: 'all 0.3s ease',
              }}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={`url(#donutGradient-${index % COLORS.length})`}
                  stroke="hsl(var(--background))"
                  strokeWidth={1}
                  style={{
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Pie>
            
            {/* Center Total */}
            <text 
              x="50%" 
              y="50%" 
              textAnchor="middle" 
              dominantBaseline="middle" 
              className="fill-foreground text-2xl font-bold"
            >
              {total}
            </text>
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                backdropFilter: 'blur(8px)',
              }}
              labelStyle={{ color: 'hsl(var(--foreground))', fontWeight: '600' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Scrollable Legend */}
      <div className="w-48 h-full">
        <ScrollArea className="h-full">
          <div className="space-y-3 p-1">
            {data.map((entry, index) => {
              const percentage = ((entry.value / total) * 100).toFixed(1);
              return (
                <div key={entry.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <div 
                    className="w-4 h-4 rounded-full flex-shrink-0"
                    style={{ 
                      background: `linear-gradient(135deg, ${COLORS[index % COLORS.length]}, ${COLORS[index % COLORS.length]}bb)`,
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-foreground truncate" title={entry.name}>
                      {entry.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {entry.value} ({percentage}%)
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}