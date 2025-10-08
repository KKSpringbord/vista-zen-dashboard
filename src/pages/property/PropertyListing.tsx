import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Eye, BarChart3, Edit, Trash2, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";

const PropertyListing = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState("8");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Mock data matching the reference image
  const properties = [
    {
      id: 1,
      name: "Café Horizon",
      city: "Astor",
      state: "Florida", 
      propertyType: "Student Housing",
      totalFloors: 5,
      totalRSF: 5000,
      occupancyPercent: 76,
      vacantSF: 1200,
      expirationUnder12: 7,
      stackingPlan: "Available"
    },
    {
      id: 2,
      name: "Grandview Estate",
      city: "Astor",
      state: "Florida",
      propertyType: "Student Housing",
      totalFloors: 5,
      totalRSF: 4600,
      occupancyPercent: 74,
      vacantSF: 1200,
      expirationUnder12: 7,
      stackingPlan: "Available"
    },
    {
      id: 3,
      name: "Horizon Plaza",
      city: "Astor",
      state: "Florida",
      propertyType: "Student Housing",
      totalFloors: 5,
      totalRSF: 5000,
      occupancyPercent: 60,
      vacantSF: 2000,
      expirationUnder12: 5,
      stackingPlan: "Available"
    },
    {
      id: 4,
      name: "Lakeside Enclave",
      city: "Astor",
      state: "Florida",
      propertyType: "Student Housing",
      totalFloors: 5,
      totalRSF: 5000,
      occupancyPercent: 76,
      vacantSF: 1200,
      expirationUnder12: 8,
      stackingPlan: "Available"
    },
    {
      id: 5,
      name: "Palm Grove Villas",
      city: "Astor",
      state: "Florida",
      propertyType: "Student Housing",
      totalFloors: 10,
      totalRSF: 9400,
      occupancyPercent: 74,
      vacantSF: 2400,
      expirationUnder12: 7,
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

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties/listing" },
  ];

  return (
    <MainLayout title="Property Listing" breadcrumbs={breadcrumbs}>
      <div className="p-6">
        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Show</span>
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="w-16 h-8">
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
            className="w-48 h-8"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead 
                className="cursor-pointer select-none font-semibold text-muted-foreground text-xs w-[140px]"
                onClick={() => handleSort('name')}
              >
                <div className="flex items-center gap-1">
                  Property Name
                  {sortField === 'name' && <ChevronUp className="w-3 h-3" />}
                  {sortField !== 'name' && <ChevronUp className="w-3 h-3 opacity-20" />}
                </div>
              </TableHead>
              <TableHead className="font-semibold text-muted-foreground text-xs w-[80px]">City</TableHead>
              <TableHead className="font-semibold text-muted-foreground text-xs w-[70px]">State</TableHead>
              <TableHead className="font-semibold text-muted-foreground text-xs w-[110px]">Property Type</TableHead>
              <TableHead className="font-semibold text-muted-foreground text-center text-xs w-[70px]">Total<br />Floors</TableHead>
              <TableHead className="font-semibold text-muted-foreground text-center text-xs w-[80px]">Total<br />RSF</TableHead>
              <TableHead className="font-semibold text-muted-foreground text-center text-xs w-[80px]">Occupancy<br />%</TableHead>
              <TableHead className="font-semibold text-muted-foreground text-center text-xs w-[80px]">Vacant<br />SF</TableHead>
              <TableHead className="font-semibold text-muted-foreground text-center text-xs w-[90px]">
                Expiration<br />{"< 12 Months"}
              </TableHead>
              <TableHead className="font-semibold text-muted-foreground text-center text-xs w-[90px]">
                Stacking<br />Plan
              </TableHead>
              <TableHead className="font-semibold text-muted-foreground text-center text-xs w-[140px]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProperties.map((property, index) => (
              <TableRow 
                key={property.id} 
                className={index % 2 === 0 ? 'bg-white' : 'bg-muted/30'}
              >
                <TableCell className="font-medium text-sm">
                  {property.name}
                </TableCell>
                <TableCell className="text-sm">{property.city}</TableCell>
                <TableCell className="text-sm">{property.state}</TableCell>
                <TableCell className="text-sm">{property.propertyType}</TableCell>
                <TableCell className="text-center text-sm">{property.totalFloors}</TableCell>
                <TableCell className="text-center text-sm">
                  {property.totalRSF.toLocaleString()}
                </TableCell>
                <TableCell className="text-center text-sm">
                  {property.occupancyPercent}%
                </TableCell>
                <TableCell className="text-center text-sm">
                  {property.vacantSF.toLocaleString()}
                </TableCell>
                <TableCell className="text-center text-sm">
                  {property.expirationUnder12}
                </TableCell>
                <TableCell className="text-center">
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="h-7 px-2 text-xs hover:bg-muted"
                    title="View Stacking Plan"
                    onClick={() => navigate("/stacking")}
                  >
                    View Plan
                  </Button>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-center gap-1">
                    <Button 
                      size="sm" 
                      className="w-8 h-8 p-0 bg-[#d84315] hover:bg-[#bf360c] rounded"
                      title="View Details"
                      onClick={() => navigate(`/properties/view/${property.id}`)}
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="w-8 h-8 p-0 bg-[#d84315] hover:bg-[#bf360c] rounded"
                      title="Analytics"
                    >
                      <BarChart3 className="w-3.5 h-3.5" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="w-8 h-8 p-0 bg-[#d84315] hover:bg-[#bf360c] rounded"
                      title="Edit Property"
                    >
                      <Edit className="w-3.5 h-3.5" />
                    </Button>
                    <Button 
                      size="sm" 
                      className="w-8 h-8 p-0 bg-[#d84315] hover:bg-[#bf360c] rounded"
                      title="Delete Property"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          Showing {startEntry} to {endEntry} of {totalEntries} entries
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="h-8 px-3"
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {currentPage}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="h-8 px-3"
          >
            Next
          </Button>
        </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PropertyListing;