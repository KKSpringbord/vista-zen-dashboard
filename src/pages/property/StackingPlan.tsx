import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileDown, Maximize2, ChevronDown } from 'lucide-react';
import { MainLayout } from "@/components/layout/MainLayout";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const properties = [
  { id: '1', name: 'Horizon Plaza', location: 'Astor, Florida' },
  { id: '2', name: 'Café Horizon', location: 'Miami, Florida' },
];

const propertyData: Record<string, any> = {
  '1': {
    name: "Horizon Plaza",
    location: "Astor, Florida",
    totalSF: 5000,
    vacantSF: 1800,
    vacantPercent: 36,
    occupiedSF: 3200,
    occupiedPercent: 64,
    floors: 5,
    totalIncome: 778000,
    avgRentPerSF: 8,
    expirations: 5
  },
  '2': {
    name: "Café Horizon",
    location: "Miami, Florida",
    totalSF: 8000,
    vacantSF: 2000,
    vacantPercent: 25,
    occupiedSF: 6000,
    occupiedPercent: 75,
    floors: 6,
    totalIncome: 960000,
    avgRentPerSF: 10,
    expirations: 4
  }
};

const suiteDataByYear = {
  2025: {
    5: [
      { id: 'Suite 501', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 502', tenant: 'FreshMart Superstore', sf: 200, status: 'booked', expiry: '10-01-2027', type: 'retail' },
      { id: 'Suite 503', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 504', tenant: 'Metro Electronics', sf: 200, status: 'booked', expiry: '12-01-2027', type: 'electronics' },
      { id: 'Suite 505', tenant: 'Fitness First Studio', sf: 200, status: 'occupied', expiry: '01-01-2028', type: 'fitness' }
    ],
    4: [
      { id: 'Suite 401', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 402', tenant: 'FreshMart Superstore', sf: 200, status: 'booked', expiry: '05-01-2027', type: 'retail' },
      { id: 'Suite 403', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 404', tenant: 'Metro Electronics', sf: 200, status: 'booked', expiry: '07-01-2027', type: 'electronics' },
      { id: 'Suite 405', tenant: 'Fitness First Studio', sf: 200, status: 'occupied', expiry: '08-01-2027', type: 'fitness' }
    ],
    3: [
      { id: 'Suite 301', tenant: 'Acme Logistics Pvt Ltd', sf: 200, status: 'occupied', expiry: '11-01-2026', type: 'logistics' },
      { id: 'Suite 302', tenant: 'Urban System', sf: 200, status: 'booked', expiry: '12-01-2026', type: 'tech' },
      { id: 'Suite 303', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 304', tenant: 'Global Marketing Consulting', sf: 200, status: 'booked', expiry: '02-01-2027', type: 'consulting' },
      { id: 'Suite 305', tenant: 'Zenith Analytics Services', sf: 200, status: 'occupied', expiry: '03-01-2027', type: 'analytics' }
    ],
    2: [
      { id: 'Suite 201', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 202', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 203', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 204', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 205', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' }
    ],
    1: [
      { id: 'Suite 101', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 102', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 103', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 104', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 105', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' }
    ]
  },
  2026: {
    5: [
      { id: 'Suite 501', tenant: 'New Tenant A', sf: 200, status: 'occupied', expiry: '10-01-2028', type: 'office' },
      { id: 'Suite 502', tenant: 'FreshMart Superstore', sf: 200, status: 'occupied', expiry: '10-01-2029', type: 'retail' },
      { id: 'Suite 503', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 504', tenant: 'Metro Electronics', sf: 200, status: 'occupied', expiry: '12-01-2029', type: 'electronics' },
      { id: 'Suite 505', tenant: 'Fitness First Studio', sf: 200, status: 'occupied', expiry: '01-01-2030', type: 'fitness' }
    ],
    4: [
      { id: 'Suite 401', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 402', tenant: 'FreshMart Superstore', sf: 200, status: 'occupied', expiry: '05-01-2029', type: 'retail' },
      { id: 'Suite 403', tenant: 'Tech Start', sf: 200, status: 'occupied', expiry: '03-01-2028', type: 'office' },
      { id: 'Suite 404', tenant: 'Metro Electronics', sf: 200, status: 'occupied', expiry: '07-01-2029', type: 'electronics' },
      { id: 'Suite 405', tenant: 'Fitness First Studio', sf: 200, status: 'occupied', expiry: '08-01-2029', type: 'fitness' }
    ],
    3: [
      { id: 'Suite 301', tenant: 'Acme Logistics Pvt Ltd', sf: 200, status: 'occupied', expiry: '11-01-2028', type: 'logistics' },
      { id: 'Suite 302', tenant: 'Urban System', sf: 200, status: 'occupied', expiry: '12-01-2028', type: 'tech' },
      { id: 'Suite 303', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 304', tenant: 'Global Marketing Consulting', sf: 200, status: 'occupied', expiry: '02-01-2029', type: 'consulting' },
      { id: 'Suite 305', tenant: 'Zenith Analytics Services', sf: 200, status: 'occupied', expiry: '03-01-2029', type: 'analytics' }
    ],
    2: [
      { id: 'Suite 201', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 202', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 203', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 204', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 205', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' }
    ],
    1: [
      { id: 'Suite 101', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 102', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 103', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 104', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 105', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' }
    ]
  },
  2027: {
    5: [
      { id: 'Suite 501', tenant: 'New Tenant A', sf: 200, status: 'occupied', expiry: '10-01-2029', type: 'office' },
      { id: 'Suite 502', tenant: 'FreshMart Superstore', sf: 200, status: 'occupied', expiry: '10-01-2030', type: 'retail' },
      { id: 'Suite 503', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 504', tenant: 'Metro Electronics', sf: 200, status: 'occupied', expiry: '12-01-2030', type: 'electronics' },
      { id: 'Suite 505', tenant: 'Fitness First Studio', sf: 200, status: 'occupied', expiry: '01-01-2031', type: 'fitness' }
    ],
    4: [
      { id: 'Suite 401', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 402', tenant: 'FreshMart Superstore', sf: 200, status: 'occupied', expiry: '05-01-2030', type: 'retail' },
      { id: 'Suite 403', tenant: 'Tech Start', sf: 200, status: 'occupied', expiry: '03-01-2029', type: 'office' },
      { id: 'Suite 404', tenant: 'Metro Electronics', sf: 200, status: 'occupied', expiry: '07-01-2030', type: 'electronics' },
      { id: 'Suite 405', tenant: 'Fitness First Studio', sf: 200, status: 'occupied', expiry: '08-01-2030', type: 'fitness' }
    ],
    3: [
      { id: 'Suite 301', tenant: 'Acme Logistics Pvt Ltd', sf: 200, status: 'occupied', expiry: '11-01-2029', type: 'logistics' },
      { id: 'Suite 302', tenant: 'Urban System', sf: 200, status: 'occupied', expiry: '12-01-2029', type: 'tech' },
      { id: 'Suite 303', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 304', tenant: 'Global Marketing Consulting', sf: 200, status: 'occupied', expiry: '02-01-2030', type: 'consulting' },
      { id: 'Suite 305', tenant: 'Zenith Analytics Services', sf: 200, status: 'occupied', expiry: '03-01-2030', type: 'analytics' }
    ],
    2: [
      { id: 'Suite 201', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 202', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 203', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 204', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 205', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' }
    ],
    1: [
      { id: 'Suite 101', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 102', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 103', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 104', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 105', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' }
    ]
  },
  2028: {
    5: [
      { id: 'Suite 501', tenant: 'New Tenant A', sf: 200, status: 'occupied', expiry: '10-01-2030', type: 'office' },
      { id: 'Suite 502', tenant: 'FreshMart Superstore', sf: 200, status: 'occupied', expiry: '10-01-2031', type: 'retail' },
      { id: 'Suite 503', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 504', tenant: 'Metro Electronics', sf: 200, status: 'occupied', expiry: '12-01-2031', type: 'electronics' },
      { id: 'Suite 505', tenant: 'Fitness First Studio', sf: 200, status: 'occupied', expiry: '01-01-2032', type: 'fitness' }
    ],
    4: [
      { id: 'Suite 401', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 402', tenant: 'FreshMart Superstore', sf: 200, status: 'occupied', expiry: '05-01-2031', type: 'retail' },
      { id: 'Suite 403', tenant: 'Tech Start', sf: 200, status: 'occupied', expiry: '03-01-2030', type: 'office' },
      { id: 'Suite 404', tenant: 'Metro Electronics', sf: 200, status: 'occupied', expiry: '07-01-2031', type: 'electronics' },
      { id: 'Suite 405', tenant: 'Fitness First Studio', sf: 200, status: 'occupied', expiry: '08-01-2031', type: 'fitness' }
    ],
    3: [
      { id: 'Suite 301', tenant: 'Acme Logistics Pvt Ltd', sf: 200, status: 'occupied', expiry: '11-01-2030', type: 'logistics' },
      { id: 'Suite 302', tenant: 'Urban System', sf: 200, status: 'occupied', expiry: '12-01-2030', type: 'tech' },
      { id: 'Suite 303', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 304', tenant: 'Global Marketing Consulting', sf: 200, status: 'occupied', expiry: '02-01-2031', type: 'consulting' },
      { id: 'Suite 305', tenant: 'Zenith Analytics Services', sf: 200, status: 'occupied', expiry: '03-01-2031', type: 'analytics' }
    ],
    2: [
      { id: 'Suite 201', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 202', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 203', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 204', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 205', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' }
    ],
    1: [
      { id: 'Suite 101', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 102', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 103', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 104', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' },
      { id: 'Suite 105', tenant: '', sf: 200, status: 'vacant', expiry: '', type: 'office' }
    ]
  }
};

const statusConfig = {
  occupied: { bg: 'bg-green-100 border-green-300 text-green-800', label: 'Occupied' },
  vacant: { bg: 'bg-red-100 border-red-300 text-red-800', label: 'Vacant' },
  expiring: { bg: 'bg-orange-100 border-orange-300 text-orange-800', label: 'Expirations' },
  booked: { bg: 'bg-blue-100 border-blue-300 text-blue-800', label: 'Booked/Lease Signed' }
};

const StackingPlan = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [selectedProperty, setSelectedProperty] = useState('1');
  const [selectedTemplate, setSelectedTemplate] = useState('A');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const property = propertyData[selectedProperty];

  const calculateFloorStats = (floor: number) => {
    const suites = suiteDataByYear[selectedYear as keyof typeof suiteDataByYear]?.[floor] || [];
    const totalSF = suites.reduce((sum, suite) => sum + suite.sf, 0);
    const vacantSF = suites.filter(s => s.status === 'vacant').reduce((sum, suite) => sum + suite.sf, 0);
    return { totalSF, vacantSF };
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties/listing" },
    { label: "Stacking Plan" },
  ];

  return (
    <MainLayout title="Stacking Plan" breadcrumbs={breadcrumbs}>
      <div className="bg-background min-h-screen">
        <div className="bg-card border-b px-6 py-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-start gap-6">
              <div>
                <h1 className="text-2xl font-semibold mb-3">{property.name}</h1>
                <div className="w-48 h-32 bg-muted border-2 border-dashed rounded flex items-center justify-center text-sm text-muted-foreground">
                  Property Image
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Select Property</span>
              <div className="w-64">
                <Select value={selectedProperty} onValueChange={setSelectedProperty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Property" />
                  </SelectTrigger>
                  <SelectContent>
                    {properties.map(prop => (
                      <SelectItem key={prop.id} value={prop.id}>
                        {prop.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button>Show Plan</Button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={selectedTemplate === 'A' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTemplate('A')}
            >
              Template A
            </Button>
            <Button
              variant={selectedTemplate === 'B' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTemplate('B')}
            >
              Template B
            </Button>
            <Button
              variant={selectedTemplate === 'C' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedTemplate('C')}
            >
              Template C
            </Button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Location</div>
                <div className="text-lg font-semibold">{property.location}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Total SF</div>
                <div className="text-lg font-semibold">{property.totalSF.toLocaleString()} sf</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Vacant SF</div>
                <div className="text-lg font-semibold">{property.vacantPercent}% | {property.vacantSF.toLocaleString()} sf</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Occupied SF</div>
                <div className="text-lg font-semibold">{property.occupiedPercent}% | {property.occupiedSF.toLocaleString()} sf</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Floors</div>
                <div className="text-lg font-semibold">{property.floors}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Total Income</div>
                <div className="text-lg font-semibold">$ {property.totalIncome.toLocaleString()}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Average Rent per SF</div>
                <div className="text-lg font-semibold">$ {property.avgRentPerSF}</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="text-sm text-muted-foreground mb-1">Expirations &lt; 12 Months</div>
                <div className="text-lg font-semibold">{property.expirations}</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card border rounded-lg">
            <div className="border-b p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
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

              <div className="flex items-center gap-4">
                {Object.entries(statusConfig).map(([key, config]) => {
                  const suites = Object.values(suiteDataByYear[selectedYear as keyof typeof suiteDataByYear] || {})
                    .flat()
                    .filter(suite => suite.status === key);

                  return (
                    <div key={key} className="flex items-center gap-2 group relative cursor-pointer">
                      <div className={`w-6 h-6 rounded ${config.bg} border`} />
                      <span className="text-sm">{config.label}</span>

                      {suites.length > 0 && (
                        <div className="absolute top-full left-0 mt-2 bg-card border rounded-lg shadow-lg p-3 w-64 z-50 hidden group-hover:block">
                          <div className="font-semibold mb-2 text-sm">{config.label}</div>
                          <div className="space-y-1 max-h-48 overflow-y-auto">
                            {suites.map((suite, idx) => (
                              <div key={idx} className="text-xs py-1 border-b last:border-0">
                                <div className="font-medium">{suite.id}</div>
                                <div className="text-muted-foreground">{suite.tenant || 'Vacant'} - {suite.sf} sf</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                <Button variant="outline" size="sm" onClick={() => setIsFullscreen(!isFullscreen)}>
                  <Maximize2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="p-4">

              <div className="flex gap-4">
                <div className="flex-1 space-y-1">
                  {[5, 4, 3, 2, 1].map(floor => {
                    const suites = suiteDataByYear[selectedYear as keyof typeof suiteDataByYear]?.[floor] || [];

                    return (
                      <div key={floor} className="flex items-center gap-2">
                        <div className="flex-1 grid grid-cols-5 gap-1">
                          {suites.map(suite => {
                            const statusStyle = statusConfig[suite.status as keyof typeof statusConfig];

                            return (
                              <div
                                key={suite.id}
                                className={`${statusStyle.bg} border rounded p-3 min-h-[100px] flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer`}
                              >
                                <div className="font-semibold text-sm">{suite.id}</div>
                                <div className="text-xs truncate">{suite.tenant || 'Vacant'}</div>
                                <div className="text-xs">{suite.sf} sf</div>
                                {suite.expiry && (
                                  <div className="text-xs">Ex on: {suite.expiry}</div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="w-32 space-y-1">
                  {[5, 4, 3, 2, 1].map(floor => {
                    const stats = calculateFloorStats(floor);
                    const vacantCount = suiteDataByYear[selectedYear as keyof typeof suiteDataByYear]?.[floor]?.filter(s => s.status === 'vacant').length || 0;
                    return (
                      <div key={floor} className="relative min-h-[100px] flex items-center">
                        <div className="bg-muted border rounded px-4 py-3 flex flex-col justify-center items-center min-w-[120px]">
                          <div className="text-2xl font-bold mb-1">{floor}</div>
                          <div className="text-xs text-muted-foreground text-center">
                            {stats.totalSF.toLocaleString()} sf
                          </div>
                          <div className="text-xs font-semibold mt-1">
                            {vacantCount} Vacant sf
                          </div>
                        </div>
                        <div className="absolute left-full w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[12px] border-l-muted"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StackingPlan;
