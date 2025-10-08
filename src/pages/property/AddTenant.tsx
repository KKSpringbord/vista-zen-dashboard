import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Save, Users, CalendarIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MainLayout } from "@/components/layout/MainLayout";

const AddTenant = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    propertyId: "",
    suiteId: "",
    leaseStartDate: undefined as Date | undefined,
    leaseEndDate: undefined as Date | undefined,
    monthlyRent: "",
    securityDeposit: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
    notes: "",
  });

  // Mock data
  const properties = [
    { id: "1", name: "Riverstone Residential" },
    { id: "2", name: "Skyline Business Center" },
    { id: "3", name: "Crystal Unit Portfolio" },
    { id: "4", name: "Hello World Complex" },
  ];

  const suites = [
    { id: "1", number: "101", propertyId: "1" },
    { id: "2", number: "102", propertyId: "1" },
    { id: "3", number: "201", propertyId: "2" },
    { id: "4", number: "202", propertyId: "2" },
  ];

  const handleInputChange = (field: string, value: string | Date | undefined) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Tenant data:", formData);
    navigate("/properties/tenant-listing");
  };

  const filteredSuites = suites.filter(suite => suite.propertyId === formData.propertyId);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tenants", href: "/properties/tenant-listing" },
    { label: "Add Tenant" },
  ];

  return (
    <MainLayout title="Add New Tenant" breadcrumbs={breadcrumbs}>
      <div className="p-6 max-w-6xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="Enter email address"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Property Assignment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="propertyId">Select Property</Label>
                <Select onValueChange={(value) => handleInputChange("propertyId", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a property" />
                  </SelectTrigger>
                  <SelectContent>
                    {properties.map((property) => (
                      <SelectItem key={property.id} value={property.id}>
                        {property.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="suiteId">Select Suite</Label>
                <Select 
                  onValueChange={(value) => handleInputChange("suiteId", value)}
                  disabled={!formData.propertyId}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a suite" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredSuites.map((suite) => (
                      <SelectItem key={suite.id} value={suite.id}>
                        Suite {suite.number}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="monthlyRent">Monthly Rent ($)</Label>
                  <Input
                    id="monthlyRent"
                    type="number"
                    value={formData.monthlyRent}
                    onChange={(e) => handleInputChange("monthlyRent", e.target.value)}
                    placeholder="0"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="securityDeposit">Security Deposit ($)</Label>
                  <Input
                    id="securityDeposit"
                    type="number"
                    value={formData.securityDeposit}
                    onChange={(e) => handleInputChange("securityDeposit", e.target.value)}
                    placeholder="0"
                    min="0"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Lease Dates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Lease Start Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.leaseStartDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.leaseStartDate ? (
                          format(formData.leaseStartDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.leaseStartDate}
                        onSelect={(date) => handleInputChange("leaseStartDate", date)}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Lease End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !formData.leaseEndDate && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {formData.leaseEndDate ? (
                          format(formData.leaseEndDate, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.leaseEndDate}
                        onSelect={(date) => handleInputChange("leaseEndDate", date)}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Emergency Contact</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emergencyContactName">Emergency Contact Name</Label>
                <Input
                  id="emergencyContactName"
                  value={formData.emergencyContactName}
                  onChange={(e) => handleInputChange("emergencyContactName", e.target.value)}
                  placeholder="Enter emergency contact name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyContactPhone">Emergency Contact Phone</Label>
                <Input
                  id="emergencyContactPhone"
                  type="tel"
                  value={formData.emergencyContactPhone}
                  onChange={(e) => handleInputChange("emergencyContactPhone", e.target.value)}
                  placeholder="Enter emergency contact phone"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Textarea
                  id="notes"
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  placeholder="Any additional notes about the tenant"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </div>

          <div className="flex justify-end gap-4 mt-6">
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => navigate("/properties/tenant-listing")}
            >
              Cancel
            </Button>
            <Button type="submit" className="flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Tenant
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default AddTenant;