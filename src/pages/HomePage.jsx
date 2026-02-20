import React from 'react';
import HeroSection from '../components/homeSection/HeroSection';
import TrustedSection from '../components/homeSection/TrustedSection';
import ExpertiseSection from '../components/homeSection/ExpertiseSection';
import FeaturedSection from '../components/homeSection/FeaturedSection';
import FeedbackSection from '../components/homeSection/FeedbackSection';
import IndustriesSection from '../components/homeSection/IndustriesSection';
import WorkSection from '../components/homeSection/WorkSection';
import TrackSection from '../components/homeSection/TrackSection';

const Homepage = () => {
  return (
    <div className="bg-background-main min-h-screen">
      <HeroSection />
      <TrustedSection />
      <ExpertiseSection />
      <FeaturedSection />
      <FeedbackSection />
      <IndustriesSection />
      <WorkSection />
      <TrackSection />
    </div>
  );
};

export default Homepage;
