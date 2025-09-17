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
            <stop offset="0%" stopColor={color} stopOpacity={0.6} />
            <stop offset="30%" stopColor={color} stopOpacity={0.4} />
            <stop offset="70%" stopColor={color} stopOpacity={0.2} />
            <stop offset="100%" stopColor={color} stopOpacity={0.02} />
          </linearGradient>
          <filter id="areaGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <pattern id="areaPattern" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="transparent"/>
            <circle cx="2" cy="2" r="0.5" fill={color} fillOpacity="0.1"/>
          </pattern>
        </defs>
        <CartesianGrid 
          strokeDasharray="1 3" 
          stroke="hsl(var(--border))" 
          strokeOpacity={0.2}
          horizontal={true}
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
        />
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
        <Area 
          type="monotone" 
          dataKey={dataKey} 
          stroke={color}
          strokeWidth={3}
          fill="url(#areaGradient)"
          filter="url(#areaGlow)"
          dot={{ fill: color, strokeWidth: 2, r: 6, filter: 'url(#areaGlow)' }}
          activeDot={{ 
            r: 8, 
            fill: color, 
            stroke: 'hsl(var(--background))', 
            strokeWidth: 3,
            filter: 'url(#areaGlow)'
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}