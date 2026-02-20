import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import { homeSectionData } from './homeSectionData';

const FeaturedSection = () => {
  const { title, description, successStories, ctaText, ctaLink } = homeSectionData.featured;

  return (
    <section className="bg-background-main py-12 lg:py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primaryDark mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-text-secondary font-medium">
            {description}
          </p>
        </div>

        {/* Success Stories Container */}
        <div className="space-y-8 md:space-y-10">
          {successStories.map((successStory) => (
            <div
              key={successStory.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center ${successStory.layout === 'text-left' ? '' : ''
                }`}
            >
              {/* Text Content */}
              <div className={successStory.layout === 'text-left' ? 'order-2 lg:order-1' : 'order-2 lg:pl-6'}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {successStory.badges.map((badge, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 text-[10px] font-black rounded-full tracking-wider ${badge.variant === 'primary'
                        ? 'text-white bg-brand-primary'
                        : 'text-brand-primary bg-brand-secondaryLight'
                        }`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-text-primary mb-4 leading-tight">
                  {successStory.title}
                </h3>

                <p className="text-base md:text-lg text-text-secondary mb-6 leading-relaxed">
                  {successStory.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {successStory.technologies.map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-[10px] font-bold text-text-primary bg-background-main border border-border-subtle rounded-md uppercase tracking-wider">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  to={successStory.link}
                  className="inline-flex items-center text-base font-bold text-brand-primary hover:text-brand-primaryDark transition-colors group"
                >
                  {successStory.linkText}
                  <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <div className={successStory.layout === 'text-left' ? 'order-1 lg:order-2' : 'order-1'}>
                <div className="rounded-2xl overflow-hidden shadow-xl border border-border-subtle transition-transform hover:scale-[1.01]">
                  <img
                    src={successStory.image}
                    alt={successStory.imageAlt}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Standardized Button */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            to={ctaLink}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-brand-primary hover:bg-brand-primaryDark rounded-lg transition-all duration-200 shadow-sm group hover:-translate-y-1"
          >
            {ctaText}
            <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default FeaturedSection;
