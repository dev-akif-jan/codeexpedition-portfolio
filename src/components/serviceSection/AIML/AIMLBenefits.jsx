import React from 'react';
import Container from '../../ui/Container';

const AIMLBenefits = ({ title, description, benefits }) => {
  return (
    <section className="py-16 lg:py-24 bg-background-main">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-lg text-text-secondary">
            {description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-border-subtle group"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-brand-secondaryLight rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300">
                  <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-text-secondary mb-4">
                  {benefit.description}
                </p>

                {/* Highlight */}
                {benefit.highlight && (
                  <p className="text-sm text-brand-primary font-medium">
                    → {benefit.highlight}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AIMLBenefits;
