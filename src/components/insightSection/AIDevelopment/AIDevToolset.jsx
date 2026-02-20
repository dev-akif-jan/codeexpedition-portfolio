import React from 'react';
import Container from '../../ui/Container';
import Card from '../../ui/Card';

const AIDevToolset = ({ heading, subheading, tools }) => {
  return (
    <section className="py-16 lg:py-24 bg-background-main">
      <Container>
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4 tracking-tight">
            {heading}
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            {subheading}
          </p>
        </div>

        {/* Tools Grid - 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {tools.map((tool, index) => {
            const IconComponent = tool.icon;
            return (
              <Card
                key={index}
                className={`group flex flex-col ${index === 3 || index === 4 ? 'md:col-span-1 lg:col-span-1' : ''}`}
                hoverEffect={true}
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-6 h-6" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  {tool.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AIDevToolset;
