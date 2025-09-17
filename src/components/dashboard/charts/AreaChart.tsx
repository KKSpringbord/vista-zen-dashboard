import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

interface AreaChartProps {
  data: Array<{ name: string; value: number; [key: string]: any }>;
  dataKey?: string;
  color?: string;
}

export function ModernAreaChart({ data, dataKey = 'value', color = 'hsl(var(--chart-primary))' }: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.4} />
            <stop offset="95%" stopColor={color} stopOpacity={0.05} />
          </linearGradient>
        </defs>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke="hsl(var(--border))" 
          strokeOpacity={0.3}
        />
        <XAxis 
          dataKey="name" 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
        />
        <YAxis 
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
          labelStyle={{ color: 'hsl(var(--foreground))' }}
        />
        <Area 
          type="monotone" 
          dataKey={dataKey} 
          stroke={color}
          strokeWidth={2}
          fill="url(#areaGradient)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}