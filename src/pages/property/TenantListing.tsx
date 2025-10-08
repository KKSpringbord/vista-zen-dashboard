import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Search, Filter, Plus, Eye, Edit, Trash2, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";

const TenantListing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for tenants
  const tenants = [
    {
      id: 1,
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@email.com",
      phone: "(555) 123-4567",
      property: "Riverstone Residential",
      suite: "101",
      leaseStart: "2024-01-15",
      leaseEnd: "2024-12-31",
      monthlyRent: 2500,
      status: "Active",
      avatar: ""
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 234-5678",
      property: "Skyline Business Center",
      suite: "205",
      leaseStart: "2024-03-01",
      leaseEnd: "2025-02-28",
      monthlyRent: 3200,
      status: "Active",
      avatar: ""
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Brown",
      email: "m.brown@email.com",
      phone: "(555) 345-6789",
      property: "Crystal Unit Portfolio",
      suite: "302",
      leaseStart: "2023-12-01",
      leaseEnd: "2024-11-30",
      monthlyRent: 2800,
      status: "Expiring Soon",
      avatar: ""
    },
    {
      id: 4,
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@email.com",
      phone: "(555) 456-7890",
      property: "Hello World Complex",
      suite: "404",
      leaseStart: "2024-02-15",
      leaseEnd: "2025-01-31",
      monthlyRent: 2200,
      status: "Active",
      avatar: ""
    },
  ];

  const filteredTenants = tenants.filter(tenant =>
    `${tenant.firstName} ${tenant.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tenant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tenant.property.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Expiring Soon":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      case "Expired":
        return "bg-red-100 text-red-800 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`;
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tenants" },
  ];

  return (
    <MainLayout title="Tenant Listing" breadcrumbs={breadcrumbs}>
      <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Tenant Listing</h1>
          <p className="text-muted-foreground">Manage and view all tenants across your properties</p>
        </div>
        <Button 
          onClick={() => navigate("/properties/add-tenant")}
          className="flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Tenant
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Tenants</CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search tenants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tenant</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Suite</TableHead>
                <TableHead>Lease Period</TableHead>
                <TableHead>Monthly Rent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={tenant.avatar} />
                        <AvatarFallback>
                          {getInitials(tenant.firstName, tenant.lastName)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">
                          {tenant.firstName} {tenant.lastName}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-3 h-3" />
                        {tenant.email}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="w-3 h-3" />
                        {tenant.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{tenant.property}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {tenant.suite}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{new Date(tenant.leaseStart).toLocaleDateString()}</div>
                      <div className="text-muted-foreground">
                        to {new Date(tenant.leaseEnd).toLocaleDateString()}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">
                      ${tenant.monthlyRent.toLocaleString()}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(tenant.status)}>
                      {tenant.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      </div>
    </MainLayout>
  );
};

export default TenantListing;