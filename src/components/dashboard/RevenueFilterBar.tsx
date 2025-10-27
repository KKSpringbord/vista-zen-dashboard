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
  const [property1, setProperty1] = useState("florida");
  const [property2, setProperty2] = useState("palm-grove");

  const handleSubmit = () => {
    onFilterChange?.({
      timeframe,
      property1,
      property2,
    });
  };

  const handleRefresh = () => {
    setTimeframe("year-to-year");
    setProperty1("florida");
    setProperty2("palm-grove");
    onFilterChange?.({
      timeframe: "year-to-year",
      property1: "florida",
      property2: "palm-grove",
    });
  };

  return (
    <div className="flex flex-wrap items-center gap-3 p-4 bg-primary rounded-lg mb-6">
      <span className="text-primary-foreground font-medium">Filter</span>

      <Select value={timeframe} onValueChange={setTimeframe}>
        <SelectTrigger className="w-40 bg-background border-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="year-to-year">Year-to-Year</SelectItem>
          <SelectItem value="quarter">Quarter</SelectItem>
          <SelectItem value="month">Month</SelectItem>
          <SelectItem value="ytd">Year to Date</SelectItem>
        </SelectContent>
      </Select>

      <Button
        variant="ghost"
        size="icon"
        className="bg-background hover:bg-background/90"
        onClick={handleRefresh}
      >
        <RefreshCw className="h-4 w-4" />
      </Button>

      <Select value={property1} onValueChange={setProperty1}>
        <SelectTrigger className="w-44 bg-background border-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="florida">Florida, Arizona...</SelectItem>
          <SelectItem value="california">California</SelectItem>
          <SelectItem value="texas">Texas</SelectItem>
          <SelectItem value="newyork">New York</SelectItem>
        </SelectContent>
      </Select>

      <Select value={property2} onValueChange={setProperty2}>
        <SelectTrigger className="w-44 bg-background border-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="palm-grove">Palm Grove Vill...</SelectItem>
          <SelectItem value="crystal-lake">Crystal Lake...</SelectItem>
          <SelectItem value="ocean-view">Ocean View Villas</SelectItem>
          <SelectItem value="grandview">Grandview Est...</SelectItem>
        </SelectContent>
      </Select>

      <Button
        onClick={handleSubmit}
        className="bg-primary border-2 border-primary-foreground text-primary-foreground hover:bg-primary-muted ml-auto"
      >
        Submit
      </Button>
    </div>
  );
}
