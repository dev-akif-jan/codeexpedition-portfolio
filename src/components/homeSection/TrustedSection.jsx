import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { homeSectionData } from './homeSectionData';

const TrustedSection = () => {
  const { title, description, ctaText, ctaLink, logos } = homeSectionData.trusted;

  return (
    <section className="bg-background-main py-12 lg:py-16">
      <Container>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-8">
            {description}
          </p>

          <Link
            to={ctaLink}
            className="inline-flex items-center text-lg font-medium text-brand-primary hover:text-brand-primaryDark transition-colors group"
          >
            {ctaText}
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Logo Grid - Direct Tailwind classes, no wrapper components */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-4 md:gap-y-2 gap-x-8 md:gap-x-16 items-center justify-items-center max-w-6xl mx-auto w-full">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center w-full h-16 md:h-20">
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto max-w-[85%] object-contain"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrustedSection;
