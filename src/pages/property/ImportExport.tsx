import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, Download, FileSpreadsheet, Database, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";

const ImportExport = () => {
  const navigate = useNavigate();
  const [importProgress, setImportProgress] = useState(0);
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsImporting(true);
      setImportProgress(0);
      
      // Simulate import progress
      const interval = setInterval(() => {
        setImportProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsImporting(false);
            setImportStatus("success");
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  const handleExport = (type: string) => {
    // Simulate export process
    console.log(`Exporting ${type}...`);
    // In a real app, this would trigger a download
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties/listing" },
    { label: "Import / Export" },
  ];

  return (
    <MainLayout title="Import / Export Data" breadcrumbs={breadcrumbs}>
      <div className="p-6 space-y-6">

      <Tabs defaultValue="import" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="import" className="flex items-center gap-2">
            <Upload className="w-4 h-4" />
            Import Data
          </TabsTrigger>
          <TabsTrigger value="export" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export Data
          </TabsTrigger>
        </TabsList>

        <TabsContent value="import" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Import Properties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="import-type">Import Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select import type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="properties">Properties Only</SelectItem>
                      <SelectItem value="properties-floors">Properties & Floors</SelectItem>
                      <SelectItem value="full">Full Property Data</SelectItem>
                      <SelectItem value="tenants">Tenants Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file-upload">Select File</Label>
                  <Input
                    id="file-upload"
                    type="file"
                    accept=".csv,.xlsx,.xls"
                    onChange={handleFileUpload}
                    disabled={isImporting}
                  />
                  <p className="text-sm text-muted-foreground">
                    Supported formats: CSV, Excel (.xlsx, .xls)
                  </p>
                </div>

                {isImporting && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Importing...</span>
                      <span className="text-sm">{importProgress}%</span>
                    </div>
                    <Progress value={importProgress} />
                  </div>
                )}

                {importStatus === "success" && (
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Import completed successfully! Data has been added to your portfolio.
                    </AlertDescription>
                  </Alert>
                )}

                {importStatus === "error" && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Import failed. Please check your file format and try again.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Import Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Required Columns for Properties:</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Property Name</li>
                      <li>Property Type</li>
                      <li>Address</li>
                      <li>Total Floors</li>
                      <li>Total Suites</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Optional Columns:</h4>
                    <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                      <li>Description</li>
                      <li>Year Built</li>
                      <li>Square Footage</li>
                      <li>Status</li>
                    </ul>
                  </div>

                  <div className="pt-2">
                    <Button variant="outline" className="flex items-center gap-2">
                      <FileSpreadsheet className="w-4 h-4" />
                      Download Template
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="export" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  Properties Export
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Export all property information including basic details, floors, and specifications.
                </p>
                <Button 
                  onClick={() => handleExport("properties")}
                  className="w-full flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export Properties
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  Suites Export
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Export all suite information including details, amenities, and rental rates.
                </p>
                <Button 
                  onClick={() => handleExport("suites")}
                  className="w-full flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export Suites
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  Tenants Export
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Export tenant information including contact details, lease information, and rental history.
                </p>
                <Button 
                  onClick={() => handleExport("tenants")}
                  className="w-full flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export Tenants
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileSpreadsheet className="w-5 h-5" />
                  Financial Report
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Export financial data including rent collection, occupancy rates, and revenue reports.
                </p>
                <Button 
                  onClick={() => handleExport("financial")}
                  className="w-full flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Export Financial
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Complete Backup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Export complete database backup including all properties, suites, tenants, and financial data.
                </p>
                <Button 
                  onClick={() => handleExport("backup")}
                  variant="outline"
                  className="w-full flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Full Backup
                </Button>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Export Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="export-format">Export Format</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="xlsx">Excel (.xlsx)</SelectItem>
                      <SelectItem value="pdf">PDF Report</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date-range">Date Range</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="ytd">Year to Date</SelectItem>
                      <SelectItem value="last-month">Last Month</SelectItem>
                      <SelectItem value="last-quarter">Last Quarter</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      </div>
    </MainLayout>
  );
};

export default ImportExport;