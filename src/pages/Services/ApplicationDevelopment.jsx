import React from 'react';
import ServiceHero from '../../components/serviceSection/commonServices/ServiceHero';
import ServiceCards from '../../components/serviceSection/commonServices/ServiceCards';
import SoftwareTechCategories from '../../components/serviceSection/softwareDev/SoftwareTechCategories';
import ServiceProcess from '../../components/serviceSection/commonServices/ServiceProcess';
import SoftwareFAQ from '../../components/serviceSection/softwareDev/SoftwareFAQ';
import SoftwareWhyChoose from '../../components/serviceSection/softwareDev/SoftwareWhyChoose';
import { servicesData } from '../../components/serviceSection/servicesData';

const ApplicationDevelopment = () => {
  const data = servicesData.applicationDevelopment;

  return (
    <div className="bg-background-main min-h-screen">
      {/* 1. Hero Section - Icon, Heading, Sub-paragraph */}
      <ServiceHero
        icon={data.hero.icon}
        title={data.hero.title}
        description={data.hero.description}
      />

      {/* 2. Key Components Section - Heading, Subheading, 6 Cards */}
      <ServiceCards
        title={data.keyComponentsSection.title}
        description={data.keyComponentsSection.description}
        cards={data.keyComponentsSection.cards}
      />

      {/* 3. Technologies We Use - 5 Categories with Technologies */}
      <SoftwareTechCategories
        title={data.technologiesSection.title}
        description={data.technologiesSection.description}
        categories={data.technologiesSection.categories}
      />

      {/* 4. Industry Use Cases - Heading, Subheading, 5 Cards */}
      <ServiceProcess
        title={data.industryUseCasesSection.title}
        description={data.industryUseCasesSection.description}
        items={data.industryUseCasesSection.benefits}
        isNumbered={false}
      />

      {/* 5. FAQ Section - Frequently Asked Questions */}
      <SoftwareFAQ
        title={data.faqSection.title}
        description={data.faqSection.description}
        faqs={data.faqSection.faqs}
      />

      {/* 6. Why Choose Section - Heading, Subheading, 6 Points */}
      <SoftwareWhyChoose
        title={data.whyChooseSection.title}
        description={data.whyChooseSection.description}
        points={data.whyChooseSection.points}
      />
    </div>
  );
};

export default ApplicationDevelopment;
