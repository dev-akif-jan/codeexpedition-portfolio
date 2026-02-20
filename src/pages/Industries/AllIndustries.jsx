import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../../components/ui/Container';
import Card from '../../components/ui/Card';
import { industries, allIndustriesHero } from '../../components/industrySection/industriesData';

const AllIndustries = () => {

  return (
    <div className="bg-background-main min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background-section to-background-main py-16 lg:py-24">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-brand-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-brand-secondary/30 rounded-full blur-[120px]"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 tracking-tight leading-[1.1]">
              {allIndustriesHero.heading}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium max-w-3xl mx-auto">
              {allIndustriesHero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Grid Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <Card
                  key={industry.id}
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
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-text-secondary leading-relaxed mb-6 flex-grow">
                    {industry.description}
                  </p>

                  {/* Learn More Button */}
                  <Link
                    to={industry.href}
                    className="inline-flex items-center gap-2 text-brand-primary font-semibold text-base hover:gap-3 transition-all duration-300 group/link"
                  >
                    {allIndustriesHero.learnMoreText}
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" strokeWidth={2.5} />
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default AllIndustries;
