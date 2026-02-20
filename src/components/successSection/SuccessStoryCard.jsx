import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import { successStoriesContent } from './successStoriesData';

const getHeaderColor = (index) => {
  const colors = [
    'bg-[#F1F3F6]', // Light Cool Grey
    'bg-[#E7F1FB]', // Soft Sky Blue
    'bg-[#E3FAF1]', // Minty Green
    'bg-[#F3E8FF]', // Pastel Purple
    'bg-[#FFEBF0]', // Light Rose/Pink
  ];
  return colors[index % colors.length];
};

const SuccessStoryCard = ({ study, index = 0 }) => {
  return (
    <Card className="group flex flex-col h-full overflow-hidden border-border-subtle/50" hoverEffect={true} padding={false}>
      {/* Header Section */}
      <div className={`relative h-28 ${getHeaderColor(index)} px-6 flex flex-row items-center justify-between transition-colors duration-300`}>

        {/* Floating Logo - Left */}
        <div className="h-10 w-auto flex items-center justify-start text-brand-primary">
          {study.image ? (
            <img
              src={study.image}
              alt={study.title}
              className={`h-full w-auto object-contain object-left transition-transform duration-500 group-hover:scale-105 ${study.title.includes('4Corners') ? 'max-w-[120px]' : 'max-w-[150px]'}`}
            />
          ) : (
            <div className="flex items-center gap-2">
              <Briefcase className="w-6 h-6 opacity-40" strokeWidth={1.5} />
              <span className="font-bold text-lg opacity-40 tracking-tight">{study.title.split(':')[0]}</span>
            </div>
          )}
        </div>

        {/* Industry Badge - Right */}
        <div className="flex-shrink-0">
          <span className="text-[10px] uppercase tracking-wider font-bold text-text-secondary bg-white px-3 py-1.5 rounded-full shadow-sm border border-black/5">
            {study.industry}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-7 bg-white">

        {/* Title - AtMax 3 lines */}
        <h3 className="text-xl font-bold text-text-primary mb-4 leading-tight group-hover:text-brand-primary transition-colors duration-300 h-[4.7rem] overflow-hidden">
          {study.title}
        </h3>

        {/* Description - AtMax 4 lines */}
        <p className="text-[14px] text-text-secondary leading-relaxed mb-6 h-[5.5rem] overflow-hidden opacity-90">
          {study.description}
        </p>

        {/* Key Results */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-text-primary mb-4 uppercase tracking-widest opacity-60">
            {successStoriesContent.keyResultsLabel}
          </h4>
          <ul className="space-y-4">
            {study.keyResults.map((result, idx) => (
              <li key={idx} className="flex items-start gap-3 h-[2.7rem] overflow-hidden">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary/60 flex-shrink-0 mt-2"></span>
                <span className="text-[14px] text-text-secondary leading-snug font-medium">
                  {result}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies - Fixed at 2 lines */}
        <div className="mt-auto pt-6 border-t border-border-subtle/30">
          <div className="flex flex-wrap gap-x-2 gap-y-2.5 min-h-[4rem] content-start">
            {study.technologies.slice(0, 8).map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] whitespace-nowrap font-bold text-text-tertiary bg-background-section/60 px-2.5 py-1.5 rounded-md border border-border-subtle/40"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SuccessStoryCard;
