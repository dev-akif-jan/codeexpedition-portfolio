import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart, GraduationCap, Scale, ArrowRight } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { homeSectionData } from './homeSectionData';

// Icon mapping
const iconMap = {
  'Retail & E-commerce': ShoppingBag,
  'Healthcare': Heart,
  'Education': GraduationCap,
  'Legal': Scale
};

const IndustriesSection = () => {
  const { title, description, list, ctaText, ctaLink } = homeSectionData.industries;

  return (
    <section className="bg-background-main py-12 lg:py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primaryDark mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-text-secondary font-medium">
            {description}
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {list.map((industry) => {
            const IconComponent = iconMap[industry.title];
            return (
              <Card key={industry.id} className="flex flex-col h-full group hover:shadow-lg transition-shadow duration-300 !p-5">
                {/* Icon and Title */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-brand-secondaryLight flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-brand-primary" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary whitespace-nowrap overflow-hidden text-ellipsis">
                    {industry.title}
                  </h3>
                </div>

                {/* Illustration - Fixed Height Container */}
                <div className="mb-6 flex items-center justify-center bg-background-section rounded-lg overflow-hidden" style={{ height: '160px' }}>
                  <img
                    src={industry.illustration}
                    alt={industry.title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                  {industry.description}
                </p>

                {/* Bottom Section: Logos and More Link on Same Line */}
                <div className="flex items-center justify-between gap-2 pt-4 border-t border-border-subtle">
                  {/* Company Logos */}
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {industry.logos.map((logo, index) => (
                      <div key={index} className="h-6 flex items-center justify-center flex-shrink-0">
                        <img
                          src={logo}
                          alt={`Company ${index + 1}`}
                          className="h-full w-auto max-w-[50px] object-contain opacity-70"
                        />
                      </div>
                    ))}
                  </div>

                  {/* More Link */}
                  <Link
                    to={industry.link}
                    className="inline-flex items-center text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-all duration-200 flex-shrink-0"
                  >
                    {industry.linkText} <ArrowRight className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            to={ctaLink}
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-brand-primary hover:bg-brand-primaryDark rounded-lg transition-all duration-200 shadow-sm group"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default IndustriesSection;
