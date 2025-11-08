import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar?: string;
  content: string;
  rating: number;
  verified: boolean;
  videoUrl?: string;
}

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  useEffect(() => {
    if (testimonials.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  if (testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text text-transparent">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say.
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            {testimonials.map((testimonial, index) => (
              index === currentIndex && (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="border-2">
                    <CardContent className="p-8 md:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <Avatar className="h-16 w-16">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white text-xl">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-lg">{testimonial.name}</h4>
                            {testimonial.verified && (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating
                                  ? 'fill-orange-500 text-orange-500'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {testimonial.videoUrl ? (
                        <div className="mb-6 aspect-video bg-muted rounded-lg flex items-center justify-center">
                          <video
                            src={testimonial.videoUrl}
                            controls
                            className="w-full h-full rounded-lg"
                          />
                        </div>
                      ) : null}

                      <blockquote className="text-lg md:text-xl text-center italic text-muted-foreground">
                        "{testimonial.content}"
                      </blockquote>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            ))}
          </AnimatePresence>

          <Button
            variant="ghost"
            size="icon"
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background border shadow-sm hover:shadow-md"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background border shadow-sm hover:shadow-md"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-indigo-600 w-8'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
