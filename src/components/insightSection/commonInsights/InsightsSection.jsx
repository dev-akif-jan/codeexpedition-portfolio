import React from 'react';
import Container from '../../ui/Container';
import Card from '../../ui/Card';
import Button from '../../ui/Button';

const InsightsSection = ({ icon, heading, description, link, cards }) => {
  const IconComponent = icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background-section to-background-main py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-brand-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-brand-secondary/30 rounded-full blur-[120px]"></div>
      </div>

      <Container className="relative z-10">
        {/* Icon, Heading, Description and Link */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Icon */}
          {IconComponent && (
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-primary/10 text-brand-primary mb-8">
              <IconComponent className="w-10 h-10" strokeWidth={2} />
            </div>
          )}

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6 tracking-tight leading-[1.1]">
            {heading}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium mb-8">
            {description}
          </p>

          {/* Link/Button */}
          {link && (
            <Button
              to={link.to}
              variant="primary"
              size="lg"
            >
              {link.text}
            </Button>
          )}
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const CardIconComponent = card.icon;
            return (
              <Card
                key={index}
                className="group flex flex-col"
                hoverEffect={true}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <CardIconComponent className="w-7 h-7" strokeWidth={2} />
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

export default InsightsSection;
