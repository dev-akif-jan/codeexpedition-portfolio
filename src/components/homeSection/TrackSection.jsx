import React from 'react';
import Container from '../ui/Container';
import { homeSectionData } from './homeSectionData';

const TrackSection = () => {
  const { title, description, stats } = homeSectionData.track;

  return (
    <section className="bg-background-section py-12 lg:py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-brand-primary mb-4">
                {stat.value}
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-2">
                {stat.title}
              </h4>
              <p className="text-text-secondary">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrackSection;
