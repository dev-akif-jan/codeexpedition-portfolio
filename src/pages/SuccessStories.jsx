import React from 'react';
import SuccessStoriesHero from '../components/successSection/SuccessStoriesHero';
import SuccessStoriesGrid from '../components/successSection/SuccessStoriesGrid';
import { successStories } from '../components/successSection/successStoriesData';
import { useSuccessStoriesFilter } from '../components/hooks/useSuccessStoriesFilter';

const SuccessStories = () => {

  const {
    searchQuery,
    setSearchQuery,
    selectedTechnologies,
    selectedIndustries,
    allTechnologies,
    allIndustries,
    filteredSuccessStories,
    handleTechnologyToggle,
    handleIndustryToggle
  } = useSuccessStoriesFilter(successStories);

  return (
    <div className="bg-background-main min-h-screen">
      {/* Hero Section with Title, Search, and Filters */}
      <SuccessStoriesHero
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        technologies={allTechnologies}
        industries={allIndustries}
        selectedTechnologies={selectedTechnologies}
        selectedIndustries={selectedIndustries}
        onTechnologyToggle={handleTechnologyToggle}
        onIndustryToggle={handleIndustryToggle}
      />

      {/* Success Stories Grid Section */}
      <SuccessStoriesGrid successStories={filteredSuccessStories} />
    </div>
  );
};

export default SuccessStories;
