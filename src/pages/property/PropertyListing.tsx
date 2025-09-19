import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Plus, Eye, Edit, Trash2 } from "lucide-react";

const PropertyListing = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for properties
  const properties = [
    {
      id: 1,
      name: "Riverstone Residential",
      type: "Residential",
      address: "123 Main St, Downtown",
      floors: 15,
      suites: 150,
      occupancy: "95%",
      status: "Active",
    },
    {
      id: 2,
      name: "Skyline Business Center",
      type: "Commercial",
      address: "456 Business Ave, CBD",
      floors: 25,
      suites: 200,
      occupancy: "88%",
      status: "Active",
    },
    {
      id: 3,
      name: "Crystal Unit Portfolio",
      type: "Mixed Use",
      address: "789 Crystal Dr, Midtown",
      floors: 12,
      suites: 120,
      occupancy: "92%",
      status: "Active",
    },
    {
      id: 4,
      name: "Hello World Complex",
      type: "Residential",
      address: "321 Tech Blvd, Innovation District",
      floors: 8,
      suites: 80,
      occupancy: "87%",
      status: "Maintenance",
    },
  ];

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800 hover:bg-green-100";
      case "Maintenance":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-100";
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Property Listing</h1>
          <p className="text-muted-foreground">Manage and view all properties in your portfolio</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus className="w-4 h-4" />
          Add Property
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Properties</CardTitle>
          <div className="flex items-center gap-4">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search properties..."
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
                <TableHead>Property Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Floors</TableHead>
                <TableHead>Suites</TableHead>
                <TableHead>Occupancy</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProperties.map((property) => (
                <TableRow key={property.id}>
                  <TableCell className="font-medium">{property.name}</TableCell>
                  <TableCell>{property.type}</TableCell>
                  <TableCell>{property.address}</TableCell>
                  <TableCell>{property.floors}</TableCell>
                  <TableCell>{property.suites}</TableCell>
                  <TableCell>{property.occupancy}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(property.status)}>
                      {property.status}
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
  );
};

export default PropertyListing;