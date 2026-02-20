import React from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import { aboutHero, aboutStory, aboutStats, aboutValues, aboutLeadership } from '../components/commonSection/aboutData';

const About = () => {
  return (
    <div className="bg-background-main pb-20">
      {/* 1. Header Section */}
      <section className="pt-24 pb-20 bg-background-section border-b border-border-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-3xl rounded-full -mr-48 -mt-48"></div>
        <Container>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-brand-primary text-white text-xs font-bold rounded-full mb-8 shadow-lg shadow-brand-primary/20">
              {aboutHero.badge}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-text-primary mb-8 tracking-tight leading-[1.1]">
              {aboutHero.heading.split('Digital Mastery')[0]}
              <span className="text-brand-primary">Digital Mastery</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
              {aboutHero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Our Story Section */}
      <section className="py-24 bg-white border-b border-border-subtle">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
              <div className="sticky top-32">
                <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">{aboutStory.title}</h2>
                <div className="w-20 h-2 bg-brand-primary rounded-full"></div>
              </div>

              <div className="space-y-8">
                <p className="text-xl md:text-2xl font-bold text-text-primary leading-tight">
                  {aboutStory.highlight}
                </p>
                <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                  {aboutStory.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Integrated seamlessly */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 pt-20 mt-20 border-t border-border-subtle">
              {aboutStats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl md:text-5xl font-black text-brand-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <p className="text-[10px] md:text-xs font-black text-text-secondary uppercase tracking-[0.3em]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Our Values */}
      <section className="py-24 bg-background-main">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">{aboutValues.title}</h2>
            <p className="text-lg text-text-secondary font-medium">{aboutValues.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutValues.items.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="group flex flex-col items-center text-center py-12 px-10 rounded-[2rem]"
                  hoverEffect={true}
                >
                  <div className="w-16 h-16 rounded-2xl bg-brand-secondaryLight flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500 group-hover:rotate-6">
                    <Icon className="text-brand-primary group-hover:text-white w-8 h-8 transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-text-primary mb-5 group-hover:text-brand-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Leadership */}
      <section className="py-24 bg-background-section border-y border-border-subtle">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">{aboutLeadership.title}</h2>
            <p className="text-lg text-text-secondary font-medium">{aboutLeadership.description}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
            {aboutLeadership.members.map((member, index) => (
              <div key={index} className="text-center group flex flex-col items-center">
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-brand-primary/20 rounded-full blur-2xl group-hover:bg-brand-primary/40 transition-colors duration-500"></div>
                  <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full bg-brand-primary flex items-center justify-center text-white text-5xl md:text-6xl font-black shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
                    {member.initials}
                  </div>
                </div>
                <h4 className="text-2xl font-black text-text-primary mb-2 group-hover:text-brand-primary transition-colors">
                  {member.name}
                </h4>
                <div className="mb-6">
                  <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest px-4 py-1.5 bg-white rounded-full shadow-sm border border-brand-primary/10">
                    {member.role}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed max-w-[280px] font-medium italic">
                  "{member.bio}"
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
