import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Plus, Shield, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

interface Role {
  id: string;
  name: string;
  title: string;
  description: string;
  status: "Active" | "Inactive";
  permissions: {
    propertyManagement: { view: boolean; create: boolean; edit: boolean; delete: boolean };
    stackingPlan: { view: boolean; create: boolean; edit: boolean; delete: boolean };
    teamManagement: { view: boolean; create: boolean; edit: boolean; delete: boolean };
    userLog: { view: boolean; create: boolean; edit: boolean; delete: boolean };
    reports: { view: boolean; create: boolean; edit: boolean; delete: boolean };
  };
}

const mockRoles: Role[] = [
  {
    id: "1",
    name: "Admin",
    title: "Administrator",
    description: "Full system access with all permissions",
    status: "Active",
    permissions: {
      propertyManagement: { view: true, create: true, edit: true, delete: true },
      stackingPlan: { view: true, create: true, edit: true, delete: true },
      teamManagement: { view: true, create: true, edit: true, delete: true },
      userLog: { view: true, create: true, edit: true, delete: true },
      reports: { view: true, create: true, edit: true, delete: true },
    },
  },
  {
    id: "2",
    name: "User 1",
    title: "Property Manager",
    description: "Can manage properties and view reports",
    status: "Active",
    permissions: {
      propertyManagement: { view: true, create: true, edit: true, delete: false },
      stackingPlan: { view: true, create: false, edit: false, delete: false },
      teamManagement: { view: false, create: false, edit: false, delete: false },
      userLog: { view: true, create: false, edit: false, delete: false },
      reports: { view: true, create: false, edit: false, delete: false },
    },
  },
];

export default function RoleManagement() {
  const [roles, setRoles] = useState<Role[]>(mockRoles);
  const [isCreating, setIsCreating] = useState(false);
  const [editingRole, setEditingRole] = useState<Role | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("8");

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    description: "",
    status: "Active" as "Active" | "Inactive",
    permissions: {
      propertyManagement: { view: false, create: false, edit: false, delete: false },
      stackingPlan: { view: false, create: false, edit: false, delete: false },
      teamManagement: { view: false, create: false, edit: false, delete: false },
      userLog: { view: false, create: false, edit: false, delete: false },
      reports: { view: false, create: false, edit: false, delete: false },
    },
  });

  const handleEdit = (role: Role) => {
    setEditingRole(role);
    setFormData(role);
    setIsCreating(false);
  };

  const handleCreate = () => {
    setEditingRole(null);
    setFormData({
      name: "",
      title: "",
      description: "",
      status: "Active",
      permissions: {
        propertyManagement: { view: false, create: false, edit: false, delete: false },
        stackingPlan: { view: false, create: false, edit: false, delete: false },
        teamManagement: { view: false, create: false, edit: false, delete: false },
        userLog: { view: false, create: false, edit: false, delete: false },
        reports: { view: false, create: false, edit: false, delete: false },
      },
    });
    setIsCreating(true);
  };

  const handleSave = () => {
    if (editingRole) {
      setRoles(roles.map((r) => (r.id === editingRole.id ? { ...editingRole, ...formData } : r)));
    } else {
      setRoles([...roles, { ...formData, id: Date.now().toString() }]);
    }
    setIsCreating(false);
    setEditingRole(null);
  };

  const handlePermissionChange = (module: keyof typeof formData.permissions, permission: string, checked: boolean) => {
    setFormData({
      ...formData,
      permissions: {
        ...formData.permissions,
        [module]: {
          ...formData.permissions[module],
          [permission]: checked,
        },
      },
    });
  };

  const filteredRoles = roles.filter((role) =>
    role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    role.title.toLowerCase().includes(searchTerm.toLowerCase())
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
            <span className="text-foreground">Role Management</span>
          </div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-foreground">Role Management</h1>
            <Button onClick={handleCreate} className="gap-2">
              <Plus className="w-4 h-4" />
              Create New Role
            </Button>
          </div>
        </div>

        {/* Role Form or Table */}
        {(isCreating || editingRole) ? (
          <Card>
            <CardHeader className="border-b bg-muted/30">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    {editingRole ? "Edit Role & Permissions" : "Create Role & Assign Permissions"}
                  </CardTitle>
                </div>
                <Button variant="ghost" size="icon" onClick={() => { setIsCreating(false); setEditingRole(null); }}>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Role Details */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Role Name *</Label>
                    <Input
                      id="name"
                      placeholder="e.g., Admin, Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., System Administrator"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status *</Label>
                    <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value as "Active" | "Inactive" })}>
                      <SelectTrigger id="status">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe the role's responsibilities"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="resize-none"
                    />
                  </div>
                </div>

                {/* Permissions Section */}
                <div className="space-y-4 pt-6 border-t">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Role Permissions
                  </h3>
                  <div className="rounded-lg border">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-semibold">Module</TableHead>
                          <TableHead className="text-center font-semibold">View</TableHead>
                          <TableHead className="text-center font-semibold">Create</TableHead>
                          <TableHead className="text-center font-semibold">Edit</TableHead>
                          <TableHead className="text-center font-semibold">Delete</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(formData.permissions).map(([module, perms]) => (
                          <TableRow key={module}>
                            <TableCell className="font-medium capitalize">
                              {module.replace(/([A-Z])/g, " $1").trim()}
                            </TableCell>
                            <TableCell className="text-center">
                              <Checkbox
                                checked={perms.view}
                                onCheckedChange={(checked) =>
                                  handlePermissionChange(module as keyof typeof formData.permissions, "view", checked as boolean)
                                }
                              />
                            </TableCell>
                            <TableCell className="text-center">
                              <Checkbox
                                checked={perms.create}
                                onCheckedChange={(checked) =>
                                  handlePermissionChange(module as keyof typeof formData.permissions, "create", checked as boolean)
                                }
                              />
                            </TableCell>
                            <TableCell className="text-center">
                              <Checkbox
                                checked={perms.edit}
                                onCheckedChange={(checked) =>
                                  handlePermissionChange(module as keyof typeof formData.permissions, "edit", checked as boolean)
                                }
                              />
                            </TableCell>
                            <TableCell className="text-center">
                              <Checkbox
                                checked={perms.delete}
                                onCheckedChange={(checked) =>
                                  handlePermissionChange(module as keyof typeof formData.permissions, "delete", checked as boolean)
                                }
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 pt-4">
                  <Button variant="outline" onClick={() => { setIsCreating(false); setEditingRole(null); }}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>
                    {editingRole ? "Update Role" : "Create Role"}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
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
                      <SelectItem value="8">8</SelectItem>
                      <SelectItem value="16">16</SelectItem>
                      <SelectItem value="24">24</SelectItem>
                    </SelectContent>
                  </Select>
                  <span className="text-sm text-muted-foreground">entries</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Search:</span>
                  <Input
                    placeholder="Search roles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-64"
                  />
                </div>
              </div>

              {/* Roles Table */}
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead>Role</TableHead>
                      <TableHead>Title</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRoles.map((role) => (
                      <TableRow key={role.id}>
                        <TableCell className="font-medium">{role.name}</TableCell>
                        <TableCell>{role.title || "-"}</TableCell>
                        <TableCell className="max-w-xs truncate">{role.description || "-"}</TableCell>
                        <TableCell>
                          <Badge variant={role.status === "Active" ? "default" : "secondary"}>
                            {role.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="default" size="icon" onClick={() => handleEdit(role)}>
                            <Edit className="w-4 h-4" />
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
                  Showing 1 to {Math.min(parseInt(entriesPerPage), filteredRoles.length)} of {filteredRoles.length} entries
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">1</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
