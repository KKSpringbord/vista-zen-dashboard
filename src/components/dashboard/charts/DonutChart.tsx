import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

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
];

export function ModernDonutChart({ data }: DonutChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={entry.color || COLORS[index % COLORS.length]} 
            />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Legend
          verticalAlign="bottom"
          height={36}
          wrapperStyle={{
            fontSize: '12px',
            color: 'hsl(var(--muted-foreground))'
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}