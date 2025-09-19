import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Save, ArrowLeft, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddSuite = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    propertyId: "",
    floorId: "",
    suiteNumber: "",
    suiteName: "",
    suiteType: "",
    bedrooms: "",
    bathrooms: "",
    squareFootage: "",
    rentAmount: "",
    securityDeposit: "",
    description: "",
    amenities: [] as string[],
    furnished: false,
    petFriendly: false,
    smokingAllowed: false,
  });

  // Mock data
  const properties = [
    { id: "1", name: "Riverstone Residential" },
    { id: "2", name: "Skyline Business Center" },
    { id: "3", name: "Crystal Unit Portfolio" },
    { id: "4", name: "Hello World Complex" },
  ];

  const floors = [
    { id: "1", number: "1", propertyId: "1" },
    { id: "2", number: "2", propertyId: "1" },
    { id: "3", number: "1", propertyId: "2" },
    { id: "4", number: "2", propertyId: "2" },
  ];

  const amenityOptions = [
    "Air Conditioning", "Heating", "Balcony", "In-unit Laundry", 
    "Dishwasher", "Parking Space", "Storage Unit", "Gym Access"
  ];

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const updatedAmenities = checked 
      ? [...formData.amenities, amenity]
      : formData.amenities.filter(a => a !== amenity);
    handleInputChange("amenities", updatedAmenities);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Suite data:", formData);
    navigate("/properties/listing");
  };

  const filteredFloors = floors.filter(floor => floor.propertyId === formData.propertyId);

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
            <Home className="w-8 h-8" />
            Add New Suite
          </h1>
          <p className="text-muted-foreground">Add a suite to a property floor</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Suite Location</CardTitle>
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
                <Label htmlFor="floorId">Select Floor</Label>
                <Select 
                  onValueChange={(value) => handleInputChange("floorId", value)}
                  disabled={!formData.propertyId}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a floor" />
                  </SelectTrigger>
                  <SelectContent>
                    {filteredFloors.map((floor) => (
                      <SelectItem key={floor.id} value={floor.id}>
                        Floor {floor.number}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="suiteNumber">Suite Number</Label>
                  <Input
                    id="suiteNumber"
                    value={formData.suiteNumber}
                    onChange={(e) => handleInputChange("suiteNumber", e.target.value)}
                    placeholder="e.g., 101, A1"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="suiteName">Suite Name (Optional)</Label>
                  <Input
                    id="suiteName"
                    value={formData.suiteName}
                    onChange={(e) => handleInputChange("suiteName", e.target.value)}
                    placeholder="e.g., Corner Unit"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Suite Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="suiteType">Suite Type</Label>
                <Select onValueChange={(value) => handleInputChange("suiteType", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select suite type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1br">1 Bedroom</SelectItem>
                    <SelectItem value="2br">2 Bedroom</SelectItem>
                    <SelectItem value="3br">3 Bedroom</SelectItem>
                    <SelectItem value="office">Office Space</SelectItem>
                    <SelectItem value="retail">Retail Space</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bedrooms">Bedrooms</Label>
                  <Input
                    id="bedrooms"
                    type="number"
                    value={formData.bedrooms}
                    onChange={(e) => handleInputChange("bedrooms", e.target.value)}
                    placeholder="0"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bathrooms">Bathrooms</Label>
                  <Input
                    id="bathrooms"
                    type="number"
                    step="0.5"
                    value={formData.bathrooms}
                    onChange={(e) => handleInputChange("bathrooms", e.target.value)}
                    placeholder="1"
                    min="0"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="squareFootage">Sq Ft</Label>
                  <Input
                    id="squareFootage"
                    type="number"
                    value={formData.squareFootage}
                    onChange={(e) => handleInputChange("squareFootage", e.target.value)}
                    placeholder="0"
                    min="1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="rentAmount">Monthly Rent ($)</Label>
                  <Input
                    id="rentAmount"
                    type="number"
                    value={formData.rentAmount}
                    onChange={(e) => handleInputChange("rentAmount", e.target.value)}
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
              <CardTitle>Amenities & Features</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {amenityOptions.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={amenity}
                      checked={formData.amenities.includes(amenity)}
                      onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                    />
                    <Label htmlFor={amenity} className="text-sm">
                      {amenity}
                    </Label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="furnished"
                    checked={formData.furnished}
                    onCheckedChange={(checked) => handleInputChange("furnished", checked as boolean)}
                  />
                  <Label htmlFor="furnished">Furnished</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="petFriendly"
                    checked={formData.petFriendly}
                    onCheckedChange={(checked) => handleInputChange("petFriendly", checked as boolean)}
                  />
                  <Label htmlFor="petFriendly">Pet Friendly</Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="smokingAllowed"
                    checked={formData.smokingAllowed}
                    onCheckedChange={(checked) => handleInputChange("smokingAllowed", checked as boolean)}
                  />
                  <Label htmlFor="smokingAllowed">Smoking Allowed</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="description">Suite Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Describe the suite features, location within building, views, etc."
                  rows={4}
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
            Save Suite
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddSuite;