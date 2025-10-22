import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CreditCard, Lock, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

export default function Payment() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  
  const plan = searchParams.get("plan") || "Pro";
  const action = searchParams.get("action") || "upgrade";
  const amount = plan === "Premium" ? "$1350" : "$1";

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Processing",
      description: "Your payment is being processed securely via Stripe.",
    });
    // Mock payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful",
        description: `Your ${plan} subscription has been ${action === "renew" ? "renewed" : "upgraded"} successfully!`,
      });
      navigate("/subscription/my-plan");
    }, 2000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiry = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + "/" + v.slice(2, 4);
    }
    return v;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header with Branding */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">S</span>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              StackPlanner
            </h1>
          </div>
          <p className="text-muted-foreground">Secure Payment Gateway</p>
        </div>

        <Card className="shadow-xl border-2">
          <CardHeader className="space-y-3">
            <Button
              variant="ghost"
              size="sm"
              className="w-fit -ml-2"
              onClick={() => navigate("/subscription/my-plan")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Plans
            </Button>
            
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Complete Your Payment</CardTitle>
                <CardDescription className="mt-2">
                  {action === "renew" ? "Renewing" : "Upgrading to"} {plan} Plan
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-2xl font-bold px-4 py-2">
                {amount}/mo
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Stripe Badge */}
            <div className="bg-muted/50 border border-border rounded-lg p-4 flex items-center justify-center gap-3">
              <Lock className="w-5 h-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                This payment process is secured through{" "}
                <span className="font-semibold text-foreground">Stripe Payment Gateway</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Card Number */}
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="relative">
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    maxLength={19}
                    required
                    className="pl-10"
                  />
                  <CreditCard className="w-5 h-5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              {/* Cardholder Name */}
              <div className="space-y-2">
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input
                  id="cardName"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </div>

              {/* Expiry and CVV */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(formatExpiry(e.target.value))}
                    maxLength={5}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="password"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, ""))}
                    maxLength={4}
                    required
                  />
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-muted/30 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Your payment information is secure</span>
                </div>
                <p className="text-xs text-muted-foreground pl-6">
                  All transactions are encrypted and processed securely through Stripe. 
                  We never store your complete card details.
                </p>
              </div>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full">
                <Lock className="w-4 h-4 mr-2" />
                Pay {amount} Securely
              </Button>
            </form>

            {/* Footer */}
            <div className="text-center pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                Powered by <span className="font-semibold">Stripe</span> • 
                PCI-DSS Compliant • 256-bit SSL Encryption
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trust Badges */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Lock className="w-3 h-3" />
            <span>Secure</span>
          </div>
          <span>•</span>
          <span>Money-back Guarantee</span>
          <span>•</span>
          <span>Cancel Anytime</span>
        </div>
      </div>
    </div>
  );
}
