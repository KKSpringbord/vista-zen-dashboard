import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  Layers,
  Building2,
  FileStack,
  MessageCircle,
  MapPin,
  User,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  X
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const PropertyView = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedFloors, setExpandedFloors] = useState<number[]>([]);
  const [selectedSuite, setSelectedSuite] = useState<any>(null);
  const [isSuiteSheetOpen, setIsSuiteSheetOpen] = useState(false);

  // Mock data
  const propertyImages = [
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=400&fit=crop",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&h=400&fit=crop",
    "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=400&fit=crop"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: Building2 },
    { id: "floor-suite", label: "Floors & Suites", icon: Layers },
    { id: "available-suites", label: "Available Space", icon: Building2 },
    { id: "brochures", label: "Brochures", icon: FileStack },
    { id: "contact", label: "Contact", icon: MessageCircle },
    { id: "location", label: "Location", icon: MapPin }
  ];

  const floors = [
    { 
      floor: 1, 
      suites: [
        { id: 101, name: "Suite 101", tenantName: "Apex Logistics Pvt Ltd", ownershipSigner: "Apex Logistics Holdings Pvt Ltd", occupiedDate: "02-01-2024", vacatingDate: "01-01-2026", agreementPeriod: "1 years 11 Month", totalSf: 200 },
        { id: 102, name: "Suite 102", tenantName: "Tech Solutions Inc", ownershipSigner: "Tech Holdings Ltd", occupiedDate: "03-15-2024", vacatingDate: "03-15-2026", agreementPeriod: "2 years", totalSf: 250 },
        { id: 103, name: "Suite 103", tenantName: "Vacant", ownershipSigner: "-", occupiedDate: "-", vacatingDate: "-", agreementPeriod: "-", totalSf: 200 },
        { id: 104, name: "Suite 104", tenantName: "Global Exports Ltd", ownershipSigner: "Global Group", occupiedDate: "01-10-2024", vacatingDate: "01-10-2025", agreementPeriod: "1 year", totalSf: 300 },
        { id: 105, name: "Suite 105", tenantName: "Creative Studios", ownershipSigner: "Creative Holdings", occupiedDate: "06-01-2024", vacatingDate: "06-01-2027", agreementPeriod: "3 years", totalSf: 180 }
      ]
    },
    { 
      floor: 2, 
      suites: [
        { id: 201, name: "Suite 201", tenantName: "Manufacturing Co", ownershipSigner: "Manufacturing Holdings", occupiedDate: "04-20-2024", vacatingDate: "04-20-2025", agreementPeriod: "1 year", totalSf: 220 },
        { id: 202, name: "Suite 202", tenantName: "Retail Partners", ownershipSigner: "Retail Group Ltd", occupiedDate: "05-10-2024", vacatingDate: "05-10-2026", agreementPeriod: "2 years", totalSf: 200 },
        { id: 203, name: "Suite 203", tenantName: "Vacant", ownershipSigner: "-", occupiedDate: "-", vacatingDate: "-", agreementPeriod: "-", totalSf: 200 },
        { id: 204, name: "Suite 204", tenantName: "Finance Corp", ownershipSigner: "Finance Holdings", occupiedDate: "02-15-2024", vacatingDate: "02-15-2027", agreementPeriod: "3 years", totalSf: 280 },
        { id: 205, name: "Suite 205", tenantName: "Media Group", ownershipSigner: "Media Enterprises", occupiedDate: "07-01-2024", vacatingDate: "07-01-2025", agreementPeriod: "1 year", totalSf: 190 }
      ]
    },
    { 
      floor: 3, 
      suites: [
        { id: 301, name: "Suite 301", tenantName: "Healthcare Inc", ownershipSigner: "Healthcare Group", occupiedDate: "03-01-2024", vacatingDate: "03-01-2026", agreementPeriod: "2 years", totalSf: 240 },
        { id: 302, name: "Suite 302", tenantName: "Legal Services", ownershipSigner: "Legal Holdings", occupiedDate: "04-15-2024", vacatingDate: "04-15-2025", agreementPeriod: "1 year", totalSf: 200 },
        { id: 303, name: "Suite 303", tenantName: "Vacant", ownershipSigner: "-", occupiedDate: "-", vacatingDate: "-", agreementPeriod: "-", totalSf: 200 },
        { id: 304, name: "Suite 304", tenantName: "Consulting Firm", ownershipSigner: "Consulting Group", occupiedDate: "01-20-2024", vacatingDate: "01-20-2027", agreementPeriod: "3 years", totalSf: 260 },
        { id: 305, name: "Suite 305", tenantName: "Education Center", ownershipSigner: "Education Trust", occupiedDate: "08-01-2024", vacatingDate: "08-01-2025", agreementPeriod: "1 year", totalSf: 210 }
      ]
    }
  ];

  const availableSuites = [
    { name: "Suite 103", floor: 1, size: "200 sf", spaceUse: "Medical" },
    { name: "Suite 201", floor: 2, size: "200 sf", spaceUse: "Industrial" },
    { name: "Suite 203", floor: 2, size: "200 sf", spaceUse: "Medical" },
    { name: "Suite 303", floor: 3, size: "200 sf", spaceUse: "Medical" },
    { name: "Suite 403", floor: 4, size: "200 sf", spaceUse: "Medical" },
    { name: "Suite 503", floor: 5, size: "200 sf", spaceUse: "Medical" },
    { name: "Suite 603", floor: 6, size: "200 sf", spaceUse: "Medical" },
    { name: "Suite 701", floor: 7, size: "200 sf", spaceUse: "Industrial" },
    { name: "Suite 703", floor: 7, size: "200 sf", spaceUse: "Medical" },
    { name: "Suite 903", floor: 9, size: "200 sf", spaceUse: "Medical" },
    { name: "Suite 1003", floor: 10, size: "200 sf", spaceUse: "Medical" },
    { name: "Suite 1006", floor: 10, size: "200 sf", spaceUse: "Industrial" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Property Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Palm Grove Villas is a modern tech park located in the heart of Goleta, California. 
                  This premier property offers state-of-the-art facilities and premium amenities designed 
                  for today's forward-thinking businesses.
                </p>
                <div className="pt-4 border-t border-border">
                  <h3 className="font-semibold text-card-foreground mb-3">Key Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Modern amenities throughout",
                      "Prime location with excellent access",
                      "Energy-efficient building systems",
                      "Professional property management",
                      "High-speed internet infrastructure",
                      "Ample parking facilities"
                    ].map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case "floor-suite":
        return (
          <div className="space-y-4">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Floor and Suite</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-transparent border-border">
                      <TableHead className="w-16"></TableHead>
                      <TableHead className="text-muted-foreground font-semibold">Floor</TableHead>
                      <TableHead className="text-muted-foreground font-semibold">No.of suites</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {floors.map((floor) => {
                      const isExpanded = expandedFloors.includes(floor.floor);
                      return (
                        <>
                          <TableRow 
                            key={floor.floor}
                            className="hover:bg-accent/50 transition-colors cursor-pointer border-border"
                            onClick={() => {
                              setExpandedFloors(prev => 
                                isExpanded 
                                  ? prev.filter(f => f !== floor.floor)
                                  : [...prev, floor.floor]
                              );
                            }}
                          >
                            <TableCell>
                              {isExpanded ? (
                                <ChevronUp className="h-4 w-4 text-muted-foreground" />
                              ) : (
                                <ChevronDown className="h-4 w-4 text-muted-foreground" />
                              )}
                            </TableCell>
                            <TableCell className="font-medium text-card-foreground">{floor.floor}</TableCell>
                            <TableCell className="text-muted-foreground">{floor.suites.length}</TableCell>
                          </TableRow>
                          {isExpanded && (
                            <TableRow className="border-border">
                              <TableCell colSpan={3} className="bg-muted/30 p-4">
                                <div className="flex flex-wrap gap-2">
                                  {floor.suites.map((suite) => (
                                    <Button
                                      key={suite.id}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setSelectedSuite(suite);
                                        setIsSuiteSheetOpen(true);
                                      }}
                                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                                      size="sm"
                                    >
                                      {suite.name}
                                    </Button>
                                  ))}
                                </div>
                              </TableCell>
                            </TableRow>
                          )}
                        </>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        );
      
      case "available-suites":
        return (
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Available Suites</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-muted-foreground font-semibold">Suite Name</TableHead>
                    <TableHead className="text-muted-foreground font-semibold">Floor</TableHead>
                    <TableHead className="text-muted-foreground font-semibold">Size</TableHead>
                    <TableHead className="text-muted-foreground font-semibold">Space Use</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {availableSuites.map((suite, idx) => (
                    <TableRow 
                      key={suite.name}
                      className={`${idx % 2 === 0 ? 'bg-muted/30' : 'bg-card'} hover:bg-accent/50 transition-colors cursor-pointer`}
                    >
                      <TableCell className="font-medium text-card-foreground">{suite.name}</TableCell>
                      <TableCell className="text-muted-foreground">{suite.floor}</TableCell>
                      <TableCell className="text-muted-foreground">{suite.size}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {suite.spaceUse}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        );
      
      case "brochures":
        return (
          <Card className="border-border">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-card-foreground">Brochures</CardTitle>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Select All
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary-muted">
                    Download
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-center py-16 text-muted-foreground">
                <FileStack className="h-12 w-12 mx-auto mb-3 opacity-30" />
                <p>No Brochures Found</p>
              </div>
            </CardContent>
          </Card>
        );
      
      case "contact":
        return (
          <div className="space-y-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Owner Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Owner Company</p>
                      <p className="font-semibold text-card-foreground">GreenLeaf Developers LLP</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3.5 w-3.5" />
                      <span>john.mathews@orionrealty.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      <span>8967895678</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Management Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Management Company</p>
                      <p className="font-semibold text-card-foreground">Crest Management Services Pvt Ltd</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3.5 w-3.5" />
                      <span>david.fernandes@vertexpm.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      <span>9849367490</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Broker Details</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Broker Name</p>
                      <p className="font-semibold text-card-foreground">Summit Realty Partners</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="h-3.5 w-3.5" />
                      <span>karthik.desai@crestviewbrokers.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="h-3.5 w-3.5" />
                      <span>7890697895</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );
      
      case "location":
        return (
          <Card className="border-border">
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle className="text-card-foreground">Location</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">United States</p>
                </div>
                <a href="#" className="text-sm text-primary hover:underline">View larger map</a>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-[500px] bg-muted rounded-lg overflow-hidden border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019429279216!2d-122.41941548468147!3d37.77492977975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-background-subtle">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-primary text-primary-foreground px-6 py-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">View Property</h1>
          </div>
          <Button
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            onClick={() => navigate("/properties/listing")}
          >
            Logout
          </Button>
        </header>

        {/* Breadcrumb */}
        <div className="bg-primary text-primary-foreground px-6 py-2 text-sm">
          Property Management  &gt;  Property  &gt;  View property
        </div>

        <div className="flex-1 overflow-auto">
          <div className="relative">
            {/* Hero Section with Image Carousel */}
            <div className="relative h-48 bg-primary overflow-hidden">
              <img
                src={propertyImages[currentImageIndex]}
                alt="Property"
                className="w-full h-full object-cover opacity-40"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary/80 backdrop-blur-sm hover:bg-primary text-primary-foreground p-3 rounded-lg transition-all shadow-lg"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary/80 backdrop-blur-sm hover:bg-primary text-primary-foreground p-3 rounded-lg transition-all shadow-lg"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Property Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-4">
                <h1 className="text-2xl font-bold text-primary-foreground mb-1">Café Horizon</h1>
                <p className="text-base text-primary-foreground/90">125 Cremona Drive</p>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button className="bg-primary-foreground/95 backdrop-blur-sm text-primary hover:bg-primary-foreground shadow-lg">
                  Virtual Tour
                </Button>
                <Button className="bg-primary-foreground/95 backdrop-blur-sm text-primary hover:bg-primary-foreground shadow-lg">
                  {propertyImages.length} Images
                </Button>
                <Button className="bg-primary-foreground/95 backdrop-blur-sm text-primary hover:bg-primary-foreground shadow-lg">
                  Brochure
                </Button>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="bg-card mx-6 -mt-10 relative z-10 rounded-xl shadow-xl border border-border p-4 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-14 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Occupancy</p>
                    <p className="text-xl font-bold text-card-foreground">74% | 7,000 sf</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-14 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Vacant</p>
                    <p className="text-xl font-bold text-card-foreground">26% | 2,400 sf</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-14 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Total Income</p>
                    <p className="text-xl font-bold text-card-foreground">$ 2,956,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-14 bg-primary rounded-full"></div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Average Rent per sf</p>
                    <p className="text-xl font-bold text-card-foreground">$ 9</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Cards */}
            <div className="mx-6 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Ownership Signer</p>
                    <p className="font-semibold text-card-foreground">GreenLeaf Developers LLP</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Management</p>
                    <p className="font-semibold text-card-foreground">Crest Management Services Pvt Ltd</p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Broker</p>
                    <p className="font-semibold text-card-foreground">Summit Realty Partners</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Area */}
            <div className="mx-6 mb-6 flex flex-col lg:flex-row gap-6">
              {/* Left Sidebar with Tabs */}
              <Card className="lg:w-64 border-border flex-shrink-0">
                <CardContent className="p-4 space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all ${
                          activeTab === tab.id
                            ? "bg-primary text-primary-foreground shadow-md"
                            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Content Area */}
              <div className="flex-1 min-w-0">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-card border-t border-border px-6 py-4 text-center text-sm text-muted-foreground">
          Copyright © 2025 <span className="text-primary font-semibold">Springbord</span>
        </footer>
      </div>

      {/* Suite Details Sheet */}
      <Sheet open={isSuiteSheetOpen} onOpenChange={setIsSuiteSheetOpen}>
        <SheetContent className="w-full sm:max-w-2xl overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="text-2xl font-bold text-card-foreground">
              {selectedSuite?.name}
            </SheetTitle>
          </SheetHeader>
          
          {selectedSuite && (
            <div className="mt-6 space-y-6">
              {/* Suite Details Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Suite No.</p>
                      <p className="text-lg font-semibold text-card-foreground">
                        {selectedSuite.name.split(' ')[1]}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Floor No.</p>
                      <p className="text-lg font-semibold text-card-foreground">
                        {selectedSuite.name.split(' ')[1][0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Total sf</p>
                      <p className="text-lg font-semibold text-card-foreground">
                        {selectedSuite.totalSf}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Tenant Name</p>
                      <p className="text-lg font-semibold text-card-foreground">
                        {selectedSuite.tenantName}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Ownership Signer</p>
                      <p className="text-lg font-semibold text-card-foreground">
                        {selectedSuite.ownershipSigner}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Occupied Date</p>
                      <p className="text-lg font-semibold text-card-foreground">
                        {selectedSuite.occupiedDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Vacating Date</p>
                      <p className="text-lg font-semibold text-card-foreground">
                        {selectedSuite.vacatingDate}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-3">
                    <div className="w-1 h-12 bg-primary rounded-full"></div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Agreement Period</p>
                      <p className="text-lg font-semibold text-card-foreground">
                        {selectedSuite.agreementPeriod}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Images Section */}
              <div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-1 h-8 bg-primary rounded-full"></div>
                  <h3 className="text-lg font-semibold text-card-foreground">Images</h3>
                </div>
                <div className="text-center py-8 text-muted-foreground bg-muted/30 rounded-lg border border-border">
                  <p>No images available</p>
                </div>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default PropertyView;
