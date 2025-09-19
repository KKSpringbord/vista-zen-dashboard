import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, ArrowLeft, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddFloor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    propertyId: "",
    floorNumber: "",
    floorName: "",
    description: "",
    totalSuites: "",
    squareFootage: "",
    floorPlan: "",
    amenities: "",
  });

  // Mock properties data
  const properties = [
    { id: "1", name: "Riverstone Residential" },
    { id: "2", name: "Skyline Business Center" },
    { id: "3", name: "Crystal Unit Portfolio" },
    { id: "4", name: "Hello World Complex" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Floor data:", formData);
    navigate("/properties/listing");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/properties/listing")}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Properties
        </Button>
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Building className="w-8 h-8" />
            Add New Floor
          </h1>
          <p className="text-muted-foreground">Add a floor to an existing property</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Floor Information</CardTitle>
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

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="floorNumber">Floor Number</Label>
                  <Input
                    id="floorNumber"
                    type="number"
                    value={formData.floorNumber}
                    onChange={(e) => handleInputChange("floorNumber", e.target.value)}
                    placeholder="1"
                    min="1"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="floorName">Floor Name (Optional)</Label>
                  <Input
                    id="floorName"
                    value={formData.floorName}
                    onChange={(e) => handleInputChange("floorName", e.target.value)}
                    placeholder="e.g., Ground Floor, Mezzanine"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Enter floor description"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Floor Specifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="totalSuites">Total Suites on Floor</Label>
                <Input
                  id="totalSuites"
                  type="number"
                  value={formData.totalSuites}
                  onChange={(e) => handleInputChange("totalSuites", e.target.value)}
                  placeholder="0"
                  min="0"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="squareFootage">Floor Square Footage</Label>
                <Input
                  id="squareFootage"
                  type="number"
                  value={formData.squareFootage}
                  onChange={(e) => handleInputChange("squareFootage", e.target.value)}
                  placeholder="0"
                  min="1"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="floorPlan">Floor Plan Type</Label>
                <Select onValueChange={(value) => handleInputChange("floorPlan", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select floor plan type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open Floor Plan</SelectItem>
                    <SelectItem value="traditional">Traditional Layout</SelectItem>
                    <SelectItem value="mixed">Mixed Layout</SelectItem>
                    <SelectItem value="custom">Custom Layout</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amenities">Floor Amenities</Label>
                <Textarea
                  id="amenities"
                  value={formData.amenities}
                  onChange={(e) => handleInputChange("amenities", e.target.value)}
                  placeholder="List amenities (e.g., elevators, restrooms, break room)"
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
            onClick={() => navigate("/properties/listing")}
          >
            Cancel
          </Button>
          <Button type="submit" className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Floor
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddFloor;