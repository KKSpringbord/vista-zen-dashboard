import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface EnhancedLineChartProps {
  data: Array<{ name: string; [key: string]: any }>;
  series: Array<{ dataKey: string; name: string; color: string; strokeWidth?: number }>;
  onPointClick?: (data: any, seriesKey: string) => void;
  showLegend?: boolean;
  interactive?: boolean;
  curved?: boolean;
}

export function EnhancedLineChart({ 
  data, 
  series, 
  onPointClick, 
  showLegend = true,
  interactive = true,
  curved = true
}: EnhancedLineChartProps) {
  const [hiddenSeries, setHiddenSeries] = useState<Set<string>>(new Set());

  const toggleSeries = (dataKey: string) => {
    if (!interactive) return;
    
    setHiddenSeries(prev => {
      const newSet = new Set(prev);
      if (newSet.has(dataKey)) {
        newSet.delete(dataKey);
      } else {
        newSet.add(dataKey);
      }
      return newSet;
    });
  };

  const handlePointClick = (data: any, event: any) => {
    if (onPointClick && event.payload) {
      const seriesKey = Object.keys(event.payload).find(key => 
        series.some(s => s.dataKey === key)
      );
      if (seriesKey) {
        onPointClick(data, seriesKey);
      }
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div 
                className="w-3 h-3 rounded-full border-2" 
                style={{ 
                  backgroundColor: entry.color,
                  borderColor: entry.color 
                }}
              />
              <span className="text-muted-foreground">{entry.name}:</span>
              <span className="font-medium text-foreground">{entry.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    if (!showLegend) return null;
    
    return (
      <div className="flex flex-wrap gap-4 justify-center mt-4">
        {payload?.map((entry: any, index: number) => (
          <div
            key={index}
            className={`flex items-center gap-2 cursor-pointer transition-opacity ${
              hiddenSeries.has(entry.dataKey) ? 'opacity-50' : 'opacity-100'
            } ${interactive ? 'hover:opacity-75' : ''}`}
            onClick={() => toggleSeries(entry.dataKey)}
          >
            <div 
              className="w-4 h-0.5 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm font-medium text-foreground">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart 
        data={data} 
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        onClick={handlePointClick}
      >
        <defs>
          {series.map((s, index) => (
            <linearGradient key={`gradient-${index}`} id={`lineGradient-${s.dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity={0.2} />
              <stop offset="100%" stopColor={s.color} stopOpacity={0.05} />
            </linearGradient>
          ))}
        </defs>
        <CartesianGrid 
          strokeDasharray="1 4" 
          stroke="hsl(var(--border))" 
          strokeOpacity={0.3}
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
        <Tooltip content={<CustomTooltip />} />
        {showLegend && <Legend content={<CustomLegend />} />}
        
        {series.map((s, index) => (
          <Line 
            key={s.dataKey}
            type={curved ? "monotone" : "linear"}
            dataKey={s.dataKey}
            name={s.name}
            stroke={s.color}
            strokeWidth={s.strokeWidth || 2.5}
            dot={{ 
              fill: s.color, 
              strokeWidth: 2, 
              r: 4,
              stroke: 'hsl(var(--background))'
            }}
            activeDot={{ 
              r: 6, 
              fill: s.color,
              stroke: 'hsl(var(--background))',
              strokeWidth: 2,
              style: {
                cursor: onPointClick ? 'pointer' : 'default'
              }
            }}
            style={{ 
              display: hiddenSeries.has(s.dataKey) ? 'none' : 'block'
            }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}