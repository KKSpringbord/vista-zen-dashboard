import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Search, Plus, Eye, Edit, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PropertyListing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("8");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Updated mock data to match the image structure
  const properties = [
    {
      id: 1,
      name: "Hello2",
      city: "Adak",
      state: "Alaska", 
      propertyType: "Vacation Home",
      totalFloors: 1,
      totalRSF: 15596,
      occupancyPercent: 100,
      vacantSF: 0,
      expirationUnder12: 0,
      stackingPlan: "Available"
    },
    {
      id: 2,
      name: "Spa grand",
      city: "Auburndale",
      state: "Florida",
      propertyType: "Mixed-Use",
      totalFloors: 4,
      totalRSF: 250,
      occupancyPercent: 33,
      vacantSF: 0,
      expirationUnder12: 0,
      stackingPlan: "Available"
    },
    {
      id: 3,
      name: "Sunrise Towers",
      city: "Astor",
      state: "Florida",
      propertyType: "Student Housing",
      totalFloors: 5,
      totalRSF: 5000,
      occupancyPercent: 50,
      vacantSF: 2500,
      expirationUnder12: 3,
      stackingPlan: "Available"
    },
    {
      id: 4,
      name: "Tech build",
      city: "Bern",
      state: "Idaho",
      propertyType: "Single Family",
      totalFloors: 5,
      totalRSF: 0,
      occupancyPercent: 0,
      vacantSF: 0,
      expirationUnder12: 0,
      stackingPlan: "Available"
    },
  ];

  const filteredProperties = properties.filter(property =>
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const totalEntries = filteredProperties.length;
  const totalPages = Math.ceil(totalEntries / parseInt(entriesPerPage));
  const startEntry = (currentPage - 1) * parseInt(entriesPerPage) + 1;
  const endEntry = Math.min(currentPage * parseInt(entriesPerPage), totalEntries);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-3xl font-bold">List Property</h1>
              </div>
              <Button 
                onClick={() => navigate("/properties/add-property")}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600"
              >
                <Plus className="w-4 h-4" />
                Add New Property
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                {/* Controls */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Show</span>
                    <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
                      <SelectTrigger className="w-20">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="8">8</SelectItem>
                        <SelectItem value="10">10</SelectItem>
                        <SelectItem value="25">25</SelectItem>
                        <SelectItem value="50">50</SelectItem>
                      </SelectContent>
                    </Select>
                    <span className="text-sm text-muted-foreground">entries</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Search:</span>
                    <Input
                      placeholder=""
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-64"
                    />
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <div className="min-w-full">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead 
                            className="cursor-pointer select-none min-w-[120px]"
                            onClick={() => handleSort('name')}
                          >
                            <div className="flex items-center gap-1">
                              Property Name
                              {sortField === 'name' && (
                                sortDirection === 'asc' ? 
                                <ChevronUp className="w-4 h-4" /> : 
                                <ChevronDown className="w-4 h-4" />
                              )}
                              {sortField !== 'name' && <ChevronUp className="w-4 h-4 opacity-30" />}
                            </div>
                          </TableHead>
                          <TableHead className="min-w-[80px]">City</TableHead>
                          <TableHead className="min-w-[80px]">State</TableHead>
                          <TableHead className="min-w-[120px]">Property Type</TableHead>
                          <TableHead className="min-w-[90px]">Total Floors</TableHead>
                          <TableHead className="min-w-[90px]">Total RSF</TableHead>
                          <TableHead className="min-w-[100px]">Occupancy %</TableHead>
                          <TableHead className="min-w-[90px]">Vacant SF</TableHead>
                          <TableHead className="min-w-[140px]">Expiration &lt; 12 Months</TableHead>
                          <TableHead className="min-w-[120px]">Stacking Plan</TableHead>
                          <TableHead className="min-w-[120px]">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                    <TableBody>
                      {filteredProperties.map((property, index) => (
                        <TableRow key={property.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <TableCell className="font-medium text-blue-600">
                            {property.name}
                          </TableCell>
                          <TableCell>{property.city}</TableCell>
                          <TableCell className="text-blue-600">{property.state}</TableCell>
                          <TableCell>{property.propertyType}</TableCell>
                          <TableCell>{property.totalFloors}</TableCell>
                          <TableCell>
                            {property.totalRSF > 0 ? property.totalRSF.toLocaleString() : '-'}
                          </TableCell>
                          <TableCell>
                            <span className={`font-medium ${
                              property.occupancyPercent === 100 ? 'text-green-600' : 
                              property.occupancyPercent >= 50 ? 'text-orange-600' : 
                              'text-red-600'
                            }`}>
                              {property.occupancyPercent}%
                            </span>
                          </TableCell>
                          <TableCell>
                            {property.vacantSF > 0 ? property.vacantSF.toLocaleString() : '-'}
                          </TableCell>
                          <TableCell>
                            {property.expirationUnder12 > 0 ? property.expirationUnder12 : '-'}
                          </TableCell>
                          <TableCell>
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="text-xs"
                            >
                              View Plan
                            </Button>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-1">
                              <Button 
                                size="sm" 
                                className="w-8 h-8 p-0 bg-orange-500 hover:bg-orange-600"
                                title="View Details"
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                className="w-8 h-8 p-0 bg-orange-500 hover:bg-orange-600"
                                title="Edit Property"
                              >
                                <Edit className="w-4 h-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                className="w-8 h-8 p-0 bg-orange-500 hover:bg-orange-600"
                                title="Delete Property"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-6">
                  <div className="text-sm text-muted-foreground">
                    Showing {startEntry} to {endEntry} of {totalEntries} entries
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-primary text-primary-foreground"
                    >
                      {currentPage}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PropertyListing;