import React from 'react';
import ServiceHero from '../../components/serviceSection/commonServices/ServiceHero';
import ServiceCards from '../../components/serviceSection/commonServices/ServiceCards';
import ServiceList from '../../components/serviceSection/commonServices/ServiceList';
import ServiceProcess from '../../components/serviceSection/commonServices/ServiceProcess';
import { servicesData } from '../../components/serviceSection/servicesData';

const CloudInfrastructure = () => {
  const data = servicesData.cloudInfrastructure;

  return (
    <div className="bg-background-main min-h-screen">
      {/* Hero Section */}
      <ServiceHero
        icon={data.hero.icon}
        title={data.hero.title}
        description={data.hero.description}
      />

      {/* Services Cards Section */}
      <ServiceCards
        title={data.servicesSection.title}
        description={data.servicesSection.description}
        cards={data.servicesSection.cards}
      />

      {/* Cloud Platforms List */}
      <ServiceList
        title={data.platformsSection.title}
        description={data.platformsSection.description}
        items={data.platformsSection.items}
      />

      {/* Database Technologies List */}
      <ServiceList
        title={data.technologiesSection.title}
        description={data.technologiesSection.description}
        items={data.technologiesSection.items}
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

export default CloudInfrastructure;
