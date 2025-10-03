import { Download, FileText } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    id: "INV-2025-001",
    plan: "Pro",
    price: "$1.00",
    lastBilling: "Jan 15, 2025",
    paymentStatus: "Paid",
  },
  {
    id: "INV-2024-012",
    plan: "Pro",
    price: "$1.00",
    lastBilling: "Dec 15, 2024",
    paymentStatus: "Paid",
  },
  {
    id: "INV-2024-011",
    plan: "Pro",
    price: "$1.00",
    lastBilling: "Nov 15, 2024",
    paymentStatus: "Pending",
  },
];

export default function Invoices() {
  return (
    <div className="flex min-h-screen w-full bg-background-subtle">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
          <div className="px-8 py-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <span>Subscription Management</span>
              <span>/</span>
              <span className="text-foreground">Invoice</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Invoice List</h1>
          </div>
        </header>

        <div className="p-8">
          <Card>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice ID</TableHead>
                    <TableHead>Plan</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Last Billing</TableHead>
                    <TableHead>Payment Status</TableHead>
                    <TableHead className="text-right">Invoice</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-12 text-muted-foreground">
                        <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
                        <p>No invoices found</p>
                      </TableCell>
                    </TableRow>
                  ) : (
                    invoices.map((invoice) => (
                      <TableRow key={invoice.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{invoice.id}</TableCell>
                        <TableCell>{invoice.plan}</TableCell>
                        <TableCell>{invoice.price}</TableCell>
                        <TableCell>{invoice.lastBilling}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={invoice.paymentStatus === "Paid" ? "default" : "secondary"}
                          >
                            {invoice.paymentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
