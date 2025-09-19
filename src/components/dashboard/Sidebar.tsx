import { 
  LayoutDashboard, 
  Building2, 
  Layers3, 
  Users, 
  CreditCard, 
  FileText, 
  BarChart3,
  Code,
  Settings,
  Building,
  Plus,
  Home,
  UserPlus,
  Database,
  ChevronDown,
  ClipboardList
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Stacking Plan', href: '/stacking', icon: Layers3 },
  { name: 'Team Management', href: '/team', icon: Users },
  { name: 'Subscription Management', href: '/subscription', icon: CreditCard },
  { name: 'User Log', href: '/user-log', icon: FileText },
  { name: 'Reports', href: '/reports', icon: BarChart3 },
  { name: 'Embed Code', href: '/embed', icon: Code },
  { name: 'Account Settings', href: '/settings', icon: Settings },
];

const propertyManagement = {
  name: 'Property Management',
  icon: Building2,
  subItems: [
    {
      name: 'Property',
      items: [
        { name: 'Property Listing', href: '/properties/listing', icon: Building },
        { name: 'Add Property', href: '/properties/add-property', icon: Plus },
        { name: 'Add Floor', href: '/properties/add-floor', icon: Layers3 },
        { name: 'Add Suite', href: '/properties/add-suite', icon: Home },
        { name: 'Add Tenant', href: '/properties/add-tenant', icon: UserPlus },
        { name: 'Import / Export', href: '/properties/import-export', icon: Database },
      ]
    },
    { name: 'Tenant Listing', href: '/properties/tenant-listing', icon: ClipboardList }
  ]
};

interface SidebarProps {
  collapsed?: boolean;
}

export function Sidebar({ collapsed = false }: SidebarProps) {
  const [isPropertyOpen, setIsPropertyOpen] = useState(false);
  const [isPropertySubOpen, setIsPropertySubOpen] = useState(false);

  return (
    <div className={cn(
      "h-screen bg-card/95 backdrop-blur-sm border-r border-border/50 flex flex-col transition-all duration-300 shadow-xl",
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
      <nav className="flex-1 p-4 overflow-y-auto">
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

          {/* Property Management Collapsible Section */}
          <li>
            <button
              onClick={() => setIsPropertyOpen(!isPropertyOpen)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 w-full",
                "hover:bg-accent hover:text-accent-foreground text-muted-foreground",
                collapsed && "justify-center"
              )}
            >
              <propertyManagement.icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-4 h-4")} />
              {!collapsed && (
                <>
                  <span className="truncate flex-1 text-left">{propertyManagement.name}</span>
                  <ChevronDown 
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isPropertyOpen && "transform rotate-180"
                    )} 
                  />
                </>
              )}
            </button>

            {/* Property Management Submenu */}
            {!collapsed && isPropertyOpen && (
              <ul className="ml-6 mt-2 space-y-1 border-l border-border pl-3">
                {/* Property Sub-section */}
                <li>
                  <button
                    onClick={() => setIsPropertySubOpen(!isPropertySubOpen)}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 w-full hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <Building className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate flex-1 text-left">Property</span>
                    <ChevronDown 
                      className={cn(
                        "w-3 h-3 transition-transform duration-200",
                        isPropertySubOpen && "transform rotate-180"
                      )} 
                    />
                  </button>

                  {isPropertySubOpen && (
                    <ul className="ml-6 mt-1 space-y-1">
                      {propertyManagement.subItems[0].items.map((item) => (
                        <li key={item.name}>
                          <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                              cn(
                                "flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200",
                                "hover:bg-accent hover:text-accent-foreground",
                                isActive 
                                  ? "bg-primary/10 text-primary" 
                                  : "text-muted-foreground"
                              )
                            }
                          >
                            <item.icon className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{item.name}</span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Tenant Listing - Direct Link */}
                <li>
                  <NavLink
                    to={propertyManagement.subItems[1].href}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                        "hover:bg-accent hover:text-accent-foreground",
                        isActive 
                          ? "bg-primary/10 text-primary" 
                          : "text-muted-foreground"
                      )
                    }
                  >
                    <ClipboardList className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{propertyManagement.subItems[1].name}</span>
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
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