import React from 'react';
import ServiceHero from '../../components/serviceSection/commonServices/ServiceHero';
import AIMLPointCards from '../../components/serviceSection/AIML/AIMLPointCards';
import AIMLFrameworks from '../../components/serviceSection/AIML/AIMLFrameworks';
import AIMLBenefits from '../../components/serviceSection/AIML/AIMLBenefits';
import AIMLSuccessStory from '../../components/serviceSection/AIML/AIMLSuccessStory';
import { servicesData } from '../../components/serviceSection/servicesData';
import { CheckCircle } from 'lucide-react';
import Container from '../../components/ui/Container';

const AIDevelopment = () => {
  const data = servicesData.aiDevelopment;

  return (
    <div className="bg-background-main min-h-screen">
      {/* 1. Hero Section */}
      <ServiceHero
        icon={data.hero.icon}
        title={data.hero.title}
        description={data.hero.description}
      />

      {/* 2. AI Agent Development Section */}
      <section className="py-16 lg:py-24 bg-background-main">
        <Container>
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {data.agentDevelopmentSection.title}
            </h2>
            <p className="text-lg text-text-secondary">
              {data.agentDevelopmentSection.description}
            </p>
          </div>

          {/* Agent Cards Container with Purple Background */}
          <div className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-16 px-6 rounded-3xl border border-purple-100 shadow-sm relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200/20 blur-3xl rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 blur-3xl rounded-full -ml-32 -mb-32"></div>

            {/* Top Row - 3 Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-6xl mx-auto relative z-10">
              {data.agentDevelopmentSection.cards.slice(0, 3).map((card, index) => {
                const Icon = card.icon;
                const colors = ['bg-blue-500', 'bg-purple-500', 'bg-green-500'];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-border-subtle text-center group transform hover:-translate-y-2"
                  >
                    <div className={`w-14 h-14 ${colors[index]} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Row - 2 Wider Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
              {data.agentDevelopmentSection.cards.slice(3, 5).map((card, index) => {
                const Icon = card.icon;
                const colors = ['bg-pink-500', 'bg-orange-500'];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-500 border border-border-subtle text-center group transform hover:-translate-y-2"
                  >
                    <div className={`w-14 h-14 ${colors[index]} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:rotate-6 transition-transform duration-300 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-base text-text-secondary leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. RAG Architecture & Knowledge Management */}
      <section className="py-16 lg:py-24 bg-background-section relative overflow-hidden">
        <Container className="relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-6 tracking-tight">
              {data.ragSection.title}
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed">
              {data.ragSection.description}
            </p>
          </div>

          {/* Content Container */}
          <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-12 md:p-16 border border-emerald-100 shadow-2xl shadow-emerald-900/5">
            {/* RAG Process Cards */}
            <div className="grid md:grid-cols-4 gap-8 mb-20">
              {data.ragSection.cards.map((card, index) => {
                const Icon = card.icon;
                const colors = ['bg-emerald-500', 'bg-blue-500', 'bg-purple-500', 'bg-orange-500'];
                return (
                  <div
                    key={index}
                    className="text-center group"
                  >
                    <div className={`w-20 h-20 ${colors[index]} rounded-3xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-opacity-30`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-brand-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed px-2">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Features & Capabilities Matrix - ALIGNED & SYMMETRICAL */}
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-stretch">
              {/* Advanced Section */}
              <div className="relative group/col h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/80 to-emerald-50/20 rounded-[2.5rem] -m-4 transition-transform duration-500 group-hover/col:scale-[1.02]"></div>
                <div className="relative h-full flex flex-col">
                  <h3 className="text-2xl font-black text-text-primary mb-8 px-2 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
                    {data.ragSection.precisionRetrievalTitle}
                  </h3>
                  <div className="space-y-4 flex-grow">
                    {data.ragSection.advancedFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-emerald-100/50 group transition-all duration-300 hover:shadow-md hover:border-emerald-300">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-colors duration-300">
                          <CheckCircle className="w-5 h-5 text-emerald-600 group-hover:text-white" />
                        </div>
                        <span className="text-text-secondary font-bold text-sm leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Enterprise Section */}
              <div className="relative group/col h-full">
                <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/80 to-blue-50/20 rounded-[2.5rem] -m-4 transition-transform duration-500 group-hover/col:scale-[1.02]"></div>
                <div className="relative h-full flex flex-col">
                  <h3 className="text-2xl font-black text-text-primary mb-8 px-2 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-blue-500 rounded-full"></div>
                    {data.ragSection.enterpriseGuardTitle}
                  </h3>
                  <div className="space-y-4 flex-grow">
                    {data.ragSection.enterpriseCapabilities.map((capability, index) => (
                      <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-blue-100/50 group transition-all duration-300 hover:shadow-md hover:border-blue-300">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500 transition-colors duration-300">
                          <CheckCircle className="w-5 h-5 text-blue-600 group-hover:text-white" />
                        </div>
                        <span className="text-text-secondary font-bold text-sm leading-tight">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. MCP Server Development */}
      <AIMLPointCards
        title={data.mcpServerSection.title}
        description={data.mcpServerSection.description}
        cards={data.mcpServerSection.cards}
      />

      {/* 5. Leading AI Development Frameworks */}
      <AIMLFrameworks
        title={data.frameworksSection.title}
        description={data.frameworksSection.description}
        items={data.frameworksSection.frameworks}
      />

      {/* 6. Large Language Models We Work With */}
      <AIMLFrameworks
        title={data.llmSection.title}
        description={data.llmSection.description}
        items={data.llmSection.models}
      />

      {/* 7. Transform Your Business with AI */}
      <AIMLBenefits
        title={data.transformBusinessSection.title}
        description={data.transformBusinessSection.description}
        benefits={data.transformBusinessSection.benefits}
      />

      {/* 8. Success Story: 4Corners Legal */}
      <AIMLSuccessStory data={data.successStorySection} />
    </div>
  );
};

export default AIDevelopment;
