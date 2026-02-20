import React from 'react';
import Container from '../../ui/Container';

const SoftwareTechCategories = ({ title, description, categories }) => {
  return (
    <section className="py-16 lg:py-24 bg-background-section">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        {/* Technology Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              {/* Category Subtitle */}
              <h3 className="text-xl md:text-2xl font-bold text-text-primary text-center mb-8">
                {category.subtitle}
              </h3>

              {/* Technologies Grid - 5 items per row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-8 max-w-5xl mx-auto">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex flex-col items-center justify-center gap-3 p-6 rounded-xl bg-white hover:bg-background-main transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    {/* Technology Icon */}
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Technology Name */}
                    <span className="text-sm font-semibold text-text-primary text-center">
                      {tech.name}
                    </span>

                    {/* Blue Divider (only if description exists) */}
                    {tech.description && (
                      <div className="w-8 h-1 bg-blue-600 rounded-full mb-1"></div>
                    )}

                    {/* Technology Description (if available) */}
                    {tech.description && (
                      <span className="text-xs text-text-secondary text-center">
                        {tech.description}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SoftwareTechCategories;
