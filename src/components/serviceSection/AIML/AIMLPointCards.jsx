import React from 'react';
import { CheckCircle } from 'lucide-react';
import Container from '../../ui/Container';

const AIMLPointCards = ({ title, description, cards }) => {
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

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const Icon = card.icon;
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
                <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Points */}
                <ul className="space-y-3">
                  {card.points.map((point, pointIndex) => (
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

export default AIMLPointCards;
