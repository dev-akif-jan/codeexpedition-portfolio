import React from 'react';
import Container from '../../components/ui/Container';
import AIDevToolset from '../../components/insightSection/AIDevelopment/AIDevToolset';
import AIDevWorkflow from '../../components/insightSection/AIDevelopment/AIDevWorkflow';
import AIDevBenefits from '../../components/insightSection/AIDevelopment/AIDevBenefits';
import { insightsData } from '../../components/insightSection/insightsData';

const AIAssistedDevelopment = () => {
  const data = insightsData.aiAssistedDevelopment;
  const IconComponent = data.icon;

  return (
    <div className="bg-background-main min-h-screen">
      {/* Hero Section with Icon, Heading and Subheading */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background-section to-background-main py-16 lg:py-24">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-brand-primary/20 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-brand-secondary/30 rounded-full blur-[120px]"></div>
        </div>

        <Container className="relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-brand-primary/10 text-brand-primary mb-8">
              <IconComponent className="w-10 h-10" strokeWidth={2} />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6 tracking-tight leading-[1.1]">
              {data.title}
            </h1>

            {/* Subheading/Description */}
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium">
              {data.description}
            </p>
          </div>
        </Container>
      </section>

      {/* AI Toolset Section - 5 Cards */}
      <AIDevToolset
        heading={data.toolset.heading}
        subheading={data.toolset.subheading}
        tools={data.toolset.tools}
      />

      {/* AI Workflow Section - 3 Cards with Images */}
      <AIDevWorkflow
        heading={data.workflow.heading}
        subheading={data.workflow.subheading}
        workflows={data.workflow.steps}
      />

      {/* Benefits Section - 4 Cards */}
      <AIDevBenefits
        heading={data.benefits.heading}
        subheading={data.benefits.subheading}
        benefits={data.benefits.items}
      />
    </div>
  );
};

export default AIAssistedDevelopment;
