import React from 'react';
import { Home, Zap, Trophy, ArrowRight, CheckCircle2 } from 'lucide-react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import { homeSectionData } from './homeSectionData';

// Icon mapping for process steps
const processIcons = {
  'Discovery & Strategy': Home,
  'AI-Powered Development': Zap,
  'Continuous Excellence': Trophy
};

const WorkSection = () => {
  const { title, description, badge, process, vibeCode } = homeSectionData.work;

  return (
    <section className="bg-background-main py-12 lg:py-16">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
            {description}
          </p>
          <div className="inline-flex items-center gap-2 text-brand-primary font-semibold text-base md:text-lg">
            <span>{badge.split(' + ')[0]}</span>
            <span>+</span>
            <span>{badge.split(' + ')[1]}</span>
          </div>
        </div>

        {/* Three Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          {process.map((step) => {
            const IconComponent = processIcons[step.title];
            return (
              <div key={step.id} className="relative group">
                {/* Icon positioned half outside, half inside */}
                <div className="absolute -top-7 left-6 w-14 h-14 bg-gradient-to-br from-brand-primary to-brand-primaryDark rounded-xl flex items-center justify-center shadow-lg z-10 transition-transform duration-300 group-hover:scale-110">
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <Card variant="default" className="pt-12 overflow-visible h-full" hoverEffect={true}>
                  <div className="flex flex-col h-full">
                    <h4 className="text-xl font-bold text-text-primary mb-4">
                      {step.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.points.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Our Developers Vibe Code Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-border-subtle shadow-sm overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Top Badge and Title */}
            <div className="text-center max-w-4xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/10 rounded-full mb-6">
                <Zap className="w-4 h-4 text-brand-primary" />
                <span className="text-sm font-semibold text-brand-primary">
                  {vibeCode.badge}
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4">
                {vibeCode.title}
              </h3>
              <p className="text-lg text-text-secondary">
                {vibeCode.description}
              </p>
            </div>

            {/* Two Column Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Left Section: AI Tools in Single Row */}
              <div className="lg:col-span-3">
                <p className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-6">
                  {vibeCode.subtitle}
                </p>
                <div className="flex items-center justify-between gap-4">
                  {vibeCode.tools.map((tool, index) => (
                    <div key={index} className="group text-center flex-1">
                      <div className={`rounded-lg border border-border-subtle p-3 mb-2 transition-all duration-300 hover:shadow-md hover:border-brand-primary/30 flex items-center justify-center aspect-square ${tool.highlight ? 'bg-brand-secondaryLight' : 'bg-background-card'
                        }`}>
                        <img
                          src={tool.logo}
                          alt={tool.alt}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-sm font-semibold text-text-primary group-hover:text-brand-primary transition-colors duration-300">
                        {tool.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Section: Productivity Stats */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="text-center lg:text-left">
                  <div className="mb-6">
                    <div className="text-6xl font-bold text-brand-primary mb-4">
                      {vibeCode.stats.multiplier}
                    </div>
                    <h4 className="text-2xl font-bold text-text-primary mb-3">
                      {vibeCode.stats.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {vibeCode.stats.description}
                    </p>
                  </div>

                  <a
                    href={vibeCode.cta.link}
                    className="inline-flex items-center justify-center w-full lg:w-auto px-6 py-3.5 text-base font-bold text-white bg-brand-primary hover:bg-brand-primaryDark rounded-lg transition-all duration-200 shadow-sm group"
                  >
                    {vibeCode.cta.text}
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkSection;
