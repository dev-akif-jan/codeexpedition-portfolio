import React from 'react';
import IndustriesSection from '../../components/industrySection/IndustriesSection';
import { industriesData } from '../../components/industrySection/industriesData';

const Manufacturing = () => {
  const data = industriesData.manufacturing;

  return (
    <div className="bg-background-main min-h-screen">
      {/* Industries Section with Icon */}
      <IndustriesSection
        icon={data.icon}
        heading={data.heroHeading}
        description={data.heroDescription}
        cards={data.cards}
      />
    </div>
  );
};

export default Manufacturing;
