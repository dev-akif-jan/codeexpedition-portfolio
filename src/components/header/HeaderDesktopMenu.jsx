import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import HeaderDropdown from './HeaderDropdown';

const HeaderDesktopMenu = memo(({ headerLinks, activeDropdown, setActiveDropdown, closeDropdown }) => {
  return (
    <ul className="hidden lg:flex items-center gap-8 h-full">
      {headerLinks.map((link, index) => {
        const isActive = activeDropdown === index;

        return (
          <li
            key={index}
            className="relative h-full flex items-center"
          >
            {link.type === 'link' ? (
              <Link
                to={link.href}
                className="text-base font-medium text-text-primary hover:text-brand-primary transition-colors py-4 px-1"
                onClick={() => setActiveDropdown(null)}
              >
                {link.label}
              </Link>
            ) : (
              <button
                className={`flex items-center gap-1.5 text-base font-medium transition-colors py-4 px-1
                  ${isActive ? 'text-brand-primary' : 'text-text-primary hover:text-brand-primary'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveDropdown(isActive ? null : index);
                }}
                aria-expanded={isActive}
                aria-haspopup="true"
              >
                {link.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${isActive ? 'rotate-180' : ''}`}
                />
              </button>
            )}

            {link.items && (
              <HeaderDropdown
                data={link}
                isOpen={isActive}
                closeDropdown={closeDropdown}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
});

HeaderDesktopMenu.displayName = 'HeaderDesktopMenu';

export default HeaderDesktopMenu;
