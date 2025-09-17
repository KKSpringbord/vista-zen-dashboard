import { useState } from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

interface ComboChartSeries {
  dataKey: string;
  name: string;
  color: string;
  type: 'bar' | 'line';
  yAxisId?: 'left' | 'right';
  strokeWidth?: number;
}

interface ComboChartProps {
  data: Array<{ name: string; [key: string]: any }>;
  series: ComboChartSeries[];
  onElementClick?: (data: any, seriesKey: string, type: 'bar' | 'line') => void;
  showLegend?: boolean;
  interactive?: boolean;
  leftAxisLabel?: string;
  rightAxisLabel?: string;
}

export function ComboChart({ 
  data, 
  series, 
  onElementClick, 
  showLegend = true,
  interactive = true,
  leftAxisLabel,
  rightAxisLabel
}: ComboChartProps) {
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

  const handleElementClick = (data: any, event: any, type: 'bar' | 'line') => {
    if (onElementClick && event.payload) {
      const seriesKey = Object.keys(event.payload).find(key => 
        series.some(s => s.dataKey === key)
      );
      if (seriesKey) {
        onElementClick(data, seriesKey, type);
      }
    }
  };

  const barSeries = series.filter(s => s.type === 'bar' && !hiddenSeries.has(s.dataKey));
  const lineSeries = series.filter(s => s.type === 'line' && !hiddenSeries.has(s.dataKey));
  const hasRightAxis = series.some(s => s.yAxisId === 'right');

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => {
            const seriesInfo = series.find(s => s.dataKey === entry.dataKey);
            return (
              <div key={index} className="flex items-center gap-2 text-sm">
                {seriesInfo?.type === 'bar' ? (
                  <div 
                    className="w-3 h-3 rounded-sm" 
                    style={{ backgroundColor: entry.color }}
                  />
                ) : (
                  <div 
                    className="w-3 h-3 rounded-full border-2" 
                    style={{ 
                      backgroundColor: entry.color,
                      borderColor: entry.color 
                    }}
                  />
                )}
                <span className="text-muted-foreground">{entry.name}:</span>
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
        {payload?.map((entry: any, index: number) => {
          const seriesInfo = series.find(s => s.dataKey === entry.dataKey);
          return (
            <div
              key={index}
              className={`flex items-center gap-2 cursor-pointer transition-opacity ${
                hiddenSeries.has(entry.dataKey) ? 'opacity-50' : 'opacity-100'
              } ${interactive ? 'hover:opacity-75' : ''}`}
              onClick={() => toggleSeries(entry.dataKey)}
            >
              {seriesInfo?.type === 'bar' ? (
                <div 
                  className="w-3 h-3 rounded-sm" 
                  style={{ backgroundColor: entry.color }}
                />
              ) : (
                <div 
                  className="w-4 h-0.5 rounded-full" 
                  style={{ backgroundColor: entry.color }}
                />
              )}
              <span className="text-sm font-medium text-foreground">{entry.value}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart 
        data={data} 
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <defs>
          {series.map((s, index) => (
            <linearGradient key={`gradient-${index}`} id={`comboGradient-${s.dataKey}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={s.color} stopOpacity={s.type === 'bar' ? 0.9 : 0.2} />
              <stop offset="100%" stopColor={s.color} stopOpacity={s.type === 'bar' ? 0.7 : 0.05} />
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
          yAxisId="left"
          axisLine={false}
          tickLine={false}
          tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
          tickMargin={8}
          label={leftAxisLabel ? { value: leftAxisLabel, angle: -90, position: 'insideLeft' } : undefined}
        />
        {hasRightAxis && (
          <YAxis 
            yAxisId="right"
            orientation="right"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            tickMargin={8}
            label={rightAxisLabel ? { value: rightAxisLabel, angle: 90, position: 'insideRight' } : undefined}
          />
        )}
        <Tooltip content={<CustomTooltip />} />
        {showLegend && <Legend content={<CustomLegend />} />}
        
        {barSeries.map((s) => (
          <Bar 
            key={s.dataKey}
            dataKey={s.dataKey}
            name={s.name}
            fill={`url(#comboGradient-${s.dataKey})`}
            yAxisId={s.yAxisId || 'left'}
            radius={[4, 4, 0, 0]}
            style={{ 
              cursor: onElementClick ? 'pointer' : 'default'
            }}
            onClick={(data, event) => handleElementClick(data, event, 'bar')}
          />
        ))}
        
        {lineSeries.map((s) => (
          <Line 
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            name={s.name}
            stroke={s.color}
            strokeWidth={s.strokeWidth || 2.5}
            yAxisId={s.yAxisId || 'left'}
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
                cursor: onElementClick ? 'pointer' : 'default'
              }
            }}
            onClick={(data, event) => handleElementClick(data, event, 'line')}
          />
        ))}
      </ComposedChart>
    </ResponsiveContainer>
  );
}