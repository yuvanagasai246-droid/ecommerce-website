import { useState } from "react";
import { Send, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

export default function ProductRequestPage() {
  const [formData, setFormData] = useState({
    productName: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/product-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Request Submitted!",
          description: data.message,
        });
        setFormData({ productName: "", email: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to submit request",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit product request",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-4">
              <Lightbulb className="h-8 w-8" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Request a Product</h1>
            <p className="text-lg text-muted-foreground">
              Can't find what you're looking for? Let us know what product you need, and we'll do our best to add it to our marketplace.
            </p>
          </div>

          {isSubmitted ? (
            <Card className="border-2 border-green-500">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <Send className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                <p className="text-muted-foreground mb-6">
                  We've received your product request. Our team will review it and get back to you soon.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>Product Request Form</CardTitle>
                <CardDescription>
                  Fill out the form below to request a new product. We'll notify you when it becomes available.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="productName" className="block text-sm font-medium mb-2">
                      Product Name *
                    </label>
                    <Input
                      id="productName"
                      type="text"
                      placeholder="e.g., Premium React Dashboard Template"
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Additional Details
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about what you're looking for, specific features, use case, etc."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                    />
                  </div>

                  <Button type="submit" disabled={isLoading} className="w-full" size="lg">
                    {isLoading ? "Submitting..." : "Submit Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          <div className="mt-8 p-6 bg-muted/50 rounded-lg">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-indigo-600" />
              Pro Tip
            </h3>
            <p className="text-sm text-muted-foreground">
              Before requesting a product, try our AI-powered search to see if similar products already exist. 
              You might find exactly what you need or discover great alternatives!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
