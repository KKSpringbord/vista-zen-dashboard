import { useState } from "react";
import { RefreshCw } from "lucide-react";
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
    <div className="flex flex-wrap items-center gap-4 p-4 bg-primary rounded-lg mb-6">
      <span className="text-primary-foreground font-semibold text-sm">Filters:</span>

      <div className="flex flex-col gap-1">
        <label className="text-primary-foreground text-xs font-medium">Time Period</label>
        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="w-40 bg-background border-0 hover:bg-background/90 cursor-pointer">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-background">
            <SelectItem value="year-to-year">Year-to-Year</SelectItem>
            <SelectItem value="quarter">Quarter</SelectItem>
            <SelectItem value="month">Month</SelectItem>
            <SelectItem value="ytd">Year to Date</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="bg-background hover:bg-background/90 mt-5"
        onClick={handleRefresh}
        title="Reset filters"
      >
        <RefreshCw className="h-4 w-4" />
      </Button>

      <div className="flex flex-col gap-1">
        <label className="text-primary-foreground text-xs font-medium">Location</label>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-48 bg-background border-0 hover:bg-background/90 cursor-pointer">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-background">
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="florida">Florida, Arizona...</SelectItem>
            <SelectItem value="california">California</SelectItem>
            <SelectItem value="texas">Texas</SelectItem>
            <SelectItem value="newyork">New York</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-primary-foreground text-xs font-medium">Property</label>
        <Select value={property} onValueChange={setProperty}>
          <SelectTrigger className="w-48 bg-background border-0 hover:bg-background/90 cursor-pointer">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-background">
            <SelectItem value="all">All Properties</SelectItem>
            <SelectItem value="palm-grove">Palm Grove Village</SelectItem>
            <SelectItem value="crystal-lake">Crystal Lake</SelectItem>
            <SelectItem value="ocean-view">Ocean View Villas</SelectItem>
            <SelectItem value="grandview">Grandview Estates</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button
        onClick={handleSubmit}
        className="bg-primary border-2 border-primary-foreground text-primary-foreground hover:bg-primary/90 ml-auto mt-5 cursor-pointer"
      >
        Apply Filters
      </Button>
    </div>
  );
}
