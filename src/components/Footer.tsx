import React, { useState } from 'react';
import { ArrowUpRight, Facebook, Instagram, Twitter, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 px-8 lg:py-16">
          {/* Mobile Layout */}
          <div className="lg:hidden mb-8">
            {/* Logo and Social Links - Full Width */}
            <div className="mb-6">
              <div className="flex flex-col gap-4">
                {/* Logo */}
                <div className="flex items-center">
                  <img 
                    src="/assets/header/logo.png" 
                    alt="FarmePay" 
                    className="h-12 w-auto"
                  />
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                  >
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                  >
                    <Instagram className="w-5 h-5 text-gray-600" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                  >
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                </div>

                {/* App Store Buttons - Horizontal Row */}
                <div className="flex flex-row gap-2">
                  <a
                    href="#"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                      alt="Get it on Google Play"
                      className="h-10 w-auto"
                    />
                  </a>
                  <a
                    href="#"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                      alt="Download on the App Store"
                      className="h-10 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Email Section - Mobile */}
            <div className="mb-6">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-xl border border-purple-200 w-full max-w-sm">
                  <p 
                    className="mb-2 text-center"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '16px',
                      color: '#6B7280'
                    }}
                  >
                    Get in touch with us
                  </p>
                  <a 
                    href="mailto:ceo@farmerpay.ai"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-lg border border-purple-300 hover:border-purple-500 hover:shadow-md transition-all duration-200 group w-full"
                  >
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: '#6929C4'
                      }}
                    >
                      ceo@farmerpay.ai
                    </span>
                    <svg className="w-3 h-3 text-purple-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Services and Technology - Side by Side */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              {/* Services Column */}
              <div>
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '22px',
                    color: '#000000'
                  }}
                >
                  Services
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { name: 'Loan', href: '#' },
                    { name: 'Insurance', href: '#' },
                    { name: 'AI Advisory', href: '#' },
                    { name: 'Schemes', href: '#' },
                    { name: 'UPI', href: '#' }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-0.5 hover:text-purple-600 transition-colors"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '19px',
                        color: '#6B7280'
                      }}
                    >
                      {item.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Technology Column */}
              <div>
                <h3 
                  className="mb-4"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '18px',
                    lineHeight: '22px',
                    color: '#000000'
                  }}
                >
                  Technology
                </h3>
                <div className="flex flex-col gap-3">
                  {[
                    { name: 'TRUST', href: '#' },
                    { name: 'ROOTS', href: '#' },
                    { name: 'PULSE', href: '#' },
                    { name: 'SAGE', href: '#' },
                    { name: 'DICE', href: '#' }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-2 hover:text-purple-600 transition-colors"
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '19px',
                        color: '#6B7280'
                      }}
                    >
                      {item.name}
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Resources - Full Width */}
            <div>
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '22px',
                  color: '#000000'
                }}
              >
                Resources
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'APIs', href: '#' },
                  { name: 'Training', href: '#' },
                  { name: 'Implementation', href: '#' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-purple-600 transition-colors"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#6B7280'
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-5 gap-6 lg:gap-8 mb-8">
            {/* Logo and Social Links */}
            <div>
              <div className="flex flex-col gap-4">
                {/* Logo */}
                <div className="flex items-center">
                  <img 
                    src="/assets/header/logo.png" 
                    alt="FarmePay" 
                    className="h-12 w-auto"
                  />
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-3">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                  >
                    <Facebook className="w-5 h-5 text-gray-600" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                  >
                    <Instagram className="w-5 h-5 text-gray-600" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                  >
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors flex-shrink-0"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-row gap-3 min-w-[280px]">
                  <a
                    href="#"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                      alt="Get it on Google Play"
                      className="h-10 w-auto min-w-[120px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="transition-all duration-300 hover:scale-105"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                      alt="Download on the App Store"
                      className="h-10 w-auto min-w-[120px]"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="ml-16">
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '22px',
                  color: '#000000'
                }}
              >
                Services
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'Loan', href: '#' },
                  { name: 'Insurance', href: '#' },
                  { name: 'AI Advisory', href: '#' },
                  { name: 'Schemes', href: '#' },
                  { name: 'UPI', href: '#' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-0.5 hover:text-purple-600 transition-colors"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#6B7280'
                    }}
                  >
                    {item.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Technology Column */}
            <div>
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '22px',
                  color: '#000000'
                }}
              >
                Technology
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'TRUST', href: '#' },
                  { name: 'ROOTS', href: '#' },
                  { name: 'PULSE', href: '#' },
                  { name: 'SAGE', href: '#' },
                  { name: 'DICE', href: '#' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-2 hover:text-purple-600 transition-colors"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#6B7280'
                    }}
                  >
                    {item.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </div>

            {/* Resources Column */}
            <div>
              <h3 
                className="mb-4"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '18px',
                  lineHeight: '22px',
                  color: '#000000'
                }}
              >
                Resources
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'APIs', href: '#' },
                  { name: 'Training', href: '#' },
                  { name: 'Implementation', href: '#' }
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-purple-600 transition-colors"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '19px',
                      color: '#6B7280'
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Email Section - Desktop */}
            <div>
              <div className="flex flex-col items-center lg:items-start gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 600,
                      fontSize: '16px',
                      lineHeight: '22px',
                      color: '#000000'
                    }}
                  >
                    Contact Us
                  </h3>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 rounded-lg border border-purple-200">
                  <p 
                    className="mb-1"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 400,
                      fontSize: '12px',
                      lineHeight: '20px',
                      color: '#6B7280'
                    }}
                  >
                    Get in touch with us
                  </p>
                  <a 
                    href="mailto:ceo@farmerpay.ai"
                    className="inline-flex items-center gap-1 px-3 py-1 bg-white rounded-md border border-purple-300 hover:border-purple-500 hover:shadow-md transition-all duration-200 group"
                  >
                    <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    <span
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '20px',
                        color: '#6929C4'
                      }}
                    >
                      ceo@farmerpay.ai
                    </span>
                    <svg className="w-2 h-2 text-purple-400 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div 
          className="py-4 border-t border-gray-100"
          style={{ borderColor: '#E5E7EB' }}
        >
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-3 text-center md:text-left">
            {/* Left Side - Language and Legal Links */}
            <div className="flex items-center justify-center gap-3 md:gap-4">
              <a
                href="#"
                className="hover:text-purple-600 transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#6B7280'
                }}
              >
                English
              </a>
              <a
                href="#"
                className="hover:text-purple-600 transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#6B7280'
                }}
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-purple-600 transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#6B7280'
                }}
              >
                Legal
              </a>
            </div>

            {/* Right Side - Copyright */}
            <div className="flex flex-col items-center justify-center gap-0">
              {/* First Line - Copyright */}
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#6B7280'
                }}
              >
                © 2025 Farmerpay. All Rights Reserved.
              </span>
              
              {/* Second Line - Built with love */}
              <div className="flex items-center gap-0">
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#6B7280'
                }}
              >
                Built with
              </span>
                <Heart className="w-3 h-3 text-red-500 fill-current mx-1" />
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '20px', color: '#6B7280' }}>for Indian Agriculture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;