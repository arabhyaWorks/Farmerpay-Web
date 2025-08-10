import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "How can I apply for a loan using FarmerPay?",
      answer: "You can apply for a loan directly through the FarmerPay+ app by completing your profile and linking your bank account. Your eligibility and loan amount are determined based on your Livelihood Score. Simply tap on \"Apply for Loan,\" follow the guided steps, and submit your request. If you need help, you can visit your nearest agent or Common Service Centre for assisted onboarding."
    },
    {
      id: 2,
      question: "What is the Livelihood Score and how does it affect my eligibility?",
      answer: "The Livelihood Score is a unique rating calculated from your farm productivity, financial activity, risk profile, and engagement with the app. A higher score means better eligibility for loans, insurance, and government schemes. You can improve your score by updating your profile, linking your bank account, and regularly logging your farming activities."
    },
    {
      id: 3,
      question: "Can I use FarmerPay without internet access?",
      answer: "Yes, FarmerPay supports both online and offline modes. You can complete basic onboarding and access essential services through agents or Common Service Centres even without internet. Some features, like real-time UPI payments, require connectivity, but most advisory and profile updates can be done offline and will sync when you're back online."
    },
    {
      id: 4,
      question: "How do I use the voice-enabled interface?",
      answer: "Tap the microphone icon on the app's home screen or any relevant section, then speak your request in your preferred language. The app will guide you through steps using voice prompts, making it easier for users who prefer speaking over typing or have low literacy."
    },
    {
      id: 5,
      question: "How can I get help if I have trouble using the app?",
      answer: "You can access help through the in-app support section, call our toll-free helpline, or visit your nearest agent or Common Service Centre for assistance. Our support is available in multiple languages, and agents can guide you step-by-step with any issue you face."
    }
  ];

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section 
      className="pt-8 pb-16 lg:pt-12 lg:pb-24"
      style={{ backgroundColor: '#FDFDFD' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '100%',
              textAlign: 'center',
              letterSpacing: '-0.02em',
              marginBottom: '12px'
            }}
          >
            <span style={{ color: 'rgba(0, 0, 0, 0.5)' }}>FAQs & </span>
            <span style={{ color: '#000000' }}>Support</span>
          </h2>
        </div>

        {/* FAQ Container */}
        <div className="flex justify-center">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '32px',
              gap: '24px',
              width: '100%',
              maxWidth: '800px',
              background: '#F0EAF9',
              borderRadius: '24px'
            }}
          >
            {/* FAQ List */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '20px',
                width: '100%',
                maxWidth: '720px'
              }}
            >
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '0px',
                    gap: '12px',
                    width: '100%'
                  }}
                >
                  {/* Question Header */}
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0px',
                      gap: '20px',
                      width: '100%',
                      cursor: 'pointer'
                    }}
                    onClick={() => toggleFAQ(faq.id)}
                  >
                    {/* Question Text */}
                    <h3
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        fontSize: '22px',
                        lineHeight: '28px',
                        color: '#252525',
                        flex: 1,
                        margin: 0
                      }}
                    >
                      {faq.question}
                    </h3>

                    {/* Toggle Button */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '40px',
                        height: '40px',
                        border: '2px solid #5F25B0',
                        borderRadius: '100px',
                        background: 'transparent',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <ChevronDown
                        style={{
                          width: '20px',
                          height: '20px',
                          color: '#5F25B0',
                          transform: openFAQ === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    </div>
                  </div>

                  {/* Answer */}
                  {openFAQ === faq.id && (
                    <div
                      style={{
                        width: '100%',
                        maxWidth: '680px',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: '#252525',
                        paddingTop: '4px',
                        animation: 'fadeIn 0.3s ease-in-out'
                      }}
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default FAQs;