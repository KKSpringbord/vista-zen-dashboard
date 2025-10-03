import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeft, ChevronRight, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AddSuite = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("space");
  const [formData, setFormData] = useState({
    propertyId: "",
    floorId: "",
    suiteNumber: "",
    totalArea: "",
    spaceType: "",
    spaceStatus: "",
    rentableSf: "",
    parkingAvailability: "",
    tenantParkingSpaces: "",
    spaceAvailableFrom: "",
    leaseStatus: "",
    signedLeases: "",
    marketingLinks: "",
    toursHeld: "",
    tourToLeasePercent: "",
    images: [] as File[],
  });

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

  const tabs = [
    { id: "space", label: "Space Details" },
    { id: "accessibility", label: "Accessibility & Security" },
    { id: "parking", label: "Parking & Logistics" },
    { id: "lease", label: "Lease Details" },
    { id: "marketing", label: "Marketing Metrics" },
    { id: "images", label: "Images" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (files: FileList | null) => {
    if (!files) return;
    setFormData(prev => ({ ...prev, images: Array.from(files) }));
  };

  const handleNextStep = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1].id);
    }
  };

  const handlePreviousStep = () => {
    const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Suite saved successfully",
      description: "The suite details have been saved.",
    });
    console.log("Suite data:", formData);
    navigate("/properties/listing");
  };

  const filteredFloors = floors.filter(floor => floor.propertyId === formData.propertyId);

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>Property Management</span>
            <ChevronRight className="w-4 h-4" />
            <span>Property</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Add Suite</span>
          </div>
          <h1 className="text-2xl font-bold">Suite Details</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-6">
            {/* Sidebar Tabs */}
            <div className="w-64 flex-shrink-0">
              <Card>
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-3 text-left text-sm font-medium transition-colors ${
                          activeTab === tab.id
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted text-muted-foreground"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              <Card>
                <CardContent className="p-6">
                  <Tabs value={activeTab} onValueChange={setActiveTab}>
                    {/* Space Details Tab */}
                    <TabsContent value="space" className="mt-0 space-y-6">
                      <h2 className="text-xl font-semibold mb-4">Space Details</h2>
                      
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="suiteNumber">
                            Suite # <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="suiteNumber"
                            value={formData.suiteNumber}
                            onChange={(e) => handleInputChange("suiteNumber", e.target.value)}
                            placeholder="901"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="totalArea">
                            Total Area (SF) <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="totalArea"
                            type="number"
                            value={formData.totalArea}
                            onChange={(e) => handleInputChange("totalArea", e.target.value)}
                            placeholder="200"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="spaceType">
                            Space Type <span className="text-destructive">*</span>
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("spaceType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Industrial" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="industrial">Industrial</SelectItem>
                              <SelectItem value="office">Office</SelectItem>
                              <SelectItem value="retail">Retail</SelectItem>
                              <SelectItem value="storage">Storage</SelectItem>
                              <SelectItem value="medical">Medical</SelectItem>
                              <SelectItem value="special">Special Purpose</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="spaceStatus">
                            Space Status <span className="text-destructive">*</span>
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("spaceStatus", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Good" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="excellent">Excellent</SelectItem>
                              <SelectItem value="good">Good</SelectItem>
                              <SelectItem value="fair">Fair</SelectItem>
                              <SelectItem value="poor">Poor</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="rentableSf">
                            Rentable SF <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="rentableSf"
                            type="number"
                            value={formData.rentableSf}
                            onChange={(e) => handleInputChange("rentableSf", e.target.value)}
                            placeholder="200"
                            required
                          />
                        </div>
                      </div>
                    </TabsContent>

                    {/* Accessibility & Security Tab */}
                    <TabsContent value="accessibility" className="mt-0 space-y-6">
                      <h2 className="text-xl font-semibold mb-4">Accessibility & Security</h2>
                      
                      <p className="text-sm text-muted-foreground">
                        Add accessibility and security information for this suite.
                      </p>
                    </TabsContent>

                    {/* Parking & Logistics Tab */}
                    <TabsContent value="parking" className="mt-0 space-y-6">
                      <h2 className="text-xl font-semibold mb-4">Parking & Logistics</h2>
                      
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label>Parking Availability</Label>
                          <RadioGroup 
                            value={formData.parkingAvailability} 
                            onValueChange={(value) => handleInputChange("parkingAvailability", value)}
                            className="flex gap-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="parking-yes" />
                              <Label htmlFor="parking-yes" className="font-normal">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="parking-no" />
                              <Label htmlFor="parking-no" className="font-normal">No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tenantParkingSpaces">Tenant Parking Spaces</Label>
                          <Input
                            id="tenantParkingSpaces"
                            type="number"
                            value={formData.tenantParkingSpaces}
                            onChange={(e) => handleInputChange("tenantParkingSpaces", e.target.value)}
                            placeholder="7"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    {/* Lease Details Tab */}
                    <TabsContent value="lease" className="mt-0 space-y-6">
                      <h2 className="text-xl font-semibold mb-4">Lease Details</h2>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="spaceAvailableFrom">Space Available From</Label>
                          <Input
                            id="spaceAvailableFrom"
                            type="date"
                            value={formData.spaceAvailableFrom}
                            onChange={(e) => handleInputChange("spaceAvailableFrom", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="leaseStatus">
                            Lease Status <span className="text-destructive">*</span>
                          </Label>
                          <Select onValueChange={(value) => handleInputChange("leaseStatus", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Occupied" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="occupied">Occupied</SelectItem>
                              <SelectItem value="vacant">Vacant</SelectItem>
                              <SelectItem value="available">Available</SelectItem>
                              <SelectItem value="leased">Leased</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="signedLeases">Signed Leases</Label>
                        <Input
                          id="signedLeases"
                          type="number"
                          value={formData.signedLeases}
                          onChange={(e) => handleInputChange("signedLeases", e.target.value)}
                          placeholder="1"
                        />
                      </div>
                    </TabsContent>

                    {/* Marketing Metrics Tab */}
                    <TabsContent value="marketing" className="mt-0 space-y-6">
                      <h2 className="text-xl font-semibold mb-4">Marketing Metrics</h2>
                      
                      <div className="space-y-2">
                        <Label htmlFor="marketingLinks">Marketing Links</Label>
                        <Textarea
                          id="marketingLinks"
                          value={formData.marketingLinks}
                          onChange={(e) => handleInputChange("marketingLinks", e.target.value)}
                          placeholder="www.125cremona.com"
                          rows={2}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="toursHeld">Tours Held</Label>
                          <Input
                            id="toursHeld"
                            type="number"
                            value={formData.toursHeld}
                            onChange={(e) => handleInputChange("toursHeld", e.target.value)}
                            placeholder="5"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="tourToLeasePercent">Tour-to-Lease %</Label>
                          <Input
                            id="tourToLeasePercent"
                            type="number"
                            value={formData.tourToLeasePercent}
                            onChange={(e) => handleInputChange("tourToLeasePercent", e.target.value)}
                            placeholder="20"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    {/* Images Tab */}
                    <TabsContent value="images" className="mt-0 space-y-6">
                      <h2 className="text-xl font-semibold mb-4">Images</h2>
                      
                      <div className="space-y-2">
                        <Label htmlFor="images">Upload images here</Label>
                        <Input
                          id="images"
                          type="file"
                          multiple
                          onChange={(e) => handleFileChange(e.target.files)}
                          accept="image/*"
                          className="cursor-pointer"
                        />
                        <p className="text-xs text-muted-foreground">
                          Upload multiple images of the suite
                        </p>
                      </div>

                      {formData.images.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm text-muted-foreground">
                            {formData.images.length} file(s) selected
                          </p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>

                  {/* Action Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePreviousStep}
                      disabled={activeTab === tabs[0].id}
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back To Previous
                    </Button>
                    <div className="flex gap-2">
                      {activeTab !== tabs[tabs.length - 1].id && (
                        <Button
                          type="button"
                          onClick={handleNextStep}
                        >
                          Next Step
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                      <Button type="submit">
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSuite;