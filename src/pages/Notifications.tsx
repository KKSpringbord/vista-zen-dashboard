import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bell, Check, Trash2 } from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Lease Expiring Soon",
    message: "Suite 301 in Riverstone Resi lease expires in 30 days. Please contact the tenant to discuss renewal options.",
    time: "2 hours ago",
    unread: true,
    type: "warning",
  },
  {
    id: 2,
    title: "Maintenance Request",
    message: "New maintenance request for Skyline Business Park. HVAC system needs inspection on Floor 3.",
    time: "5 hours ago",
    unread: true,
    type: "info",
  },
  {
    id: 3,
    title: "Payment Received",
    message: "Rent payment of $4,500 received from Crystal Unit tenant for Suite 205.",
    time: "1 day ago",
    unread: false,
    type: "success",
  },
  {
    id: 4,
    title: "New Tenant Inquiry",
    message: "Inquiry received for available suite in Hello World. Contact: john.doe@example.com",
    time: "2 days ago",
    unread: false,
    type: "info",
  },
  {
    id: 5,
    title: "Document Expiration",
    message: "Insurance document for Crescent Heights expires in 15 days. Please upload renewed document.",
    time: "3 days ago",
    unread: false,
    type: "warning",
  },
];

export default function Notifications() {
  const handleMarkAsRead = (id: number) => {
    console.log("Mark as read:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete:", id);
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Notifications" },
  ];

  return (
    <MainLayout title="Notifications" breadcrumbs={breadcrumbs}>
      <div className="p-6 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-xl font-semibold">All Notifications</h2>
              <p className="text-sm text-muted-foreground">
                {notifications.filter(n => n.unread).length} unread notifications
              </p>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Mark All as Read
          </Button>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card 
              key={notification.id}
              className={notification.unread ? "border-l-4 border-l-primary" : ""}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <CardTitle className="text-lg">{notification.title}</CardTitle>
                      {notification.unread && (
                        <Badge variant="default" className="text-xs">New</Badge>
                      )}
                      <Badge 
                        variant={
                          notification.type === "warning" ? "destructive" :
                          notification.type === "success" ? "default" :
                          "secondary"
                        }
                        className="text-xs"
                      >
                        {notification.type}
                      </Badge>
                    </div>
                    <CardDescription>{notification.time}</CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    {notification.unread && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleMarkAsRead(notification.id)}
                        title="Mark as read"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(notification.id)}
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {notification.message}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
