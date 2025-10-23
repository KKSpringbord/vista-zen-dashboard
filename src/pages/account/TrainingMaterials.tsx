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
          {/* Property Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Property Management
              </CardTitle>
              <CardDescription>
                Learn how to add, import, edit, and manage your properties
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I add a new property?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>You can add a new property by two ways:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>Import Property (Recommended)</strong></li>
                      <li><strong>Enter Property Data Manually</strong></li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How do I import properties from a file?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management</strong></li>
                      <li>Click <strong>"Import"</strong> button</li>
                      <li>Download the template file (usually Excel or CSV)</li>
                      <li>Fill out the template with your property data</li>
                      <li>Save the completed file</li>
                      <li>Click <strong>"Choose File"</strong> and select your file</li>
                      <li>Click <strong>"Upload"</strong></li>
                      <li>Review any errors or warnings</li>
                      <li>Click <strong>"Add"</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>How do I add a new property manually?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Click <strong>"Property Management"</strong> in the left sidebar</li>
                      <li>Click the <strong>"+ Add New Property"</strong> button (top right)</li>
                      <li>Fill out the 8-tab form:
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li><strong>Tab 1:</strong> Property name, ID, type, address, year built, total floors</li>
                          <li><strong>Tab 2:</strong> Space metrics (building area, rentable SF, parking ratio)</li>
                          <li><strong>Tab 3:</strong> Lease data</li>
                          <li><strong>Tabs 4-8:</strong> Market insights, ownership, digital presence, images, brochure</li>
                        </ul>
                      </li>
                      <li>Click <strong>"Next Step"</strong> between tabs</li>
                      <li>Click <strong>"Create Property"</strong> when complete</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do I edit an existing property?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management</strong></li>
                      <li>Find the property in the list</li>
                      <li>Click the pencil/edit icon in the Actions column</li>
                      <li>Update the information in any of the 8 tabs</li>
                      <li>Click <strong>"Update Property"</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>How do I delete a property?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management</strong></li>
                      <li>Find the property you want to delete</li>
                      <li>Click the trash/delete icon in the Actions column</li>
                      <li>Confirm the deletion in the popup dialog</li>
                    </ol>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold mt-2">⚠️ Warning: This action cannot be undone</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>How do I view property details?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management</strong></li>
                      <li>Click on the property name or click the <strong>"View"</strong> button</li>
                    </ol>
                    <p className="mt-2">You'll see:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Property overview panel with key metrics</li>
                      <li>List of all floors</li>
                      <li>Floor details (expand each floor to see suites)</li>
                      <li>Action buttons to add floors or suites</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                  <AccordionTrigger>How do I add a floor to a property?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management → Click on your property</strong></li>
                      <li>Click <strong>"+ Add Floor"</strong> button</li>
                      <li>Fill out the 5-tab form:
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li><strong>Tab 1:</strong> Floor number, level, number of suites, total area (RSF)</li>
                          <li><strong>Tab 2:</strong> Structural details</li>
                          <li><strong>Tab 3:</strong> Accessibility and security features</li>
                          <li><strong>Tab 4:</strong> Marketing metrics</li>
                          <li><strong>Tab 5:</strong> Images</li>
                        </ul>
                      </li>
                      <li>Click <strong>"Next Step"</strong> between tabs</li>
                      <li>Click <strong>"Save Floor"</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                  <AccordionTrigger>How do I add a suite to a floor?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management → Click on your property</strong></li>
                      <li>Expand the floor where you want to add a suite</li>
                      <li>Click <strong>"+ Add Suite"</strong></li>
                      <li>Fill out the 6-tab form:
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li><strong>Tab 1:</strong> Suite number, area, space type, status</li>
                          <li><strong>Tab 2:</strong> Accessibility and security</li>
                          <li><strong>Tab 3:</strong> Parking and logistics</li>
                          <li><strong>Tab 4:</strong> Lease details</li>
                          <li><strong>Tab 5:</strong> Marketing metrics</li>
                          <li><strong>Tab 6:</strong> Images</li>
                        </ul>
                      </li>
                      <li>Click <strong>"Next Step"</strong> between tabs</li>
                      <li>Click <strong>"Save Suite"</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                  <AccordionTrigger>How do I search for a specific property?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management</strong></li>
                      <li>Use the search box at the top of the property list</li>
                      <li>Type the property name, ID, or address</li>
                      <li>Results filter automatically as you type</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10">
                  <AccordionTrigger>How do I sort properties?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management</strong></li>
                      <li>Click on any column header (Name, Type, Occupancy, etc.)</li>
                      <li>Click once for ascending order</li>
                      <li>Click again for descending order</li>
                      <li>An arrow icon will show the current sort direction</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11">
                  <AccordionTrigger>How do I export all my properties?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management</strong></li>
                      <li>Click <strong>"Export"</strong> button</li>
                      <li>Choose what to export:
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li>All properties</li>
                          <li>Only selected properties</li>
                        </ul>
                      </li>
                      <li>Click <strong>"Export"</strong></li>
                      <li>File downloads to your computer</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Stacking Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Stacking Plan
              </CardTitle>
              <CardDescription>
                Visualizing and managing floor-by-floor layouts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-stack-1">
                  <AccordionTrigger>How do I view the stacking plan?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Property Management</strong></li>
                      <li>Select a property</li>
                      <li>Click the <strong>"Stacking Plan"</strong> tab</li>
                    </ol>
                    <p className="mt-2">You'll see a visual floor-by-floor layout showing:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Floor numbers</li>
                      <li>Suites on each floor</li>
                      <li>Occupancy status (color-coded)</li>
                      <li>Suite sizes</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-stack-2">
                  <AccordionTrigger>How do I view details of a suite in the stacking plan?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Open the Stacking Plan for a property</li>
                      <li>Click on any suite in the visual layout</li>
                    </ol>
                    <p className="mt-2">A detail panel will appear showing:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Suite number</li>
                      <li>Square footage</li>
                      <li>Current tenant (if occupied)</li>
                      <li>Lease expiration date</li>
                      <li>Rent rate</li>
                      <li>Status</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-stack-3">
                  <AccordionTrigger>Can I print or export the stacking plan?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Open the Stacking Plan for your property</li>
                      <li>Look for the <strong>"Print"</strong> or <strong>"Export"</strong> button (usually top-right)</li>
                      <li>Choose your option:
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li><strong>Print:</strong> Opens print dialog for your browser</li>
                          <li><strong>Export to PDF:</strong> Saves as PDF file</li>
                          <li><strong>Export to Image:</strong> Saves as PNG or JPG</li>
                        </ul>
                      </li>
                      <li>Select your printer or save location</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-stack-4">
                  <AccordionTrigger>How do I zoom in or out on the stacking plan?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Open the Stacking Plan</li>
                      <li>Use the zoom controls (usually + and - buttons)</li>
                      <li>Or use mouse wheel (scroll up to zoom in, down to zoom out)</li>
                      <li>Click and drag to pan around the plan</li>
                      <li>Click <strong>"Reset"</strong> to return to default zoom</li>
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
                Managing team members, roles, and permissions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-team-1">
                  <AccordionTrigger>How do I create a new role?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Team Management → Role Management</strong></li>
                      <li>Click <strong>"+ Add New Role"</strong></li>
                      <li>Select the Role Name and enter the title (e.g., "Property Manager")</li>
                      <li>Set permissions for each module:
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li><strong>View:</strong> Can see the data</li>
                          <li><strong>Create:</strong> Can add new records</li>
                          <li><strong>Edit:</strong> Can modify existing records</li>
                          <li><strong>Delete:</strong> Can remove records</li>
                        </ul>
                      </li>
                      <li>Modules include: Property Management, Stacking Plan, Team Management, User Log, Reports</li>
                      <li>Click <strong>"Save Role"</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-team-2">
                  <AccordionTrigger>How do I edit an existing role?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Team Management → Role Management</strong></li>
                      <li>Find the role you want to edit</li>
                      <li>Click the pencil/edit icon</li>
                      <li>Update the role name or permissions</li>
                      <li>Click <strong>"Save Changes"</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-team-3">
                  <AccordionTrigger>How do I delete a role?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Team Management → Role Management</strong></li>
                      <li>Find the role you want to delete</li>
                      <li>Click the trash/delete icon</li>
                      <li>Confirm the deletion</li>
                    </ol>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold mt-2">Note: You cannot delete a role if users are currently assigned to it</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-team-4">
                  <AccordionTrigger>How do I add a new user?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Team Management → User Management</strong></li>
                      <li>Click <strong>"+ Add New User"</strong></li>
                      <li>Fill out the form:
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li><strong>First Name:</strong> User's first name</li>
                          <li><strong>Last Name:</strong> User's last name</li>
                          <li><strong>Email:</strong> User's email address (used for login)</li>
                          <li><strong>Mobile:</strong> Phone number (optional)</li>
                          <li><strong>Role:</strong> Select from available roles</li>
                          <li><strong>Password:</strong> Create a password for the user</li>
                        </ul>
                      </li>
                      <li>Check <strong>"Send welcome email"</strong> if you want to email login instructions</li>
                      <li>Click <strong>"Add User"</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-team-5">
                  <AccordionTrigger>How do I delete or deactivate a user?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Team Management → User Management</strong></li>
                      <li>Find the user you want to remove</li>
                      <li>Click the trash/delete icon</li>
                      <li>Confirm the action</li>
                    </ol>
                    <p className="mt-2">Options:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>Deactivate:</strong> User retains data but cannot log in</li>
                      <li><strong>Delete:</strong> Permanently removes user from system</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-team-6">
                  <AccordionTrigger>How do I assign properties to a user?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Team Management → Assign Properties</strong></li>
                      <li>Find the user in the list</li>
                      <li>Click <strong>"Assign Properties"</strong> or the assignment icon</li>
                      <li>A panel opens showing all properties</li>
                      <li>Check the boxes next to properties this user should access</li>
                      <li>Click <strong>"Save Assignments"</strong></li>
                      <li>User will now only see their assigned properties</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-team-7">
                  <AccordionTrigger>What permissions can I set for roles?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Each role can have four permission levels for each module:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>View:</strong> User can see the data but cannot make changes</li>
                      <li><strong>Create:</strong> User can add new records</li>
                      <li><strong>Edit:</strong> User can modify existing records</li>
                      <li><strong>Delete:</strong> User can remove records</li>
                    </ul>
                    <p className="mt-2">Modules you can control:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Property Management</li>
                      <li>Stacking Plan</li>
                      <li>Team Management</li>
                      <li>User Log</li>
                      <li>Reports</li>
                    </ul>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2">Best Practice: Use the principle of least privilege - only grant permissions users need for their job.</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-team-8">
                  <AccordionTrigger>Can I have users with different property access?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Yes! This is done through property assignment:</p>
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Create users with appropriate roles</li>
                      <li>Go to <strong>Team Management → Assign Properties</strong></li>
                      <li>Assign specific properties to each user</li>
                      <li>Users will only see and access their assigned properties</li>
                    </ol>
                    <p className="mt-2">Example scenarios:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Regional managers see properties in their region</li>
                      <li>Property managers see only their properties</li>
                      <li>Executives see all properties</li>
                    </ul>
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
                <AccordionItem value="item-sub-1">
                  <AccordionTrigger>How do I view my current subscription plan?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Subscription → My Plan</strong></li>
                    </ol>
                    <p className="mt-2">You'll see:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Current plan name</li>
                      <li>Monthly or annual billing</li>
                      <li>Plan features and limits</li>
                      <li>Renewal date</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-sub-2">
                  <AccordionTrigger>Where can I view my invoices?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Subscription → Invoices</strong></li>
                    </ol>
                    <p className="mt-2">You'll see a list of all past invoices showing:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Invoice number</li>
                      <li>Date</li>
                      <li>Amount</li>
                      <li>Payment status</li>
                      <li>Download button</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-sub-3">
                  <AccordionTrigger>How do I download an invoice?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Subscription → Invoices</strong></li>
                      <li>Find the invoice you need</li>
                      <li>Click the <strong>"Download"</strong> button or PDF icon</li>
                      <li>Invoice downloads as a PDF file</li>
                      <li>Save it to your computer</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Account Settings
              </CardTitle>
              <CardDescription>
                Managing your profile and account preferences
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-account-1">
                  <AccordionTrigger>How do I update my profile information?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Click your profile icon (top-right corner)</li>
                      <li>Select <strong>"Account Settings"</strong></li>
                      <li>Go to <strong>"User Profile"</strong> tab</li>
                      <li>Update your information:
                        <ul className="list-disc list-inside ml-4 mt-1">
                          <li>Name</li>
                          <li>Email</li>
                          <li>Phone number</li>
                          <li>Job title</li>
                          <li>Profile picture</li>
                        </ul>
                      </li>
                      <li>Click <strong>"Save Changes"</strong></li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-account-2">
                  <AccordionTrigger>How do I change my password?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Account Settings</strong></li>
                      <li>Click <strong>"Password Management"</strong> or <strong>"Security"</strong> tab</li>
                      <li>Enter your current password</li>
                      <li>Enter your new password</li>
                      <li>Confirm new password (type it again)</li>
                      <li>Click <strong>"Update Password"</strong></li>
                    </ol>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2">Tip: Use a strong password with letters, numbers, and symbols</p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-account-3">
                  <AccordionTrigger>How do I upload a profile picture?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Account Settings → User Profile</strong></li>
                      <li>Click on the profile picture area or <strong>"Upload Photo"</strong></li>
                      <li>Select an image from your computer</li>
                      <li>Crop or adjust if needed</li>
                      <li>Click <strong>"Save"</strong></li>
                    </ol>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mt-2">Recommended: Use a square image, at least 200x200 pixels</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Embed Code */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Embed Code
              </CardTitle>
              <CardDescription>
                Embedding property information on your website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-embed-1">
                  <AccordionTrigger>How do I generate an embed code for a property?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>Embed Code</strong> page</li>
                      <li>Select the property you want to embed</li>
                      <li>Click <strong>"Generate Code"</strong></li>
                      <li>Copy the code snippet</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-embed-2">
                  <AccordionTrigger>How do I use the embed code on my website?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Generate the embed code (see above)</li>
                      <li>Copy the code to your clipboard</li>
                      <li>Open your website editor or HTML file</li>
                      <li>Paste the code where you want the property info to appear</li>
                      <li>Save and publish your website</li>
                      <li>The property information will now display on your site</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* User Logs */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                User Logs
              </CardTitle>
              <CardDescription>
                Tracking user activity and system changes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-logs-1">
                  <AccordionTrigger>How do I view user activity logs?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ol className="list-decimal list-inside space-y-1 ml-2">
                      <li>Go to <strong>User Logs</strong> (usually under Admin or Settings)</li>
                    </ol>
                    <p className="mt-2">You'll see a list of all user actions:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>User name</li>
                      <li>Action performed</li>
                      <li>Date and time</li>
                      <li>Affected resource (property, user, etc.)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>

          {/* Support & Help */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <HelpCircle className="h-6 w-6 text-primary" />
                Support & Help
              </CardTitle>
              <CardDescription>
                Getting assistance when you need it
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-support-1">
                  <AccordionTrigger>Who do I contact for help?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p>Support options:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>Support Email:</strong> support@stackplanner.com</li>
                    </ul>
                    <p className="mt-2">When contacting support, include:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Your email/username</li>
                      <li>Description of the issue</li>
                      <li>Steps to reproduce the problem</li>
                      <li>Screenshots (if applicable)</li>
                      <li>Browser and operating system</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-support-2">
                  <AccordionTrigger>What are your support hours?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li><strong>Email support:</strong> 24/7 (response within 24 hours)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-support-3">
                  <AccordionTrigger>How do I report a bug?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground space-y-2">
                    <p><strong>Document the issue:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>What you were trying to do</li>
                      <li>What happened instead</li>
                      <li>Error message (screenshot if possible)</li>
                      <li>Steps to reproduce</li>
                    </ul>
                    <p className="mt-2"><strong>Contact support:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Email: support@stackplanner.io</li>
                    </ul>
                    <p className="mt-2"><strong>Include:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>Your email/username</li>
                      <li>Browser and version</li>
                      <li>Date and time of issue</li>
                      <li>Screenshots or screen recording</li>
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
