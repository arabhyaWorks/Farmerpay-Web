import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import AgentSection from './components/AgentSection';
import Steps from './components/Steps';
import Services from './components/Services';
import TechnologyEngines from './components/TechnologyEngines';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Partners />
      <AgentSection />
      <Steps />
      <Services />
      <TechnologyEngines />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
