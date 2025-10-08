import { Menu, Bell, Moon, Sun, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useNavigate } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface UnifiedHeaderProps {
  sidebarCollapsed?: boolean;
  onToggleSidebar?: () => void;
  title?: string;
  breadcrumbs?: { label: string; href?: string }[];
}

// Mock notifications data
const notifications = [
  {
    id: 1,
    title: "Lease Expiring Soon",
    message: "Suite 301 in Riverstone Resi lease expires in 30 days",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    title: "Maintenance Request",
    message: "New maintenance request for Skyline Business Park",
    time: "5 hours ago",
    unread: true,
  },
  {
    id: 3,
    title: "Payment Received",
    message: "Rent payment received from Crystal Unit tenant",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 4,
    title: "New Tenant Inquiry",
    message: "Inquiry received for available suite in Hello World",
    time: "2 days ago",
    unread: false,
  },
];

export function UnifiedHeader({ 
  sidebarCollapsed, 
  onToggleSidebar, 
  title = "Dashboard",
  breadcrumbs 
}: UnifiedHeaderProps) {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const unreadCount = notifications.filter(n => n.unread).length;

  const handleNotificationClick = (id: number) => {
    navigate("/notifications");
  };

  const handleLogout = () => {
    // Add logout logic here
    console.log("Logging out...");
    navigate("/");
  };

  return (
    <div className="bg-gradient-to-r from-card to-card/95 border-b border-border/50 px-6 py-4 shadow-sm backdrop-blur-sm sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggleSidebar}
            className="hover:bg-accent/50 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div>
            <h1 className="text-2xl font-bold text-foreground">{title}</h1>
            {breadcrumbs && breadcrumbs.length > 0 && (
              <Breadcrumb className="mt-1">
                <BreadcrumbList>
                  {breadcrumbs.map((crumb, index) => (
                    <div key={index} className="flex items-center">
                      {index > 0 && <BreadcrumbSeparator />}
                      <BreadcrumbItem>
                        {index === breadcrumbs.length - 1 || !crumb.href ? (
                          <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                        )}
                      </BreadcrumbItem>
                    </div>
                  ))}
                </BreadcrumbList>
              </Breadcrumb>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                {unreadCount > 0 && (
                  <Badge 
                    variant="destructive" 
                    className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  >
                    {unreadCount}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-semibold">Notifications</h3>
                {unreadCount > 0 && (
                  <Badge variant="secondary">{unreadCount} new</Badge>
                )}
              </div>
              <ScrollArea className="h-[400px]">
                <div className="p-2">
                  {notifications.map((notification) => (
                    <button
                      key={notification.id}
                      onClick={() => handleNotificationClick(notification.id)}
                      className="w-full text-left p-3 rounded-lg hover:bg-accent transition-colors mb-2"
                    >
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        {notification.unread && (
                          <div className="w-2 h-2 rounded-full bg-primary mt-1" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {notification.message}
                      </p>
                      <span className="text-xs text-muted-foreground">
                        {notification.time}
                      </span>
                    </button>
                  ))}
                </div>
              </ScrollArea>
              <div className="p-2 border-t">
                <Button 
                  variant="ghost" 
                  className="w-full"
                  onClick={() => navigate("/notifications")}
                >
                  View All Notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Logout */}
          <Button
            variant="ghost"
            size="icon"
            onClick={handleLogout}
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
