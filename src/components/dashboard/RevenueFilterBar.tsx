import { useState } from "react";
import { RefreshCw, Calendar, MapPin, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface RevenueFilterBarProps {
  onFilterChange?: (filters: {
    timeframe: string;
    property1: string;
    property2: string;
  }) => void;
}

export function RevenueFilterBar({ onFilterChange }: RevenueFilterBarProps) {
  const [timeframe, setTimeframe] = useState("year-to-year");
  const [location, setLocation] = useState("all");
  const [property, setProperty] = useState("all");

  const handleSubmit = () => {
    onFilterChange?.({
      timeframe,
      property1: location,
      property2: property,
    });
  };

  const handleRefresh = () => {
    setTimeframe("year-to-year");
    setLocation("all");
    setProperty("all");
    onFilterChange?.({
      timeframe: "year-to-year",
      property1: "all",
      property2: "all",
    });
  };

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary to-primary/90 p-6 shadow-lg mb-6 border border-primary-foreground/10">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative flex flex-wrap items-end gap-4">
        {/* Time Period Filter */}
        <div className="flex flex-col gap-2 min-w-[180px] animate-fade-in">
          <label className="flex items-center gap-2 text-primary-foreground/90 text-xs font-semibold uppercase tracking-wide">
            <Calendar className="h-3.5 w-3.5" />
            Time Period
          </label>
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="h-11 bg-background/95 backdrop-blur-sm border-2 border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-background shadow-sm transition-all duration-200 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border-2 border-primary-foreground/20">
              <SelectItem value="year-to-year">Year-to-Year</SelectItem>
              <SelectItem value="quarter">Quarter</SelectItem>
              <SelectItem value="month">Month</SelectItem>
              <SelectItem value="ytd">Year to Date</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Location Filter */}
        <div className="flex flex-col gap-2 min-w-[200px] animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <label className="flex items-center gap-2 text-primary-foreground/90 text-xs font-semibold uppercase tracking-wide">
            <MapPin className="h-3.5 w-3.5" />
            Location
          </label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="h-11 bg-background/95 backdrop-blur-sm border-2 border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-background shadow-sm transition-all duration-200 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border-2 border-primary-foreground/20">
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="florida">Florida, Arizona...</SelectItem>
              <SelectItem value="california">California</SelectItem>
              <SelectItem value="texas">Texas</SelectItem>
              <SelectItem value="newyork">New York</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Filter */}
        <div className="flex flex-col gap-2 min-w-[200px] animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <label className="flex items-center gap-2 text-primary-foreground/90 text-xs font-semibold uppercase tracking-wide">
            <Building2 className="h-3.5 w-3.5" />
            Property
          </label>
          <Select value={property} onValueChange={setProperty}>
            <SelectTrigger className="h-11 bg-background/95 backdrop-blur-sm border-2 border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-background shadow-sm transition-all duration-200 cursor-pointer">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-background border-2 border-primary-foreground/20">
              <SelectItem value="all">All Properties</SelectItem>
              <SelectItem value="palm-grove">Palm Grove Village</SelectItem>
              <SelectItem value="crystal-lake">Crystal Lake</SelectItem>
              <SelectItem value="ocean-view">Ocean View Villas</SelectItem>
              <SelectItem value="grandview">Grandview Estates</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 ml-auto animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            variant="ghost"
            size="icon"
            className="h-11 w-11 bg-background/95 backdrop-blur-sm hover:bg-background border-2 border-primary-foreground/20 hover:border-primary-foreground/40 shadow-sm transition-all duration-200"
            onClick={handleRefresh}
            title="Reset filters"
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          
          <Button
            onClick={handleSubmit}
            className="h-11 px-6 bg-background text-primary hover:bg-background/90 border-2 border-primary-foreground/20 shadow-lg hover:shadow-xl transition-all duration-200 font-semibold"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
