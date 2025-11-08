import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageUrl: string;
  backgroundColor: string;
}

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { data: slides = [] } = useQuery<Slide[]>({
    queryKey: ['/api/home-slides'],
  });

  useEffect(() => {
    if (slides.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (slides.length === 0) {
    return (
      <section className="relative h-[500px] md:h-[600px] overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to DigitalHub
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your Premium Digital Products Marketplace
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Explore Products
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
              style={{ backgroundColor: slide.backgroundColor || '#6366f1' }}
            >
              <div className="container mx-auto px-4 h-full flex items-center">
                <div className="grid md:grid-cols-2 gap-8 items-center w-full">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-white z-10"
                  >
                    <p className="text-sm md:text-base font-semibold mb-2 text-orange-400">
                      {slide.subtitle}
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200">
                      {slide.description}
                    </p>
                    <Button 
                      size="lg" 
                      onClick={() => window.location.href = slide.ctaLink}
                      className="bg-orange-500 hover:bg-orange-600 text-white"
                    >
                      {slide.ctaText}
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="hidden md:block"
                  >
                    {slide.imageUrl && (
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-auto rounded-lg shadow-2xl"
                      />
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
