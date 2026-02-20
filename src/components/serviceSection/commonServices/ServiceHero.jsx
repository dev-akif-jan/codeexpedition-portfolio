import React from 'react';
import Container from '../../ui/Container';

const ServiceHero = ({ icon, title, description }) => {
  const IconComponent = icon;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background-section to-background-main py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-brand-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-brand-secondary/30 rounded-full blur-[120px]"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          {IconComponent && (
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-primary text-white mb-8">
              <IconComponent className="w-10 h-10" strokeWidth={2} />
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-primary mb-6 tracking-tight leading-[1.1]">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ServiceHero;
