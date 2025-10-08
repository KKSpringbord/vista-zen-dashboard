import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const properties = [
  { id: "1", name: "Palm Grove Villas", location: "Florida" },
  { id: "2", name: "Sunset Towers", location: "California" },
  { id: "3", name: "Ocean View Complex", location: "Florida" },
];

export default function EmbedCode() {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const filteredProperties = selectedLocation
    ? properties.filter((p) => p.location === selectedLocation)
    : properties;

  const embedCode = selectedProperty
    ? `<!-- embed code start -->
<iframe src="https://stackplanner.io/embed/${selectedProperty}" width="100%" height="600" style="border:none;height: 100vh;"></iframe>
<!-- embed code end -->`
    : "";

  const handleCopy = () => {
    if (!embedCode) return;
    
    navigator.clipboard.writeText(embedCode);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Embed code copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerate = () => {
    if (!selectedLocation || !selectedProperty) {
      toast({
        title: "Selection Required",
        description: "Please select both location and property",
        variant: "destructive",
      });
    }
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Embed Code" },
  ];

  return (
    <MainLayout title="Embed Code" breadcrumbs={breadcrumbs}>
      <div className="p-8 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Generate Embed Code</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Florida">Florida</SelectItem>
                      <SelectItem value="California">California</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Property</label>
                  <Select 
                    value={selectedProperty} 
                    onValueChange={setSelectedProperty}
                    disabled={!selectedLocation}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select property" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredProperties.map((property) => (
                        <SelectItem key={property.id} value={property.id}>
                          {property.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button onClick={handleGenerate} className="w-full md:w-auto">
                Generate
              </Button>

              {/* Code Display */}
              {embedCode && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium">Code</label>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleCopy}
                      className="gap-2"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm border border-border">
                      <code className="text-foreground">{embedCode}</code>
                    </pre>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
    </MainLayout>
  );
}
