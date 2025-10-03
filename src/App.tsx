import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PropertyListing from "./pages/property/PropertyListing";
import AddProperty from "./pages/property/AddProperty";
import AddFloor from "./pages/property/AddFloor";
import AddSuite from "./pages/property/AddSuite";
import AddTenant from "./pages/property/AddTenant";
import ImportExport from "./pages/property/ImportExport";
import TenantListing from "./pages/property/TenantListing";
import StackingPlan from "./pages/property/StackingPlan";
import PropertyView from "./pages/property/PropertyView";
import RoleManagement from "./pages/team/RoleManagement";
import UserManagement from "./pages/team/UserManagement";
import AssignProperty from "./pages/team/AssignProperty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties/listing" element={<PropertyListing />} />
          <Route path="/properties/add-property" element={<AddProperty />} />
          <Route path="/properties/add-floor" element={<AddFloor />} />
          <Route path="/properties/add-suite" element={<AddSuite />} />
          <Route path="/properties/add-tenant" element={<AddTenant />} />
          <Route path="/properties/import-export" element={<ImportExport />} />
          <Route path="/properties/tenant-listing" element={<TenantListing />} />
          <Route path="/properties/view/:id" element={<PropertyView />} />
          <Route path="/stacking" element={<StackingPlan />} />
          <Route path="/team/roles" element={<RoleManagement />} />
          <Route path="/team/users" element={<UserManagement />} />
          <Route path="/team/assign-property" element={<AssignProperty />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
