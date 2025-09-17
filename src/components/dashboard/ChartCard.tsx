import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChartCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  description?: string;
}

export function ChartCard({ title, children, className, description }: ChartCardProps) {
  return (
    <div className={cn(
      "bg-card rounded-xl border border-border p-6 shadow-sm",
      className
    )}>
      <div className="space-y-1 mb-4">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="w-full h-64">
        {children}
      </div>
    </div>
  );
}