import { useState } from "react";
import { BookOpen, Mail, AlertCircle, Upload, X, MessageSquare, Eye } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";

const mockTickets = [
  { id: "TICK-1234", type: "Bug", subject: "Login page not loading", status: "In Progress", created: "2025-10-10", updated: "2025-10-12" },
  { id: "TICK-1233", type: "Feature Request", subject: "Export reports to Excel", status: "Open", created: "2025-10-09", updated: "2025-10-09" },
  { id: "TICK-1232", type: "Billing", subject: "Invoice incorrect amount", status: "Resolved", created: "2025-10-05", updated: "2025-10-08" },
];

const statusColors = {
  "Open": "bg-orange-500",
  "In Progress": "bg-blue-500",
  "Waiting for Response": "bg-yellow-500",
  "Resolved": "bg-green-500",
  "Closed": "bg-gray-500",
};

export default function Help() {
  const [selectedTicket, setSelectedTicket] = useState<typeof mockTickets[0] | null>(null);
  const [mockFiles, setMockFiles] = useState<string[]>([]);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Account Settings", href: "/account/settings" },
    { label: "Help" },
  ];

  const handleMockFileAdd = () => {
    if (mockFiles.length < 5) {
      setMockFiles([...mockFiles, `mock-file-${mockFiles.length + 1}.png`]);
    }
  };

  const handleMockFileRemove = (index: number) => {
    setMockFiles(mockFiles.filter((_, i) => i !== index));
  };

  const handleMockSubmit = () => {
    toast({
      title: "Ticket submitted!",
      description: "You will receive a confirmation email shortly.",
    });
  };

  return (
    <MainLayout title="Help" breadcrumbs={breadcrumbs}>
      <div className="p-8 max-w-6xl">
        <Tabs defaultValue="current" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="current">Current Support</TabsTrigger>
            <TabsTrigger value="demo">Demo: New Ticket System</TabsTrigger>
          </TabsList>

          <TabsContent value="current" className="space-y-6 mt-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Training Module
                </CardTitle>
                <CardDescription>
                  Access comprehensive training materials and tutorials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to use StackPlanner effectively with our interactive training modules.
                  Get answers to common questions and discover best practices.
                </p>
                <Button
                  onClick={() => window.location.href = '/account/training'}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Access Training Module
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Support
                </CardTitle>
                <CardDescription>
                  Having an issue? Our support team is here to help
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  If you encounter any issues or have questions that aren't covered in our training materials,
                  please don't hesitate to reach out to our support team.
                </p>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = 'mailto:support@stackplanner.io'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Support: support@stackplanner.io
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="demo" className="space-y-6 mt-6">
            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 dark:text-blue-100">Demo Preview</h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                  This is a demo preview of our upcoming ticket system. Not functional yet - all interactions are simulated for demonstration purposes.
                </p>
              </div>
            </div>

            {/* Raise a Ticket Form */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Raise a Ticket
                </CardTitle>
                <CardDescription>
                  Submit a support request and track its progress
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="issue-type">Issue Type *</Label>
                  <Select>
                    <SelectTrigger id="issue-type">
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bug">Bug</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="account">Account Issue</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="Brief description of the issue" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details">Details *</Label>
                  <Textarea 
                    id="details" 
                    placeholder="Describe your issue in detail... Include steps to reproduce, expected vs. actual behavior, etc."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Attach Files (Optional)</Label>
                  <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-1">
                      Upload up to 5 files (max 10MB each)
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={handleMockFileAdd}
                      disabled={mockFiles.length >= 5}
                    >
                      Choose Files
                    </Button>
                  </div>
                  
                  {mockFiles.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {mockFiles.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                          <div className="flex-1 text-sm">{file}</div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => handleMockFileRemove(index)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Button onClick={handleMockSubmit} className="w-full">
                  Submit Ticket
                </Button>
              </CardContent>
            </Card>

            {/* My Tickets Dashboard */}
            <Card>
              <CardHeader>
                <CardTitle>My Tickets</CardTitle>
                <CardDescription>
                  Track the status of your submitted tickets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ticket ID</TableHead>
                        <TableHead>Issue Type</TableHead>
                        <TableHead>Subject</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created</TableHead>
                        <TableHead>Last Updated</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {mockTickets.map((ticket) => (
                        <TableRow key={ticket.id}>
                          <TableCell className="font-mono text-sm">{ticket.id}</TableCell>
                          <TableCell>{ticket.type}</TableCell>
                          <TableCell>{ticket.subject}</TableCell>
                          <TableCell>
                            <Badge className={statusColors[ticket.status as keyof typeof statusColors]}>
                              {ticket.status}
                            </Badge>
                          </TableCell>
                          <TableCell>{ticket.created}</TableCell>
                          <TableCell>{ticket.updated}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setSelectedTicket(ticket)}
                              >
                                <Eye className="w-4 h-4 mr-1" />
                                View
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Mock Ticket Details Dialog */}
        <Dialog open={!!selectedTicket} onOpenChange={() => setSelectedTicket(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Ticket Details: {selectedTicket?.id}</DialogTitle>
              <DialogDescription>
                {selectedTicket?.subject}
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Status:</span>{" "}
                  <Badge className={statusColors[selectedTicket?.status as keyof typeof statusColors]}>
                    {selectedTicket?.status}
                  </Badge>
                </div>
                <div>
                  <span className="text-muted-foreground">Created:</span> {selectedTicket?.created}
                </div>
                <div>
                  <span className="text-muted-foreground">Type:</span> {selectedTicket?.type}
                </div>
              </div>

              <div className="border rounded-lg p-4 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold">You</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Initial Report</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        This is a mock conversation showing how the ticket system would work. The actual implementation will include full conversation threads with timestamps and responses from support team.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">{selectedTicket?.created} at 10:30 AM</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-semibold">SP</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">Support Team Response</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Thank you for reporting this issue. Our team is investigating and will provide an update shortly.
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">{selectedTicket?.updated} at 2:15 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="comment">Add Comment</Label>
                <Textarea id="comment" placeholder="Type your message here..." rows={3} />
                <Button size="sm">Post Comment</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </MainLayout>
  );
}
