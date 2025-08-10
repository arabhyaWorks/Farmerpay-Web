import React from 'react';

interface Partner {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

const Partners: React.FC = () => {
  const partners: Partner[] = [
    {
      id: 'farmepay-app1',
      name: 'FarmePay App',
      logo: 'https://play-lh.googleusercontent.com/Qa2GoRhT5Ypf1eymmvqLVsyXHgyBfQGgOyfzf4Ia57iTWbtSTT9w22oO6b4W9MI7NA=w480-h960-rw',
      alt: 'FarmePay Mobile App'
    },
    {
      id: 'farmepay-app2',
      name: 'FarmePay Platform',
      logo: 'https://play-lh.googleusercontent.com/xikI3hdtw705N_TlWJn8oLimgbT7oyLVjY26FafZliMRgqUmV6vz6rrNzxODBpKJag',
      alt: 'FarmePay Platform'
    },
    {
      id: 'samunnati',
      name: 'Samunnati',
      logo: 'https://samunnati.com/wp-content/uploads/2024/02/01-Header-Main-Logo.png',
      alt: 'Samunnati Logo'
    },
    {
      id: 'npci',
      name: 'NPCI',
      logo: 'https://static.theprint.in/wp-content/uploads/2017/10/NPCI_logo.jpg',
      alt: 'NPCI Logo'
    },
    {
      id: 'hdfc',
      name: 'HDFC Bank',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/2560px-HDFC_Bank_Logo.svg.png',
      alt: 'HDFC Bank Logo'
    },
    {
      id: 'sbi',
      name: 'State Bank of India',
      logo: 'https://vectorseek.com/wp-content/uploads/2023/09/Sbi-Logo-Vector.svg-.png',
      alt: 'SBI Logo'
    },
    {
      id: 'upi',
      name: 'UPI',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1280px-UPI-Logo-vector.svg.png',
      alt: 'UPI Logo'
    },
    {
      id: 'union-bank',
      name: 'Union Bank of India',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Union_Bank_of_India_Logo.svg/2560px-Union_Bank_of_India_Logo.svg.png',
      alt: 'Union Bank of India Logo'
    },
    {
      id: 'pmfby',
      name: 'PMFBY',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b4/Pradhan_Mantri_Fasal_Bima_Yojana_%28PMFBY%29_logo.png',
      alt: 'PMFBY Logo'
    },
    {
      id: 'government',
      name: 'Government Partner',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEGrNaccfqPFjM_CbYBfqTEMH0gBXWMjZrQ&s',
      alt: 'Government Partner Logo'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 
            className="mb-4"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: 'clamp(32px, 5vw, 48px)',
              lineHeight: '120%',
              letterSpacing: '-0.02em',
              color: '#1F2937'
            }}
          >
            Our Partners
          </h2>
          <p 
            className="max-w-3xl mx-auto"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 2.5vw, 18px)',
              lineHeight: '160%',
              color: '#6B7280'
            }}
          >
            Trusted by leading financial institutions, government bodies, and technology partners 
            to deliver comprehensive agricultural solutions across India.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="group flex items-center justify-center p-4 lg:p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105"
              style={{
                background: '#FAFAFA',
                border: '1px solid #F3F4F6',
                minHeight: '120px'
              }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                  style={{
                    maxWidth: '100px',
                    maxHeight: '60px'
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 lg:mt-16">
          <p 
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(14px, 2vw, 16px)',
              lineHeight: '150%',
              color: '#9CA3AF'
            }}
          >
            And many more trusted partners supporting farmers across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partners;