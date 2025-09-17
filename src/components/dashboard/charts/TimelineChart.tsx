import { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, Scatter, ScatterChart, ZAxis } from 'recharts';

interface TimelinePoint {
  name: string;
  date: string | number;
  [key: string]: any;
}

interface TimelineSeriesConfig {
  dataKey: string;
  name: string;
  color: string;
  type: 'line' | 'scatter';
  size?: number; // for scatter points
}

interface TimelineChartProps {
  data: TimelinePoint[];
  series: TimelineSeriesConfig[];
  onPointClick?: (data: any, seriesKey: string) => void;
  showLegend?: boolean;
  interactive?: boolean;
  timeFormat?: 'date' | 'quarter' | 'month' | 'year';
}

export function TimelineChart({ 
  data, 
  series, 
  onPointClick, 
  showLegend = true,
  interactive = true,
  timeFormat = 'date'
}: TimelineChartProps) {
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

  const lineSeries = series.filter(s => s.type === 'line' && !hiddenSeries.has(s.dataKey));
  const scatterSeries = series.filter(s => s.type === 'scatter' && !hiddenSeries.has(s.dataKey));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          {payload.map((entry: any, index: number) => {
            const seriesInfo = series.find(s => s.dataKey === entry.dataKey);
            return (
              <div key={index} className="flex items-center gap-2 text-sm">
                {seriesInfo?.type === 'scatter' ? (
                  <div 
                    className="w-3 h-3 rounded-full border-2" 
                    style={{ 
                      backgroundColor: entry.color,
                      borderColor: 'hsl(var(--background))'
                    }}
                  />
                ) : (
                  <div 
                    className="w-4 h-0.5 rounded-full" 
                    style={{ backgroundColor: entry.color }}
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
              {seriesInfo?.type === 'scatter' ? (
                <div 
                  className="w-3 h-3 rounded-full border-2" 
                  style={{ 
                    backgroundColor: entry.color,
                    borderColor: 'hsl(var(--foreground))'
                  }}
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

  if (scatterSeries.length > 0 && lineSeries.length === 0) {
    // Pure scatter chart
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart 
          data={data} 
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          onClick={handlePointClick}
        >
          <CartesianGrid 
            strokeDasharray="1 4" 
            stroke="hsl(var(--border))" 
            strokeOpacity={0.3}
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
          <ZAxis range={[50, 200]} />
          <Tooltip content={<CustomTooltip />} />
          {showLegend && <Legend content={<CustomLegend />} />}
          
          {scatterSeries.map((s) => (
            <Scatter 
              key={s.dataKey}
              dataKey={s.dataKey}
              name={s.name}
              fill={s.color}
              style={{ 
                cursor: onPointClick ? 'pointer' : 'default'
              }}
            />
          ))}
        </ScatterChart>
      </ResponsiveContainer>
    );
  }

  // Line chart (with optional scatter overlay)
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart 
        data={data} 
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        onClick={handlePointClick}
      >
        <defs>
          {series.map((s, index) => (
            <linearGradient key={`gradient-${index}`} id={`timelineGradient-${s.dataKey}`} x1="0" y1="0" x2="0" y2="1">
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
        
        {lineSeries.map((s) => (
          <Line 
            key={s.dataKey}
            type="monotone"
            dataKey={s.dataKey}
            name={s.name}
            stroke={s.color}
            strokeWidth={2}
            dot={{ 
              fill: s.color, 
              strokeWidth: 2, 
              r: 5,
              stroke: 'hsl(var(--background))'
            }}
            activeDot={{ 
              r: 7, 
              fill: s.color,
              stroke: 'hsl(var(--background))',
              strokeWidth: 2,
              style: {
                cursor: onPointClick ? 'pointer' : 'default'
              }
            }}
            connectNulls={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}