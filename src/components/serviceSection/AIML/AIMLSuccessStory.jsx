import React from 'react';
import { Target, TrendingUp, Clock, Award, ChevronRight } from 'lucide-react';
import screenshotImg from '../../../assets/Services/screenshot-1.webp';
import Container from '../../ui/Container';

const AIMLSuccessStory = ({ data }) => {
  const resultIcons = [Clock, Target, TrendingUp, Award];

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <Container>
        {/* 1. Header with integrated style - CENTRIC */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-12 h-1 bg-brand-primary rounded-full"></div>
            <span className="text-brand-primary font-bold tracking-widest uppercase text-sm">
              {data.showcaseLabel}
            </span>
            <div className="w-12 h-1 bg-brand-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-6 leading-tight">
            {data.title}
          </h2>
          <p className="text-lg text-text-secondary font-medium">
            {data.description}
          </p>
        </div>

        {/* 2. Main Story Card - Integrated Device Mockup Design */}
        <div className="relative">
          {/* Background Decorative Blob */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-secondaryLight/30 blur-[120px] rounded-full -z-10"></div>

          <div className="bg-background-main rounded-[3rem] border border-border-subtle p-8 md:p-12 lg:p-14 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left: Text Content */}
              <div className="order-2 lg:order-1">
                <div className="inline-block px-4 py-1.5 bg-brand-primary text-white text-xs font-bold rounded-full mb-6">
                  {data.badge}
                </div>
                <h3 className="text-3xl font-extrabold text-text-primary mb-6">
                  {data.projectTitle}
                </h3>
                <p className="text-lg text-text-secondary mb-10 leading-relaxed">
                  {data.projectDescription}
                </p>

                {/* Features as sleek list */}
                <div className="space-y-6 mb-12">
                  {data.features.map((feature, index) => (
                    <div key={index} className="flex gap-4 group cursor-default">
                      <div className="w-1 h-auto bg-brand-primary/20 group-hover:bg-brand-primary transition-all duration-300 rounded-full"></div>
                      <div>
                        <h4 className="font-bold text-text-primary group-hover:text-brand-primary transition-colors duration-300">{feature.title}</h4>
                        <p className="text-sm text-text-secondary">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Results Grid - Integrated into the flow */}
                <div className="grid grid-cols-2 gap-4">
                  {data.results.map((result, index) => {
                    const Icon = resultIcons[index] || TrendingUp;
                    return (
                      <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-border-subtle flex flex-col gap-3 hover:shadow-md transition-all duration-300 border-l-4 border-l-brand-primary">
                        <Icon className="w-5 h-5 text-brand-primary" />
                        <span className="text-sm font-bold text-text-primary leading-tight">{result}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right: Premium Browser Mockup */}
              <div className="order-1 lg:order-2 relative group">
                {/* Browser Frame */}
                <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-border-subtle transform group-hover:-rotate-1 transition-transform duration-500">
                  {/* Browser Header */}
                  <div className="bg-background-section px-4 py-3 border-b border-border-subtle flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                    </div>
                    <div className="mx-auto bg-white rounded-md h-5 w-48 border border-border-subtle flex items-center px-3">
                      <div className="w-2 h-2 rounded-full bg-brand-primary/20"></div>
                    </div>
                  </div>

                  {/* The Screenshot */}
                  <div className="p-1 bg-white">
                    <img
                      src={screenshotImg}
                      alt="Project Screenshot"
                      className="w-full h-auto object-cover rounded-b-xl"
                    />
                  </div>
                </div>

                {/* Floating Stat Chips */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border-subtle flex items-center gap-3 animate-bounce-slow">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-text-secondary tracking-widest">{data.efficiencyStat.label}</p>
                    <p className="text-sm font-bold text-text-primary">{data.efficiencyStat.value}</p>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-border-subtle flex items-center gap-3 animate-float">
                  <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-text-secondary tracking-widest">{data.teamStatLabel}</p>
                    <p className="text-sm font-bold text-text-primary">{data.team}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom CTA Action Area */}
            <div className="mt-10 pt-10 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-4">
                <p className="text-sm font-bold text-text-secondary uppercase tracking-widest">{data.builtWithLabel}</p>
                <div className="flex flex-wrap gap-2">
                  {data.technologies.split(',').map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-background-section text-text-primary text-[10px] font-bold rounded-lg border border-border-subtle uppercase">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="/success-stories"
                className="inline-flex items-center gap-3 text-white bg-text-primary px-10 py-4 rounded-full font-bold hover:bg-brand-primary transition-all duration-300 shadow-xl hover:-translate-y-1 group"
              >
                {data.exploreCTAText}
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </Container>

      <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(10px); }
                }
                .animate-float {
                    animation: float 4s ease-in-out infinite;
                }
                .animate-bounce-slow {
                    animation: bounce-slow 5s ease-in-out infinite;
                }
            `}</style>
    </section>
  );
};

export default AIMLSuccessStory;
