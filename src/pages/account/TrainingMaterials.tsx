import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, HelpCircle } from "lucide-react";

export default function TrainingMaterials() {
  return (
    <MainLayout
      title="Training Materials"
      breadcrumbs={[
        { label: "Account", href: "/account/settings" },
        { label: "Help", href: "/account/help" },
        { label: "Training Materials" }
      ]}
    >
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5">
        {/* Hero Section */}
        <div className="bg-primary text-primary-foreground py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-12 w-12" />
              <h1 className="text-4xl font-bold">StackPlanner Training Center</h1>
            </div>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              Welcome to StackPlanner's comprehensive training materials. Find answers to common questions,
              learn best practices, and master the platform to manage your properties efficiently.
            </p>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
          {/* Getting Started */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Getting Started with StackPlanner
              </CardTitle>
              <CardDescription>
                Learn the basics of setting up and using StackPlanner
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I create my first property?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Creating your first property is simple:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Navigate to <strong>Properties → Add Property</strong> from the sidebar</li>
                      <li>Fill in the property details including name, address, and total floors</li>
                      <li>Upload a property image (optional but recommended)</li>
                      <li>Click <strong>Save Property</strong> to create your property</li>
                      <li>You can then add floors and suites to your property</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I add floors to my property?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>To add floors to an existing property:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Properties → Property Listing</strong></li>
                      <li>Click on the property you want to add floors to</li>
                      <li>Click <strong>Add Floor</strong> button</li>
                      <li>Enter floor number and total area (sq ft)</li>
                      <li>Click <strong>Save Floor</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I create suites and assign tenants?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>To create suites and assign tenants:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Navigate to <strong>Properties → Add Suite</strong></li>
                      <li>Select the property and floor</li>
                      <li>Enter suite number, area, and rental rate</li>
                      <li>Set the suite status (Available, Occupied, Under Renovation)</li>
                      <li>If occupied, click <strong>Assign Tenant</strong> and select from your tenant list</li>
                      <li>Save the suite information</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Dashboard & Analytics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Dashboard & Analytics
              </CardTitle>
              <CardDescription>
                Understanding your portfolio metrics and reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-4">
                  <AccordionTrigger>What metrics are shown on the dashboard?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>The StackPlanner dashboard provides comprehensive portfolio insights:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>Total Portfolio Value:</strong> Combined value of all properties</li>
                      <li><strong>Occupancy Rate:</strong> Percentage of occupied vs. available suites</li>
                      <li><strong>Monthly Revenue:</strong> Total rental income from all properties</li>
                      <li><strong>Active Tenants:</strong> Number of current tenant leases</li>
                      <li><strong>Lease Expiry Trends:</strong> Upcoming lease expirations by quarter</li>
                      <li><strong>Revenue by Property:</strong> Individual property performance</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I filter data by date range?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Use the filter controls at the top of the dashboard:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Click on the <strong>Date Range</strong> dropdown</li>
                      <li>Select from preset ranges (This Week, This Month, This Quarter, This Year)</li>
                      <li>Or choose <strong>Custom Range</strong> to set specific start and end dates</li>
                      <li>Charts and metrics will update automatically</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>How do I export reports?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>To export your portfolio data:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Navigate to <strong>Reports</strong> from the sidebar</li>
                      <li>Select the report type (Occupancy, Revenue, Tenant Listing)</li>
                      <li>Set your desired filters (date range, properties)</li>
                      <li>Click <strong>Export to PDF</strong> or <strong>Export to Excel</strong></li>
                      <li>The report will download to your device</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Tenant Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Tenant Management
              </CardTitle>
              <CardDescription>
                Managing tenant information and leases
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-7">
                  <AccordionTrigger>How do I add a new tenant?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Adding tenants to your portfolio:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Properties → Add Tenant</strong></li>
                      <li>Enter tenant details (name, email, phone, company)</li>
                      <li>Assign the tenant to a suite</li>
                      <li>Enter lease details (start date, end date, monthly rent)</li>
                      <li>Upload lease documents (optional)</li>
                      <li>Click <strong>Save Tenant</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>How do I track lease expiry dates?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>StackPlanner helps you stay on top of lease renewals:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>View the <strong>Lease Expiry Chart</strong> on your dashboard</li>
                      <li>Check <strong>Properties → Tenant Listing</strong> for a detailed list</li>
                      <li>Sort by <strong>Lease End Date</strong> to see upcoming expirations</li>
                      <li>Set up notifications (coming soon) for automatic reminders</li>
                      <li>Filter by date range to see quarterly or annual expirations</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>Can I import tenant data in bulk?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Yes! Use the Import/Export feature:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Navigate to <strong>Properties → Import/Export</strong></li>
                      <li>Download the CSV template</li>
                      <li>Fill in your tenant data in the template</li>
                      <li>Upload the completed CSV file</li>
                      <li>Review the preview and confirm the import</li>
                      <li>All tenants will be added to your system</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Team & Access Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Team & Access Management
              </CardTitle>
              <CardDescription>
                Managing team members and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-10">
                  <AccordionTrigger>How do I add team members?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>To invite team members to your account:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Team → User Management</strong></li>
                      <li>Click <strong>Invite User</strong></li>
                      <li>Enter their email address and name</li>
                      <li>Assign a role (Admin, Manager, Viewer)</li>
                      <li>Click <strong>Send Invitation</strong></li>
                      <li>They will receive an email to activate their account</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger>What are the different user roles?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>StackPlanner offers three permission levels:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>Admin:</strong> Full access to all features, can manage billing and users</li>
                      <li><strong>Manager:</strong> Can add/edit properties, tenants, and generate reports</li>
                      <li><strong>Viewer:</strong> Read-only access to view properties and reports</li>
                    </ul>
                    <p className="mt-2">Customize roles in <strong>Team → Role Management</strong></p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12">
                  <AccordionTrigger>How do I assign properties to team members?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Control property access per user:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Navigate to <strong>Team → Assign Property</strong></li>
                      <li>Select a team member from the list</li>
                      <li>Check the properties they should have access to</li>
                      <li>Click <strong>Save Assignments</strong></li>
                      <li>Users will only see their assigned properties in the system</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Subscription & Billing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Subscription & Billing
              </CardTitle>
              <CardDescription>
                Managing your plan and payment information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-13">
                  <AccordionTrigger>How do I upgrade my plan?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Upgrade your subscription anytime:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Subscription → My Plan</strong></li>
                      <li>Review available plans (Starter, Professional, Enterprise)</li>
                      <li>Click <strong>Upgrade</strong> on your desired plan</li>
                      <li>You'll be directed to the secure Stripe payment page</li>
                      <li>Enter your payment details and confirm</li>
                      <li>Your plan will be upgraded immediately</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-14">
                  <AccordionTrigger>How do I view my invoices?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Access all your billing history:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Navigate to <strong>Subscription → Invoices</strong></li>
                      <li>View a list of all past invoices</li>
                      <li>Click <strong>Download PDF</strong> to save a copy</li>
                      <li>Click <strong>View Details</strong> to see the full invoice</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-15">
                  <AccordionTrigger>Can I cancel my subscription anytime?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Yes, you have full control over your subscription:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Go to <strong>Subscription → My Plan</strong></li>
                      <li>Click <strong>Cancel Plan</strong> at the bottom</li>
                      <li>Your access will continue until the end of your billing period</li>
                      <li>No refunds for partial months, but you keep access until period ends</li>
                      <li>You can reactivate anytime by selecting a new plan</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
