import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, Cell } from 'recharts';

interface Property {
  key: string;
  name: string;
  color: string;
}

interface LeaseExpiryData {
  bucket: string;
  [key: string]: string | number;
}

interface LeaseExpiryChartProps {
  data: LeaseExpiryData[];
  properties: Property[];
  selectedProperties?: string[];
  onPropertyToggle?: (propertyKey: string) => void;
  onBarClick?: (data: any, propertyKey: string) => void;
  showLegend?: boolean;
}

export function LeaseExpiryChart({ 
  data, 
  properties, 
  selectedProperties = [], 
  onPropertyToggle, 
  onBarClick,
  showLegend = true
}: LeaseExpiryChartProps) {
  const [hiddenProperties, setHiddenProperties] = useState<Set<string>>(new Set());

  const toggleProperty = (propertyKey: string) => {
    setHiddenProperties(prev => {
      const newSet = new Set(prev);
      if (newSet.has(propertyKey)) {
        newSet.delete(propertyKey);
      } else {
        newSet.add(propertyKey);
      }
      return newSet;
    });
    onPropertyToggle?.(propertyKey);
  };

  const handleBarClick = (data: any, event: any) => {
    if (onBarClick && event.payload) {
      const propertyKey = Object.keys(event.payload).find(key => 
        properties.some(p => p.key === key)
      );
      if (propertyKey) {
        onBarClick(data, propertyKey);
      }
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const totalExpiries = payload.reduce((sum: number, entry: any) => sum + (entry.value || 0), 0);
      
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-lg min-w-[200px]">
          <p className="font-semibold text-foreground mb-2">{label}</p>
          <p className="text-sm text-muted-foreground mb-2">Total Expiries: {totalExpiries}</p>
          {payload
            .filter((entry: any) => entry.value > 0)
            .map((entry: any, index: number) => {
              // Find the property info to get the correct color
              const property = properties.find(p => p.key === entry.dataKey);
              const color = property?.color || entry.color;
              
              return (
                <div key={index} className="flex items-center justify-between gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-sm flex-shrink-0" 
                      style={{ backgroundColor: color }}
                    />
                    <span className="text-muted-foreground">{entry.name || property?.name}:</span>
                  </div>
                  <span className="font-medium text-foreground">{entry.value}</span>
                </div>
              );
            })}
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }: any) => {
    return (
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {payload?.map((entry: any, index: number) => (
          <div
            key={index}
            className={`flex items-center gap-2 cursor-pointer transition-opacity ${
              hiddenProperties.has(entry.dataKey) ? 'opacity-50' : 'opacity-100'
            } hover:opacity-75`}
            onClick={() => toggleProperty(entry.dataKey)}
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

  // Filter properties based on selection
  const visibleProperties = selectedProperties.length > 0 
    ? properties.filter(p => selectedProperties.includes(p.key))
    : properties;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
        data={data} 
        margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
        onClick={handleBarClick}
      >
        <defs>
          {visibleProperties.map((property) => (
            <linearGradient key={`gradient-${property.key}`} id={`barGradient-${property.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={property.color} stopOpacity={0.9} />
              <stop offset="100%" stopColor={property.color} stopOpacity={0.7} />
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
          dataKey="bucket" 
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
          label={{ 
            value: 'Expiry Count', 
            angle: -90, 
            position: 'insideLeft',
            style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))', fontSize: '12px' }
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        {showLegend && <Legend content={<CustomLegend />} />}
        
        {visibleProperties.map((property) => (
          <Bar 
            key={property.key}
            dataKey={property.key}
            name={property.name}
            stackId="leases"
            fill={`url(#barGradient-${property.key})`}
            style={{ 
              display: hiddenProperties.has(property.key) ? 'none' : 'block',
              cursor: onBarClick ? 'pointer' : 'default'
            }}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}