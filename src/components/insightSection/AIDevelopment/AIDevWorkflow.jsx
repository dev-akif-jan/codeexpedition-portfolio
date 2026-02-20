import React from 'react';
import Container from '../../ui/Container';
import Card from '../../ui/Card';

const AIDevWorkflow = ({ heading, subheading, workflows }) => {
  return (
    <section className="py-16 lg:py-24 bg-background-section">
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

        {/* Workflow Cards - 3 cards with images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {workflows.map((workflow, index) => (
            <Card
              key={index}
              className="group flex flex-col"
              hoverEffect={true}
            >
              {/* Image */}
              <div className="mb-6 rounded-xl overflow-hidden bg-brand-primary/5 p-6 flex items-center justify-center min-h-[200px]">
                <img
                  src={workflow.image}
                  alt={workflow.title}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                {workflow.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                {workflow.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AIDevWorkflow;
