import React from 'react';
import Container from '../../ui/Container';
import Card from '../../ui/Card';

const TechRadarStack = ({ categories }) => {
  return (
    <section className="relative overflow-hidden bg-background-main py-16 lg:py-24">
      <Container>
        {/* 8 Cards Grid - 2 columns on desktop, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group flex flex-col"
              hoverEffect={true}
            >
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                {category.title}
              </h3>

              {/* Category Description */}
              <p className="text-sm text-text-secondary mb-6 leading-relaxed">
                {category.description}
              </p>

              {/* Technology Icons Grid - 3x2 layout */}
              <div className="grid grid-cols-3 gap-6 mt-auto">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-background-section/50 hover:bg-background-section transition-all duration-300 hover:scale-105 hover:shadow-md"
                  >
                    {/* Technology Icon */}
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Technology Name */}
                    <span className="text-xs font-semibold text-text-primary text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechRadarStack;
