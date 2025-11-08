import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { Lightbulb, Send, Sparkles } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export function HomeProductRequest() {
  const [productName, setProductName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
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
      setDialogOpen(false);
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
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-lg">
              <Lightbulb className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Have a Special Request?
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Can't find the perfect digital product you're looking for? We're here to help! Share your requirements with us and our team will work to bring it to our marketplace.
          </p>
          
          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of customers who have successfully requested custom products. Your input helps us grow and serve you better.
          </p>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600 to-orange-500 hover:from-indigo-700 hover:to-orange-600 text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Request a Product
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl">Request a Product</DialogTitle>
                <DialogDescription>
                  Tell us what you're looking for and we'll do our best to make it available.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
}
