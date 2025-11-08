import { Target, Eye, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const timeline = [
  { year: "2020", event: "DigitalHub Founded", description: "Started with a vision to democratize digital product access" },
  { year: "2021", event: "1,000+ Products", description: "Reached our first major milestone with over 1,000 digital products" },
  { year: "2022", event: "Global Expansion", description: "Expanded to serve customers in over 50 countries" },
  { year: "2023", event: "AI Integration", description: "Launched AI-powered search and recommendations" },
  { year: "2024", event: "10,000+ Creators", description: "Built a thriving community of digital product creators" },
  { year: "2025", event: "Innovation Hub", description: "Opened our Innovation Hub for emerging technologies" },
  { year: "2026", event: "Market Leader", description: "Became the leading digital products marketplace" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About DigitalHub</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering creators and customers with the world's best digital marketplace
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Who We Are</h2>
            <p className="text-lg text-muted-foreground mb-4">
              DigitalHub is the premier marketplace for digital products, connecting talented creators with customers worldwide. 
              Since 2020, we've been dedicated to providing a secure, user-friendly platform where innovation meets accessibility.
            </p>
            <p className="text-lg text-muted-foreground">
              Our platform hosts thousands of high-quality digital products including UI kits, templates, plugins, graphics, 
              and more. We believe in empowering both creators and customers, fostering a community built on trust, quality, and innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To create the most trusted and innovative digital marketplace that empowers creators and 
                      provides customers with instant access to premium digital products.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
                    <p className="text-muted-foreground">
                      To become the global leader in digital product distribution, recognized for our commitment 
                      to quality, security, and customer satisfaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Community</h3>
              <p className="text-muted-foreground">
                Join over 100,000 satisfied customers and 10,000+ creators in our vibrant marketplace
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-4">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Guaranteed</h3>
              <p className="text-muted-foreground">
                Every product is carefully reviewed to ensure it meets our high standards for excellence
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
              <p className="text-muted-foreground">
                We leverage cutting-edge AI and technology to provide the best user experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white font-bold">
                      {item.year.slice(2)}
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-indigo-600 to-purple-600"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <h3 className="text-xl font-semibold mb-1">{item.event}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{item.year}</p>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
