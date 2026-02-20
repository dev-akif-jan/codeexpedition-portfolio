import React from 'react';
import { CheckCircle } from 'lucide-react';
import Container from '../../ui/Container';

const AIMLFrameworks = ({ title, description, items }) => {
  return (
    <section className="py-16 lg:py-24 bg-background-section">
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

        {/* Frameworks Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            const isImageIcon = typeof item.icon === 'string';

            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-border-subtle"
              >
                {/* Icon and Name */}
                <div className="flex items-center gap-4 mb-4">
                  {isImageIcon ? (
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-brand-secondaryLight rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-brand-primary" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-text-primary">
                    {item.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-text-secondary mb-6">
                  {item.description}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {item.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-brand-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-text-secondary">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default AIMLFrameworks;
