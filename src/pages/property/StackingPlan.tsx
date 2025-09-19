import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { FileDown, Maximize2, Menu, ZoomIn, ZoomOut, Search, Info } from 'lucide-react';

// Mock data for properties
const properties = [
  {
    id: 1,
    name: "Sunrise Towers",
    location: "Astor, Florida",
    totalSF: 5000,
    occupiedSF: 2500,
    vacantSF: 2500,
    floors: 5,
    totalIncome: 200000,
    avgRentPerSF: 9,
    expirations12Months: 3,
    image: "/api/placeholder/300/200"
  }
];

// Mock data for suites by year - Extended to test many suites per floor
const suiteDataByYear = {
  2025: {
    5: [
      { id: 'S501', tenant: 'Systems Inc.', sf: 800, status: 'occupied', expiry: '08-30-2026', type: 'office' },
      { id: 'S502', tenant: '', sf: 300, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S503', tenant: 'Design Co.', sf: 600, status: 'occupied', expiry: '12-31-2025', type: 'creative' },
      { id: 'S504', tenant: '', sf: 400, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S505', tenant: 'Law Firm', sf: 1200, status: 'occupied', expiry: '06-30-2027', type: 'legal' },
      { id: 'S506', tenant: '', sf: 500, status: 'booked', expiry: '01-15-2026', type: 'office' },
      { id: 'S507', tenant: 'Tech Co', sf: 450, status: 'occupied', expiry: '03-31-2026', type: 'tech' },
      { id: 'S508', tenant: '', sf: 350, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S509', tenant: 'Marketing Firm', sf: 700, status: 'expiring', expiry: '06-30-2025', type: 'marketing' },
      { id: 'S510', tenant: 'Consulting', sf: 600, status: 'occupied', expiry: '09-30-2026', type: 'consulting' },
      { id: 'S511', tenant: '', sf: 250, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S512', tenant: 'Finance Co', sf: 800, status: 'booked', expiry: '12-31-2025', type: 'finance' },
      { id: 'S513', tenant: 'Health Services', sf: 550, status: 'occupied', expiry: '07-31-2027', type: 'healthcare' },
      { id: 'S514', tenant: '', sf: 400, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S515', tenant: 'Engineering', sf: 900, status: 'expiring', expiry: '05-31-2025', type: 'engineering' }
    ],
    4: [
      { id: 'S401', tenant: 'Medical', sf: 700, status: 'expiring', expiry: '07-31-2025', type: 'medical' },
      { id: 'S402', tenant: '', sf: 350, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S403', tenant: 'Tech Start', sf: 900, status: 'occupied', expiry: '09-30-2026', type: 'tech' },
      { id: 'S404', tenant: '', sf: 450, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S405', tenant: 'Consulting', sf: 650, status: 'occupied', expiry: '03-31-2027', type: 'consulting' },
      { id: 'S406', tenant: 'Finance Ltd', sf: 550, status: 'expiring', expiry: '11-30-2025', type: 'finance' }
    ],
    3: [
      { id: 'S301', tenant: 'Solution', sf: 600, status: 'expiring', expiry: '05-31-2025', type: 'office' },
      { id: 'S302', tenant: '', sf: 400, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S303', tenant: 'Marketing', sf: 750, status: 'occupied', expiry: '12-15-2026', type: 'marketing' },
      { id: 'S304', tenant: '', sf: 300, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S305', tenant: 'Real Estate', sf: 850, status: 'occupied', expiry: '08-31-2027', type: 'realestate' },
      { id: 'S306', tenant: '', sf: 500, status: 'booked', expiry: '02-28-2026', type: 'office' }
    ],
    2: [
      { id: 'S201', tenant: 'New Tech', sf: 1000, status: 'expiring', expiry: '03-31-2025', type: 'tech' },
      { id: 'S202', tenant: '', sf: 350, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S203', tenant: 'Insurance', sf: 700, status: 'occupied', expiry: '10-31-2026', type: 'insurance' },
      { id: 'S204', tenant: '', sf: 400, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S205', tenant: 'Accounting', sf: 600, status: 'occupied', expiry: '07-31-2027', type: 'accounting' },
      { id: 'S206', tenant: 'Healthcare', sf: 450, status: 'occupied', expiry: '04-30-2026', type: 'healthcare' }
    ],
    1: [
      { id: 'S101', tenant: 'Aptitude Medical Systems Inc.', sf: 1100, status: 'occupied', expiry: '11-30-2025', type: 'medical' },
      { id: 'S102', tenant: '', sf: 300, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S103', tenant: 'Engineering', sf: 800, status: 'occupied', expiry: '09-15-2026', type: 'engineering' },
      { id: 'S104', tenant: '', sf: 400, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S105', tenant: 'Retail Corp', sf: 650, status: 'occupied', expiry: '12-31-2026', type: 'retail' },
      { id: 'S106', tenant: '', sf: 500, status: 'booked', expiry: '03-15-2026', type: 'office' }
    ]
  },
  2026: {
    5: [
      { id: 'S501', tenant: 'Systems Inc.', sf: 800, status: 'occupied', expiry: '08-30-2028', type: 'office' },
      { id: 'S502', tenant: 'New Tenant A', sf: 300, status: 'occupied', expiry: '12-31-2027', type: 'office' },
      { id: 'S503', tenant: '', sf: 600, status: 'vacant', expiry: '', type: 'creative' },
      { id: 'S504', tenant: 'Tech Firm', sf: 400, status: 'occupied', expiry: '06-30-2028', type: 'office' },
      { id: 'S505', tenant: 'Law Firm', sf: 1200, status: 'occupied', expiry: '06-30-2029', type: 'legal' },
      { id: 'S506', tenant: 'StartUp B', sf: 500, status: 'occupied', expiry: '01-15-2028', type: 'office' }
    ],
    4: [
      { id: 'S401', tenant: 'Medical Plus', sf: 700, status: 'occupied', expiry: '07-31-2028', type: 'medical' },
      { id: 'S402', tenant: '', sf: 350, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S403', tenant: 'Tech Start', sf: 900, status: 'occupied', expiry: '09-30-2028', type: 'tech' },
      { id: 'S404', tenant: 'New Co', sf: 450, status: 'occupied', expiry: '11-30-2027', type: 'office' },
      { id: 'S405', tenant: 'Consulting', sf: 650, status: 'occupied', expiry: '03-31-2029', type: 'consulting' },
      { id: 'S406', tenant: '', sf: 550, status: 'vacant', expiry: '', type: 'finance' }
    ],
    3: [
      { id: 'S301', tenant: 'Solution Plus', sf: 600, status: 'occupied', expiry: '05-31-2028', type: 'office' },
      { id: 'S302', tenant: 'Small Biz', sf: 400, status: 'occupied', expiry: '08-31-2027', type: 'office' },
      { id: 'S303', tenant: 'Marketing', sf: 750, status: 'occupied', expiry: '12-15-2028', type: 'marketing' },
      { id: 'S304', tenant: '', sf: 300, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S305', tenant: 'Real Estate', sf: 850, status: 'occupied', expiry: '08-31-2029', type: 'realestate' },
      { id: 'S306', tenant: 'Design Studio', sf: 500, status: 'occupied', expiry: '02-28-2028', type: 'office' }
    ],
    2: [
      { id: 'S201', tenant: 'Newer Tech', sf: 1000, status: 'occupied', expiry: '03-31-2028', type: 'tech' },
      { id: 'S202', tenant: 'Agency Co', sf: 350, status: 'occupied', expiry: '07-15-2027', type: 'office' },
      { id: 'S203', tenant: 'Insurance', sf: 700, status: 'occupied', expiry: '10-31-2028', type: 'insurance' },
      { id: 'S204', tenant: '', sf: 400, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S205', tenant: 'Accounting', sf: 600, status: 'occupied', expiry: '07-31-2029', type: 'accounting' },
      { id: 'S206', tenant: 'Healthcare', sf: 450, status: 'occupied', expiry: '04-30-2028', type: 'healthcare' }
    ],
    1: [
      { id: 'S101', tenant: '', sf: 1100, status: 'vacant', expiry: '', type: 'medical' },
      { id: 'S102', tenant: 'Service Co', sf: 300, status: 'occupied', expiry: '09-30-2027', type: 'office' },
      { id: 'S103', tenant: 'Engineering', sf: 800, status: 'occupied', expiry: '09-15-2028', type: 'engineering' },
      { id: 'S104', tenant: 'Logistics', sf: 400, status: 'occupied', expiry: '05-31-2027', type: 'office' },
      { id: 'S105', tenant: 'Retail Corp', sf: 650, status: 'occupied', expiry: '12-31-2028', type: 'retail' },
      { id: 'S106', tenant: 'Event Co', sf: 500, status: 'occupied', expiry: '03-15-2028', type: 'office' }
    ]
  }
};

const statusColors = {
  occupied: 'bg-green-200 text-green-800 border-green-300',
  vacant: 'bg-red-200 text-red-800 border-red-300', 
  expiring: 'bg-orange-200 text-orange-800 border-orange-300',
  booked: 'bg-blue-200 text-blue-800 border-blue-300'
};

const StackingPlan = () => {
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedTemplate, setSelectedTemplate] = useState('A');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [zoomLevel, setZoomLevel] = useState(100);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSuite, setSelectedSuite] = useState(null);

  const occupancyPercent = Math.round((selectedProperty.occupiedSF / selectedProperty.totalSF) * 100);
  const vacantPercent = Math.round((selectedProperty.vacantSF / selectedProperty.totalSF) * 100);

  const getFloorSummary = (floor: number) => {
    const suites = suiteDataByYear[selectedYear]?.[floor] || [];
    const totalSF = suites.reduce((sum, suite) => sum + suite.sf, 0);
    const vacantSF = suites.filter(s => s.status === 'vacant').reduce((sum, suite) => sum + suite.sf, 0);
    return { totalSF, vacantSF };
  };

  const getSuiteWidth = (sf: number, maxSf: number = 1200) => {
    // Base width calculation with minimum 120px and maximum 200px
    const minWidth = 120;
    const maxWidth = 200;
    const calculatedWidth = Math.max(minWidth, Math.min(maxWidth, (sf / maxSf) * maxWidth));
    return calculatedWidth;
  };

  const getSuiteOpacity = (suite: any) => {
    if (selectedStatus === 'all') return 1;
    return suite.status === selectedStatus ? 1 : 0.3;
  };

  const getSuiteBlur = (suite: any) => {
    if (selectedStatus === 'all') return '';
    return suite.status === selectedStatus ? '' : 'blur-sm';
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 50));
  
  const handleSuiteClick = (suite: any) => {
    setSelectedSuite(selectedSuite?.id === suite.id ? null : suite);
  };

  const filteredSuites = (suites: any[]) => {
    if (!searchTerm) return suites;
    return suites.filter(suite => 
      suite.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      suite.tenant.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      {/* Fixed Sidebar */}
      <div className={`fixed left-0 top-0 h-full z-10 transition-transform duration-300 ${
        sidebarCollapsed ? '-translate-x-full' : 'translate-x-0'
      }`}>
        <Sidebar collapsed={false} />
      </div>
      
      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ${
        sidebarCollapsed ? 'ml-0' : 'ml-64'
      }`}>
        {/* Fixed Header */}
        <header className="h-12 flex items-center justify-between border-b px-4 bg-background sticky top-0 z-20">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-primary">Stacking Plan</h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 h-[calc(100vh-5rem)]">
            
            {/* Left Panel - Property Info & Controls */}
            <div className="xl:col-span-1 space-y-3">
              
              {/* Property Selection & Templates */}
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <Select value={selectedProperty.name} onValueChange={() => {}}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Property" />
                      </SelectTrigger>
                      <SelectContent>
                        {properties.map(property => (
                          <SelectItem key={property.id} value={property.name}>
                            {property.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    <Button variant="outline" className="w-full">
                      Show Plan
                    </Button>

                    <div className="grid grid-cols-3 gap-2">
                      {['A', 'B', 'C'].map(template => (
                        <Button
                          key={template}
                          variant={selectedTemplate === template ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedTemplate(template)}
                        >
                          {template}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Property Details */}
              <Card>
                <CardContent className="p-4">
                  <div className="aspect-video bg-muted rounded-lg mb-3 overflow-hidden">
                    <img 
                      src="/api/placeholder/300/200" 
                      alt={selectedProperty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <div className="text-muted-foreground">Location</div>
                      <div className="font-semibold text-xs">{selectedProperty.location}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Total SF</div>
                      <div className="font-semibold text-xs">{selectedProperty.totalSF.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Vacant</div>
                      <div className="font-semibold text-xs">{vacantPercent}% | {selectedProperty.vacantSF.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Occupied</div>
                      <div className="font-semibold text-xs">{occupancyPercent}% | {selectedProperty.occupiedSF.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Floors</div>
                      <div className="font-semibold text-xs">{selectedProperty.floors}</div>
                    </div>
                    <div>
                      <div className="text-muted-foreground">Income</div>
                      <div className="font-semibold text-xs">${selectedProperty.totalIncome.toLocaleString()}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Year Selection & Actions */}
              <Card>
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      {['2025', '2026', '2027', '2028'].map(year => (
                        <Button
                          key={year}
                          variant={selectedYear === year ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedYear(year)}
                        >
                          {year}
                        </Button>
                      ))}
                    </div>

                    {/* Suite Search */}
                    <div className="relative">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search suites..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-8 h-9"
                      />
                    </div>

                    {/* Zoom Controls */}
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" onClick={handleZoomOut}>
                        <ZoomOut className="h-4 w-4" />
                      </Button>
                      <span className="text-xs font-medium min-w-[45px] text-center">{zoomLevel}%</span>
                      <Button variant="outline" size="sm" onClick={handleZoomIn}>
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <FileDown className="h-4 w-4 mr-2" />
                      Export PDF
                    </Button>

                    <Button variant="ghost" size="sm" className="w-full">
                      <Maximize2 className="h-4 w-4 mr-2" />
                      Full Screen
                    </Button>
                  </div>

                  {/* Status Legend - Interactive Filters */}
                  <div className="space-y-2 mt-4 pt-3 border-t">
                    <div className="text-xs font-medium text-muted-foreground mb-2">Filter by Status:</div>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant={selectedStatus === 'all' ? 'default' : 'outline'}
                        size="sm"
                        className="text-[10px] h-6"
                        onClick={() => setSelectedStatus('all')}
                      >
                        All
                      </Button>
                      <Button
                        variant={selectedStatus === 'occupied' ? 'default' : 'outline'}
                        size="sm"
                        className={`text-[10px] h-6 ${selectedStatus === 'occupied' ? '' : statusColors.occupied}`}
                        onClick={() => setSelectedStatus('occupied')}
                      >
                        Occupied
                      </Button>
                      <Button
                        variant={selectedStatus === 'vacant' ? 'default' : 'outline'}
                        size="sm"
                        className={`text-[10px] h-6 ${selectedStatus === 'vacant' ? '' : statusColors.vacant}`}
                        onClick={() => setSelectedStatus('vacant')}
                      >
                        Vacant
                      </Button>
                      <Button
                        variant={selectedStatus === 'expiring' ? 'default' : 'outline'}
                        size="sm"
                        className={`text-[10px] h-6 ${selectedStatus === 'expiring' ? '' : statusColors.expiring}`}
                        onClick={() => setSelectedStatus('expiring')}
                      >
                        Expiring
                      </Button>
                      <Button
                        variant={selectedStatus === 'booked' ? 'default' : 'outline'}
                        size="sm"
                        className={`text-[10px] h-6 ${selectedStatus === 'booked' ? '' : statusColors.booked}`}
                        onClick={() => setSelectedStatus('booked')}
                      >
                        Booked
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel - Fixed Stacking Plan Container */}
            <div className="xl:col-span-2">
              <Card className="h-full">
                <CardHeader className="pb-3 flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">Building Stacking Plan - {selectedYear}</CardTitle>
                    {selectedSuite && (
                      <Button variant="outline" size="sm" onClick={() => setSelectedSuite(null)}>
                        <Info className="h-4 w-4 mr-2" />
                        {selectedSuite.id} Selected
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <ScrollArea className="h-[calc(100vh-16rem)] px-4">
                    <div 
                      className="space-y-3 py-4 building-container" 
                      style={{ 
                        transform: `scale(${zoomLevel / 100})`,
                        transformOrigin: 'top left',
                        width: `${10000 / zoomLevel}%`
                      }}
                    >
                    
                      {/* Building Outline */}
                      <div className="bg-gradient-to-b from-muted/30 to-muted/10 border-2 border-muted rounded-lg p-3 building-shadow">
                        
                        {/* Main Building Floors */}
                        {[5, 4, 3, 2, 1].map(floor => {
                          const allSuites = suiteDataByYear[selectedYear]?.[floor] || [];
                          const suites = filteredSuites(allSuites);
                          const summary = getFloorSummary(floor);
                          
                          return (
                            <div key={floor} className="mb-3">
                              {/* Floor Header */}
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="bg-primary text-primary-foreground rounded px-3 py-1 text-sm font-bold min-w-[80px] text-center">
                                    Floor {floor}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {summary.totalSF.toLocaleString()} sf • {allSuites.length} suites • {summary.vacantSF.toLocaleString()} sf vacant
                                  </div>
                                </div>
                              </div>

                              {/* Suites Grid - CSS Grid for flexible layout */}
                              <div className="bg-muted/10 border border-muted/30 rounded-lg p-2 min-h-[80px]">
                                <div 
                                  className="grid gap-1 auto-rows-fr overflow-x-auto"
                                  style={{
                                    gridTemplateColumns: `repeat(auto-fit, minmax(120px, 1fr))`,
                                    maxWidth: '100%'
                                  }}
                                >
                                  {suites.map((suite) => (
                                    <div
                                      key={suite.id}
                                      className={`
                                        p-2 rounded border-2 text-xs font-medium cursor-pointer
                                        transition-all duration-300 hover:shadow-lg hover:scale-105
                                        ${statusColors[suite.status]} ${getSuiteBlur(suite)}
                                        ${selectedSuite?.id === suite.id ? 'ring-2 ring-primary ring-offset-2' : ''}
                                      `}
                                      style={{
                                        width: `${getSuiteWidth(suite.sf)}px`,
                                        minWidth: '120px',
                                        opacity: getSuiteOpacity(suite),
                                        height: '64px'
                                      }}
                                      onClick={() => handleSuiteClick(suite)}
                                    >
                                      <div className="font-bold text-xs">{suite.id}</div>
                                      {suite.tenant && (
                                        <div className="text-[10px] mt-1 truncate font-medium">
                                          {suite.tenant}
                                        </div>
                                      )}
                                      <div className="text-[10px] font-medium">{suite.sf} sf</div>
                                      {suite.expiry && (
                                        <div className="text-[9px] opacity-80">
                                          {suite.expiry}
                                        </div>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        {/* Basement & Parking Levels - Redesigned for consistency */}
                        <div className="border-t-2 border-muted pt-3 mt-3">
                          {[
                            { id: 'B1', name: 'Basement 1', color: 'bg-slate-100 border-slate-300 text-slate-700' },
                            { id: 'B2', name: 'Basement 2', color: 'bg-slate-100 border-slate-300 text-slate-700' }
                          ].map(level => (
                            <div key={level.id} className="mb-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="bg-muted text-muted-foreground rounded px-3 py-1 text-sm font-bold min-w-[80px] text-center">
                                    {level.id}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Storage & Mechanical
                                  </div>
                                </div>
                              </div>
                              <div className="bg-muted/10 border border-muted/30 rounded-lg p-2">
                                <div className={`p-4 rounded border-2 text-center font-semibold text-sm ${level.color} h-16 flex items-center justify-center`}>
                                  {level.name} - Storage & Utilities
                                </div>
                              </div>
                            </div>
                          ))}

                          {[
                            { id: 'P1', name: 'Parking Level 1', color: 'bg-purple-100 border-purple-300 text-purple-700' },
                            { id: 'P2', name: 'Parking Level 2', color: 'bg-purple-100 border-purple-300 text-purple-700' },
                            { id: 'P3', name: 'Parking Level 3', color: 'bg-purple-100 border-purple-300 text-purple-700' }
                          ].map(level => (
                            <div key={level.id} className="mb-3">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <div className="bg-muted text-muted-foreground rounded px-3 py-1 text-sm font-bold min-w-[80px] text-center">
                                    {level.id}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    Vehicle parking
                                  </div>
                                </div>
                              </div>
                              <div className="bg-muted/10 border border-muted/30 rounded-lg p-2">
                                <div className={`p-4 rounded border-2 text-center font-semibold text-sm ${level.color} h-16 flex items-center justify-center`}>
                                  {level.name} - 50 Parking Spaces
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>

                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StackingPlan;