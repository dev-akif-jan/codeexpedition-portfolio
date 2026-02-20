import React from 'react';
import Container from '../components/ui/Container';
import Card from '../components/ui/Card';
import { Briefcase } from 'lucide-react';
import { careersHero, careersStatus, careersPerks, careersStayOnRadar } from '../components/commonSection/careersData';

const Careers = () => {
  // Dynamic calculation for "Next Review" date
  const getNextReviewDate = () => {
    const now = new Date();
    const currentMonth = now.getMonth(); // 0-11
    const currentYear = now.getFullYear();

    // Quarter logic: Q1 (0-2), Q2 (3-5), Q3 (6-8), Q4 (9-11)
    const currentQuarter = Math.floor(currentMonth / 3) + 1;

    let nextQuarter, nextYear;
    if (currentQuarter === 4) {
      nextQuarter = 1;
      nextYear = currentYear + 1;
    } else {
      nextQuarter = currentQuarter + 1;
      nextYear = currentYear;
    }

    return `Q${nextQuarter} ${nextYear}`;
  };

  return (
    <div className="bg-background-main pb-20">
      {/* 1. Header Hero */}
      <section className="pt-24 pb-20 bg-background-section border-b border-border-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 blur-3xl rounded-full -mr-48 -mt-48"></div>
        <Container>
          <div className="text-center max-w-4xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-border-subtle text-text-secondary text-xs font-bold rounded-full mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-border-subtle"></span>
              {careersHero.hiringStatus}
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-text-primary mb-8 tracking-tight leading-[1.1]">
              {careersHero.heading.split('Expedition')[0]}
              <span className="text-brand-primary">Expedition</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
              {careersHero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* 2. Status Section */}
      <section className="py-24 bg-white border-b border-border-subtle">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-10 inline-flex items-center justify-center w-20 h-20 rounded-[2rem] bg-brand-secondaryLight">
              <Briefcase className="w-10 h-10 text-brand-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-8">{careersStatus.title}</h2>
            <div className="p-12 md:p-16 rounded-[2.5rem] border-2 border-dashed border-border-subtle bg-red-500/[0.02]">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-500/10 text-red-600 text-xs font-black rounded-full mb-8 uppercase tracking-widest border border-red-500/10">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                {careersStatus.statusBadge}
              </div>
              <p className="text-xl md:text-2xl text-text-primary font-black mb-4 leading-relaxed">
                {careersStatus.mainMessage}
              </p>
              <p className="text-lg text-text-secondary font-medium mb-10 max-w-lg mx-auto leading-relaxed">
                {careersStatus.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href={`mailto:${careersStatus.ctaEmail}`}
                  className="px-8 py-4 bg-brand-primary text-white font-black rounded-xl hover:bg-brand-primary/90 transition-all shadow-lg shadow-brand-primary/20"
                >
                  {careersStatus.ctaText}
                </a>
                <span className="text-xs font-black text-text-secondary uppercase tracking-[0.2em] bg-white px-4 py-2 rounded-lg border border-border-subtle">
                  Next Review: {getNextReviewDate()}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Perks Section */}
      <section className="py-24 bg-background-main border-y border-border-subtle">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">{careersPerks.title}</h2>
            <p className="text-lg text-text-secondary font-medium">{careersPerks.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careersPerks.items.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <Card key={index} className="group flex flex-col items-center text-center h-full" hoverEffect={true}>
                  <div className="w-16 h-16 rounded-2xl bg-brand-secondaryLight flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-all duration-500 group-hover:rotate-6">
                    <Icon className="text-brand-primary group-hover:text-white w-8 h-8 transition-colors" />
                  </div>
                  <h3 className="text-xl font-black text-text-primary mb-5 group-hover:text-brand-primary transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed font-medium">
                    {perk.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Stay on Radar Section */}
      <section className="py-24 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-black text-text-primary mb-6 uppercase tracking-tight">{careersStayOnRadar.title}</h2>
            <p className="text-lg text-text-secondary mb-10 font-medium">
              {careersStayOnRadar.description}
            </p>
            <a
              href={`mailto:${careersStayOnRadar.email}`}
              className="inline-block px-10 py-4 bg-brand-primary text-white text-lg font-black rounded-xl hover:bg-brand-primary/90 transition-colors shadow-xl shadow-brand-primary/20"
            >
              {careersStayOnRadar.email}
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Careers;
