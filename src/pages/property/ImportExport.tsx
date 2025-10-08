import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, Download, CheckCircle, AlertCircle } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ImportExport = () => {
  const navigate = useNavigate();
  const [importProgress, setImportProgress] = useState(0);
  const [isImporting, setIsImporting] = useState(false);
  const [importStatus, setImportStatus] = useState<"idle" | "success" | "error">("idle");
  const [isAddMode, setIsAddMode] = useState(true);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedProperty, setSelectedProperty] = useState("");

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      setIsImporting(true);
      setImportProgress(0);

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

  const handleTemplateDownload = () => {
    console.log("Downloading template...");
  };

  const handlePropertyTemplateDownload = () => {
    if (selectedProperty) {
      console.log(`Downloading template for property: ${selectedProperty}`);
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Properties", href: "/properties/listing" },
    { label: "Import / Export" },
  ];

  return (
    <MainLayout title="Import Property" breadcrumbs={breadcrumbs}>
      <TooltipProvider>
        <div className="min-h-screen bg-gray-50">
          <div className="max-w-4xl mx-auto p-8 space-y-8">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                  <Download className="w-5 h-5 text-[#FF6B00]" />
                  Download Template
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Click the button below to download the template
                </p>
                <Button
                  onClick={handleTemplateDownload}
                  className="w-full bg-[#FF6B00] hover:bg-[#E56000] text-white rounded-lg py-6 text-base font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-2xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                  <Upload className="w-5 h-5 text-[#FF6B00]" />
                  Upload Excel File
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5">
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  Select and upload the excel file below to add the data to stackplanner
                </p>

                <div className="flex items-center gap-4">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="import-mode"
                            checked={isAddMode}
                            onChange={() => setIsAddMode(true)}
                            className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00] focus:ring-2"
                          />
                          <span className="text-sm font-medium text-gray-700">Add</span>
                        </label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Add new properties to the system</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>

                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="import-mode"
                            checked={!isAddMode}
                            onChange={() => setIsAddMode(false)}
                            className="w-4 h-4 text-[#FF6B00] focus:ring-[#FF6B00] focus:ring-2"
                          />
                          <span className="text-sm font-medium text-gray-700">Update</span>
                        </label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Update existing properties</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

                <div className="flex gap-3">
                  <div className="flex-1">
                    <Input
                      type="file"
                      accept=".csv,.xlsx,.xls"
                      onChange={handleFileSelect}
                      disabled={isImporting}
                      className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 transition-colors"
                    />
                  </div>
                  <Button
                    onClick={handleUpload}
                    disabled={!selectedFile || isImporting}
                    className="bg-[#FF6B00] hover:bg-[#E56000] text-white rounded-lg px-6 font-medium shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>

                {isImporting && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Uploading...</span>
                      <span className="text-sm font-semibold text-[#FF6B00]">{importProgress}%</span>
                    </div>
                    <Progress value={importProgress} className="h-2" />
                  </div>
                )}

                {importStatus === "success" && (
                  <Alert className="border-green-200 bg-green-50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertDescription className="text-green-800 text-sm">
                      Import completed successfully! Data has been added to your portfolio.
                    </AlertDescription>
                  </Alert>
                )}

                {importStatus === "error" && (
                  <Alert variant="destructive" className="rounded-lg">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      Import failed. Please check your file format and try again.
                    </AlertDescription>
                  </Alert>
                )}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">
                Want to edit a current Property ?
              </h2>

              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-semibold flex items-center gap-2 text-gray-900">
                    <Download className="w-5 h-5 text-[#FF6B00]" />
                    Download Updated Template
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    To edit the current properties, select the updated template from the list below.
                  </p>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Select value={selectedProperty} onValueChange={setSelectedProperty}>
                              <SelectTrigger className="h-12 rounded-lg">
                                <SelectValue placeholder="Select Properties" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="horizon-plaza">Horizon Plaza</SelectItem>
                                <SelectItem value="cafe-horizon">Café Horizon</SelectItem>
                                <SelectItem value="sunset-towers">Sunset Towers</SelectItem>
                                <SelectItem value="ocean-view">Ocean View Complex</SelectItem>
                              </SelectContent>
                            </Select>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Select a property to download its current data</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <Button
                      onClick={handlePropertyTemplateDownload}
                      disabled={!selectedProperty}
                      className="bg-orange-100 hover:bg-orange-200 text-[#FF6B00] rounded-lg px-6 font-medium border border-orange-200 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </TooltipProvider>
    </MainLayout>
  );
};

export default ImportExport;