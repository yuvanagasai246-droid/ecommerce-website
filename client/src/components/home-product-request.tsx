import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Lightbulb, Send } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export function HomeProductRequest() {
  const [productName, setProductName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const requestMutation = useMutation({
    mutationFn: async (data: { productName: string; email: string; message?: string }) => {
      const res = await fetch('/api/product-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Failed to submit request');
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Request Submitted!",
        description: "We'll review your suggestion and get back to you soon.",
      });
      setProductName("");
      setEmail("");
      setMessage("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    requestMutation.mutate({ productName, email, message });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500">
                  <Lightbulb className="h-10 w-10 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
                Request a Product
              </CardTitle>
              <CardDescription className="text-lg">
                Can't find what you're looking for? Let us know and we'll work on it!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="productName" className="block text-sm font-medium mb-2">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="productName"
                    placeholder="What product would you like to see?"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Details (Optional)
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about what you're looking for..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-indigo-600 to-orange-500 hover:from-indigo-700 hover:to-orange-600"
                  disabled={requestMutation.isPending}
                >
                  {requestMutation.isPending ? (
                    "Submitting..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
