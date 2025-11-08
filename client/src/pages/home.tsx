import { Header } from "@/components/header";
import { AnnouncementBar } from "@/components/announcement-bar";
import { HeroCarousel } from "@/components/hero-carousel";
import { HomeAboutSection } from "@/components/home-about-section";
import { HomeCategorySection } from "@/components/home-category-section";
import { HomeProductsSection } from "@/components/home-products-section";
import { HomeProductRequest } from "@/components/home-product-request";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { NewsletterSection } from "@/components/newsletter-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      <main>
        <HeroCarousel />
        <HomeAboutSection />
        <HomeCategorySection />
        <HomeProductsSection />
        <HomeProductRequest />
        <TestimonialsCarousel />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
