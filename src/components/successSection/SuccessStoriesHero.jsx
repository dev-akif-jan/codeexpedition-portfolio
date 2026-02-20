import React from 'react';
import Container from '../ui/Container';
import SearchBar from '../ui/SearchBar';
import FilterSection from '../ui/FilterSection';
import { successStoriesHero } from './successStoriesData';

const SuccessStoriesHero = ({
  searchQuery,
  onSearchChange,
  technologies,
  industries,
  selectedTechnologies,
  selectedIndustries,
  onTechnologyToggle,
  onIndustryToggle
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background-section to-background-main py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-brand-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-brand-secondary/30 rounded-full blur-[120px]"></div>
      </div>

      <Container className="relative z-10">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 tracking-tight leading-[1.1]">
            {successStoriesHero.title}
          </h1>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <SearchBar
            value={searchQuery}
            onChange={onSearchChange}
            placeholder={successStoriesHero.searchPlaceholder}
          />
        </div>

        {/* Filter Section */}
        <div className="mb-4">
          <FilterSection
            technologies={technologies}
            industries={industries}
            selectedTechnologies={selectedTechnologies}
            selectedIndustries={selectedIndustries}
            onTechnologyToggle={onTechnologyToggle}
            onIndustryToggle={onIndustryToggle}
          />
        </div>
      </Container>
    </section>
  );
};

export default SuccessStoriesHero;
