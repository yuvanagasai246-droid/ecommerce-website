import { useState } from "react";
import { Mail, Check } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubscribed(true);
        toast({
          title: "Success!",
          description: `${data.message} Use code ${data.couponCode} for 10% off!`,
        });
        setEmail("");
      } else {
        toast({
          title: "Error",
          description: data.message || "Failed to subscribe",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe to newsletter",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg mb-8 text-white/90">
            Subscribe to our newsletter for exclusive deals, new product updates, and special offers.
            Get 10% off on your first purchase!
          </p>
          
          {isSubscribed ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 rounded-lg">
              <Check className="h-5 w-5" />
              <span className="font-medium">You're subscribed! Check your email for the discount code.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white text-black"
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
