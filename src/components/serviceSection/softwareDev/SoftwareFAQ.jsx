import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Container from '../../ui/Container';

const SoftwareFAQ = ({ title, description, faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-background-section">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            {description}
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-border-light overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left transition-colors duration-300 hover:bg-background-section/50"
              >
                <span className="text-lg font-bold text-text-primary">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-brand-primary flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                  strokeWidth={2.5}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <p className="text-base text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SoftwareFAQ;
