import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { homeSectionData } from './homeSectionData';

const FeedbackSection = () => {
  const { title, description, testimonials } = homeSectionData.feedback;

  return (
    <section className="bg-background-main py-12 lg:py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-primaryDark mb-4 tracking-tight">
            {title}
          </h2>
          <p className="text-base md:text-lg text-text-secondary font-medium">
            {description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col h-full">
              {/* Author Info at Top */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-brand-primary"
                />
                <div>
                  <h4 className="text-base font-bold text-text-primary">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-brand-primary font-semibold">
                    {testimonial.title}
                  </p>
                  <p className="text-xs text-text-secondary">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Quote Text */}
              <p className="text-base md:text-lg text-text-secondary leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeedbackSection;
