"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const slides = [
    { 
      type: "video", 
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      title: "Sample Video",
      description: "This is a demo video showcasing smooth streaming.",
      link: "#"
    },
    { 
      type: "image", 
      src: "https://cdn.pixabay.com/photo/2022/12/02/22/21/blueberries-7631751_1280.jpg",
      title: "Fresh Blueberries",
      description: "Sweet and healthy blueberries, perfect for your breakfast.",
      link: "#"
    },
    { 
      type: "image", 
      src: "https://cdn.pixabay.com/photo/2025/05/08/11/15/swan-9587142_1280.jpg",
      title: "Graceful Swan",
      description: "A serene swan gliding across the lake in the morning light.",
      link: "#"
    },
    { 
      type: "image", 
      src: "https://cdn.pixabay.com/photo/2025/05/12/05/54/sea-9594598_1280.jpg",
      title: "Ocean Breeze",
      description: "Feel the calmness of the ocean waves and soft sea breeze.",
      link: "#"
    },
    { 
      type: "image", 
      src: "https://cdn.pixabay.com/photo/2025/05/12/05/54/sea-9594598_1280.jpg",
      title: "Coastal View",
      description: "Endless horizon and tranquil waters await you here.",
      link: "#"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e) => (touchStartX.current = e.targetTouches[0].clientX);
  const handleTouchMove = (e) => (touchEndX.current = e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (distance > threshold) nextSlide();
    else if (distance < -threshold) prevSlide();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="relative w-full max-w-full overflow-hidden" style={{ height: "40vh", maxHeight: "40vh" }}>
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
            {slide.type === "video" ? (
              <video src={slide.src} className="w-full h-full object-cover rounded-lg" autoPlay loop muted />
            ) : (
              <img src={slide.src} alt={`Slide ${i + 1}`} className="w-full h-full object-cover rounded-lg" />
            )}

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 rounded-b-lg">
              <h3 className="text-white text-lg font-semibold">{slide.title}</h3>
              <p className="text-white text-sm mt-1">{slide.description}</p>
              <a 
                href={slide.link} 
                className="inline-block mt-2 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 sm:p-2 shadow"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-1 sm:p-2 shadow"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </div>
  );
};

export default Carousel;
