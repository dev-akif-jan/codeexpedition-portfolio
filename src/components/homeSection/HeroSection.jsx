import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import Separator from '../ui/Separator';
import { homeSectionData } from './homeSectionData';

const HeroSection = () => {
  const { headline, subtext, primaryCTA, secondaryCTA, socialProof } = homeSectionData.hero;

  return (
    <section className="text-center bg-background-main py-12 lg:py-16">
      <Container>
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
          <span className="text-brand-primary block mb-2">{headline.line1}</span>
          <span className="text-text-primary block">{headline.line2}</span>
          <span className="text-text-primary block">{headline.line3}</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto leading-relaxed">
          {subtext}
        </p>

        {/* Action Links*/}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <Link
            to={primaryCTA.to}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-brand-primary hover:bg-brand-primaryDark rounded-lg transition-colors duration-200 shadow-sm"
          >
            {primaryCTA.text}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>

          <Link
            to={secondaryCTA.to}
            className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-text-primary hover:text-brand-primary transition-colors duration-200"
          >
            {secondaryCTA.text}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </Link>
        </div>

        {/* Visual Separator */}
        <Separator />

        {/* Social Proof */}
        <div className="pt-8">
          <p className="text-sm font-bold text-text-secondary uppercase tracking-widest mb-8">
            {socialProof.title}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-16">
            {socialProof.reviews.map((review, index) => (
              <div key={index} className="flex items-center gap-3">
                <img src={review.logo} alt={review.platform} className="h-8 w-auto object-contain" />
                <div className="text-left flex flex-col">
                  <div className="flex items-center text-[#FFC107] text-sm mb-0.5">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-sm font-bold text-text-primary">{review.rating}</span>
                  <span className="text-xs text-text-secondary">{review.count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
