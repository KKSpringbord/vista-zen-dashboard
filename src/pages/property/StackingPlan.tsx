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
      <Sidebar collapsed={sidebarCollapsed} />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header with hamburger menu */}
        <header className="h-14 flex items-center justify-between border-b px-4 bg-background">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="lg:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold text-primary">Stacking Plan</h1>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-full space-y-6">
            {/* Property Selection and Details */}
            <Card>
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-4 mb-4">
                      <Select value={selectedProperty.name} onValueChange={() => {}}>
                        <SelectTrigger className="w-[200px]">
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
                      
                      <Button variant="outline">
                        Show Plan
                      </Button>
                    </div>

                    <div className="flex gap-3 mb-4">
                      {['A', 'B', 'C'].map(template => (
                        <Button
                          key={template}
                          variant={selectedTemplate === template ? 'default' : 'outline'}
                          size="sm"
                          onClick={() => setSelectedTemplate(template)}
                        >
                          Template {template}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  {/* Property Image */}
                  <div className="lg:col-span-1">
                    <div className="aspect-[4/3] bg-muted rounded-lg flex items-center justify-center">
                      <img 
                        src="/api/placeholder/300/200" 
                        alt={selectedProperty.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>

                  {/* Property Details */}
                  <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">Location</div>
                      <div className="font-semibold">{selectedProperty.location}</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">Total SF</div>
                      <div className="font-semibold">{selectedProperty.totalSF.toLocaleString()} sf</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">Vacant SF</div>
                      <div className="font-semibold">{vacantPercent}% | {selectedProperty.vacantSF.toLocaleString()} sf</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">Occupied SF</div>
                      <div className="font-semibold">{occupancyPercent}% | {selectedProperty.occupiedSF.toLocaleString()} sf</div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">Floors</div>
                      <div className="font-semibold">{selectedProperty.floors}</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">Total Income</div>
                      <div className="font-semibold">${selectedProperty.totalIncome.toLocaleString()}</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">Average Rent per SF</div>
                      <div className="font-semibold">${selectedProperty.avgRentPerSF}</div>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-muted-foreground">Expirations - 12 Months</div>
                      <div className="font-semibold">{selectedProperty.expirations12Months}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Year Selection and Controls */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
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
                    <Button variant="outline" size="sm">
                      <FileDown className="h-4 w-4 mr-2" />
                      Export PDF
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm">
                      <Maximize2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Status Legend */}
                <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t">
                  <Badge variant="secondary" className={statusColors.occupied}>Occupied</Badge>
                  <Badge variant="secondary" className={statusColors.vacant}>Vacant</Badge>
                  <Badge variant="secondary" className={statusColors.expiring}>Expirations</Badge>
                  <Badge variant="secondary" className={statusColors.booked}>Booked/Lease Signed</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Stacking Plan Visual */}
            <Card>
              <CardContent className="p-6">
                <div className="relative">
                  {/* Main Building Floors */}
                  <div className="grid gap-2 mb-4">
                    {[5, 4, 3, 2, 1].map(floor => {
                      const suites = suiteData[floor] || [];
                      const summary = getFloorSummary(floor);
                      
                      return (
                        <div key={floor} className="flex gap-2 items-center">
                          {/* Left Side Suites */}
                          <div className="flex-1 grid grid-cols-1 gap-1">
                            {suites[0] && (
                              <div className={`
                                p-3 rounded border-2 text-sm font-medium transition-all hover:shadow-md cursor-pointer
                                ${statusColors[suites[0].status]}
                              `}>
                                <div className="font-semibold">{suites[0].id}</div>
                                {suites[0].tenant && <div className="text-xs mt-1">{suites[0].tenant}</div>}
                                <div className="text-xs">{suites[0].sf} sf</div>
                                {suites[0].expiry && <div className="text-xs">Ex on: {suites[0].expiry}</div>}
                              </div>
                            )}
                          </div>

                          {/* Right Side Suites */}
                          <div className="flex-1 grid grid-cols-1 gap-1">
                            {suites[1] && (
                              <div className={`
                                p-3 rounded border-2 text-sm font-medium transition-all hover:shadow-md cursor-pointer
                                ${statusColors[suites[1].status]}
                              `}>
                                <div className="font-semibold">{suites[1].id}</div>
                                {suites[1].tenant && <div className="text-xs mt-1">{suites[1].tenant}</div>}
                                <div className="text-xs">{suites[1].sf} sf</div>
                              </div>
                            )}
                          </div>

                          {/* Floor Number and Summary */}
                          <div className="w-16 text-center">
                            <div className="bg-muted rounded p-2 text-sm font-bold">{floor}</div>
                          </div>
                          <div className="w-32 text-xs text-muted-foreground">
                            <div>{summary.totalSF.toLocaleString()} sf</div>
                            <div>{summary.vacantSF} Vacant sf</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Basement and Parking Levels */}
                  <div className="grid gap-2 pt-4 border-t">
                    {['B1', 'B2'].map(level => (
                      <div key={level} className="flex gap-2 items-center">
                        <div className="flex-1 bg-slate-200 p-8 rounded text-center font-semibold text-slate-600">
                          {level}
                        </div>
                        <div className="w-16 text-center">
                          <div className="bg-muted rounded p-2 text-sm font-bold text-muted-foreground">-</div>
                        </div>
                        <div className="w-32"></div>
                      </div>
                    ))}

                    {['P1', 'P2', 'P3'].map(level => (
                      <div key={level} className="flex gap-2 items-center">
                        <div className="flex-1 bg-purple-200 p-8 rounded text-center font-semibold text-purple-700">
                          {level}
                        </div>
                        <div className="w-16 text-center">
                          <div className="bg-muted rounded p-2 text-sm font-bold text-muted-foreground">-</div>
                        </div>
                        <div className="w-32"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StackingPlan;