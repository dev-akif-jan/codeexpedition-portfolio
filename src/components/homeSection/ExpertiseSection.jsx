import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Code, Database, Users, MessageSquare } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { homeSectionData } from './homeSectionData';

// Icon mapping for AI solutions
const aiSolutionIcons = {
  'Enterprise Agents': MessageSquare,
  'Workflow Engineering': Cpu,
  'LLM Solutions': Database
};

// Icon mapping for services
const serviceIcons = {
  'Custom Software Engineering': Code,
  'Cloud & Data Infrastructure': Database,
  'On-Demand Talent Augmentation': Users
};

const ExpertiseSection = () => {
  const { title, description, aiAutomation, services, footerCTA } = homeSectionData.expertise;

  return (
    <section className="bg-background-main py-12 lg:py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        {/* Feature Block: Intelligent Automation (AI) */}
        <div className="bg-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden mb-12">
          <div className="p-8 md:p-12">
            <div className="mb-10">
              <span className="inline-block text-brand-primary font-bold text-sm tracking-widest uppercase mb-3">
                {aiAutomation.badge}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                {aiAutomation.title}
              </h3>
              <p className="text-lg text-text-secondary max-w-3xl">
                {aiAutomation.description}
              </p>
            </div>

            {/* AI Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {aiAutomation.solutions.map((solution, index) => {
                const IconComponent = aiSolutionIcons[solution.title];
                return (
                  <Card key={index} variant={solution.variant} className={solution.variant === 'gradient' ? 'relative group overflow-hidden' : ''}>
                    {solution.badge && (
                      <div className="absolute top-4 right-4 flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-white/90">{solution.badge}</span>
                      </div>
                    )}
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <IconComponent className={`w-8 h-8 ${solution.variant === 'gradient' ? 'text-brand-secondary' : 'text-brand-primary'}`} />
                          <h4 className={`text-xl font-bold ${solution.variant === 'gradient' ? 'text-white' : 'text-text-primary'}`}>
                            {solution.title}
                          </h4>
                        </div>
                        <p className={`text-sm leading-relaxed ${solution.variant === 'gradient' ? 'text-gray-300 mb-6' : 'text-text-secondary'}`}>
                          {solution.description}
                        </p>
                      </div>
                      {solution.link && (
                        <Link to={solution.link} className="inline-flex items-center text-sm font-semibold text-brand-primary hover:text-brand-secondary transition-colors">
                          {solution.linkText} <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Action Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to={aiAutomation.primaryCTA.to}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-brand-primary hover:bg-brand-primaryDark rounded-lg transition-all duration-200 shadow-sm group"
              >
                {aiAutomation.primaryCTA.text}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              <Link
                to={aiAutomation.secondaryCTA.to}
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-bold text-white bg-text-primary hover:bg-brand-primaryDark rounded-lg transition-all duration-200 shadow-sm group"
              >
                {aiAutomation.secondaryCTA.text}
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = serviceIcons[service.title];
            return (
              <Card key={index} padding={false} className="flex flex-col h-full hover:shadow-md transition-shadow duration-300">
                <div className="p-6 md:p-8 flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <IconComponent className="w-10 h-10 text-brand-primary" />
                    <h4 className="text-xl font-bold text-text-primary">{service.title}</h4>
                  </div>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs font-medium text-brand-primaryDark">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto border-t border-border-subtle bg-gray-50/50 p-4">
                  <Link to={service.link} className="inline-flex items-center text-xs font-bold text-brand-primary hover:text-brand-primaryDark transition-colors group">
                    {service.linkText} <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Footer Action */}
        <div className="text-center">
          <Link
            to={footerCTA.to}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-primary hover:bg-brand-primaryDark rounded-lg transition-colors shadow-sm"
          >
            {footerCTA.text} <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

      </Container>
    </section>
  );
};

export default ExpertiseSection;
