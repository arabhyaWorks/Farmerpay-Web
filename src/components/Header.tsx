import React, { useState } from 'react';
import { ChevronDown, User, Menu, X } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon: string;
  hasDropdown?: boolean;
}

interface ServiceItem {
  id: string;
  title: string;
  description: string;
}
const Header: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const tabs: TabItem[] = [
    { id: 'home', label: 'Home', icon: '/assets/header/IconHome.svg' },
    { id: 'services', label: 'Services', icon: '/assets/header/IconService.svg', hasDropdown: true },
    { id: 'farmers', label: 'For Farmers', icon: '/assets/header/IconFarmer.svg' },
    { id: 'agents', label: 'For Agents', icon: '/assets/header/IconAgents.svg' },
    { id: 'about', label: 'About Us', icon: '/assets/header/IconAbout.svg' },
  ];

  const serviceItems: ServiceItem[] = [
    {
      id: 'trust',
      title: 'TRUST',
      description: 'Technology Enabled Rural Unit Scoring Tool'
    },
    {
      id: 'roots',
      title: 'ROOTS',
      description: 'Real Time Farm Operations, Optimizing System'
    },
    {
      id: 'pulse',
      title: 'PULSE',
      description: 'Price Understanding for Livelihood Support Engine'
    },
    {
      id: 'sage',
      title: 'SAGE',
      description: 'Smart Agriculture Guidance Engine'
    },
    {
      id: 'dice',
      title: 'DICE',
      description: 'Digital Insurance and Credit Engine'
    }
  ];
  const getTabStyles = (tabId: string) => {
    const isActive = activeTab === tabId;
    const isHovered = hoveredTab === tabId;
    
    if (isActive) {
      return {
        background: '#F0EAF9',
        boxShadow: '0px 4px 0px #6929C4',
        color: '#250E45'
      };
    }
    
    if (isHovered) {
      return {
        background: '#FFF4E6',
        boxShadow: '0px 4px 0px #FFA001',
        color: '#250E45'
      };
    }
    
    return {
      background: 'transparent',
      boxShadow: 'none',
      color: '#656F77'
    };
  };

  const handleServicesHover = (isHovering: boolean) => {
    if (isHovering) {
      setShowServicesDropdown(true);
      setHoveredTab('services');
    } else {
      // Add a small delay to prevent flickering when moving to dropdown
      setTimeout(() => {
        setShowServicesDropdown(false);
        setHoveredTab(null);
      }, 100);
    }
  };
  return (
    <header className="w-full bg-white border-b border-gray-100 py-4 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img 
            src="/assets/header/logo.png" 
            alt="FarmePay" 
            className="h-12 sm:h-10 lg:h-12 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center">
          <div className="flex flex-row items-center gap-2 xl:gap-4">
            {tabs.map((tab) => {
              const tabStyles = getTabStyles(tab.id);
              
              return (
                <div
                  key={tab.id}
                  className="relative"
                  onMouseEnter={() => tab.id === 'services' ? handleServicesHover(true) : setHoveredTab(tab.id)}
                  onMouseLeave={() => tab.id === 'services' ? handleServicesHover(false) : setHoveredTab(null)}
                >
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className="flex items-center gap-1 xl:gap-2 px-2 xl:px-3 py-3 xl:py-4 rounded-lg transition-all duration-200 ease-in-out whitespace-nowrap"
                    style={{
                      minWidth: '120px',
                      height: '56px',
                      ...tabStyles,
                      boxSizing: 'border-box'
                    }}
                  >
                    <div className="flex items-center gap-2 w-full justify-center">
                      <img 
                        src={tab.icon} 
                        alt={tab.label}
                        className="w-5 h-5 xl:w-6 xl:h-6 flex-shrink-0"
                      />
                      <span 
                        className="font-medium text-sm xl:text-base leading-5 text-center"
                        style={{ 
                          fontFamily: 'Inter, sans-serif',
                          fontSize: '16px',
                          lineHeight: '19px',
                          color: tabStyles.color
                        }}
                      >
                        {tab.label}
                      </span>
                      {tab.hasDropdown && (
                        <ChevronDown 
                          className="w-5 h-5 xl:w-6 xl:h-6 flex-shrink-0" 
                          style={{ color: tabStyles.color }}
                        />
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Services Dropdown */}
          {showServicesDropdown && (
            <div 
              className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 z-50"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => {
                setShowServicesDropdown(false);
                setHoveredTab(null);
              }}
              style={{
                width: '323px',
                background: '#FFFFFF',
                border: '0.5px solid rgba(0, 0, 0, 0.1)',
                boxShadow: '0px 25px 37px rgba(0, 0, 0, 0.1), 0px 10px 15px rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              {serviceItems.map((service) => (
                <div
                  key={service.id}
                  className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: '12px 8px 12px 16px',
                    gap: '12px',
                    width: '307px',
                    minHeight: '68px',
                    background: '#FFFFFF',
                    borderRadius: '8px'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      gap: '4px',
                      width: '283px',
                      flexGrow: 1
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '17px',
                        letterSpacing: '0.01em',
                        color: '#374151',
                        width: '100%'
                      }}
                    >
                      {service.title}
                    </div>
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '12px',
                        lineHeight: '15px',
                        letterSpacing: '0.01em',
                        color: '#656F77',
                        width: '100%'
                      }}
                    >
                      {service.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop Right Side Actions */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0">
          {/* Profile Icon */}
          <button className="w-10 h-10 xl:w-12 xl:h-12 rounded-full border-2 border-black flex items-center justify-center hover:border-gray-400 transition-colors">
            <User className="w-5 h-5 xl:w-6 xl:h-6 text-black" />
          </button>

          {/* Get Started Button */}
          <button 
            className="px-4 xl:px-6 py-2 xl:py-3 rounded-full transition-all duration-200 hover:shadow-lg"
            style={{ 
              background: '#97EAD2',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 500,
              fontSize: window.innerWidth >= 1280 ? '16px' : '14px',
              lineHeight: '24px',
              letterSpacing: '-0.03em',
              color: '#000000'
            }}
          >
            Get Started
          </button>
        </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
            <div className="px-4 py-4 space-y-2">
              {tabs.map((tab) => {
                const tabStyles = getTabStyles(tab.id);
                
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ease-in-out"
                    style={{
                      ...tabStyles,
                      boxSizing: 'border-box'
                    }}
                  >
                    <img 
                      src={tab.icon} 
                      alt={tab.label}
                      className="w-6 h-6 flex-shrink-0"
                    />
                    <span 
                      className="font-medium text-base"
                      style={{ 
                        fontFamily: 'Inter, sans-serif',
                        color: tabStyles.color
                      }}
                    >
                      {tab.label}
                    </span>
                    {tab.hasDropdown && (
                      <ChevronDown 
                        className="w-6 h-6 flex-shrink-0 ml-auto" 
                        style={{ color: tabStyles.color }}
                      />
                    )}
                  </button>
                );
              })}
              
              {/* Mobile Actions */}
              <div className="pt-4 border-t border-gray-100 space-y-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-black rounded-full hover:border-gray-400 transition-colors">
                  <User className="w-5 h-5 text-black" />
                  <span className="font-medium text-black">Profile</span>
                </button>
                
                <button 
                  className="w-full px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg"
                  style={{ 
                    background: '#97EAD2',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '-0.03em',
                    color: '#000000'
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;