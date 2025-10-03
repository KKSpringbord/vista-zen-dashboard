import { useState } from "react";
import { Check, X, CreditCard } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";

const features = [
  { name: "Number of Properties", pro: "10", premium: "10" },
  { name: "Number of Users", pro: "3", premium: "5" },
  { name: "Interactive Visual Stacking Plan", pro: true, premium: true },
  { name: "Annotations and Notes", pro: true, premium: true },
  { name: "Contact Management", pro: true, premium: true },
  { name: "Exporting Stacking Plan", pro: true, premium: true },
  { name: "File Cabinet", pro: true, premium: true },
  { name: "Multi Property View", pro: true, premium: true },
  { name: "Dashboard", pro: "Basic", premium: "Premium" },
  { name: "Alerts & Notifications", pro: true, premium: true },
  { name: "User & Role Management", pro: true, premium: true },
  { name: "CRM & ERP Integration", pro: false, premium: false },
  { name: "Website Embed (Widget)", pro: false, premium: false },
  { name: "Custom Stacking Plan", pro: false, premium: false },
  { name: "Video Tour Integration", pro: false, premium: false },
  { name: "Dedicated Account Manager", pro: false, premium: false },
  { name: "Support", pro: false, premium: false },
  { name: "Data Import / Sync", pro: false, premium: false },
];

export default function MyPlan() {
  const [autoRenewal, setAutoRenewal] = useState(true);

  return (
    <div className="flex min-h-screen w-full bg-background-subtle">
      <Sidebar />
      
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-card border-b border-border sticky top-0 z-10 shadow-sm">
          <div className="px-8 py-6">
            <h1 className="text-3xl font-bold text-foreground">My Subscription</h1>
            <p className="text-muted-foreground mt-1">Manage your subscription and billing</p>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Current Subscription Details */}
            <Card className="lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl">Subscription</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Package Start Date</span>
                    <span className="font-medium">Sep-23-2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Grace Period Date</span>
                    <span className="font-medium">Oct-10-2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Pricing</span>
                    <span className="font-medium">NA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Last Billing</span>
                    <span className="font-medium">NA</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Payment Status</span>
                    <Badge variant="secondary">Trial</Badge>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Auto-Renewal</span>
                    <Switch checked={autoRenewal} onCheckedChange={setAutoRenewal} />
                  </div>
                </div>

                <Button variant="destructive" className="w-full mt-4">
                  Cancel Subscription
                </Button>
              </CardContent>
            </Card>

            {/* Pricing Plans */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">My Features</CardTitle>
                  <CardDescription>Compare plans and upgrade</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Pro Plan */}
                    <div className="border border-border rounded-lg p-6 hover:border-primary transition-colors">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">Pro</h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-bold text-primary">$1</span>
                          <span className="text-muted-foreground">/mo</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {features.map((feature) => (
                          <div key={feature.name} className="flex items-start gap-2 text-sm">
                            <div className="flex-shrink-0 mt-0.5">
                              {typeof feature.pro === 'boolean' ? (
                                feature.pro ? (
                                  <Check className="w-4 h-4 text-green-600" />
                                ) : (
                                  <X className="w-4 h-4 text-red-500" />
                                )
                              ) : (
                                <Check className="w-4 h-4 text-green-600" />
                              )}
                            </div>
                            <span className="text-foreground flex-1">{feature.name}</span>
                            {typeof feature.pro !== 'boolean' && (
                              <span className="text-muted-foreground text-xs">{feature.pro}</span>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <Button variant="outline" className="w-full">
                          Renew
                        </Button>
                        <Button className="w-full">
                          Upgrade
                        </Button>
                      </div>
                    </div>

                    {/* Premium Plan */}
                    <div className="border-2 border-primary rounded-lg p-6 relative hover:shadow-lg transition-shadow">
                      <Badge className="absolute -top-3 right-4 bg-primary">
                        POPULAR
                      </Badge>
                      
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">Premium</h3>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-4xl font-bold text-primary">$1350</span>
                          <span className="text-muted-foreground">/mo</span>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        {features.map((feature) => (
                          <div key={feature.name} className="flex items-start gap-2 text-sm">
                            <div className="flex-shrink-0 mt-0.5">
                              {typeof feature.premium === 'boolean' ? (
                                feature.premium ? (
                                  <Check className="w-4 h-4 text-green-600" />
                                ) : (
                                  <X className="w-4 h-4 text-red-500" />
                                )
                              ) : (
                                <Check className="w-4 h-4 text-green-600" />
                              )}
                            </div>
                            <span className="text-foreground flex-1">{feature.name}</span>
                            {typeof feature.premium !== 'boolean' && (
                              <span className="text-muted-foreground text-xs">{feature.premium}</span>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="space-y-2">
                        <Button variant="outline" className="w-full">
                          Renew
                        </Button>
                        <Button className="w-full">
                          Upgrade
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
