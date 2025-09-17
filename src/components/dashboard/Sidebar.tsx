import { 
  LayoutDashboard, 
  Building2, 
  Layers3, 
  Users, 
  CreditCard, 
  FileText, 
  BarChart3,
  Code,
  Settings
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Property Management', href: '/properties', icon: Building2 },
  { name: 'Stacking Plan', href: '/stacking', icon: Layers3 },
  { name: 'Team Management', href: '/team', icon: Users },
  { name: 'Subscription Management', href: '/subscription', icon: CreditCard },
  { name: 'User Log', href: '/user-log', icon: FileText },
  { name: 'Reports', href: '/reports', icon: BarChart3 },
  { name: 'Embed Code', href: '/embed', icon: Code },
  { name: 'Account Settings', href: '/settings', icon: Settings },
];

interface SidebarProps {
  collapsed?: boolean;
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  return (
    <div className={cn(
      "h-screen bg-card border-r border-border flex flex-col transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-muted flex items-center justify-center">
            <Building2 className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold text-primary">StackPlanner</h1>
              <p className="text-xs text-muted-foreground">Property Management</p>
            </div>
          )}
        </div>
      </div>

      {/* User Profile */}
      {!collapsed && (
        <div className="p-4 border-b border-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-subtle flex items-center justify-center">
              <span className="text-sm font-medium text-primary">KC</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Khamakhone Chandrasekaran</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                    "hover:bg-accent hover:text-accent-foreground",
                    isActive 
                      ? "bg-primary text-primary-foreground shadow-sm" 
                      : "text-muted-foreground",
                    collapsed && "justify-center"
                  )
                }
              >
                <item.icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-4 h-4")} />
                {!collapsed && <span className="truncate">{item.name}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border">
        <button className={cn(
          "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground",
          "hover:bg-destructive hover:text-destructive-foreground transition-all duration-200",
          "w-full",
          collapsed && "justify-center"
        )}>
          <FileText className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-4 h-4")} />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );
}