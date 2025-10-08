import { FileText, BarChart3, Calendar, TrendingUp, Users } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const reports = [
  {
    id: 1,
    title: "Property Performance Report",
    description: "Comprehensive analysis of property metrics and performance indicators",
    icon: BarChart3,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    id: 2,
    title: "Occupancy Report",
    description: "Detailed occupancy rates and vacancy analysis across all properties",
    icon: TrendingUp,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    id: 3,
    title: "Lease Expiration Report",
    description: "Upcoming lease expirations and renewal opportunities",
    icon: Calendar,
    color: "text-orange-600",
    bgColor: "bg-orange-100",
  },
  {
    id: 4,
    title: "Financial Report",
    description: "Revenue, expenses, and financial performance summary",
    icon: FileText,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
  {
    id: 5,
    title: "Tenant Report",
    description: "Tenant information, lease details, and contact directory",
    icon: Users,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
  },
];

export default function Reports() {
  const { toast } = useToast();

  const handleDownload = (reportTitle: string) => {
    toast({
      title: "Downloading Report",
      description: `${reportTitle} is being generated...`,
    });
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Reports" },
  ];

  return (
    <MainLayout title="Reports" breadcrumbs={breadcrumbs}>
      <div className="p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">Available Reports</h2>
          <p className="text-muted-foreground">Select a report to download based on your data needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => {
            const Icon = report.icon;
            return (
              <Card
                key={report.id}
                className="hover:shadow-lg transition-shadow cursor-pointer border-border"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${report.bgColor} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${report.color}`} />
                  </div>
                  <CardTitle className="text-lg">{report.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {report.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => handleDownload(report.title)}
                    className="w-full"
                    variant="default"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}
