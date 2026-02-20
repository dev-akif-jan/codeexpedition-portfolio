import React from 'react';
import Container from '../../ui/Container';

const ServiceProcess = ({ title, description, items, isNumbered = false }) => {
  return (
    <section className="py-16 lg:py-24 bg-background-main">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              {title}
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              {description}
            </p>
          </div>

          {/* Process/Benefits Items */}
          <div className="space-y-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-background-section hover:shadow-lg transition-shadow duration-300"
              >
                {/* Number or Title */}
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                  {isNumbered && item.number && (
                    <span className="text-brand-primary mr-2">{item.number}.</span>
                  )}
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-base text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceProcess;
