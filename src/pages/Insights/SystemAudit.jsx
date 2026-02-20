import React from 'react';
import InsightsSection from '../../components/insightSection/commonInsights/InsightsSection';
import { insightsData } from '../../components/insightSection/insightsData';

const SystemAudit = () => {
  const data = insightsData.systemAudit;

  return (
    <div className="bg-background-main min-h-screen">
      {/* Insights Section with Icon */}
      <InsightsSection
        icon={data.icon}
        heading={data.title}
        description={data.description}
        link={data.link}
        cards={data.cards}
      />
    </div>
  );
};

export default SystemAudit;
