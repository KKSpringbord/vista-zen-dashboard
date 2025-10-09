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
  ClipboardList,
  Receipt,
  HelpCircle
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

// Navigation order: Dashboard, Stacking Plan, Property Management, Team Management, Reports, Embed Code, Subscription Management, Account Settings
const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Stacking Plan', href: '/stacking', icon: Layers3 },
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

const teamManagement = {
  name: 'Team Management',
  icon: Users,
  subItems: [
    { name: 'Role Management', href: '/team/roles', icon: Settings },
    { name: 'User Management', href: '/team/users', icon: UserPlus },
    { name: 'Assign Property', href: '/team/assign-property', icon: Building },
  ]
};

const bottomNavigation = [
  { name: 'Reports', href: '/reports', icon: BarChart3 },
  { name: 'Embed Code', href: '/embed-code', icon: Code },
];

const subscriptionManagement = {
  name: 'Subscription Management',
  icon: CreditCard,
  subItems: [
    { name: 'My Plan', href: '/subscription/my-plan', icon: CreditCard },
    { name: 'Invoices', href: '/subscription/invoices', icon: Receipt },
  ]
};

const accountSettings = {
  name: 'Account Settings',
  icon: Settings,
  subItems: [
    { name: 'User Profile', href: '/account/settings', icon: Settings },
    { name: 'Help', href: '/account/help', icon: HelpCircle },
  ]
};

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export function Sidebar({ collapsed = false, onToggle }: SidebarProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Check if any sub-route is active to keep parent menu open
  const isPropertyRouteActive = propertyManagement.subItems.some(item => {
    if ('items' in item) {
      return item.items.some(subItem => currentPath === subItem.href);
    }
    return currentPath === item.href;
  });

  const isTeamRouteActive = teamManagement.subItems.some(item => currentPath === item.href);
  
  const isSubscriptionRouteActive = subscriptionManagement.subItems.some(item => currentPath === item.href);
  
  const isAccountRouteActive = accountSettings.subItems.some(item => currentPath === item.href);

  const [isPropertyOpen, setIsPropertyOpen] = useState(isPropertyRouteActive);
  const [isPropertySubOpen, setIsPropertySubOpen] = useState(isPropertyRouteActive);
  const [isTeamOpen, setIsTeamOpen] = useState(isTeamRouteActive);
  const [isSubscriptionOpen, setIsSubscriptionOpen] = useState(isSubscriptionRouteActive);
  const [isAccountOpen, setIsAccountOpen] = useState(isAccountRouteActive);

  // Update state when route changes
  useEffect(() => {
    if (isPropertyRouteActive) {
      setIsPropertyOpen(true);
      setIsPropertySubOpen(true);
    }
    if (isTeamRouteActive) setIsTeamOpen(true);
    if (isSubscriptionRouteActive) setIsSubscriptionOpen(true);
    if (isAccountRouteActive) setIsAccountOpen(true);
  }, [currentPath, isPropertyRouteActive, isTeamRouteActive, isSubscriptionRouteActive, isAccountRouteActive]);

  return (
    <div className={cn(
      "h-screen bg-card/95 backdrop-blur-sm border-r border-border/50 flex flex-col transition-all duration-300 shadow-xl fixed left-0 top-0 z-20 overflow-y-auto",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="p-6 border-b border-border flex-shrink-0">
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
        <div className="p-4 border-b border-border flex-shrink-0">
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

          {/* Team Management Collapsible Section */}
          <li>
            <button
              onClick={() => setIsTeamOpen(!isTeamOpen)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 w-full",
                "hover:bg-accent hover:text-accent-foreground text-muted-foreground",
                collapsed && "justify-center"
              )}
            >
              <teamManagement.icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-4 h-4")} />
              {!collapsed && (
                <>
                  <span className="truncate flex-1 text-left">{teamManagement.name}</span>
                  <ChevronDown 
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isTeamOpen && "transform rotate-180"
                    )} 
                  />
                </>
              )}
            </button>

            {/* Team Management Submenu */}
            {!collapsed && isTeamOpen && (
              <ul className="ml-6 mt-2 space-y-1 border-l border-border pl-3">
                {teamManagement.subItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
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
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Bottom Navigation (Reports, Embed Code) */}
          {bottomNavigation.map((item) => (
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

          {/* Subscription Management Collapsible Section */}
          <li>
            <button
              onClick={() => setIsSubscriptionOpen(!isSubscriptionOpen)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 w-full",
                "hover:bg-accent hover:text-accent-foreground text-muted-foreground",
                collapsed && "justify-center"
              )}
            >
              <subscriptionManagement.icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-4 h-4")} />
              {!collapsed && (
                <>
                  <span className="truncate flex-1 text-left">{subscriptionManagement.name}</span>
                  <ChevronDown 
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isSubscriptionOpen && "transform rotate-180"
                    )} 
                  />
                </>
              )}
            </button>

            {!collapsed && isSubscriptionOpen && (
              <ul className="ml-6 mt-2 space-y-1 border-l border-border pl-3">
                {subscriptionManagement.subItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
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
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Account Settings Collapsible Section */}
          <li>
            <button
              onClick={() => setIsAccountOpen(!isAccountOpen)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 w-full",
                "hover:bg-accent hover:text-accent-foreground text-muted-foreground",
                collapsed && "justify-center"
              )}
            >
              <accountSettings.icon className={cn("flex-shrink-0", collapsed ? "w-5 h-5" : "w-4 h-4")} />
              {!collapsed && (
                <>
                  <span className="truncate flex-1 text-left">{accountSettings.name}</span>
                  <ChevronDown 
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isAccountOpen && "transform rotate-180"
                    )} 
                  />
                </>
              )}
            </button>

            {!collapsed && isAccountOpen && (
              <ul className="ml-6 mt-2 space-y-1 border-l border-border pl-3">
                {accountSettings.subItems.map((item) => (
                  <li key={item.name}>
                    <NavLink
                      to={item.href}
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
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border flex-shrink-0">
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
