import { Header } from "@/components/header";
import { AnnouncementBar } from "@/components/announcement-bar";
import { Hero } from "@/components/hero";
import { CategoryGrid } from "@/components/category-grid";
import { FeaturedProducts } from "@/components/featured-products";
import { Features } from "@/components/features";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Testimonials } from "@/components/testimonials";
import { NewsletterSection } from "@/components/newsletter-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <CategoryGrid />
        <WhyChooseUs />
        <Features />
        <Testimonials />
        <NewsletterSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
