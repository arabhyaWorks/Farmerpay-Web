import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  background: string;
}

const Services: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const serviceCards: ServiceCard[] = [
    {
      id: 'credit',
      title: 'Instant Credit',
      subtitle: 'Grow now, pay after harvest.',
      description: 'Flexible loans scored on your Livelihood Scorezero paperwork, quick disbursal to your bank.',
      image: '/assets/services/credit.png',
      buttonText: 'Check Eligibility',
      background: 'linear-gradient(180deg, #F7F4FF 0%, #ECE5FF 100%)'
    },
    {
      id: 'insurance',
      title: 'Protect Your Harvest',
      subtitle: 'Safeguard crops & more.',
      description: 'Low-premium policies issued on-the-spot, with agents to guide claims when you need them most.',
      image: '/assets/services/insurance.png',
      buttonText: 'Get Protected',
      background: 'linear-gradient(180deg, #FFF9ED 0%, #FFEFD6 100%)'
    },
    {
      id: 'ai-advice',
      title: 'Smart AI Advice',
      subtitle: 'Voice tips in your language.',
      description: 'Low-premium policies issued on-the-spot, with AI agents to guide claims when you need them most',
      image: '/assets/services/aiadvisory.png',
      buttonText: 'Try Now',
      background: 'linear-gradient(180deg, #F0F8FF 0%, #E1F1FF 100%)'
    },
    {
      id: 'upi',
      title: 'Fast UPI',
      subtitle: 'Pay & get paid—zero fees.',
      description: 'Tap to send money, collect sales, or settle dues instantly and securely.',
      image: '/assets/services/upi.png',
      buttonText: 'Start Paying',
      background: 'linear-gradient(180deg, #E8FFF8 0%, #D6FFF1 100%)'
    },
    {
      id: 'schemes',
      title: 'Latest Schemes',
      subtitle: 'Don\'t miss a rupee you earn.',
      description: 'We auto-match you to fresh subsidies, PM-KISAN payouts, and state grants no forms lost.',
      image: '/assets/services/schemes.png',
      buttonText: 'Explore Schemes',
      background: 'linear-gradient(180deg, #F1FFF5 0%, #E4FFE9 100%)'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (sectionRef.current) {
        setSectionTop(sectionRef.current.offsetTop);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const getCardTransform = (index: number) => {
    const cardHeight = 200; // Approximate card height for stacking calculation
    const stackOffset = 40; // How much each card is offset when stacked
    const triggerPoint = sectionTop - window.innerHeight * 0.5;
    const scrollProgress = Math.max(0, scrollY - triggerPoint);
    const cardTrigger = index * cardHeight * 0.3;
    
    if (scrollProgress < cardTrigger) {
      // Card hasn't started moving yet
      return {
        transform: `translateY(${index * 100}px)`,
        zIndex: index + 1,
        opacity: 0.3 + (index * 0.1)
      };
    }
    
    const cardProgress = Math.min(1, (scrollProgress - cardTrigger) / (cardHeight * 0.5));
    const stackedY = Math.max(0, index - cardProgress * 3) * stackOffset;
    
    return {
      transform: `translateY(${stackedY}px) scale(${0.95 + cardProgress * 0.05})`,
      zIndex: index + 1 + Math.floor(cardProgress * 10),
      opacity: 0.7 + cardProgress * 0.3
    };
  };
  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24" 
      style={{ backgroundColor: '#FDFDFD' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* Section Title */}
          <h2 
            className="text-center px-4"
            style={{
              maxWidth: '1034px',
              width: '100%',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(28px, 5vw, 40px)',
              lineHeight: '100%',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: 'rgba(0, 0, 0, 0.5)' }}>What can you do with </span>
            <span style={{ color: '#000000' }}>Farmerpay</span>
          </h2>

          {/* Down Arrow Button */}
          <button
            className="transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '12px',
              gap: '8px',
              width: 'clamp(60px, 10vw, 75px)',
              height: 'clamp(60px, 10vw, 75px)',
              background: '#F8F8F8',
              border: '1px solid #5F25B0',
              borderRadius: '16px'
            }}
          >
            <ChevronDown 
              style={{
                width: 'clamp(20px, 4vw, 24px)',
                height: 'clamp(20px, 4vw, 24px)',
                color: '#5F25B0'
              }}
            />
          </button>
        </div>

        {/* Service Cards */}
        <div className="relative flex flex-col items-center" style={{ minHeight: '3000px' }}>
          {serviceCards.map((card, index) => (
            <div
              key={card.id}
              className="sticky top-20 w-full max-w-[1011px] mx-auto transition-all duration-300 ease-out"
              style={{
                boxSizing: 'border-box',
                background: card.background,
                borderTop: '2px solid #A2A2A2',
                borderRadius: '32px',
                marginBottom: '24px',
                ...getCardTransform(index)
              }}
            >
              <div className="flex flex-col lg:flex-row items-center p-6 sm:p-8 lg:p-12 gap-6 lg:gap-8">
                {/* Content Section */}
                <div
                  className="flex flex-col items-start gap-6 lg:gap-12 flex-1 order-2 lg:order-1"
                  style={{
                    maxWidth: '516px'
                  }}
                >
                  {/* Text Content */}
                  <div
                    className="flex flex-col items-start gap-4 lg:gap-6"
                    style={{
                      width: '100%'
                    }}
                  >
                    {/* Title and Subtitle */}
                    <div
                      className="flex flex-col items-start gap-2"
                      style={{
                        width: '100%'
                      }}
                    >
                      {/* Title */}
                      <div className="p-2 w-full">
                        <h3
                          className="text-center lg:text-left"
                          style={{
                            width: '100%',
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            fontSize: 'clamp(28px, 5vw, 40px)',
                            lineHeight: '48px',
                            color: '#252525'
                          }}
                        >
                          {card.title}
                        </h3>
                      </div>

                      {/* Subtitle */}
                      <div className="p-2 w-full">
                        <p
                          className="text-center lg:text-left"
                          style={{
                            width: '100%',
                            fontFamily: 'Inter, sans-serif',
                            fontStyle: 'italic',
                            fontWeight: 300,
                            fontSize: 'clamp(20px, 4vw, 32px)',
                            lineHeight: '39px',
                            color: '#252525'
                          }}
                        >
                          {card.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="p-2 w-full">
                      <p
                        className="text-center lg:text-left"
                        style={{
                          width: '100%',
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontSize: 'clamp(16px, 3vw, 24px)',
                          lineHeight: '29px',
                          color: card.id === 'insurance' || card.id === 'schemes' ? '#656565' : '#252525'
                        }}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Button */}
                  <div className="w-full flex justify-center lg:justify-start">
                    <button
                      className="transition-all duration-300 hover:shadow-lg hover:scale-105"
                      style={{
                        boxSizing: 'border-box',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '8px 32px',
                        gap: '8px',
                        minWidth: '179px',
                        height: 'clamp(56px, 8vw, 72px)',
                        minHeight: '48px',
                        maxHeight: '72px',
                        background: 'linear-gradient(101.16deg, rgba(239, 239, 239, 0.6) -149.26%, rgba(255, 255, 255, 0.08) 283.51%)',
                        border: '1px solid #000000',
                        backdropFilter: 'blur(27.5px)',
                        borderRadius: '48px'
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Inter, sans-serif',
                          fontWeight: 500,
                          fontSize: 'clamp(12px, 2vw, 14px)',
                          lineHeight: '21px',
                          textAlign: 'center',
                          color: '#000000'
                        }}
                      >
                        {card.buttonText}
                      </span>
                      <ArrowRight
                        style={{
                          width: 'clamp(16px, 3vw, 20px)',
                          height: 'clamp(16px, 3vw, 20px)',
                          color: '#252525'
                        }}
                      />
                    </button>
                  </div>
                </div>

                {/* Image Section */}
                <div
                  className="flex-shrink-0 order-1 lg:order-2"
                  style={{
                    width: 'clamp(250px, 40vw, 367px)',
                    height: 'clamp(250px, 40vw, 367px)'
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;