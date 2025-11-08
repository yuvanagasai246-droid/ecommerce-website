import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Package } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl?: string;
  category: string;
}

interface CategoryData {
  category: string;
  products: Product[];
}

export function HomeCategorySection() {
  const { data: products = [] } = useQuery<Product[]>({
    queryKey: ['/api/products/featured'],
  });

  const categorizedProducts: Record<string, Product[]> = {};
  products.forEach((product) => {
    if (!categorizedProducts[product.category]) {
      categorizedProducts[product.category] = [];
    }
    if (categorizedProducts[product.category].length < 5) {
      categorizedProducts[product.category].push(product);
    }
  });

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            Browse by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our curated collection of digital products across various categories
          </p>
        </motion.div>

        {Object.entries(categorizedProducts).map(([category, categoryProducts], categoryIndex) => (
          <div key={category} className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl md:text-3xl font-bold capitalize">{category}</h3>
              <Button 
                variant="outline" 
                className="group"
                onClick={() => window.location.href = '/products'}
              >
                View More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categoryProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow group cursor-pointer">
                    <CardHeader className="p-0">
                      <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900 rounded-t-lg flex items-center justify-center overflow-hidden">
                        {product.imageUrl ? (
                          <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        ) : (
                          <Package className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-base mb-2 line-clamp-2">
                        {product.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground capitalize">
                        {product.category}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <div className="flex items-center justify-between w-full">
                        <span className="text-lg font-bold text-indigo-600">
                          ${product.price.toFixed(2)}
                        </span>
                        <Button size="sm" variant="outline">
                          View
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {Object.keys(categorizedProducts).length === 0 && (
          <div className="text-center py-12">
            <Package className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground">
              No products available yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
