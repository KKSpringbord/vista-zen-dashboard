import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileDown, Printer, ZoomIn, ZoomOut } from 'lucide-react';
import { MainLayout } from "@/components/layout/MainLayout";

// Property data
const property = {
  name: "Café Horizon",
  location: "Astor, Florida",
  totalSF: 5000,
  vacantSF: 1250,
  occupiedSF: 3750,
  totalIncome: 200000,
  avgRentPerSF: 9,
  expirations: 3
};

// Mock data for suites by year
const suiteDataByYear = {
  2025: {
    6: [
      { id: 'S601', tenant: 'Legal Firm', sf: 900, status: 'occupied', expiry: '12-31-2026', type: 'legal' },
      { id: 'S602', tenant: '', sf: 400, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S603', tenant: 'Consulting', sf: 700, status: 'occupied', expiry: '06-30-2027', type: 'consulting' },
      { id: 'S604', tenant: 'Tech Co', sf: 600, status: 'expiring', expiry: '03-31-2025', type: 'tech' },
      { id: 'S605', tenant: '', sf: 500, status: 'booked', expiry: '09-15-2025', type: 'office' }
    ],
    5: [
      { id: 'S501', tenant: 'Systems Inc.', sf: 800, status: 'occupied', expiry: '08-30-2026', type: 'office' },
      { id: 'S502', tenant: '', sf: 300, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S503', tenant: 'Design Co.', sf: 600, status: 'occupied', expiry: '12-31-2025', type: 'creative' },
      { id: 'S504', tenant: '', sf: 400, status: 'vacant', expiry: '', type: 'office' },
      { id: 'S505', tenant: 'Law Firm', sf: 1200, status: 'occupied', expiry: '06-30-2027', type: 'legal' },
      { id: 'S506', tenant: '', sf: 500, status: 'booked', expiry: '01-15-2026', type: 'office' }
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
    6: [
      { id: 'S601', tenant: 'Legal Firm', sf: 900, status: 'occupied', expiry: '12-31-2028', type: 'legal' },
      { id: 'S602', tenant: 'New Co', sf: 400, status: 'occupied', expiry: '08-31-2027', type: 'office' },
      { id: 'S603', tenant: 'Consulting', sf: 700, status: 'occupied', expiry: '06-30-2029', type: 'consulting' },
      { id: 'S604', tenant: '', sf: 600, status: 'vacant', expiry: '', type: 'tech' },
      { id: 'S605', tenant: 'Start B', sf: 500, status: 'occupied', expiry: '09-15-2027', type: 'office' }
    ],
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

const statusConfig = {
  occupied: { bg: 'bg-green-500', label: 'Occupied' },
  vacant: { bg: 'bg-red-500', label: 'Vacant' },
  expiring: { bg: 'bg-orange-500', label: 'Expiring Soon' },
  booked: { bg: 'bg-blue-500', label: 'Booked' }
};

const StackingPlan = () => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [zoomLevel, setZoomLevel] = useState(100);

  const vacantPercent = Math.round((property.vacantSF / property.totalSF) * 100);
  const occupiedPercent = Math.round((property.occupiedSF / property.totalSF) * 100);

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 150));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 50));

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties/listing" },
    { label: "Stacking Plan" },
  ];

  return (
    <MainLayout title="Stacking Plan" breadcrumbs={breadcrumbs}>
      {/* Property Info Bar */}
      <div className="px-6 py-3 border-b bg-card">
        <div className="flex items-center text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{property.name}</span>
          <span className="mx-2">|</span>
          <span>{property.location}</span>
          <span className="mx-2">|</span>
          <span>{property.totalSF.toLocaleString()} SF</span>
          <span className="mx-2">|</span>
          <span>{vacantPercent}% Vacant</span>
          <span className="mx-2">|</span>
          <span>{occupiedPercent}% Occupied</span>
          <span className="mx-2">|</span>
          <span>${(property.totalIncome / 1000).toFixed(0)}K Income</span>
          <span className="mx-2">|</span>
          <span>${property.avgRentPerSF}/SF</span>
          <span className="mx-2">|</span>
          <span>{property.expirations} Expirations</span>
        </div>
      </div>

      {/* Controls Bar */}
      <div className="px-6 py-4 flex items-center justify-between border-b bg-card">
          {/* Year Filters */}
          <div className="flex gap-2">
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

          {/* Status Legend */}
          <div className="flex items-center gap-4">
            {Object.entries(statusConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${config.bg}`} />
                <span className="text-sm text-muted-foreground">{config.label}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleZoomOut}>
              <ZoomOut className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium min-w-[50px] text-center">{zoomLevel}%</span>
            <Button variant="outline" size="sm" onClick={handleZoomIn}>
              <ZoomIn className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Printer className="h-4 w-4 mr-2" />
              Print
            </Button>
            <Button variant="outline" size="sm">
              <FileDown className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

      {/* Main Content */}
      <main className="p-6">
        <Card>
          <CardContent className="p-6">
            <ScrollArea className="h-[calc(100vh-280px)]">
              <div 
                style={{ 
                  transform: `scale(${zoomLevel / 100})`,
                  transformOrigin: 'top left',
                }}
                className="inline-block"
              >
                {/* Building Container */}
                <div className="border-2 border-border rounded-lg bg-muted/20 p-4 shadow-lg">
                  {/* Floors */}
                  {[6, 5, 4, 3, 2, 1].map(floor => {
                    const suites = suiteDataByYear[selectedYear]?.[floor] || [];
                    
                    return (
                      <div key={floor} className="mb-2">
                        <div className="flex items-center gap-2">
                          {/* Floor Number */}
                          <div className="flex-shrink-0 w-12 h-20 bg-card border border-border rounded flex items-center justify-center">
                            <span className="font-bold text-lg">{floor}</span>
                          </div>
                          
                          {/* Suites Row */}
                          <div className="flex-1 flex gap-1 h-20">
                            {suites.map(suite => {
                              const statusColor = statusConfig[suite.status as keyof typeof statusConfig]?.bg || 'bg-gray-500';
                              
                              return (
                                <div
                                  key={suite.id}
                                  className={`${statusColor} border border-border rounded p-2 flex flex-col justify-between text-white min-w-[140px] flex-1`}
                                  style={{ maxWidth: '200px' }}
                                >
                                  <div className="text-xs font-semibold">{suite.id}</div>
                                  <div className="text-xs truncate">{suite.tenant || 'Vacant'}</div>
                                  <div className="flex justify-between items-end">
                                    <span className="text-xs">{suite.sf} SF</span>
                                    {suite.expiry && (
                                      <span className="text-xs">{suite.expiry}</span>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Basement Levels */}
                  <div className="mt-4 pt-4 border-t-2 border-dashed border-border">
                    {['B1', 'B2'].map((level, idx) => (
                      <div key={level} className="mb-2">
                        <div className="flex items-center gap-2">
                          <div className="flex-shrink-0 w-12 h-16 bg-card border border-border rounded flex items-center justify-center">
                            <span className="font-bold text-sm">{level}</span>
                          </div>
                          <div className="flex-1 h-16 bg-gray-400 border border-border rounded p-2 flex items-center justify-center text-white text-sm">
                            {idx === 0 ? 'Parking' : 'Storage'}
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
      </main>
    </MainLayout>
  );
};

export default StackingPlan;
