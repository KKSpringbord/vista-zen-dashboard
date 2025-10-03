import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Building2, Mail, Phone, User } from "lucide-react";

interface Property {
  id: string;
  name: string;
  city: string;
  assigned: boolean;
}

interface UserAssignment {
  id: string;
  name: string;
  role: string;
  assignedProperties: string[];
}

const mockUsers: UserAssignment[] = [
  { id: "1", name: "John H", role: "User 1", assignedProperties: [] },
  { id: "2", name: "John Paul", role: "Admin", assignedProperties: [] },
  { id: "3", name: "Mark A", role: "User 2", assignedProperties: [] },
  { id: "4", name: "Philip Smith", role: "Admin", assignedProperties: [] },
];

const mockProperties: Property[] = [
  { id: "1", name: "Café Horizon", city: "Astor Florida", assigned: false },
  { id: "2", name: "Grandview Estate", city: "Astor Florida", assigned: false },
  { id: "3", name: "Horizon Plaza", city: "Astor Florida", assigned: false },
  { id: "4", name: "Lakeside Enclave", city: "Astor Florida", assigned: false },
  { id: "5", name: "Palm Grove Villas", city: "Astor Florida", assigned: false },
];

export default function AssignProperty() {
  const [users] = useState<UserAssignment[]>(mockUsers);
  const [selectedUser, setSelectedUser] = useState<UserAssignment | null>(null);
  const [properties, setProperties] = useState<Property[]>(mockProperties);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("10");

  const handleAssign = (user: UserAssignment) => {
    setSelectedUser(user);
    setProperties(mockProperties.map(p => ({
      ...p,
      assigned: user.assignedProperties.includes(p.id)
    })));
  };

  const handlePropertyToggle = (propertyId: string, checked: boolean) => {
    setProperties(properties.map(p =>
      p.id === propertyId ? { ...p, assigned: checked } : p
    ));
  };

  const handleSaveAssignment = () => {
    // Save logic here
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>Team Management</span>
            <span>/</span>
            <span className="text-foreground">Assign Property</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">Assign Property</h1>
        </div>

        <Card>
          <CardContent className="p-6">
            {/* Table Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Show</span>
                <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                  </SelectContent>
                </Select>
                <span className="text-sm text-muted-foreground">entries</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Search:</span>
                <Input
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>
            </div>

            {/* Users Table */}
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>User Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Assigned Properties</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{user.role}</Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {user.assignedProperties.length > 0 
                          ? `${user.assignedProperties.length} properties` 
                          : "None"}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button onClick={() => handleAssign(user)}>
                          Assign
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm text-muted-foreground">
                Showing 1 to {Math.min(parseInt(entriesPerPage), filteredUsers.length)} of {filteredUsers.length} entries
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Previous</Button>
                <Button variant="outline" size="sm">1</Button>
                <Button variant="outline" size="sm">Next</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Property Assignment Sheet */}
      <Sheet open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <SheetContent className="sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl">Property Assignment</SheetTitle>
          </SheetHeader>

          {selectedUser && (
            <div className="space-y-6 mt-6">
              {/* User Info Card */}
              <Card className="border-2 border-primary/20">
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <User className="w-3 h-3" />
                        User Name
                      </div>
                      <div className="font-semibold">{selectedUser.name}</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <Phone className="w-3 h-3" />
                        Phone
                      </div>
                      <div className="font-semibold">9876543210</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        Email
                      </div>
                      <div className="font-semibold text-sm">John001@gmail.com</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground">Role</div>
                      <Badge variant="secondary">{selectedUser.role}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Current Assignments */}
              <div className="bg-muted/30 rounded-lg p-4">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Assigned Properties
                </h3>
                <p className="text-sm text-muted-foreground">
                  {properties.filter(p => p.assigned).length > 0 
                    ? `${properties.filter(p => p.assigned).length} properties currently assigned`
                    : "No properties assigned"}
                </p>
              </div>

              {/* Properties List */}
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Select Properties to Assign</h3>
                <div className="rounded-lg border">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-muted/50">
                        <TableHead>Property</TableHead>
                        <TableHead>City</TableHead>
                        <TableHead className="text-center">Assign Property</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {properties.map((property) => (
                        <TableRow key={property.id}>
                          <TableCell className="font-medium">{property.name}</TableCell>
                          <TableCell>{property.city}</TableCell>
                          <TableCell className="text-center">
                            <div className="flex justify-center">
                              <Checkbox
                                checked={property.assigned}
                                onCheckedChange={(checked) =>
                                  handlePropertyToggle(property.id, checked as boolean)
                                }
                              />
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-3 pt-4 border-t">
                <Button variant="outline" onClick={() => setSelectedUser(null)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveAssignment}>
                  Save Assignment
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
