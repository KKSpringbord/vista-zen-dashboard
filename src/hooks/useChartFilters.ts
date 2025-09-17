import { useState, useMemo } from 'react';

export interface ChartFilter {
  key: string;
  value: string | number;
  label: string;
}

export interface FilterConfig {
  key: string;
  label: string;
  options: Array<{ value: string | number; label: string }>;
  defaultValue?: string | number;
}

export function useChartFilters(configs: FilterConfig[]) {
  const [activeFilters, setActiveFilters] = useState<Record<string, string | number>>(() => {
    const initial: Record<string, string | number> = {};
    configs.forEach(config => {
      if (config.defaultValue !== undefined) {
        initial[config.key] = config.defaultValue;
      }
    });
    return initial;
  });

  const updateFilter = (key: string, value: string | number) => {
    setActiveFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilter = (key: string) => {
    setActiveFilters(prev => {
      const updated = { ...prev };
      delete updated[key];
      return updated;
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({});
  };

  const applyFilters = useMemo(() => {
    return <T extends Record<string, any>>(data: T[]): T[] => {
      if (Object.keys(activeFilters).length === 0) return data;

      return data.filter(item => {
        return Object.entries(activeFilters).every(([filterKey, filterValue]) => {
          // Handle different filter logic based on filter type
          if (filterKey === 'dateRange') {
            // Custom date range logic would go here
            return true;
          }
          
          if (filterKey === 'propertyType') {
            return item.type === filterValue || item.category === filterValue;
          }
          
          if (filterKey === 'timeframe') {
            // Custom timeframe logic would go here
            return true;
          }
          
          // Default: exact match
          return item[filterKey] === filterValue;
        });
      });
    };
  }, [activeFilters]);

  const hasActiveFilters = Object.keys(activeFilters).length > 0;

  return {
    activeFilters,
    updateFilter,
    clearFilter,
    clearAllFilters,
    applyFilters,
    hasActiveFilters,
    configs
  };
}