import { motion } from "framer-motion";

export function OurStorySection() {
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "50+", label: "Expert Creators" },
    { value: "100K+", label: "Happy Customers" }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border">
              <img
                src="/attached_assets/stock_images/professional_team_wo_e96463ec.jpg"
                alt="Our Team"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Our Story</h2>
            <p className="text-base md:text-lg mb-4 text-muted-foreground leading-relaxed">
              DigitalHub has been a beacon of innovation and quality for digital creators and customers worldwide. We believe that every creator deserves the best platform to showcase their work in a professional, welcoming environment that feels more like a community than a marketplace.
            </p>
            <p className="text-base md:text-lg mb-8 text-muted-foreground leading-relaxed">
              Our team of dedicated specialists combines technical excellence with genuine passion, helping every customer find exactly what they need with confidence and ease.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
