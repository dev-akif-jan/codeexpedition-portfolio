import { useState, useMemo, useCallback } from 'react';

export const useSuccessStoriesFilter = (successStories) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [selectedIndustries, setSelectedIndustries] = useState([]);

  // Extract unique technologies
  const allTechnologies = useMemo(() => {
    const techSet = new Set();
    successStories.forEach(study => {
      study.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort();
  }, [successStories]);

  // Extract unique industries
  const allIndustries = useMemo(() => {
    const industrySet = new Set();
    successStories.forEach(study => industrySet.add(study.industry));
    return Array.from(industrySet).sort();
  }, [successStories]);

  // Filter success stories
  const filteredSuccessStories = useMemo(() => {
    return successStories.filter(study => {
      // Search filter
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch = !searchQuery ||
        study.title.toLowerCase().includes(searchLower) ||
        study.description.toLowerCase().includes(searchLower) ||
        study.industry.toLowerCase().includes(searchLower) ||
        study.keyResults.some(result => result.toLowerCase().includes(searchLower)) ||
        study.technologies.some(tech => tech.toLowerCase().includes(searchLower));

      // Technology filter
      const matchesTechnology = selectedTechnologies.length === 0 ||
        selectedTechnologies.some(tech => study.technologies.includes(tech));

      // Industry filter
      const matchesIndustry = selectedIndustries.length === 0 ||
        selectedIndustries.includes(study.industry);

      return matchesSearch && matchesTechnology && matchesIndustry;
    });
  }, [searchQuery, selectedTechnologies, selectedIndustries, successStories]);

  // Toggle handlers
  const handleTechnologyToggle = useCallback((tech) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  }, []);

  const handleIndustryToggle = useCallback((industry) => {
    setSelectedIndustries(prev =>
      prev.includes(industry)
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    selectedTechnologies,
    selectedIndustries,
    allTechnologies,
    allIndustries,
    filteredSuccessStories,
    handleTechnologyToggle,
    handleIndustryToggle
  };
};
