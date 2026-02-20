import React from 'react';
import Container from '../../ui/Container';
import Card from '../../ui/Card';

const ServiceCards = ({ title, description, cards }) => {
  return (
    <section className="py-16 lg:py-24 bg-background-main">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={index}
                className="group flex flex-col"
                hoverEffect={true}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-7 h-7" strokeWidth={2} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-base text-text-secondary leading-relaxed">
                  {card.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServiceCards;
