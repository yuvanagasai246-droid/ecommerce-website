import { Palette, Code, Puzzle, Wand2, FileCode, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const categories = [
  { icon: Palette, name: "UI Kits", count: 1200, color: "bg-blue-500", href: "/products?category=UI+Kits" },
  { icon: Code, name: "Templates", count: 850, color: "bg-green-500", href: "/products?category=Templates" },
  { icon: Puzzle, name: "Plugins", count: 640, color: "bg-purple-500", href: "/products?category=Plugins" },
  { icon: Wand2, name: "AI Tools", count: 320, color: "bg-orange-500", href: "/products?category=AI+Tools" },
  { icon: FileCode, name: "Code Scripts", count: 580, color: "bg-yellow-500", href: "/products?category=Code+Scripts" },
  { icon: Smartphone, name: "Mobile Apps", count: 290, color: "bg-pink-500", href: "/products?category=Mobile+Apps" },
];

export function HomeCategorySection() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find exactly what you need from our curated collections
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a href={category.href}>
                <Card className="flex flex-col items-center gap-4 p-6 text-center hover:shadow-xl transition-all cursor-pointer border-2 hover:border-primary h-full">
                  <div className={`rounded-full ${category.color} bg-opacity-10 p-4`}>
                    <category.icon className={`h-8 w-8 ${category.color.replace('bg-', 'text-')}`} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.count}+ items
                    </p>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
