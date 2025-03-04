import React from 'react';
import { Phone, FileText, CheckCircle, Users, DollarSign, Award, ArrowRight, ChevronDown, ChevronUp, Mail } from 'lucide-react';
import HeroSection from './components/HeroSection';
import TargetPainSection from './components/TargetPainSection';
import ServiceOverviewSection from './components/ServiceOverviewSection';
import USPSection from './components/USPSection';
import AchievementsSection from './components/AchievementsSection';
import PricingSection from './components/PricingSection';
import ProcessSection from './components/ProcessSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <TargetPainSection />
      <ServiceOverviewSection />
      <USPSection />
      <AchievementsSection />
      <PricingSection />
      <ProcessSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}

export default App;