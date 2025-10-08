import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, Download, FileSpreadsheet, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "@/components/layout/MainLayout";

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
      <div
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260')",
        }}
      >
        <div className="bg-gradient-to-b from-black/40 to-black/20 min-h-screen p-6">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Template
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-6">
                    Click the button below to download the template
                  </p>
                  <Button
                    onClick={handleTemplateDownload}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                    size="lg"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    Upload Excel File
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    Select and upload the excel file below to add the data to stackplanner
                  </p>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="add-mode"
                        checked={isAddMode}
                        onCheckedChange={(checked) => setIsAddMode(checked as boolean)}
                      />
                      <label
                        htmlFor="add-mode"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Add
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="update-mode"
                        checked={!isAddMode}
                        onCheckedChange={(checked) => setIsAddMode(!checked)}
                      />
                      <label
                        htmlFor="update-mode"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Update
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-3 mb-4">
                    <div className="flex-1">
                      <Input
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        onChange={handleFileSelect}
                        disabled={isImporting}
                        className="cursor-pointer"
                      />
                    </div>
                    <Button
                      onClick={handleUpload}
                      disabled={!selectedFile || isImporting}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Add
                    </Button>
                  </div>

                  {isImporting && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Uploading...</span>
                        <span className="text-sm font-semibold">{importProgress}%</span>
                      </div>
                      <Progress value={importProgress} />
                    </div>
                  )}

                  {importStatus === "success" && (
                    <Alert className="border-green-200 bg-green-50">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription className="text-green-800">
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
            </div>

            <div className="bg-muted/80 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Want to edit a current Property ?
              </h2>

              <Card>
                <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <CardTitle className="flex items-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Updated Template
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-6">
                    To edit the current properties, select the updated template from the list below.
                  </p>

                  <div className="flex gap-3">
                    <div className="flex-1">
                      <Select value={selectedProperty} onValueChange={setSelectedProperty}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Properties" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="horizon-plaza">Horizon Plaza</SelectItem>
                          <SelectItem value="cafe-horizon">Café Horizon</SelectItem>
                          <SelectItem value="sunset-towers">Sunset Towers</SelectItem>
                          <SelectItem value="ocean-view">Ocean View Complex</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      onClick={handlePropertyTemplateDownload}
                      disabled={!selectedProperty}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white"
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
      </div>
    </MainLayout>
  );
};

export default ImportExport;