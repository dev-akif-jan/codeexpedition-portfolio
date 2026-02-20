import React from 'react';
import ServiceHero from '../../components/serviceSection/commonServices/ServiceHero';
import ServiceCards from '../../components/serviceSection/commonServices/ServiceCards';
import ServiceList from '../../components/serviceSection/commonServices/ServiceList';
import ServiceProcess from '../../components/serviceSection/commonServices/ServiceProcess';
import { servicesData } from '../../components/serviceSection/servicesData';

const StaffAugmentation = () => {
  const data = servicesData.staffAugmentation;

  return (
    <div className="bg-background-main min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        icon={data.hero.icon}
        title={data.hero.title}
        description={data.hero.description}
      />

      {/* Talent Solutions Cards Section */}
      <ServiceCards
        title={data.servicesSection.title}
        description={data.servicesSection.description}
        cards={data.servicesSection.cards}
      />

      {/* Areas of Expertise List */}
      <ServiceList
        title={data.expertiseSection.title}
        description={data.expertiseSection.description}
        items={data.expertiseSection.items}
      />

      {/* Engagement Process Section */}
      <ServiceProcess
        title={data.processSection.title}
        description={data.processSection.description}
        items={data.processSection.steps}
        isNumbered={true}
      />

      {/* Benefits Section */}
      <ServiceProcess
        title={data.benefitsSection.title}
        description={data.benefitsSection.description}
        items={data.benefitsSection.benefits}
        isNumbered={false}
      />
    </div>
  );
};

export default StaffAugmentation;
