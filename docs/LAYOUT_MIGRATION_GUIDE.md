# Layout Migration Guide

This guide explains how to update all pages to use the new unified MainLayout component with consistent sidebar, header, notifications, dark mode, and logout functionality.

## What Changed

All pages now share:
- ✅ Collapsible left sidebar
- ✅ Unified header with notifications bell, dark mode toggle, and logout button
- ✅ Dynamic breadcrumbs and page titles
- ✅ Consistent styling across all pages

## How to Update a Page

### Step 1: Update Imports

**Before:**
```tsx
import { Sidebar } from "@/components/dashboard/Sidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { Menu } from "lucide-react";
```

**After:**
```tsx
import { MainLayout } from "@/components/layout/MainLayout";
// Remove Sidebar, DashboardHeader, and Menu imports
```

### Step 2: Remove State Management

**Before:**
```tsx
const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

const toggleSidebar = () => {
  setSidebarCollapsed(!sidebarCollapsed);
};
```

**After:**
```tsx
// Remove all sidebar state - MainLayout handles it internally
```

### Step 3: Define Breadcrumbs (Optional)

```tsx
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties/listing" },
  { label: "Add Property" }, // Last item without href
];
```

### Step 4: Update JSX Structure

**Before:**
```tsx
return (
  <div className="min-h-screen bg-background flex">
    <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
    
    <div className="flex-1 p-6">
      <Button onClick={toggleSidebar}>
        <Menu />
      </Button>
      
      {/* Your page content */}
    </div>
  </div>
);
```

**After:**
```tsx
return (
  <MainLayout 
    title="Page Title" 
    breadcrumbs={breadcrumbs}
  >
    <div className="p-6">
      {/* Your page content - exactly the same */}
    </div>
  </MainLayout>
);
```

## Complete Example

### Before (Old Pattern)
```tsx
import { useState } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const MyPage = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} 
      />
      
      <div className="flex-1 p-6">
        <Button onClick={() => setSidebarCollapsed(!sidebarCollapsed)}>
          <Menu />
        </Button>
        
        <h1>My Content</h1>
      </div>
    </div>
  );
};

export default MyPage;
```

### After (New Pattern)
```tsx
import { MainLayout } from "@/components/layout/MainLayout";

const MyPage = () => {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "My Page" },
  ];

  return (
    <MainLayout title="My Page" breadcrumbs={breadcrumbs}>
      <div className="p-6">
        <h1>My Content</h1>
      </div>
    </MainLayout>
  );
};

export default MyPage;
```

## Pages to Update

The following pages still need to be migrated:

### Property Management
- [ ] `/properties/view/:id` - PropertyView.tsx
- [ ] `/properties/add-floor` - AddFloor.tsx
- [ ] `/properties/add-suite` - AddSuite.tsx
- [ ] `/properties/add-tenant` - AddTenant.tsx
- [ ] `/properties/import-export` - ImportExport.tsx
- [ ] `/properties/tenant-listing` - TenantListing.tsx
- [ ] `/stacking` - StackingPlan.tsx

### Team Management
- [ ] `/team/roles` - RoleManagement.tsx
- [ ] `/team/users` - UserManagement.tsx
- [ ] `/team/assign-property` - AssignProperty.tsx

### Subscription
- [ ] `/subscription/my-plan` - MyPlan.tsx
- [ ] `/subscription/invoices` - Invoices.tsx

### Other
- [ ] `/embed-code` - EmbedCode.tsx
- [ ] `/account/settings` - AccountSettings.tsx
- [ ] `/user-logs` - UserLogs.tsx

### Already Updated ✅
- [x] `/` - Index.tsx
- [x] `/properties/listing` - PropertyListing.tsx
- [x] `/properties/add-property` - AddProperty.tsx
- [x] `/notifications` - Notifications.tsx

## Features Available in New Layout

### Notifications
- Bell icon in header shows unread count
- Hover to see notification preview
- Click on notification to navigate to `/notifications` page
- Click "View All Notifications" to see full list

### Dark Mode
- Sun/Moon toggle in header
- Automatically persists user preference
- Syncs with system theme

### Logout
- Logout button in header
- Currently logs to console (add your auth logic in `UnifiedHeader.tsx`)

### Breadcrumbs
- Automatically renders based on `breadcrumbs` prop
- Last item is non-clickable (current page)
- Previous items are clickable links

## Need Help?

- See `src/components/layout/MainLayout.tsx` for the layout component
- See `src/components/layout/UnifiedHeader.tsx` for header logic
- See `src/pages/Index.tsx` for a complete example
- See `src/pages/property/PropertyListing.tsx` for another example
