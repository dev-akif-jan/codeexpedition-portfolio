import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeaderDropdown = memo(({ data, isOpen, closeDropdown }) => {
  if (!isOpen) return null;

  // Positioning for dropdown
  const positionClasses = 'absolute left-0 top-full w-[320px]';

  return (
    <div
      className={`pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${positionClasses}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white rounded-xl shadow-xl border border-border-subtle overflow-hidden h-full">
        {data.type === 'simple' && (
          <div className="p-2">
            {(() => {
              // Group items by section if sections exist
              const hasSections = data.items.some(item => item.section);

              if (!hasSections) {
                // Original behavior for Services/Industries
                return data.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="group flex items-start gap-4 p-3 rounded-lg hover:bg-brand-secondaryLight transition-colors"
                    role="menuitem"
                    onClick={closeDropdown}
                  >
                    {item.icon && (
                      <item.icon className="w-5 h-5 text-brand-primary mt-1 group-hover:text-brand-primaryDark" />
                    )}
                    <div>
                      <div className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                        {item.title}
                      </div>
                      <div className="text-sm text-text-secondary mt-0.5 leading-snug">
                        {item.desc}
                      </div>
                    </div>
                  </Link>
                ));
              }

              // Group items by section for Insights
              const sections = {};
              data.items.forEach(item => {
                const sectionName = item.section || 'Other';
                if (!sections[sectionName]) sections[sectionName] = [];
                sections[sectionName].push(item);
              });

              return Object.entries(sections).map(([sectionName, sectionItems], sectionIndex) => (
                <div key={sectionIndex} className={sectionIndex > 0 ? 'mt-4' : ''}>
                  <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider mb-2 px-3">
                    {sectionName}
                  </h3>
                  {sectionItems.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      to={item.href}
                      className="group flex items-start gap-4 p-3 rounded-lg hover:bg-brand-secondaryLight transition-colors"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      {item.icon && (
                        <item.icon className="w-5 h-5 text-brand-primary mt-1 group-hover:text-brand-primaryDark" />
                      )}
                      <div>
                        <div className="font-semibold text-text-primary group-hover:text-brand-primary transition-colors">
                          {item.title}
                        </div>
                        <div className="text-sm text-text-secondary mt-0.5 leading-snug">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ));
            })()}
            {data.footerLink && (
              <div className="mt-2 border-t border-border-subtle pt-2 px-3 pb-2 flex justify-end">
                <Link
                  to={data.footerLink.href}
                  className="flex items-center text-sm font-semibold text-brand-primary hover:text-brand-primaryDark transition-colors"
                  onClick={closeDropdown}
                >
                  {data.footerLink.text}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

HeaderDropdown.displayName = 'HeaderDropdown';

export default HeaderDropdown;
