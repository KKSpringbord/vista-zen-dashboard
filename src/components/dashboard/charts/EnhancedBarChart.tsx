import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';

interface EnhancedBarChartProps {
  data: Array<{ name: string; [key: string]: any }>;
  series: Array<{ dataKey: string; name: string; color: string; stackId?: string }>;
  stacked?: boolean;
  onBarClick?: (data: any, seriesKey: string) => void;
  showLegend?: boolean;
  interactive?: boolean;
}

export function EnhancedBarChart({ 
  data, 
  series, 
  stacked = false, 
  onBarClick, 
  showLegend = true,
  interactive = true
}: EnhancedBarChartProps) {
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

  const handleBarClick = (data: any, event: any) => {
    if (onBarClick && event.payload) {
      const seriesKey = Object.keys(event.payload).find(key => 
        series.some(s => s.dataKey === key)
      );
      if (seriesKey) {
        onBarClick(data, seriesKey);
      }
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          {payload
            .filter((entry: any) => entry.value > 0)
            .map((entry: any, index: number) => {
              // Find the series info to get the correct color
              const seriesInfo = series.find(s => s.dataKey === entry.dataKey);
              const color = seriesInfo?.color || entry.color;
              
              return (
                <div key={index} className="flex items-center justify-between gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-sm flex-shrink-0" 
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-muted-foreground">{entry.name || seriesInfo?.name}:</span>
                  </div>
                  <span className="font-medium text-foreground">{entry.value.toLocaleString()}</span>
                </div>
              );
            })}
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
              className="w-3 h-3 rounded-sm" 
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
      <BarChart 
        data={data} 
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        onClick={handleBarClick}
      >
        <defs>
          {series.map((s, index) => (
            <linearGradient key={`gradient-${index}`} id={`barGradient-${s.dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity={0.9} />
              <stop offset="100%" stopColor={s.color} stopOpacity={0.7} />
            </linearGradient>
          ))}
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
        />
        <Tooltip content={<CustomTooltip />} />
        {showLegend && <Legend content={<CustomLegend />} />}
        
        {series.map((s, index) => (
          <Bar 
            key={s.dataKey}
            dataKey={s.dataKey}
            name={s.name}
            fill={`url(#barGradient-${s.dataKey})`}
            stackId={stacked ? (s.stackId || 'stack') : undefined}
            radius={stacked ? [0, 0, 0, 0] : [4, 4, 0, 0]}
            style={{ 
              display: hiddenSeries.has(s.dataKey) ? 'none' : 'block',
              cursor: onBarClick ? 'pointer' : 'default'
            }}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}