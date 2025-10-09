import { BookOpen, Mail } from "lucide-react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Help() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Account Settings", href: "/account/settings" },
    { label: "Help" },
  ];

  return (
    <MainLayout title="Help" breadcrumbs={breadcrumbs}>
      <div className="p-8 max-w-4xl">
        <div className="space-y-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#FF6B00]" />
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
                className="bg-[#FF6B00] hover:bg-[#E56000] text-white"
                onClick={() => window.open('#', '_blank')}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Access Training Module
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#FF6B00]" />
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
                className="border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white"
                onClick={() => window.location.href = 'mailto:support@stackplanner.io'}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Support: support@stackplanner.io
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
}
