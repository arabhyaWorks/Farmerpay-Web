import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Calendar, Wifi, WifiOff, Phone, Languages } from 'lucide-react';

interface AgentCard {
  id: number;
  type: 'find-agents' | 'book-call' | 'offline-mode';
  title: string;
  content: React.ReactNode;
}

const AgentSection: React.FC = () => {
  const [currentLogicalCardIndex, setCurrentLogicalCardIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const agentCards: AgentCard[] = [
    {
      id: 1,
      type: 'find-agents',
      title: 'Find Nearby Agents',
      content: (
        <div className="flex flex-col gap-6">
          {/* Map Area */}
          <div 
            className="w-full h-44 rounded-3xl relative overflow-hidden"
            style={{ background: '#656F77' }}
          >
            <img 
              src="/assets/agents/card1.png" 
              alt="Map showing nearby agents"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Agent List */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-red-500" />
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px',
                    letterSpacing: '-0.04em',
                    color: '#656F77'
                  }}
                >
                  Sunita Devi
                </span>
              </div>
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  letterSpacing: '-0.04em',
                  color: '#656F77'
                }}
              >
                0.8 km
              </span>
            </div>
            
            <div className="flex items-center justify-between p-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-red-500" />
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px',
                    letterSpacing: '-0.04em',
                    color: '#656F77'
                  }}
                >
                  Ram Singh
                </span>
              </div>
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '16px',
                  lineHeight: '19px',
                  letterSpacing: '-0.04em',
                  color: '#656F77'
                }}
              >
                1.0 km
              </span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      type: 'book-call',
      title: 'Book a call',
      content: (
        <div className="flex flex-col gap-4">
          {/* Agent Profile */}
          <div 
            className="flex flex-col gap-4 p-3 rounded-2xl"
            style={{ background: '#FFFFFF' }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-2xl bg-cover bg-center"
                style={{ backgroundImage: 'url(/assets/agents/card2.png)' }}
              />
              <span 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '24px',
                  color: '#000000'
                }}
              >
                Sunita Devi
              </span>
            </div>
            
            {/* Phone Field */}
            <div className="flex flex-col gap-2">
              <label 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: 'rgba(18, 18, 18, 0.87)'
                }}
              >
                Phone Number
              </label>
              <div 
                className="flex items-center gap-2 p-2 rounded-lg border-2"
                style={{ 
                  background: '#FFFFFF',
                  borderColor: '#97EAD2'
                }}
              >
                <Phone className="w-5 h-5 text-gray-600" />
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '21px',
                    color: '#656F77'
                  }}
                >
                  +91 98765
                </span>
              </div>
            </div>
            
            {/* Language Field */}
            <div className="flex flex-col gap-2">
              <label 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '24px',
                  color: 'rgba(18, 18, 18, 0.87)'
                }}
              >
                Language
              </label>
              <div 
                className="flex items-center gap-2 p-2 rounded-lg border-2"
                style={{ 
                  background: '#FFFFFF',
                  borderColor: '#97EAD2'
                }}
              >
                <Languages className="w-5 h-5 text-gray-600" />
                <span 
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '21px',
                    color: '#656F77'
                  }}
                >
                  Hindi
                </span>
              </div>
            </div>
            
            {/* Continue Button */}
            <button 
              className="w-full py-2 rounded-full"
              style={{
                background: '#6929C4',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '17px',
                textAlign: 'center',
                color: '#FFFFFF'
              }}
            >
              Continue
            </button>
          </div>
        </div>
      )
    },
    {
      id: 3,
      type: 'offline-mode',
      title: 'Works Offline',
      content: (
        <div className="flex flex-col gap-6">
          {/* Offline Status */}
          <div 
            className="flex flex-col items-center justify-center gap-8 p-8 rounded-2xl border"
            style={{ 
              background: '#FFFFFF',
              borderColor: '#1E31CA'
            }}
          >
            {/* Loading Spinner */}
            <div 
              className="w-12 h-12 rounded-full"
              style={{
                background: 'conic-gradient(from 180deg at 50% 50%, #1E31CA 0deg, rgba(30, 49, 202, 0) 360deg)'
              }}
            />
            
            {/* Message */}
            <p 
              className="text-center"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '19px',
                color: '#252525'
              }}
            >
              Keep browsing limited features, we will sync up data once you are online.
            </p>
            
            {/* Ghost Button */}
            <button 
              className="px-3 py-2 rounded-full"
              style={{
                background: '#E4E4E4',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '19px',
                color: '#000000'
              }}
            >
              Continue Offline
            </button>
          </div>
        </div>
      )
    }
  ];

  // Auto-scroll effect with seamless loop
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const cardHeight = 350 + 60; // card height + gap
        const currentScroll = scrollContainerRef.current.scrollTop;
        const maxScroll = cardHeight * agentCards.length;
        
        // Continuous smooth scrolling
        const newScrollTop = currentScroll + 1; // Scroll 1px at a time for smooth motion
        
        if (newScrollTop >= maxScroll) {
          // Reset to beginning seamlessly
          scrollContainerRef.current.scrollTop = 0;
        } else {
          scrollContainerRef.current.scrollTop = newScrollTop;
        }
      }
    }, 16); // ~60fps for smooth animation

    return () => clearInterval(interval);
  }, [agentCards.length]);

  return (
    <section 
      className="flex items-center justify-center py-16"
      style={{
        borderTop: '1px solid #E4E4E4'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          
          {/* Left Column - Scrollable Cards */}
          <div 
            className="flex flex-col justify-center items-center rounded-2xl lg:rounded-3xl w-full lg:w-auto order-1 lg:order-1 px-4 sm:px-0"
            style={{
              width: '100%',
              maxWidth: '100%',
              height: 'clamp(450px, 80vh, 1000px)',
              background: '#EE9A39'
            }}
          >
            {/* Scrollable Container */}
            <div 
              ref={scrollContainerRef}
              className="overflow-hidden pt-4 sm:pt-8 lg:pt-16 px-4 lg:px-8"
              style={{
                width: '100%',
                maxWidth: '100%',
                height: '100%'
              }}
            >
              <div 
                className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 relative"
                style={{
                  width: '100%',
                  maxWidth: '100%',
                  height: `${(320 + 40) * agentCards.length * 2}px`, // Double height for seamless loop
                  margin: '0 auto'
                }}
              >
                {/* Render cards twice for seamless loop */}
                {[...agentCards, ...agentCards].map((card, index) => (
                  <div
                    key={`${card.id}-${Math.floor(index / agentCards.length)}`}
                    className="flex flex-col items-start p-3 sm:p-4 lg:p-6 gap-3 sm:gap-4 lg:gap-6 rounded-2xl lg:rounded-3xl shadow-2xl"
                    style={{
                      width: '100%',
                      maxWidth: 'min(calc(100vw - 80px), 400px)',
                      height: 'clamp(300px, 45vh, 380px)',
                      background: '#EFFCF8',
                      boxShadow: '20px 40px 40px 16px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {/* Card Header */}
                    <div className="flex items-center gap-2 sm:gap-4 p-1 sm:p-2">
                      <div 
                        className="flex items-center justify-center p-3 rounded-full border"
                        style={{
                          width: '40px',
                          height: '40px',
                          background: '#F8F8F8',
                          borderColor: '#6929C4'
                        }}
                      >
                        {card.type === 'find-agents' && <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />}
                        {card.type === 'book-call' && <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />}
                        {card.type === 'offline-mode' && <WifiOff className="w-5 h-5 sm:w-6 sm:h-6 text-purple-700" />}
                      </div>
                      <h3 
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 600,
                          fontSize: 'clamp(16px, 4vw, 24px)',
                          lineHeight: '29px',
                          letterSpacing: '-0.04em',
                          color: '#54219D'
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    
                    {/* Card Content */}
                    <div className="flex-1 w-full">
                      {card.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div 
            className="flex flex-col justify-center items-start p-4 sm:p-6 lg:p-12 gap-4 sm:gap-6 lg:gap-8 rounded-2xl lg:rounded-3xl w-full lg:w-auto order-2 lg:order-2 mx-4 sm:mx-0"
            style={{
              width: '100%',
              maxWidth: '600px',
              minHeight: 'clamp(350px, 50vh, 1000px)',
              background: 'linear-gradient(147.13deg, #1E3264 -8.52%, #2D4B96 52.15%, #3D65CA 116.33%)'
            }}
          >
            {/* Section Header */}
            <div className="flex items-center p-1 sm:p-2">
              <h2 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: 'clamp(24px, 6vw, 40px)',
                  lineHeight: '130%',
                  letterSpacing: '-0.02em',
                }}
              >
                <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>Need Help?</span><br />
                <span style={{ color: '#FFFFFF' }}>Agents are here for you!</span>
              </h2>
            </div>

            {/* Support Options */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
              {/* Option 1 */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="p-1 sm:p-2">
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: 'clamp(16px, 4vw, 20px)',
                      lineHeight: '24px',
                      color: '#FFFFFF'
                    }}
                  >
                    CSC/Kiosk Support:
                  </h3>
                </div>
                <div className="p-1 sm:p-2">
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(12px, 3vw, 16px)',
                      lineHeight: '27px',
                      color: '#FFFFFF'
                    }}
                  >
                    Drop by any Common Service Centre or FarmerPay + kiosk for one-on-one help set up your account, upload documents, and learn the app in minutes.
                  </p>
                </div>
              </div>

              {/* Option 2 */}
              <div className="flex flex-col gap-1 sm:gap-2">
                <div className="p-1 sm:p-2">
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: 'clamp(16px, 4vw, 20px)',
                      lineHeight: '24px',
                      color: '#FFFFFF'
                    }}
                  >
                    In-Person KYC
                  </h3>
                </div>
                <div className="p-1 sm:p-2">
                  <p 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: 'clamp(12px, 3vw, 16px)',
                      lineHeight: '27px',
                      color: '#FFFFFF'
                    }}
                  >
                    Our agent verifies your Aadhaar and photo face-to-face, so you're fully compliant without extra forms or photocopies.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="py-1 sm:py-2">
              <button 
                className="flex items-center justify-center px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full transition-all duration-300 hover:shadow-xl hover:scale-105 w-full sm:w-auto"
                style={{
                  minWidth: 'clamp(160px, 40vw, 217px)',
                  height: 'clamp(40px, 10vw, 60px)',
                  background: '#97EAD2',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(14px, 3vw, 18px)',
                  lineHeight: '24px',
                  color: '#000000'
                }}
              >
                Find Your Agent
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;