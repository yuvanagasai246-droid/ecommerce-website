import { Shield, Zap, HeadphonesIcon, Award } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Industry-standard encryption and secure payment processing for your peace of mind."
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Get your digital products immediately after purchase. No waiting required."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help you with any questions."
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "All products are thoroughly vetted to ensure the highest quality standards."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best digital marketplace experience with top-notch service and quality products.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:border-indigo-500 transition-colors">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
