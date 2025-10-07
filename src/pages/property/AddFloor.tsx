import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, ChevronRight, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const AddFloor = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("space");
  const [formData, setFormData] = useState({
    propertyId: "",
    floorNumber: "",
    level: "",
    numberOfSuites: "",
    totalArea: "",
    minDivisible: "",
    contiguousSpace: "",
    subdivPotential: "",
    ceilingType: "",
    ceilingHeight: "",
    hvac: "",
    windowExposure: "",
    dockDoors: "",
    truckAccess: "",
    elevatorAccess: "",
    accessType: "",
    utilities: "",
    marketingLinks: "",
    floorPlanFile: null as File | null,
    images: [] as File[],
  });

  const properties = [
    { id: "1", name: "Riverstone Residential" },
    { id: "2", name: "Skyline Business Center" },
    { id: "3", name: "Crystal Unit Portfolio" },
    { id: "4", name: "Hello World Complex" },
  ];

  const tabs = [
    { id: "space", label: "Space Details" },
    { id: "structural", label: "Structural Details" },
    { id: "accessibility", label: "Accessibility & Security" },
    { id: "marketing", label: "Marketing Metrics" },
    { id: "images", label: "Images" },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (field: string, files: FileList | null) => {
    if (!files) return;
    if (field === "floorPlanFile") {
      setFormData(prev => ({ ...prev, [field]: files[0] }));
    } else if (field === "images") {
      setFormData(prev => ({ ...prev, images: Array.from(files) }));
    }
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
      title: "Floor saved successfully",
      description: "The floor details have been saved.",
    });
    console.log("Floor data:", formData);
    navigate("/properties/listing");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <span>Property Management</span>
            <ChevronRight className="w-4 h-4" />
            <span>Property</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Add Floor</span>
          </div>
          <h1 className="text-2xl font-bold">Floor Details</h1>
        </div>
      </div>

      <div className="container mx-auto px-6 py-6 max-w-6xl">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-6">
            {/* Sidebar Tabs */}
            <div className="w-64 flex-shrink-0">
              <Card className="sticky top-6">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-3 text-left text-sm font-medium transition-colors border-l-2 ${
                          activeTab === tab.id
                            ? "bg-primary/5 text-primary border-primary font-semibold"
                            : "hover:bg-muted/50 text-muted-foreground border-transparent"
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
                      <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold">Space Details</h2>
                        <p className="text-sm text-muted-foreground mt-1">Define floor space and capacity</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="floorNumber">
                            Floor # <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="floorNumber"
                            type="number"
                            value={formData.floorNumber}
                            onChange={(e) => handleInputChange("floorNumber", e.target.value)}
                            placeholder="6"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="level">
                            Level <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="level"
                            value={formData.level}
                            onChange={(e) => handleInputChange("level", e.target.value)}
                            placeholder="Enter level"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="numberOfSuites">
                            Number of Suites <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="numberOfSuites"
                            type="number"
                            value={formData.numberOfSuites}
                            onChange={(e) => handleInputChange("numberOfSuites", e.target.value)}
                            placeholder="Enter number of suites"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="totalArea">
                            Total Area (SF) <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="totalArea"
                            type="number"
                            value={formData.totalArea}
                            onChange={(e) => handleInputChange("totalArea", e.target.value)}
                            placeholder="Enter total area in SF"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="minDivisible">Min Divisible</Label>
                          <Input
                            id="minDivisible"
                            value={formData.minDivisible}
                            onChange={(e) => handleInputChange("minDivisible", e.target.value)}
                            placeholder="Enter min divisible"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="contiguousSpace">Contiguous space</Label>
                          <Input
                            id="contiguousSpace"
                            value={formData.contiguousSpace}
                            onChange={(e) => handleInputChange("contiguousSpace", e.target.value)}
                            placeholder="Enter contiguous space SF"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subdivPotential">Subdiv Potential</Label>
                        <Input
                          id="subdivPotential"
                          value={formData.subdivPotential}
                          onChange={(e) => handleInputChange("subdivPotential", e.target.value)}
                          placeholder="Enter subdivision potential"
                        />
                      </div>
                    </TabsContent>

                    {/* Structural Details Tab */}
                    <TabsContent value="structural" className="mt-0 space-y-6">
                      <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold">Structural Details</h2>
                        <p className="text-sm text-muted-foreground mt-1">Physical structure and features</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ceilingType">Ceiling Type</Label>
                          <Input
                            id="ceilingType"
                            value={formData.ceilingType}
                            onChange={(e) => handleInputChange("ceilingType", e.target.value)}
                            placeholder="Enter ceiling type"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ceilingHeight">Ceiling Height</Label>
                          <Input
                            id="ceilingHeight"
                            value={formData.ceilingHeight}
                            onChange={(e) => handleInputChange("ceilingHeight", e.target.value)}
                            placeholder="Enter ceiling height"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="hvac">HVAC</Label>
                          <Input
                            id="hvac"
                            value={formData.hvac}
                            onChange={(e) => handleInputChange("hvac", e.target.value)}
                            placeholder="Enter HVAC details"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="windowExposure">Window Exposure</Label>
                          <Input
                            id="windowExposure"
                            value={formData.windowExposure}
                            onChange={(e) => handleInputChange("windowExposure", e.target.value)}
                            placeholder="Enter window exposure"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="dockDoors">Dock Doors</Label>
                          <Input
                            id="dockDoors"
                            value={formData.dockDoors}
                            onChange={(e) => handleInputChange("dockDoors", e.target.value)}
                            placeholder="Enter dock doors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="truckAccess">Truck Access</Label>
                          <Input
                            id="truckAccess"
                            value={formData.truckAccess}
                            onChange={(e) => handleInputChange("truckAccess", e.target.value)}
                            placeholder="Enter truck access"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="elevatorAccess">Elevator Access</Label>
                          <Input
                            id="elevatorAccess"
                            value={formData.elevatorAccess}
                            onChange={(e) => handleInputChange("elevatorAccess", e.target.value)}
                            placeholder="Enter elevator access"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    {/* Accessibility & Security Tab */}
                    <TabsContent value="accessibility" className="mt-0 space-y-6">
                      <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold">Accessibility & Security</h2>
                        <p className="text-sm text-muted-foreground mt-1">Access and security features</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="accessType">Access Type</Label>
                          <Input
                            id="accessType"
                            value={formData.accessType}
                            onChange={(e) => handleInputChange("accessType", e.target.value)}
                            placeholder="Enter access type"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="utilities">Utilities</Label>
                          <Input
                            id="utilities"
                            value={formData.utilities}
                            onChange={(e) => handleInputChange("utilities", e.target.value)}
                            placeholder="None"
                          />
                        </div>
                      </div>
                    </TabsContent>

                    {/* Marketing Metrics Tab */}
                    <TabsContent value="marketing" className="mt-0 space-y-6">
                      <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold">Marketing Metrics</h2>
                        <p className="text-sm text-muted-foreground mt-1">Marketing materials and links</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="marketingLinks">Marketing Links</Label>
                        <Textarea
                          id="marketingLinks"
                          value={formData.marketingLinks}
                          onChange={(e) => handleInputChange("marketingLinks", e.target.value)}
                          placeholder="Enter marketing URLs to property listings, virtual tours, etc"
                          rows={3}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="floorPlan">Floor Plan</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="floorPlan"
                            type="file"
                            onChange={(e) => handleFileChange("floorPlanFile", e.target.files)}
                            accept=".pdf,.jpg,.jpeg,.png"
                            className="cursor-pointer"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Upload floor plan document or image
                        </p>
                      </div>
                    </TabsContent>

                    {/* Images Tab */}
                    <TabsContent value="images" className="mt-0 space-y-6">
                      <div className="border-b pb-4">
                        <h2 className="text-xl font-semibold">Images</h2>
                        <p className="text-sm text-muted-foreground mt-1">Upload floor images and tours</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="images">Upload images or tours</Label>
                        <div className="flex items-center gap-2">
                          <Input
                            id="images"
                            type="file"
                            multiple
                            onChange={(e) => handleFileChange("images", e.target.files)}
                            accept="image/*"
                            className="cursor-pointer"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Upload multiple images of the floor
                        </p>
                      </div>

                      {formData.images.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm text-muted-foreground mb-2">
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

export default AddFloor;