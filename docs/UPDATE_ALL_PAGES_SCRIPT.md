# Quick Reference: Update Remaining Pages

All team, subscription, account, and other pages need the MainLayout wrapper. Here's the pattern to follow for each:

## Pattern:
1. Add `import { MainLayout } from "@/components/layout/MainLayout";`
2. Remove Sidebar imports and state
3. Remove old header/sidebar JSX
4. Wrap content with `<MainLayout title="..." breadcrumbs={[...]}>content</MainLayout>`

## Pages Remaining:
- PropertyView (complex - has its own sidebar)
- Team: RoleManagement, UserManagement, AssignProperty  
- Subscription: MyPlan, Invoices
- Other: EmbedCode, AccountSettings, UserLogs

I'll complete these now.
