import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { UnifiedHeader } from "@/components/layout/UnifiedHeader";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

export function MainLayout({ children, title, breadcrumbs }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen flex w-full bg-background">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className="flex-1 flex flex-col">
        <UnifiedHeader 
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          title={title}
          breadcrumbs={breadcrumbs}
        />
        
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
