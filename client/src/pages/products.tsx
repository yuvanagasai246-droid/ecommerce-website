import { Header } from "@/components/header";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Footer } from "@/components/footer";
import { FeaturedProducts } from "@/components/featured-products";

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">All Products</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete collection of premium digital products
            </p>
          </div>
          <FeaturedProducts />
        </div>
      </main>
      <Footer />
    </div>
  );
}
