import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FilterSection = ({
  technologies = [],
  industries = [],
  selectedTechnologies = [],
  selectedIndustries = [],
  onTechnologyToggle,
  onIndustryToggle
}) => {
  const [showAllTech, setShowAllTech] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const INITIAL_TECH_COUNT = 8;
  const INITIAL_INDUSTRY_COUNT = 5;

  const displayedTechnologies = useMemo(() => {
    return showAllTech ? technologies : technologies.slice(0, INITIAL_TECH_COUNT);
  }, [technologies, showAllTech]);

  const displayedIndustries = useMemo(() => {
    return showAllIndustries ? industries : industries.slice(0, INITIAL_INDUSTRY_COUNT);
  }, [industries, showAllIndustries]);

  const FilterButton = ({ label, isSelected, onClick }) => (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 border ${isSelected
        ? 'bg-brand-primary text-white border-brand-primary'
        : 'bg-background-section/50 text-text-secondary border-border-subtle hover:border-brand-primary hover:text-brand-primary'
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="bg-white border border-border-subtle rounded-xl p-5 md:p-6 shadow-sm">
      <h3 className="text-lg font-bold text-text-primary mb-4">Filter by</h3>

      {/* Technologies Filter */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Technologies</h4>
          {technologies.length > INITIAL_TECH_COUNT && (
            <button
              onClick={() => setShowAllTech(!showAllTech)}
              className="text-sm font-medium text-brand-primary hover:text-brand-primaryDark transition-colors"
            >
              <span className="flex items-center gap-1">
                {showAllTech ? 'Show less' : 'Show all'}
                {showAllTech ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {displayedTechnologies.map((tech) => (
            <FilterButton
              key={tech}
              label={tech}
              isSelected={selectedTechnologies.includes(tech)}
              onClick={() => onTechnologyToggle(tech)}
            />
          ))}
          {!showAllTech && technologies.length > INITIAL_TECH_COUNT && (
            <button
              onClick={() => setShowAllTech(true)}
              className="px-3 py-1.5 text-sm font-medium rounded-full text-text-secondary bg-background-section/50 border border-border-subtle hover:border-brand-primary"
            >
              +{technologies.length - INITIAL_TECH_COUNT} more
            </button>
          )}
        </div>
      </div>

      {/* Industries Filter */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">Industries</h4>
          {industries.length > INITIAL_INDUSTRY_COUNT && (
            <button
              onClick={() => setShowAllIndustries(!showAllIndustries)}
              className="text-sm font-medium text-brand-primary hover:text-brand-primaryDark transition-colors"
            >
              <span className="flex items-center gap-1">
                {showAllIndustries ? 'Show less' : 'Show all'}
                {showAllIndustries ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </span>
            </button>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {displayedIndustries.map((industry) => (
            <FilterButton
              key={industry}
              label={industry}
              isSelected={selectedIndustries.includes(industry)}
              onClick={() => onIndustryToggle(industry)}
            />
          ))}
          {!showAllIndustries && industries.length > INITIAL_INDUSTRY_COUNT && (
            <button
              onClick={() => setShowAllIndustries(true)}
              className="px-3 py-1.5 text-sm font-medium rounded-full text-text-secondary bg-background-section/50 border border-border-subtle hover:border-brand-primary"
            >
              +{industries.length - INITIAL_INDUSTRY_COUNT} more
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
