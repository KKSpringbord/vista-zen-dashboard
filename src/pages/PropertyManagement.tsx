import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { 
  Building, 
  Plus, 
  Users, 
  FileSpreadsheet, 
  Database,
  Home,
  ClipboardList,
  UserPlus,
  Layers
} from "lucide-react";

const PropertyManagement = () => {
  const navigate = useNavigate();

  const propertyActions = [
    {
      title: "Property Listing",
      description: "View and manage all properties in your portfolio",
      icon: Building,
      path: "/properties/listing",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Add Property", 
      description: "Add a new property to your portfolio",
      icon: Plus,
      path: "/properties/add-property",
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Add Floor",
      description: "Add floors to existing properties",
      icon: Layers,
      path: "/properties/add-floor", 
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Add Suite",
      description: "Add suites or units to property floors",
      icon: Home,
      path: "/properties/add-suite",
      color: "bg-orange-50 text-orange-600"
    },
    {
      title: "Add Tenant",
      description: "Add tenants to available suites",
      icon: UserPlus,
      path: "/properties/add-tenant",
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Import / Export",
      description: "Import property data or export reports",
      icon: Database,
      path: "/properties/import-export",
      color: "bg-gray-50 text-gray-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-6">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Property Management</h1>
              <p className="text-muted-foreground">Manage your properties, floors, suites, and tenants all in one place</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {propertyActions.map((action) => {
                const IconComponent = action.icon;
                return (
                  <Card 
                    key={action.path}
                    className="cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => navigate(action.path)}
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${action.color}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <CardTitle className="text-lg">{action.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{action.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ClipboardList className="w-5 h-5" />
                    Tenant Management
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Manage tenant information, leases, and communications
                  </p>
                  <Button 
                    onClick={() => navigate("/properties/tenant-listing")}
                    className="w-full flex items-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    View Tenant Listing
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-muted-foreground mb-3">
                    Common tasks and quick access tools
                  </p>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate("/properties/add-property")}
                    >
                      <Plus className="w-4 h-4 mr-1" />
                      Add Property
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigate("/properties/add-tenant")}
                    >
                      <UserPlus className="w-4 h-4 mr-1" />
                      Add Tenant
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;