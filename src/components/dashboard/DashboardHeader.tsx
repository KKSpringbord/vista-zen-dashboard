import { Calendar, Filter, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function DashboardHeader() {
  return (
    <div className="bg-card border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Overview of your property portfolio</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Filter</span>
          </div>
          
          <Select defaultValue="year-to-year">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year-to-year">Year-to-Year</SelectItem>
              <SelectItem value="quarter">Quarter</SelectItem>
              <SelectItem value="month">Month</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-regions">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-regions">All Regions</SelectItem>
              <SelectItem value="north">North</SelectItem>
              <SelectItem value="south">South</SelectItem>
              <SelectItem value="east">East</SelectItem>
              <SelectItem value="west">West</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-properties">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Select Property" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-properties">All Properties</SelectItem>
              <SelectItem value="property-1">Property 1</SelectItem>
              <SelectItem value="property-2">Property 2</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="default" className="bg-primary hover:bg-primary-muted">
            Submit
          </Button>

          <Button variant="outline" size="icon">
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}