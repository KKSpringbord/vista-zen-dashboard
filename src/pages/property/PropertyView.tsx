import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu,
  FileText,
  Sparkles,
  Layers,
  Building2,
  FileStack,
  MessageCircle,
  MapPin,
  User,
  ChevronRight as ChevronRightIcon
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PropertyView = () => {
  const navigate = useNavigate();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

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
    { id: "description", label: "Description", icon: FileText },
    { id: "highlights", label: "Highlights", icon: Sparkles },
    { id: "floor-suite", label: "Floor and Suite", icon: Layers },
    { id: "available-suites", label: "Available Suites", icon: Building2 },
    { id: "brochures", label: "Brochures", icon: FileStack },
    { id: "contact", label: "Contact", icon: MessageCircle },
    { id: "location", label: "Location", icon: MapPin }
  ];

  const floors = [
    { floor: 1, suites: 5 },
    { floor: 2, suites: 5 },
    { floor: 3, suites: 5 },
    { floor: 4, suites: 3 },
    { floor: 5, suites: 6 },
    { floor: 6, suites: 5 },
    { floor: 7, suites: 5 },
    { floor: 8, suites: 2 },
    { floor: 9, suites: 5 },
    { floor: 10, suites: 6 }
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
      case "description":
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Palm Grove Villas</h2>
            <p className="text-gray-700">Modern tech park in Goleta</p>
          </div>
        );
      
      case "highlights":
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Modern amenities throughout</li>
              <li>• Prime location with excellent access</li>
              <li>• Energy-efficient building systems</li>
              <li>• Professional property management</li>
            </ul>
          </div>
        );
      
      case "floor-suite":
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Floor and Suite</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead>Floor</TableHead>
                  <TableHead>No.of suites</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {floors.map((floor) => (
                  <TableRow key={floor.floor}>
                    <TableCell>
                      <ChevronRightIcon className="h-4 w-4" />
                    </TableCell>
                    <TableCell>{floor.floor}</TableCell>
                    <TableCell>{floor.suites}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      
      case "available-suites":
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Available Suites</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Suite Name</TableHead>
                  <TableHead>Floor No.</TableHead>
                  <TableHead>Size</TableHead>
                  <TableHead>Space Use</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {availableSuites.map((suite) => (
                  <TableRow key={suite.name}>
                    <TableCell>{suite.name}</TableCell>
                    <TableCell>{suite.floor}</TableCell>
                    <TableCell>{suite.size}</TableCell>
                    <TableCell>{suite.spaceUse}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        );
      
      case "brochures":
        return (
          <div className="bg-white rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Brochures</h2>
              <div className="flex gap-2">
                <Button className="bg-[#E8590C] hover:bg-[#E8590C]/90 text-white">
                  Select All
                </Button>
                <Button className="bg-[#E8590C] hover:bg-[#E8590C]/90 text-white">
                  Download
                </Button>
              </div>
            </div>
            <div className="text-center py-12 text-gray-500">
              No Brouchers Found !
            </div>
          </div>
        );
      
      case "contact":
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Company Details</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Owner Details</h3>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-300 rounded-full p-3">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Owner Company</p>
                      <p className="font-semibold">GreenLeaf Developers LLP</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">john.mathews@orionrealty.com</p>
                    <p className="text-sm">8967895678</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Management Details</h3>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-300 rounded-full p-3">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Management Company Name</p>
                      <p className="font-semibold">Crest Management Services Pvt Ltd</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">david.fernandes@vertexpm.com</p>
                    <p className="text-sm">9849367490</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Broker Details</h3>
                <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-300 rounded-full p-3">
                      <User className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Broker Name</p>
                      <p className="font-semibold">Summit Realty Partners</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">karthik.desai@crestviewbrokers.com</p>
                    <p className="text-sm">7890697895</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case "location":
        return (
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Location</h2>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-lg">United States</p>
                <a href="#" className="text-blue-600 text-sm hover:underline">View larger map</a>
              </div>
              <div className="w-full h-[500px] bg-gray-200 rounded-lg overflow-hidden">
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
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-[#E8590C] text-white px-6 py-4 flex items-center justify-between shadow-md">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="text-white hover:bg-white/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">View Property</h1>
          </div>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-[#E8590C]"
            onClick={() => navigate("/properties/listing")}
          >
            Logout
          </Button>
        </header>

        {/* Breadcrumb */}
        <div className="bg-[#E8590C] text-white px-6 py-2 text-sm">
          Property Management  &gt;  Property  &gt;  View property
        </div>

        <div className="flex-1 overflow-auto">
          <div className="relative">
            {/* Hero Section with Image Carousel */}
            <div className="relative h-64 bg-[#E8590C] overflow-hidden">
              <img
                src={propertyImages[currentImageIndex]}
                alt="Property"
                className="w-full h-full object-cover opacity-50"
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#E8590C] hover:bg-[#D14F0A] text-white p-3 rounded"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#E8590C] hover:bg-[#D14F0A] text-white p-3 rounded"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Property Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-4xl font-bold text-white mb-2">Palm Grove Villas</h1>
                <p className="text-xl text-white">125 Cremona Drive</p>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <Button className="bg-white/90 text-[#E8590C] hover:bg-white border-[#E8590C]">
                  Virtual Tour
                </Button>
                <Button className="bg-white/90 text-[#E8590C] hover:bg-white border-[#E8590C]">
                  0 Images
                </Button>
                <Button className="bg-white/90 text-[#E8590C] hover:bg-white border-[#E8590C]">
                  Brochure
                </Button>
              </div>
            </div>

            {/* Metrics Bar */}
            <div className="bg-white mx-6 -mt-16 relative z-10 rounded-lg shadow-lg p-6 mb-6">
              <div className="grid grid-cols-4 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-[#E8590C] rounded"></div>
                  <div>
                    <p className="text-sm text-gray-500">Occupancy</p>
                    <p className="text-xl font-bold">74% | 7,000 sf</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-[#E8590C] rounded"></div>
                  <div>
                    <p className="text-sm text-gray-500">Vacant</p>
                    <p className="text-xl font-bold">26% | 2,400 sf</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-[#E8590C] rounded"></div>
                  <div>
                    <p className="text-sm text-gray-500">Total Income</p>
                    <p className="text-xl font-bold">$ 2,956,000</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-12 bg-[#E8590C] rounded"></div>
                  <div>
                    <p className="text-sm text-gray-500">Average Rent per sf</p>
                    <p className="text-xl font-bold">$ 9</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Cards */}
            <div className="mx-6 mb-6 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow">
                <div className="bg-gray-300 rounded-full p-3">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Ownership Signer</p>
                  <p className="font-semibold">GreenLeaf Developers LLP</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow">
                <div className="bg-gray-300 rounded-full p-3">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Management</p>
                  <p className="font-semibold">Crest Management Services Pvt Ltd</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 flex items-center gap-3 shadow">
                <div className="bg-gray-300 rounded-full p-3">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Broker</p>
                  <p className="font-semibold">Summit Realty Partners</p>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="mx-6 mb-6 flex gap-4">
              {/* Left Sidebar with Tabs */}
              <div className="w-64 bg-white rounded-lg shadow flex-shrink-0">
                <div className="p-4 space-y-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeTab === tab.id
                            ? "bg-[#E8590C] text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm font-medium">{tab.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t px-6 py-4 text-center text-sm text-gray-600">
          Copyright © 2025 <span className="text-blue-600">Springbord</span>
        </footer>
      </div>
    </div>
  );
};

export default PropertyView;
