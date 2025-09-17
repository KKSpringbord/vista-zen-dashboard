import { Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useChartFilters, FilterConfig } from "@/hooks/useChartFilters";

interface ChartFiltersProps {
  configs: FilterConfig[];
  onFiltersChange?: (filters: Record<string, string | number>) => void;
  className?: string;
}

export function ChartFilters({ configs, onFiltersChange, className }: ChartFiltersProps) {
  const { 
    activeFilters, 
    updateFilter, 
    clearFilter, 
    clearAllFilters, 
    hasActiveFilters 
  } = useChartFilters(configs);

  const handleFilterChange = (key: string, value: string | number) => {
    updateFilter(key, value);
    onFiltersChange?.(activeFilters);
  };

  const handleClearFilter = (key: string) => {
    clearFilter(key);
    onFiltersChange?.(activeFilters);
  };

  const handleClearAll = () => {
    clearAllFilters();
    onFiltersChange?.({});
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Filter Controls */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Filter className="w-4 h-4" />
          Filters:
        </div>
        
        {configs.map((config) => (
          <Select
            key={config.key}
            value={activeFilters[config.key]?.toString() || ""}
            onValueChange={(value) => handleFilterChange(config.key, value)}
          >
            <SelectTrigger className="w-40">
              <SelectValue placeholder={config.label} />
            </SelectTrigger>
            <SelectContent>
              {config.options.map((option) => (
                <SelectItem key={option.value.toString()} value={option.value.toString()}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ))}

        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearAll}
            className="text-muted-foreground hover:text-foreground"
          >
            Clear All
            <X className="w-3 h-3 ml-1" />
          </Button>
        )}
      </div>

      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(activeFilters).map(([key, value]) => {
            const config = configs.find(c => c.key === key);
            const option = config?.options.find(o => o.value === value);
            
            return (
              <Badge
                key={key}
                variant="secondary"
                className="flex items-center gap-1 pr-1"
              >
                <span className="text-xs">
                  {config?.label}: {option?.label || value}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-auto p-0.5 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => handleClearFilter(key)}
                >
                  <X className="w-3 h-3" />
                </Button>
              </Badge>
            );
          })}
        </div>
      )}
    </div>
  );
}