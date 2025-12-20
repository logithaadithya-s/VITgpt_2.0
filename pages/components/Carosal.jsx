import { useState, useEffect, useRef } from "react";
import Chemistry from "../../src/assets/chemistry.webp";
import Calculus from "../../src/assets/calculus.webp";
import Beee from "../../src/assets/beee1.webp";
import Physics from "../../src/assets/physics.webp";
import English from "../../src/assets/english.webp";
import "../styles/Carosal.css";

// Optional: Add arrow icons or use emojis/text
const PrevArrow = () => <span className="carousel-arrow">‹</span>;
const NextArrow = () => <span className="carousel-arrow">›</span>;

function Carosal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef(null);
  
  const subjects = [
    { id: 1, name: "Chemistry", image: Chemistry },
    { id: 2, name: "Calculus", image: Calculus },
    { id: 3, name: "BEEE", image: Beee },
    { id: 4, name: "Physics", image: Physics },
    { id: 5, name: "English", image: English }
  ];

  // Detect mobile view
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === subjects.length - (isMobile ? 1 : 3) ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? subjects.length - (isMobile ? 1 : 3) : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-rotate carousel (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex, isMobile]);

  return (
    <div className="carousel-container">
      <p className="carousel-header">COMMON SUBJECTS</p>
      
      <div className="carousel-wrapper">
        <button className="carousel-btn prev-btn" onClick={prevSlide}>
          <PrevArrow />
        </button>
        
        <div className="carousel" ref={carouselRef}>
          <div 
            className="carousel-track" 
            style={{ 
              transform: `translateX(-${currentIndex * (isMobile ? 100 : 33.33)}%)`,
              transition: 'transform 0.5s ease-in-out'
            }}
          >
            {subjects.map((subject) => (
              <div key={subject.id} className="carousel-slide">
                <div className="subject-card">
                  <img 
                    src={subject.image} 
                    alt={subject.name} 
                    className="subject-image"
                  />
                  <div className="subject-overlay">
                    <h3 className="subject-title">{subject.name}</h3>
                    <p className="subject-description">Explore {subject.name} materials</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button className="carousel-btn next-btn" onClick={nextSlide}>
          <NextArrow />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="carousel-dots">
        {Array.from({ length: isMobile ? subjects.length : subjects.length - 2 }).map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carosal;