import { motion } from "framer-motion";

export function OurStorySection() {
  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "50+", label: "Expert Creators" },
    { value: "100K+", label: "Happy Customers" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-cyan-500 via-teal-500 to-cyan-600">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/attached_assets/stock_images/professional_team_wo_e96463ec.jpg"
                alt="Our Team"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/20 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-4 text-white/95 leading-relaxed">
              DigitalHub has been a beacon of innovation and quality for digital creators and customers worldwide. We believe that every creator deserves the best platform to showcase their work in a professional, welcoming environment that feels more like a community than a marketplace.
            </p>
            <p className="text-lg mb-8 text-white/90 leading-relaxed">
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
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm md:text-base text-white/90">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
