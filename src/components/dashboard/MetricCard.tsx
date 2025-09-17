import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
  className?: string;
}

export function MetricCard({ title, value, icon: Icon, trend, className }: MetricCardProps) {
  return (
    <div className={cn(
      "bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all duration-200",
      "hover:border-primary/20",
      className
    )}>
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          {trend && (
            <div className="flex items-center gap-1">
              <span className={cn(
                "text-xs font-medium",
                trend.positive ? "text-green-600" : "text-red-600"
              )}>
                {trend.positive ? "+" : ""}{trend.value}%
              </span>
              <span className="text-xs text-muted-foreground">{trend.label}</span>
            </div>
          )}
        </div>
        <div className="w-12 h-12 rounded-lg bg-primary-subtle flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
    </div>
  );
}