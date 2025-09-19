import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { FileDown, Maximize2, Menu } from 'lucide-react';

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

// Mock data for suites
const suiteData = {
  5: [
    { id: 'S501', tenant: 'Systems Inc.', sf: 500, status: 'occupied', expiry: '08-30-2026', type: 'office' },
    { id: 'S502', tenant: '', sf: 500, status: 'vacant', expiry: '', type: 'office' }
  ],
  4: [
    { id: 'S401', tenant: 'Medical', sf: 500, status: 'expiring', expiry: '07-31-2026', type: 'medical' },
    { id: 'S402', tenant: '', sf: 500, status: 'vacant', expiry: '', type: 'office' }
  ],
  3: [
    { id: 'S301', tenant: 'Solution', sf: 500, status: 'expiring', expiry: '05-31-2027', type: 'office' },
    { id: 'S302', tenant: '', sf: 500, status: 'vacant', expiry: '', type: 'office' }
  ],
  2: [
    { id: 'S201', tenant: 'New Tech', sf: 500, status: 'expiring', expiry: '03-31-2026', type: 'tech' },
    { id: 'S202', tenant: '', sf: 500, status: 'vacant', expiry: '', type: 'office' }
  ],
  1: [
    { id: 'S100', tenant: 'Aptitude Medical Systems Inc.', sf: 500, status: 'occupied', expiry: '11-30-2025', type: 'medical' },
    { id: 'S102', tenant: '', sf: 500, status: 'vacant', expiry: '', type: 'office' }
  ]
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

  const occupancyPercent = Math.round((selectedProperty.occupiedSF / selectedProperty.totalSF) * 100);
  const vacantPercent = Math.round((selectedProperty.vacantSF / selectedProperty.totalSF) * 100);

  const getFloorSummary = (floor: number) => {
    const suites = suiteData[floor] || [];
    const totalSF = suites.reduce((sum, suite) => sum + suite.sf, 0);
    const vacantSF = suites.filter(s => s.status === 'vacant').reduce((sum, suite) => sum + suite.sf, 0);
    return { totalSF, vacantSF };
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
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <FileDown className="h-4 w-4 mr-2" />
                      Export PDF
                    </Button>

                    <Button variant="ghost" size="sm" className="w-full">
                      <Maximize2 className="h-4 w-4 mr-2" />
                      Full Screen
                    </Button>
                  </div>

                  {/* Status Legend */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t">
                    <Badge variant="secondary" className={`${statusColors.occupied} text-[10px] py-1`}>Occupied</Badge>
                    <Badge variant="secondary" className={`${statusColors.vacant} text-[10px] py-1`}>Vacant</Badge>
                    <Badge variant="secondary" className={`${statusColors.expiring} text-[10px] py-1`}>Expirations</Badge>
                    <Badge variant="secondary" className={`${statusColors.booked} text-[10px] py-1`}>Booked</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel - Stacking Plan (Immediate Visibility) */}
            <div className="xl:col-span-2">
              <Card className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Building Stacking Plan - {selectedYear}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 overflow-auto">
                  <div className="space-y-2">
                    
                    {/* Main Building Floors */}
                    {[5, 4, 3, 2, 1].map(floor => {
                      const suites = suiteData[floor] || [];
                      const summary = getFloorSummary(floor);
                      
                      return (
                        <div key={floor} className="flex gap-2 items-center">
                          {/* Left Suite */}
                          <div className="flex-1">
                            {suites[0] && (
                              <div className={`
                                p-3 rounded border-2 text-sm font-medium transition-all hover:shadow-md cursor-pointer
                                ${statusColors[suites[0].status]}
                              `}>
                                <div className="font-semibold">{suites[0].id}</div>
                                {suites[0].tenant && <div className="text-xs mt-1 truncate">{suites[0].tenant}</div>}
                                <div className="text-xs">{suites[0].sf} sf</div>
                                {suites[0].expiry && <div className="text-xs">Ex: {suites[0].expiry}</div>}
                              </div>
                            )}
                          </div>

                          {/* Right Suite */}
                          <div className="flex-1">
                            {suites[1] && (
                              <div className={`
                                p-3 rounded border-2 text-sm font-medium transition-all hover:shadow-md cursor-pointer
                                ${statusColors[suites[1].status]}
                              `}>
                                <div className="font-semibold">{suites[1].id}</div>
                                {suites[1].tenant && <div className="text-xs mt-1 truncate">{suites[1].tenant}</div>}
                                <div className="text-xs">{suites[1].sf} sf</div>
                              </div>
                            )}
                          </div>

                          {/* Floor Number */}
                          <div className="w-12 text-center">
                            <div className="bg-muted rounded p-2 text-sm font-bold">{floor}</div>
                          </div>
                          
                          {/* Floor Summary */}
                          <div className="w-20 text-xs text-muted-foreground">
                            <div>{summary.totalSF.toLocaleString()}</div>
                            <div>{summary.vacantSF} vacant</div>
                          </div>
                        </div>
                      );
                    })}

                    {/* Basement & Parking Levels */}
                    <div className="border-t pt-2 mt-4">
                      {['B1', 'B2'].map(level => (
                        <div key={level} className="flex gap-2 items-center mb-2">
                          <div className="flex-1 bg-slate-200 p-4 rounded text-center font-semibold text-slate-600 text-sm">
                            {level} - Basement
                          </div>
                          <div className="w-12 text-center">
                            <div className="bg-muted rounded p-2 text-sm font-bold text-muted-foreground">-</div>
                          </div>
                          <div className="w-20"></div>
                        </div>
                      ))}

                      {['P1', 'P2', 'P3'].map(level => (
                        <div key={level} className="flex gap-2 items-center mb-2">
                          <div className="flex-1 bg-purple-200 p-4 rounded text-center font-semibold text-purple-700 text-sm">
                            {level} - Parking
                          </div>
                          <div className="w-12 text-center">
                            <div className="bg-muted rounded p-2 text-sm font-bold text-muted-foreground">-</div>
                          </div>
                          <div className="w-20"></div>
                        </div>
                      ))}
                    </div>
                  </div>
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