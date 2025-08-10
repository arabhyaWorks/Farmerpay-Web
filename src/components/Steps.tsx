import React, { useState, useEffect, useRef } from 'react';

interface Step {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  description: string;
}

const Steps: React.FC = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: 'Step 1',
      subtitle: 'Getting Started',
      image: '/assets/Steps/step1.png',
      description: 'Enter your name and mobile, set a biometric passcode. Start using FarmerPay'
    },
    {
      id: 2,
      title: 'Step 2',
      subtitle: 'Link Bank Account',
      image: '/assets/Steps/step2.png',
      description: 'Pick your preferred language, link your bank or UPI ID, and set a secure PIN'
    },
    {
      id: 3,
      title: 'Step 3',
      subtitle: 'KYC / ID verification',
      image: '/assets/Steps/step3.png',
      description: 'Show your Aadhaar, snap a selfie, and you\'re verified! And fill your remaining details'
    },
    {
      id: 4,
      title: 'Step 4',
      subtitle: 'First payment + tour',
      image: '/assets/Steps/step4.png',
      description: 'Take a quick tour, make your first UPI payment, or check today\'s weather and schemes'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate steps one by one with delay
            steps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps(prev => [...prev, index]);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.3 }
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
              fontSize: '48px',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#1F2937',
              marginBottom: '16px'
            }}
          >
            How to Get Started
          </h2>
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: '18px',
              lineHeight: '160%',
              color: '#6B7280',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
            Follow these simple steps to set up your FarmerPay account and start using all our features
          </p>
        </div>


        {/* Steps Container */}
        <div className="flex justify-center w-full">
          <div 
            className="relative w-full"
            style={{
              width: '100%',
              maxWidth: '1344px'
            }}
          >
            {/* Desktop Layout - Horizontal */}
            <div className="hidden lg:block relative" style={{ height: '390px' }}>
              {/* Steps */}
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`absolute transition-all duration-700 ease-out ${
                    visibleSteps.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    left: `${index * 336}px`,
                    top: '0px',
                    width: '255px',
                    height: '268px',
                    background: '#EFFCF8',
                    boxShadow: '8px 16px 24px 4px rgba(0, 0, 0, 0.15)',
                    borderRadius: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px',
                    gap: '4px',
                    transitionDelay: `${index * 300}ms`
                  }}
                >
                  {/* Step Title */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '4px',
                      gap: '4px',
                      width: '223px',
                      height: '32px',
                      alignSelf: 'stretch'
                    }}
                  >
                    <span
                      style={{
                        width: '215px',
                        height: '24px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#3F1976',
                        flexGrow: 1
                      }}
                    >
                      {step.title}
                    </span>
                  </div>

                  {/* Step Subtitle */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '4px',
                      gap: '4px',
                      width: '223px',
                      height: '35px',
                      alignSelf: 'stretch'
                    }}
                  >
                    <span
                      style={{
                        width: '215px',
                        height: '27px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '27px',
                        textAlign: 'center',
                        color: '#3F1976',
                        flexGrow: 1
                      }}
                    >
                      {step.subtitle}
                    </span>
                  </div>

                  {/* Step Image */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '8px',
                      gap: '8px',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(304.84deg, rgba(239, 239, 239, 0.6) -38.54%, rgba(255, 255, 255, 0.08) 184.65%)',
                      backdropFilter: 'blur(27.5px)',
                      borderRadius: '999px'
                    }}
                  >
                    <img
                      src={step.image}
                      alt={step.subtitle}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                    />
                  </div>

                  {/* Step Description */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '8px',
                      gap: '8px',
                      width: '223px',
                      height: '97px',
                      alignSelf: 'stretch'
                    }}
                  >
                    <span
                      style={{
                        width: '207px',
                        height: '81px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '27px',
                        textAlign: 'center',
                        color: '#656F77',
                        flexGrow: 1
                      }}
                    >
                      {step.description}
                    </span>
                  </div>
                </div>
              ))}

              {/* Connecting Lines */}
              {[0, 1, 2].map((index) => (
                <div
                  key={`line-${index}`}
                  className={`absolute transition-all duration-500 ease-out ${
                    visibleSteps.includes(index + 1) 
                      ? 'opacity-100 scale-x-100' 
                      : 'opacity-0 scale-x-0'
                  }`}
                  style={{
                    left: `${255 + index * 336}px`,
                    top: '185px',
                    width: '85px',
                    height: '6px',
                    background: '#E4E4E4',
                    borderRadius: '3px',
                    transformOrigin: 'left center',
                    transitionDelay: `${(index + 1) * 300 + 200}ms`
                  }}
                />
              ))}
            </div>

            {/* Mobile Layout - Vertical */}
            <div className="lg:hidden flex flex-col items-center gap-8 w-full">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div
                  className={`transition-all duration-700 ease-out ${
                    visibleSteps.includes(index) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                   } w-full max-w-xs`}
                  style={{
                    background: '#EFFCF8',
                    boxShadow: '8px 16px 24px 4px rgba(0, 0, 0, 0.15)',
                    borderRadius: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '16px',
                    gap: '4px',
                    transitionDelay: `${index * 300}ms`,
                    minHeight: '300px'
                  }}
                  >
                  {/* Step Title */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '4px',
                      gap: '4px',
                      width: '100%',
                      height: '32px'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 700,
                        fontSize: '20px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#3F1976',
                        flexGrow: 1
                      }}
                    >
                      {step.title}
                    </span>
                  </div>

                  {/* Step Subtitle */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '4px',
                      gap: '4px',
                      width: '100%',
                      height: '35px'
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '27px',
                        textAlign: 'center',
                        color: '#3F1976',
                        flexGrow: 1
                      }}
                    >
                      {step.subtitle}
                    </span>
                  </div>

                  {/* Step Image */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '8px',
                      gap: '8px',
                      width: '60px',
                      height: '60px',
                      background: 'linear-gradient(304.84deg, rgba(239, 239, 239, 0.6) -38.54%, rgba(255, 255, 255, 0.08) 184.65%)',
                      backdropFilter: 'blur(27.5px)',
                      borderRadius: '999px'
                    }}
                  >
                    <img
                      src={step.image}
                      alt={step.subtitle}
                      style={{
                        width: '60px',
                        height: '60px',
                        objectFit: 'cover',
                        borderRadius: '50%'
                      }}
                    />
                  </div>

                  {/* Step Description */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '8px',
                      gap: '8px',
                      width: '100%',
                      flex: 1
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '27px',
                        textAlign: 'center',
                        color: '#656F77',
                        flexGrow: 1
                      }}
                    >
                      {step.description}
                    </span>
                  </div>
                  </div>

                  {/* Vertical Connector Line (except for last step) */}
                  {index < steps.length - 1 && (
                    <div
                      className={`transition-all duration-500 ease-out ${
                        visibleSteps.includes(index + 1) 
                          ? 'opacity-100 scale-y-100' 
                          : 'opacity-0 scale-y-0'
                      }`}
                      style={{
                        width: '6px',
                        height: '32px',
                        background: '#E4E4E4',
                        borderRadius: '3px',
                        marginTop: '16px',
                        transformOrigin: 'top center',
                        transitionDelay: `${(index + 1) * 300 + 200}ms`
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* App Store Section */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-8">
            {/* Download Text */}
            <div className="text-center">
              <h3 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '32px',
                  lineHeight: '120%',
                  letterSpacing: '-0.02em',
                  color: '#1F2937',
                  marginBottom: '8px'
                }}
              >
                Download FarmerPay
              </h3>
              <p 
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '160%',
                  color: '#6B7280'
                }}
              >
                Get started with FarmerPay on your mobile device
              </p>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Google Play Store */}
              <a
                href="#"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="Get it on Google Play"
                  style={{
                    height: '60px',
                    width: 'auto'
                  }}
                />
              </a>

              {/* Apple App Store */}
              <a
                href="#"
                className="transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt="Download on the App Store"
                  style={{
                    height: '60px',
                    width: 'auto'
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;