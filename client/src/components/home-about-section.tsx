import { CheckCircle2, Star, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function HomeAboutSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            DigitalHub is your trusted destination for premium digital products. 
            We connect creators with customers, offering everything from software and templates 
            to courses and digital art.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                <CheckCircle2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize access to quality digital products and empower creators 
                  to monetize their skills while providing exceptional value to customers worldwide.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-8 border shadow-sm hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-red-500">
                <Star className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become the world's most trusted digital marketplace, 
                  fostering innovation and creativity while maintaining the highest 
                  standards of quality and customer satisfaction.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-xl p-6 border hover:border-indigo-500 transition-colors group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">100% Secure</h3>
              <p className="text-muted-foreground text-sm">
                All transactions are encrypted and your data is protected with industry-leading security.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-xl p-6 border hover:border-orange-500 transition-colors group"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Instant Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Get your digital products immediately after purchase. No waiting, no delays.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-xl p-6 border hover:border-green-500 transition-colors group sm:col-span-2 lg:col-span-1"
          >
            <div className="flex flex-col items-center text-center">
              <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">
                Every product is carefully curated to ensure the highest quality and value.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
