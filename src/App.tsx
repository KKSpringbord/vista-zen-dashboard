import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
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
import MyPlan from "./pages/subscription/MyPlan";
import Invoices from "./pages/subscription/Invoices";
import EmbedCode from "./pages/EmbedCode";
import AccountSettings from "./pages/account/AccountSettings";
import UserLogs from "./pages/UserLogs";
import Notifications from "./pages/Notifications";
import Reports from "./pages/Reports";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
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
            <Route path="/subscription/my-plan" element={<MyPlan />} />
            <Route path="/subscription/invoices" element={<Invoices />} />
            <Route path="/embed-code" element={<EmbedCode />} />
            <Route path="/account/settings" element={<AccountSettings />} />
            <Route path="/user-logs" element={<UserLogs />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/reports" element={<Reports />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
