import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Star, Download, Heart, ShoppingCart } from "lucide-react";
import type { Product } from "@shared/schema";

export function HomeProductsSection() {
  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products/featured'],
  });

  if (isLoading) {
    return (
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-muted-foreground">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Products</h2>
            <p className="text-lg text-muted-foreground">
              Hand-picked premium products from top creators
            </p>
          </div>
          <a href="/products">
            <Button variant="outline" className="group hidden md:flex">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="group overflow-hidden hover:shadow-xl transition-all border-2 hover:border-primary h-full flex flex-col">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                  )}
                  {product.isFeatured && (
                    <Badge className="absolute left-3 top-3 bg-orange-500">
                      Featured
                    </Badge>
                  )}
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute right-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <CardContent className="p-4 flex-1">
                  <Badge variant="secondary" className="mb-2">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold mb-2 line-clamp-2 text-base">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    by {product.author}
                  </p>

                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="font-medium">{Number(product.rating).toFixed(1)}</span>
                    </div>
                    <span className="text-muted-foreground">•</span>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{product.downloads}</span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="p-4 pt-0 border-t mt-auto">
                  <div className="flex items-center justify-between w-full gap-3">
                    <div className="text-2xl font-bold">
                      ${Number(product.price).toFixed(2)}
                    </div>
                    <Button size="sm" className="gap-2">
                      <ShoppingCart className="h-4 w-4" />
                      Add
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="/products">
            <Button variant="outline" className="group">
              View All Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
