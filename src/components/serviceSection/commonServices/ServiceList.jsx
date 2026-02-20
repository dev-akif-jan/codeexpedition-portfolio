import React from 'react';
import { CheckCircle } from 'lucide-react';
import Container from '../../ui/Container';

const ServiceList = ({ title, description, items }) => {
  return (
    <section className="py-16 lg:py-24 bg-background-section">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
              {title}
            </h2>
            <p className="text-base md:text-lg text-text-secondary leading-relaxed">
              {description}
            </p>
          </div>

          {/* List Items */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-background-main hover:bg-brand-primary/5 transition-colors duration-200"
              >
                <CheckCircle
                  className="w-6 h-6 text-brand-primary flex-shrink-0"
                  strokeWidth={2.5}
                />
                <span className="text-base md:text-lg text-text-secondary">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServiceList;
