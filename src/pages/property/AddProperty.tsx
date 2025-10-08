import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, FileText, Layers, FileCheck, TrendingUp, HandshakeIcon, Globe, Image, BookOpen, Plus, Trash2, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";

const AddProperty = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    // Property Information
    propertyName: "",
    propId: "",
    propType: "",
    portfolioName: "",
    address: "",
    state: "",
    city: "",
    zipCode: "",
    buildingClass: "",
    builtYear: "",
    renovatedYear: "",
    description: "",
    totalFloors: "",
    parkingLevels: "",
    basementLevels: "",
    neighbourhood: "",
    location: "",
    landmarks: [{ name: "Landmark 1", quantity: "" }],
    elevators: "",
    elevatorCapacity: "",
    highlights: "",
    hvac: "Yes",
    
    // Space Metrics
    totalBuildingArea: "",
    totalRentableSF: "",
    unitsSold: "",
    parkingRatio: "",
    
    // Lease Data
    avgSalePrice: "",
    ner: "",
    noi: "",
    
    // Market Insights
    competitorName: "",
    marketRate: "",
    rentPerSF: "",
    vacancyRate: "",
    
    // Ownership Info
    ownerCompany: "",
    ownerContactName: "",
    ownerEmail: "",
    ownerCountryCode: "+91",
    ownerMobile: "",
    managementCompany: "",
    managementContactName: "",
    managementEmail: "",
    managementCountryCode: "+91",
    managementMobile: "",
    brokerageCompany: "",
    brokerageContactName: "",
    brokerageEmail: "",
    brokerageCountryCode: "+91",
    brokerageMobile: "",
    
    // Digital Presence
    website: "",
    
    // Files
    images: null as File | null,
    brochure: null as File | null,
  });

  const [ownershipTypes, setOwnershipTypes] = useState({
    ownershipCompany: true,
    managementCompany: false,
    brokerageCompany: false,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLandmarkChange = (index: number, field: "name" | "quantity", value: string) => {
    const newLandmarks = [...formData.landmarks];
    newLandmarks[index] = { ...newLandmarks[index], [field]: value };
    setFormData(prev => ({ ...prev, landmarks: newLandmarks }));
  };

  const addLandmark = () => {
    setFormData(prev => ({
      ...prev,
      landmarks: [...prev.landmarks, { name: `Landmark ${prev.landmarks.length + 1}`, quantity: "" }],
    }));
  };

  const removeLandmark = (index: number) => {
    setFormData(prev => ({
      ...prev,
      landmarks: prev.landmarks.filter((_, i) => i !== index),
    }));
  };

  const handleFileChange = (field: "images" | "brochure", file: File | null) => {
    setFormData(prev => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Property data:", formData);
    navigate("/properties/listing");
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties/listing" },
    { label: "Add Property" },
  ];

  return (
    <MainLayout title="Add Property" breadcrumbs={breadcrumbs}>
      <div className="p-6 max-w-6xl mx-auto">
        <form onSubmit={handleSubmit}>
          <Tabs defaultValue="info" className="space-y-6">
            <TabsList className="grid w-full grid-cols-8 h-auto">
              <TabsTrigger value="info" className="flex flex-col items-center gap-1 py-3">
                <FileText className="w-4 h-4" />
                <span className="text-xs">Info</span>
              </TabsTrigger>
              <TabsTrigger value="space" className="flex flex-col items-center gap-1 py-3">
                <Layers className="w-4 h-4" />
                <span className="text-xs">Space</span>
              </TabsTrigger>
              <TabsTrigger value="lease" className="flex flex-col items-center gap-1 py-3">
                <FileCheck className="w-4 h-4" />
                <span className="text-xs">Lease</span>
              </TabsTrigger>
              <TabsTrigger value="market" className="flex flex-col items-center gap-1 py-3">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs">Market</span>
              </TabsTrigger>
              <TabsTrigger value="ownership" className="flex flex-col items-center gap-1 py-3">
                <HandshakeIcon className="w-4 h-4" />
                <span className="text-xs">Ownership</span>
              </TabsTrigger>
              <TabsTrigger value="digital" className="flex flex-col items-center gap-1 py-3">
                <Globe className="w-4 h-4" />
                <span className="text-xs">Digital</span>
              </TabsTrigger>
              <TabsTrigger value="images" className="flex flex-col items-center gap-1 py-3">
                <Image className="w-4 h-4" />
                <span className="text-xs">Images</span>
              </TabsTrigger>
              <TabsTrigger value="brochure" className="flex flex-col items-center gap-1 py-3">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs">Brochure</span>
              </TabsTrigger>
            </TabsList>

            {/* Property Information Tab */}
            <TabsContent value="info">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Property Information</h2>
                    <p className="text-sm text-muted-foreground">Basic property details and location</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="propertyName">Property Name <span className="text-destructive">*</span></Label>
                      <Input
                        id="propertyName"
                        value={formData.propertyName}
                        onChange={(e) => handleInputChange("propertyName", e.target.value)}
                        placeholder="Grandview Estate"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="propId">Prop ID <span className="text-destructive">*</span></Label>
                      <Input
                        id="propId"
                        value={formData.propId}
                        onChange={(e) => handleInputChange("propId", e.target.value)}
                        placeholder="GE01"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="propType">Prop Type <span className="text-destructive">*</span></Label>
                      <Select value={formData.propType} onValueChange={(value) => handleInputChange("propType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Student Housing" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Student Housing">Student Housing</SelectItem>
                          <SelectItem value="Commercial">Commercial</SelectItem>
                          <SelectItem value="Residential">Residential</SelectItem>
                          <SelectItem value="Mixed Use">Mixed Use</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="portfolioName">Portfolio Name</Label>
                      <Input
                        id="portfolioName"
                        value={formData.portfolioName}
                        onChange={(e) => handleInputChange("portfolioName", e.target.value)}
                        placeholder="Gandview"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address <span className="text-destructive">*</span></Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="125 Cremona Drive"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">State <span className="text-destructive">*</span></Label>
                      <Select value={formData.state} onValueChange={(value) => handleInputChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Florida" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Florida">Florida</SelectItem>
                          <SelectItem value="California">California</SelectItem>
                          <SelectItem value="New York">New York</SelectItem>
                          <SelectItem value="Texas">Texas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City <span className="text-destructive">*</span></Label>
                      <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Astor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Astor">Astor</SelectItem>
                          <SelectItem value="Miami">Miami</SelectItem>
                          <SelectItem value="Tampa">Tampa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code <span className="text-destructive">*</span></Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        placeholder="32102"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="buildingClass">Building Class <span className="text-destructive">*</span></Label>
                      <Select value={formData.buildingClass} onValueChange={(value) => handleInputChange("buildingClass", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="A" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="A">A</SelectItem>
                          <SelectItem value="B">B</SelectItem>
                          <SelectItem value="C">C</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="builtYear">Built Year</Label>
                      <Input
                        id="builtYear"
                        type="number"
                        value={formData.builtYear}
                        onChange={(e) => handleInputChange("builtYear", e.target.value)}
                        placeholder="2018"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="renovatedYear">Renovated year</Label>
                      <Input
                        id="renovatedYear"
                        type="number"
                        value={formData.renovatedYear}
                        onChange={(e) => handleInputChange("renovatedYear", e.target.value)}
                        placeholder="2022"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Modern tech park in Goleta"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="totalFloors">Total Floors <span className="text-destructive">*</span></Label>
                      <Input
                        id="totalFloors"
                        type="number"
                        value={formData.totalFloors}
                        onChange={(e) => handleInputChange("totalFloors", e.target.value)}
                        placeholder="5"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parkingLevels">No of Parking Levels <span className="text-destructive">*</span></Label>
                      <Input
                        id="parkingLevels"
                        type="number"
                        value={formData.parkingLevels}
                        onChange={(e) => handleInputChange("parkingLevels", e.target.value)}
                        placeholder="3"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="basementLevels">No of Basement Levels <span className="text-destructive">*</span></Label>
                      <Input
                        id="basementLevels"
                        type="number"
                        value={formData.basementLevels}
                        onChange={(e) => handleInputChange("basementLevels", e.target.value)}
                        placeholder="2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="neighbourhood">Neighbourhood</Label>
                      <Select value={formData.neighbourhood} onValueChange={(value) => handleInputChange("neighbourhood", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select neighbourhood type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Urban">Urban</SelectItem>
                          <SelectItem value="Suburban">Suburban</SelectItem>
                          <SelectItem value="Rural">Rural</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <div className="flex gap-2">
                        <Input
                          id="location"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                          placeholder="Select on Map"
                          readOnly
                        />
                        <Button type="button" size="icon" variant="default">
                          <span className="text-lg">📍</span>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Landmarks Nearby</Label>
                    <div className="space-y-2">
                      {formData.landmarks.map((landmark, index) => (
                        <div key={index} className="flex gap-2">
                          <Select value={landmark.name} onValueChange={(value) => handleLandmarkChange(index, "name", value)}>
                            <SelectTrigger className="flex-1">
                              <SelectValue placeholder="Landmark" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Landmark 1">Landmark 1</SelectItem>
                              <SelectItem value="Landmark 2">Landmark 2</SelectItem>
                              <SelectItem value="Landmark 3">Landmark 3</SelectItem>
                            </SelectContent>
                          </Select>
                          <Input
                            type="number"
                            value={landmark.quantity}
                            onChange={(e) => handleLandmarkChange(index, "quantity", e.target.value)}
                            placeholder="Distance"
                            className="w-32"
                          />
                          {formData.landmarks.length > 1 && (
                            <Button 
                              type="button" 
                              size="icon" 
                              variant="ghost"
                              onClick={() => removeLandmark(index)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          )}
                          {index === formData.landmarks.length - 1 && (
                            <Button 
                              type="button" 
                              size="icon" 
                              variant="ghost"
                              onClick={addLandmark}
                            >
                              <Plus className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="elevators">Elevators</Label>
                      <Input
                        id="elevators"
                        type="number"
                        value={formData.elevators}
                        onChange={(e) => handleInputChange("elevators", e.target.value)}
                        placeholder="2"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="elevatorCapacity">Elevator Capacity</Label>
                      <Input
                        id="elevatorCapacity"
                        type="number"
                        value={formData.elevatorCapacity}
                        onChange={(e) => handleInputChange("elevatorCapacity", e.target.value)}
                        placeholder="15"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="highlights">Highlights</Label>
                    <Textarea
                      id="highlights"
                      value={formData.highlights}
                      onChange={(e) => handleInputChange("highlights", e.target.value)}
                      placeholder="Write Something..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>HVAC</Label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="hvac"
                          value="Yes"
                          checked={formData.hvac === "Yes"}
                          onChange={(e) => handleInputChange("hvac", e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>Yes</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="hvac"
                          value="No"
                          checked={formData.hvac === "No"}
                          onChange={(e) => handleInputChange("hvac", e.target.value)}
                          className="w-4 h-4"
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Space Metrics Tab */}
            <TabsContent value="space">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Space Metrics</h2>
                    <p className="text-sm text-muted-foreground">Area and capacity details</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="totalBuildingArea">Total Building Area (SF)</Label>
                      <Input
                        id="totalBuildingArea"
                        type="number"
                        value={formData.totalBuildingArea}
                        onChange={(e) => handleInputChange("totalBuildingArea", e.target.value)}
                        placeholder="6000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="totalRentableSF">Total Rentable SF</Label>
                      <Input
                        id="totalRentableSF"
                        type="number"
                        value={formData.totalRentableSF}
                        onChange={(e) => handleInputChange("totalRentableSF", e.target.value)}
                        placeholder="1000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="unitsSold">Units Sold</Label>
                      <Input
                        id="unitsSold"
                        type="number"
                        value={formData.unitsSold}
                        onChange={(e) => handleInputChange("unitsSold", e.target.value)}
                        placeholder="4"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parkingRatio">Parking Ratio</Label>
                      <Input
                        id="parkingRatio"
                        type="number"
                        value={formData.parkingRatio}
                        onChange={(e) => handleInputChange("parkingRatio", e.target.value)}
                        placeholder="5"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Lease Data Tab */}
            <TabsContent value="lease">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Lease Data</h2>
                    <p className="text-sm text-muted-foreground">Financial and lease information</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="avgSalePrice">Avg Sale Price (SF) <span className="text-destructive">*</span></Label>
                      <Input
                        id="avgSalePrice"
                        type="number"
                        value={formData.avgSalePrice}
                        onChange={(e) => handleInputChange("avgSalePrice", e.target.value)}
                        placeholder="10"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ner">NER (SF) <span className="text-destructive">*</span></Label>
                      <Input
                        id="ner"
                        type="number"
                        value={formData.ner}
                        onChange={(e) => handleInputChange("ner", e.target.value)}
                        placeholder="3000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="noi">NOI <span className="text-destructive">*</span></Label>
                      <Input
                        id="noi"
                        type="number"
                        value={formData.noi}
                        onChange={(e) => handleInputChange("noi", e.target.value)}
                        placeholder="42000"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Market Insights Tab */}
            <TabsContent value="market">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Market Insights</h2>
                    <p className="text-sm text-muted-foreground">Competitive market analysis</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="competitorName">Competitor Property Name</Label>
                      <Input
                        id="competitorName"
                        value={formData.competitorName}
                        onChange={(e) => handleInputChange("competitorName", e.target.value)}
                        placeholder="Cedar Heights"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="marketRate">Market Rate per SF</Label>
                      <Input
                        id="marketRate"
                        type="number"
                        value={formData.marketRate}
                        onChange={(e) => handleInputChange("marketRate", e.target.value)}
                        placeholder="16"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="rentPerSF">Rent per SF</Label>
                      <Input
                        id="rentPerSF"
                        type="number"
                        value={formData.rentPerSF}
                        onChange={(e) => handleInputChange("rentPerSF", e.target.value)}
                        placeholder="20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vacancyRate">Vacancy Rate (%)</Label>
                      <Input
                        id="vacancyRate"
                        type="number"
                        value={formData.vacancyRate}
                        onChange={(e) => handleInputChange("vacancyRate", e.target.value)}
                        placeholder="40"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Ownership Info Tab */}
            <TabsContent value="ownership">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Ownership Info</h2>
                    <p className="text-sm text-muted-foreground">Owner and management contacts</p>
                  </div>

                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={ownershipTypes.ownershipCompany}
                        onChange={(e) => setOwnershipTypes(prev => ({ ...prev, ownershipCompany: e.target.checked }))}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Ownership Company</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={ownershipTypes.managementCompany}
                        onChange={(e) => setOwnershipTypes(prev => ({ ...prev, managementCompany: e.target.checked }))}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Management Company</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={ownershipTypes.brokerageCompany}
                        onChange={(e) => setOwnershipTypes(prev => ({ ...prev, brokerageCompany: e.target.checked }))}
                        className="w-4 h-4"
                      />
                      <span className="text-sm">Brokerage Company</span>
                    </label>
                  </div>

                  {ownershipTypes.ownershipCompany && (
                    <div className="space-y-4 border-t pt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Owner</h3>
                        <Button type="button" size="icon" variant="ghost">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Input
                        value={formData.ownerCompany}
                        onChange={(e) => handleInputChange("ownerCompany", e.target.value)}
                        placeholder="GreenLeaf Developers LLP"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Contact Person Name</Label>
                          <Input
                            value={formData.ownerContactName}
                            onChange={(e) => handleInputChange("ownerContactName", e.target.value)}
                            placeholder="John Mathews"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Email Id</Label>
                          <Input
                            type="email"
                            value={formData.ownerEmail}
                            onChange={(e) => handleInputChange("ownerEmail", e.target.value)}
                            placeholder="john.mathews@orionrealty.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Country Code</Label>
                          <Input
                            value={formData.ownerCountryCode}
                            onChange={(e) => handleInputChange("ownerCountryCode", e.target.value)}
                            placeholder="+91"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Mobile</Label>
                          <Input
                            value={formData.ownerMobile}
                            onChange={(e) => handleInputChange("ownerMobile", e.target.value)}
                            placeholder="8967895678"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {ownershipTypes.managementCompany && (
                    <div className="space-y-4 border-t pt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Management company</h3>
                        <Button type="button" size="icon" variant="ghost">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Input
                        value={formData.managementCompany}
                        onChange={(e) => handleInputChange("managementCompany", e.target.value)}
                        placeholder="Crest Management Services Pvt Ltd"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Contact Person Name</Label>
                          <Input
                            value={formData.managementContactName}
                            onChange={(e) => handleInputChange("managementContactName", e.target.value)}
                            placeholder="David Fernandes"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Email Id</Label>
                          <Input
                            type="email"
                            value={formData.managementEmail}
                            onChange={(e) => handleInputChange("managementEmail", e.target.value)}
                            placeholder="david.fernandes@vertexpm.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Country Code</Label>
                          <Input
                            value={formData.managementCountryCode}
                            onChange={(e) => handleInputChange("managementCountryCode", e.target.value)}
                            placeholder="+91"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Mobile</Label>
                          <Input
                            value={formData.managementMobile}
                            onChange={(e) => handleInputChange("managementMobile", e.target.value)}
                            placeholder="9849367490"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {ownershipTypes.brokerageCompany && (
                    <div className="space-y-4 border-t pt-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Brokerage Company</h3>
                        <Button type="button" size="icon" variant="ghost">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                      <Input
                        value={formData.brokerageCompany}
                        onChange={(e) => handleInputChange("brokerageCompany", e.target.value)}
                        placeholder="Summit Realty Partners"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Contact Person Name</Label>
                          <Input
                            value={formData.brokerageContactName}
                            onChange={(e) => handleInputChange("brokerageContactName", e.target.value)}
                            placeholder="Karthik Desai"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Email Id</Label>
                          <Input
                            type="email"
                            value={formData.brokerageEmail}
                            onChange={(e) => handleInputChange("brokerageEmail", e.target.value)}
                            placeholder="karthik.desai@crestviewbrokers.com"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label>Country Code</Label>
                          <Input
                            value={formData.brokerageCountryCode}
                            onChange={(e) => handleInputChange("brokerageCountryCode", e.target.value)}
                            placeholder="+91"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Mobile</Label>
                          <Input
                            value={formData.brokerageMobile}
                            onChange={(e) => handleInputChange("brokerageMobile", e.target.value)}
                            placeholder="7890697895"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Digital Presence Tab */}
            <TabsContent value="digital">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Digital Presence</h2>
                    <p className="text-sm text-muted-foreground">Website and online presence</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website <span className="text-destructive">*</span></Label>
                    <Input
                      id="website"
                      type="url"
                      value={formData.website}
                      onChange={(e) => handleInputChange("website", e.target.value)}
                      placeholder="www.metrolineproperties.com"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Images Tab */}
            <TabsContent value="images">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Images</h2>
                    <p className="text-sm text-muted-foreground">Upload property images</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="images">Images</Label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center">
                      <input
                        id="images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => handleFileChange("images", e.target.files?.[0] || null)}
                        className="hidden"
                      />
                      <label htmlFor="images" className="cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                          <Plus className="w-8 h-8 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {formData.images ? formData.images.name : "Choose File - No file chosen"}
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Brochure Tab */}
            <TabsContent value="brochure">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h2 className="text-lg font-semibold mb-1">Brochure</h2>
                    <p className="text-sm text-muted-foreground">Upload property brochure</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="brochure">Brochure</Label>
                    <div className="border-2 border-dashed rounded-lg p-8 text-center">
                      <input
                        id="brochure"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileChange("brochure", e.target.files?.[0] || null)}
                        className="hidden"
                      />
                      <label htmlFor="brochure" className="cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                          <Plus className="w-8 h-8 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {formData.brochure ? formData.brochure.name : "Choose File - No file chosen"}
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Submit Button */}
          <div className="flex justify-end pt-4">
            <Button type="submit" size="lg" className="gap-2">
              <Save className="w-4 h-4" />
              Save Property
            </Button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default AddProperty;
