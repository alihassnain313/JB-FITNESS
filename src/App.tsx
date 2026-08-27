import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { WhyChooseUs } from './components/WhyChooseUs';
import { MotivationalBanner } from './components/MotivationalBanner';
import { FitnessCalculator } from './components/FitnessCalculator';
import { GoogleReviews } from './components/GoogleReviews';
import { LocationContact } from './components/LocationContact';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';

export default function App() {
  const [selectedGoal, setSelectedGoal] = useState<string>('');

  const scrollToContact = (goal?: string) => {
    if (goal) {
      setSelectedGoal(goal);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col selection:bg-[#FF4D00] selection:text-black">
      {/* Sticky Top Navigation */}
      <Navbar onJoinClick={() => scrollToContact()} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onJoinClick={() => scrollToContact()} />

        {/* About Section */}
        <About onJoinClick={() => scrollToContact()} />

        {/* Facilities & Training Modalities */}
        <Facilities onSelectCategory={(cat) => scrollToContact(cat)} />

        {/* Why Choose JB FITNESS GYM */}
        <WhyChooseUs />

        {/* Motivational Banner */}
        <MotivationalBanner onStartJourney={() => scrollToContact()} />

        {/* Interactive BMI & Workout Goal Planner */}
        <FitnessCalculator onSelectGoal={(goal) => scrollToContact(goal)} />

        {/* Google Reviews & Verified Reputation */}
        <GoogleReviews />

        {/* Location & Contact Inquiry Form */}
        <LocationContact preselectedGoal={selectedGoal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Sticky Bar for Call & Directions */}
      <MobileStickyBar onInquireClick={() => scrollToContact()} />
    </div>
  );
}
