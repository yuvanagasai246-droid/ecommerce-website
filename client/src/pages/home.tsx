import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { FeaturedProducts } from "@/components/featured-products";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <CategoryGrid />
        <Features />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
