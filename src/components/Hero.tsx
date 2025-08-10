import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselCard {
  id: number;
  image: string;
  headline: string;
}

const Hero: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const carouselCards: CarouselCard[] = [
    {
      id: 1,
      image: '/assets/hero/Image1.png',
      headline: 'AI‑powered advice, all in your language'
    },
    {
      id: 2,
      image: '/assets/hero/image2.png',
      headline: 'One app for, all payments, credit, and guidance'
    },
    {
      id: 3,
      image: '/assets/hero/image3.png',
      headline: 'Weather updates, new schemes plus UPI and loans.'
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % carouselCards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselCards.length]);

  const goToPrevious = () => {
    setCurrentCard((prev) => (prev - 1 + carouselCards.length) % carouselCards.length);
  };

  const goToNext = () => {
    setCurrentCard((prev) => (prev + 1) % carouselCards.length);
  };

  const goToCard = (index: number) => {
    setCurrentCard(index);
  };

  return (
    <section className="flex items-center pt-8 sm:pt-12 lg:pt-16" style={{ backgroundColor: '#FDFDFD' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-center">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 sm:gap-8 lg:gap-16 w-full">
          {/* Left Column - Hero Content */}
          <div 
            className="flex flex-col justify-between items-start p-6 sm:p-8 lg:p-12 gap-6 sm:gap-8 rounded-2xl sm:rounded-3xl w-full max-w-xs sm:max-w-none lg:max-w-none mx-auto sm:mx-0"
            style={{
              minHeight: '400px',
              background: 'linear-gradient(305.08deg, #5F25B0 -2.75%, #56219F 62.86%, #2F1258 103.64%)',
            }}
          >
            {/* Text Container */}
            <div 
              className="flex flex-col items-start gap-4 sm:gap-6 w-full"
              style={{
                maxWidth: '100%'
              }}
            >
            {/* Hero Title */}
            <h1 
              className="leading-none box-border text-left w-full"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(32px, 8vw, 75px)',
                lineHeight: '100%',
                letterSpacing: '-0.02em'
              }}
            >
              <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Empowering</span><br />
              <span style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Every Farmer</span><br />
              <span style={{ color: '#FFFFFF' }}>Anytime</span><br />
              <span style={{ color: '#FFFFFF' }}>Anywhere</span>
            </h1>

            {/* Hero Subtitle */}
            <p 
              className="text-left w-full"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: 'clamp(16px, 3vw, 20px)',
                lineHeight: '160%',
                color: '#FFFFFF',
                opacity: 0.8
              }}
            >
              Seamless onboarding for all—whether you're a farmer or an agent ready to assist.
            </p>
            </div>

            {/* Buttons Container */}
            <div 
              className="flex flex-row items-center gap-4 w-full justify-start"
              style={{
                minHeight: '60px'
              }}
            >
              <button 
                className="flex flex-row justify-center items-center gap-2 transition-all duration-300 hover:shadow-xl hover:scale-105"
                style={{ 
                  padding: 'clamp(6px, 2vw, 8px) clamp(24px, 6vw, 32px)',
                  minWidth: 'clamp(140px, 30vw, 171px)',
                  height: 'clamp(48px, 12vw, 60px)',
                  background: '#97EAD2',
                  borderRadius: '48px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(14px, 3vw, 18px)',
                    lineHeight: '24px',
                    color: '#000000'
                  }}
                >
                  Learn More
                </span>
              </button>
            </div>
          </div>

          {/* Right Column - Carousel */}
          <div className="flex justify-center mt-12 lg:mt-0 lg:justify-end w-full lg:w-auto flex-shrink-0">
            <div className="relative scale-110 sm:scale-100">
              {/* Carousel Container */}
              <div 
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
                style={{
                  width: 'clamp(280px, 60vw, 316px)',
                  height: 'clamp(400px, 80vw, 550px)',
                  background: 'black',
                }}
              >
                {/* Carousel Cards */}
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{
                    transform: `translateX(-${currentCard * 100}%)`
                  }}
                >
                  {carouselCards.map((card, index) => (
                    <div
                      key={card.id}
                      className="min-w-full h-full relative flex-shrink-0"
                      style={{ width: 'clamp(280px, 60vw, 316px)' }}
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${card.image})`,
                          opacity: 0.8
                        }}
                      />

                      {/* Bottom Gradient Overlay */}
                      <div
                        className="absolute bottom-0 left-0 right-0 h-1/2"
                        style={{
                          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)'
                        }}
                      />

                      {/* Card Headline */}
                      <div className="absolute bottom-4 sm:bottom-8 mb-6 sm:mb-10 left-4 sm:left-6 right-4 sm:right-6">
                        <h3>
                          {card.id === 1 && (
                            <>
                              <span
                                style={{
                                  fontFamily: 'Montserrat',
                                  fontStyle: 'normal',
                                  fontWeight: 700,
                                  fontSize: 'clamp(24px, 6vw, 40px)',
                                  lineHeight: '100%',
                                  letterSpacing: '-0.02em',
                                  color: 'rgba(255, 255, 255, 0.7)',
                                  textShadow: '0px 4px 24px rgba(0, 0, 0, 0.35)'
                                }}
                              >
                                AI‑powered<br />  advice,
                              </span>
                              <br />
                              <span
                                style={{
                                  fontFamily: 'Montserrat',
                                  fontStyle: 'normal',
                                  fontWeight: 700,
                                  fontSize: 'clamp(24px, 6vw, 40px)',
                                  lineHeight: '100%',
                                  letterSpacing: '-0.02em',
                                  color: '#FFFFFF',
                                  textShadow: '0px 4px 24px rgba(0, 0, 0, 0.35)'
                                }}
                              >
                                all in your language
                              </span>
                            </>
                          )}
                          {card.id === 2 && (
                            <>
                              <span
                                style={{
                                  fontFamily: 'Montserrat',
                                  fontStyle: 'normal',
                                  fontWeight: 700,
                                  fontSize: 'clamp(24px, 6vw, 40px)',
                                  lineHeight: '100%',
                                  letterSpacing: '-0.02em',
                                  color: 'rgba(255, 255, 255, 0.7)',
                                  textShadow: '0px 4px 24px rgba(0, 0, 0, 0.35)'
                                }}
                              >
                                One app for,
                              </span>
                              <br />
                              <span
                                style={{
                                  fontFamily: 'Montserrat',
                                  fontStyle: 'normal',
                                  fontWeight: 700,
                                  fontSize: 'clamp(24px, 6vw, 40px)',
                                  lineHeight: '100%',
                                  letterSpacing: '-0.02em',
                                  color: '#FFFFFF',
                                  textShadow: '0px 4px 24px rgba(0, 0, 0, 0.35)'
                                }}
                              >
                                all payments,<br /> credit, and<br /> guidance
                              </span>
                            </>
                          )}
                          {card.id === 3 && (
                            <>
                              <span
                                style={{
                                  fontFamily: 'Montserrat',
                                  fontWeight: 600,
                                  fontSize: 'clamp(24px, 6vw, 40px)',
                                  lineHeight: '100%',
                                  letterSpacing: '-0.02em',
                                  color: 'rgba(255, 255, 255, 0.7)',
                                  textShadow: '0px 4px 24px rgba(0, 0, 0, 0.35)'
                                }}
                              >
                                Weather updates,
                              </span>
                              <br />
                              <span
                                style={{
                                  fontFamily: 'Montserrat',
                                  fontWeight: 600,
                                  fontSize: 'clamp(24px, 6vw, 40px)',
                                  lineHeight: '100%',
                                  letterSpacing: '-0.02em',
                                  color: '#FFFFFF',
                                  textShadow: '0px 4px 24px rgba(0, 0, 0, 0.35)'
                                }}
                              >
                                new schemes plus UPI and loans.
                              </span>
                            </>
                          )}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200"
                  style={{
                    backdropFilter: 'blur(7px)',
                    background: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                <button
                  onClick={goToNext}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full text-white hover:bg-white hover:bg-opacity-20 transition-all duration-200"
                  style={{
                    backdropFilter: 'blur(7px)',
                    background: 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {carouselCards.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToCard(index)}
                      className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200"
                      style={{
                        background: currentCard === index ? '#6929C4' : 'rgba(255, 255, 255, 0.4)'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;