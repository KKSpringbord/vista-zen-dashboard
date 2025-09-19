import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PropertyManagement from "./pages/PropertyManagement";
import PropertyListing from "./pages/property/PropertyListing";
import AddProperty from "./pages/property/AddProperty";
import AddFloor from "./pages/property/AddFloor";
import AddSuite from "./pages/property/AddSuite";
import AddTenant from "./pages/property/AddTenant";
import ImportExport from "./pages/property/ImportExport";
import TenantListing from "./pages/property/TenantListing";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={<PropertyManagement />} />
          <Route path="/properties/listing" element={<PropertyListing />} />
          <Route path="/properties/add-property" element={<AddProperty />} />
          <Route path="/properties/add-floor" element={<AddFloor />} />
          <Route path="/properties/add-suite" element={<AddSuite />} />
          <Route path="/properties/add-tenant" element={<AddTenant />} />
          <Route path="/properties/import-export" element={<ImportExport />} />
          <Route path="/properties/tenant-listing" element={<TenantListing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
