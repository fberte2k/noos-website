import React from 'react';
import HeroSection from './components/HeroSection';
import AboutNOOS from './components/AboutNOOS';
import EcosystemOverview from './components/EcosystemOverview';
import Manifesto from './components/Manifesto';

export default function App() {
  return (
    <>
      <HeroSection />
      <AboutNOOS />
      <EcosystemOverview />
      <Manifesto />
    </>
  );
}
