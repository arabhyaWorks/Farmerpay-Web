import React, { useState, useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

interface TechnologyEngine {
  id: string;
  name: string;
  fullName: string;
  description: string;
  features: string[];
  background: string;
  titleColor: string;
  image: string;
}

const TechnologyEngines: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const engines: TechnologyEngine[] = [
    {
      id: 'trust',
      name: 'TRUST',
      fullName: 'Technology Enabled Rural Unit Scoring Tool',
      description: 'Advanced credit scoring system using alternative data sources and AI algorithms to assess farmer creditworthiness with precision.',
      features: [
        'Alternative data integration',
        'Real-time risk assessment',
        'Fraud Detection techniques',
        'Dynamic scoring algorithms'
      ],
      background: 'linear-gradient(216.44deg, #F7F4FF 5.28%, #ECE5FF 95.9%)',
      titleColor: '#54219D',
      image: '/assets/technology-engines/TRUST.png'
    },
    {
      id: 'root',
      name: 'ROOT',
      fullName: 'Real Time Farm Operations, Optimizing System',
      description: 'Comprehensive farm management ERP system with IoT integration and real-time monitoring capabilities.',
      features: [
        'Farm management ERP',
        'IoT sensor integration',
        'Satellite imagery analysis',
        'Weather data integration'
      ],
      background: 'linear-gradient(215.41deg, #E8FFF8 4.55%, #D6FFF1 94.52%)',
      titleColor: '#44695E',
      image: '/assets/technology-engines/ROOT.png'
    },
    {
      id: 'pulse',
      name: 'PULSE',
      fullName: 'Price Understanding for Livelihood Support Engine',
      description: 'Market intelligence platform providing real-time price data, predictions, and optimal selling recommendations.',
      features: [
        'Market price intelligence',
        'Price prediction algorithms',
        'Optimal selling recommendations',
        'Supply chain optimization'
      ],
      background: 'linear-gradient(231.42deg, #FFF9ED 2.01%, #FFEFD6 96.94%)',
      titleColor: '#D37912',
      image: '/assets/technology-engines/PULSE.png'
    },
    {
      id: 'sage',
      name: 'SAGE',
      fullName: 'Smart Agriculture Guidance Engine',
      description: 'AI-powered agricultural advisory system providing personalized recommendations for crop management and optimization.',
      features: [
        'Crop advisory services',
        'Weather-based recommendations',
        'Pest and disease management',
        'Soil health monitoring'
      ],
      background: 'linear-gradient(211.2deg, #F0F8FF 4.36%, #E1F1FF 95.96%)',
      titleColor: '#3D65CA',
      image: '/assets/technology-engines/SAGE.png'
    },
    {
      id: 'dice',
      name: 'DICE',
      fullName: 'Digital Insurance and Credit Engine',
      description: 'Integrated insurance and credit platform with automated needs assessment and claim processing capabilities.',
      features: [
        'Insurance needs assessment',
        'Automated claim processing',
        'Risk profiling',
        'Product recommendations'
      ],
      background: 'linear-gradient(236.84deg, #F1FFF5 2.85%, #E4FFE9 96.88%)',
      titleColor: '#34A853',
      image: '/assets/technology-engines/DICE.png'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one with delay
            engines.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24"
      style={{ backgroundColor: '#FDFDFD' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '44px',
              lineHeight: '100%',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              marginBottom: '16px'
            }}
          >
            <span style={{ color: 'rgba(0, 0, 0, 0.5)' }}>Our </span>
            <span style={{ color: '#000000' }}>Proprietary Technology Engines</span>
          </h2>
        </div>

        {/* Technology Cards Grid */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* First Row - 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {engines.slice(0, 3).map((engine, index) => (
              <div
                key={engine.id}
                className={`relative transition-all duration-700 ease-out ${
                  visibleCards.includes(index) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  background: engine.background,
                  borderRadius: '32px',
                  minHeight: '390px',
                  transitionDelay: `${index * 200}ms`
                }}
              >
                {/* Card Content - Single Column with Image Positioned Absolutely */}
                <div
                  style={{
                    position: 'relative',
                    padding: '24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  {/* Image - Positioned in top-right corner */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '24px',
                      right: '24px',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={engine.image}
                      alt={`${engine.name} illustration`}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'contain',
                        opacity: 0.8
                      }}
                    />
                  </div>

                  {/* Text Content - With right margin to avoid image overlap */}
                  <div
                    style={{
                      paddingRight: '100px', // Space for the image
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px'
                    }}
                  >
                    {/* Engine Name */}
                    <h3
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '27px',
                        color: '#000000',
                        margin: 0
                      }}
                    >
                      {engine.name}
                    </h3>

                    {/* Full Name */}
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '18px',
                        lineHeight: '22px',
                        color: engine.titleColor,
                        margin: 0
                      }}
                    >
                      {engine.fullName}
                    </p>
                  </div>

                  {/* Description - Full width */}
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#000000',
                      margin: 0
                    }}
                  >
                    {engine.description}
                  </p>

                  {/* Features List - Full width */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginTop: '20px' // adjust the value as needed
                    }}
                  >
                    {engine.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          height: '17px'
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: '1px solid #000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Check 
                            style={{
                              width: '14px',
                              height: '14px',
                              color: '#000000',
                              strokeWidth: '2px' // or whatever thickness you prefer
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '17px',
                            color: '#000000',
                            flex: 1
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Image + 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Large Image */}
            <div
              className={`relative transition-all duration-700 ease-out ${
                visibleCards.includes(3) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                borderRadius: '32px',
                minHeight: '370px',
                transitionDelay: '600ms',
                overflow: 'hidden'
              }}
            >
              <img
                src="/assets/technology-engines/Image4.png"
                alt="Technology Engines Illustration"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            {/* SAGE and DICE Cards */}
            {engines.slice(3).map((engine, index) => (
              <div
                key={engine.id}
                className={`relative transition-all duration-700 ease-out ${
                  visibleCards.includes(index + 3) 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
                style={{
                  background: engine.background,
                  borderRadius: '32px',
                  minHeight: '320px',
                  transitionDelay: `${(index + 3) * 200}ms`
                }}
              >
                {/* Card Content - Single Column with Image Positioned Absolutely */}
                <div
                  style={{
                    position: 'relative',
                    padding: '24px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}
                >
                  {/* Image - Positioned in top-right corner */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '24px',
                      right: '24px',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <img
                      src={engine.image}
                      alt={`${engine.name} illustration`}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'contain',
                        opacity: 0.8
                      }}
                    />
                  </div>

                  {/* Text Content - With right margin to avoid image overlap */}
                  <div
                    style={{
                      paddingRight: '100px', // Space for the image
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px'
                    }}
                  >
                    {/* Engine Name */}
                    <h3
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '27px',
                        color: '#000000',
                        margin: 0
                      }}
                    >
                      {engine.name}
                    </h3>

                    {/* Full Name */}
                    <p
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '18px',
                        lineHeight: '22px',
                        color: engine.titleColor,
                        margin: 0
                      }}
                    >
                      {engine.fullName}
                    </p>
                  </div>

                  {/* Description - Full width */}
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#000000',
                      margin: 0
                    }}
                  >
                    {engine.description}
                  </p>

                  {/* Features List - Full width */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      marginTop: '20px' // adjust the value as needed
                    }}
                  >
                    {engine.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          height: '17px'
                        }}
                      >
                        <div
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            border: '1px solid #000000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Check 
                            style={{
                              width: '14px',
                              height: '14px',
                              color: '#000000',
                              strokeWidth: '2px' // or whatever thickness you prefer
                            }}
                          />
                        </div>
                        <span
                          style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '17px',
                            color: '#000000',
                            flex: 1
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyEngines;