import { Shield, Zap, HeadphonesIcon, Award, CheckCircle, TrendingUp, Users, Sparkles, Lock, RefreshCw } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Industry-standard encryption and secure payment processing for your peace of mind.",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Zap,
    title: "Instant Delivery",
    description: "Get your digital products immediately after purchase. No waiting required.",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Our dedicated support team is always here to help you with any questions.",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "All products are thoroughly vetted to ensure the highest quality standards.",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: CheckCircle,
    title: "Money Back Guarantee",
    description: "Not satisfied? Get a full refund within 30 days, no questions asked.",
    color: "from-pink-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Regular Updates",
    description: "Products are regularly updated with new features and improvements.",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    icon: Users,
    title: "Trusted Community",
    description: "Join thousands of satisfied customers who trust us for their digital needs.",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: Sparkles,
    title: "Premium Selection",
    description: "Curated collection of the finest digital products from top creators worldwide.",
    color: "from-amber-500 to-amber-600"
  },
  {
    icon: Lock,
    title: "Licensed Products",
    description: "All products come with proper licensing and usage rights for your projects.",
    color: "from-red-500 to-red-600"
  },
  {
    icon: RefreshCw,
    title: "Lifetime Access",
    description: "Once purchased, access your products anytime, anywhere, forever.",
    color: "from-emerald-500 to-emerald-600"
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the best in digital marketplace with our commitment to quality, security, and customer satisfaction.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-2 hover:border-primary group">
                  <CardContent className="pt-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
