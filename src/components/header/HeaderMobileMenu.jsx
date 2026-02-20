import React, { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import LogoContainer from '../ui/LogoContainer';

const HeaderMobileMenu = memo(({ isOpen, onClose, headerLinks }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!isOpen) return null;

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Panel */}
      <div className="absolute inset-0 bg-white z-50 animate-in slide-in-from-right duration-300 flex flex-col w-full h-full">
        <div className="p-4 sm:p-5 flex justify-between items-center border-b border-border-subtle gap-4">
          <LogoContainer onClick={onClose} className="flex-shrink-0" />
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-gray-100 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary flex-shrink-0"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 px-5">
          <ul className="space-y-4">
            {headerLinks.map((link, index) => {
              const isExpanded = expandedIndex === index;
              const hasSubmenu = link.items;

              return (
                <li key={index} className="border-b border-border-subtle pb-4 last:border-0">
                  <div className="flex items-center justify-between">
                    {link.type === 'link' ? (
                      <Link
                        to={link.href}
                        className="text-lg font-semibold text-text-primary block w-full py-2 hover:text-brand-primary transition-colors focus:outline-none focus:text-brand-primary"
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        className="flex items-center justify-between w-full text-lg font-semibold text-text-primary py-2 hover:text-brand-primary transition-colors focus:outline-none focus:text-brand-primary"
                        onClick={() => toggleExpand(index)}
                        aria-expanded={isExpanded}
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-5 h-5 text-text-secondary transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </button>
                    )}
                  </div>

                  {hasSubmenu && isExpanded && (
                    <div className="mt-2 space-y-3 pl-2 animate-in slide-in-from-top-2 duration-200">

                      {/* Simple Menu Handling */}
                      {link.type === 'simple' && (() => {
                        const hasSections = link.items.some(item => item.section);

                        if (!hasSections) {
                          // Original behavior for Services/Industries
                          return link.items.map((item, subIndex) => (
                            <Link
                              key={subIndex}
                              to={item.href}
                              className="flex items-start gap-4 p-3 rounded-lg hover:bg-brand-secondaryLight transition-colors focus:outline-none focus:bg-brand-secondaryLight"
                              onClick={onClose}
                            >
                              {item.icon && (
                                <div className="mt-0.5 p-1 bg-brand-secondaryLight rounded-md text-brand-primary">
                                  <item.icon className="w-5 h-5" />
                                </div>
                              )}
                              <div>
                                <div className="text-base font-semibold text-text-primary">{item.title}</div>
                                {item.desc && <div className="text-xs text-text-secondary mt-0.5 leading-snug">{item.desc}</div>}
                              </div>
                            </Link>
                          ));
                        }

                        // Group items by section for Insights
                        const sections = {};
                        link.items.forEach(item => {
                          const sectionName = item.section || 'Other';
                          if (!sections[sectionName]) sections[sectionName] = [];
                          sections[sectionName].push(item);
                        });

                        return (
                          <div className="flex flex-col gap-6 pt-2">
                            {Object.entries(sections).map(([sectionName, sectionItems], sectionIndex) => (
                              <div key={sectionIndex} className="space-y-3">
                                <h4 className="text-xs font-bold text-text-secondary uppercase tracking-wider pl-2">
                                  {sectionName}
                                </h4>
                                <div className="space-y-1">
                                  {sectionItems.map((item, itemIndex) => (
                                    <Link
                                      key={itemIndex}
                                      to={item.href}
                                      className="flex items-start gap-4 p-3 rounded-lg hover:bg-brand-secondaryLight transition-colors focus:outline-none focus:bg-brand-secondaryLight"
                                      onClick={onClose}
                                    >
                                      {item.icon && (
                                        <div className="mt-0.5 p-1 bg-brand-secondaryLight rounded-md text-brand-primary">
                                          <item.icon className="w-5 h-5" />
                                        </div>
                                      )}
                                      <div>
                                        <div className="text-base font-semibold text-text-primary">{item.title}</div>
                                        {item.desc && <div className="text-xs text-text-secondary mt-0.5 leading-snug">{item.desc}</div>}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        );
                      })()}

                      {/* Footer Links for Mobile */}
                      {link.footerLink && (
                        <div className="mt-4 pt-4 border-t border-border-subtle flex flex-col gap-2">
                          <Link to={link.footerLink.href} className="flex items-center justify-between p-2 text-brand-primary font-semibold hover:bg-brand-secondaryLight rounded-lg transition-colors" onClick={onClose}>
                            {link.footerLink.text} <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-5 border-t border-border-subtle bg-gray-50 mt-auto">
          <Button
            variant="primary"
            className="w-full justify-center py-4 text-lg"
            to="/contact"
            onClick={onClose}
          >
            Schedule Call
          </Button>
        </div>
      </div>
    </div>
  );
});

HeaderMobileMenu.displayName = 'HeaderMobileMenu';

export default HeaderMobileMenu;
