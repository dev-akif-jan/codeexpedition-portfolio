import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Menu } from 'lucide-react';
import HeaderDesktopMenu from './HeaderDesktopMenu';
import HeaderMobileMenu from './HeaderMobileMenu';
import Button from '../ui/Button';
import LogoContainer from '../ui/LogoContainer';
import { headerData } from './headerData';

import useClickOutside from '../hooks/useClickOutside';
import useScrollToTop from '../hooks/useScrollToTop';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const headerRef = useRef(null);

  // Handle scroll to top on route change
  useScrollToTop();

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  // Close dropdown on click outside
  useClickOutside(
    headerRef,
    () => setActiveDropdown(null),
    activeDropdown !== null
  );

  const closeMobileMenu = useCallback(() => setMobileMenuOpen(false), []);
  const openMobileMenu = useCallback(() => setMobileMenuOpen(true), []);
  const closeDropdown = useCallback(() => setActiveDropdown(null), []);


  return (
    <>
      <nav
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-sm border-b border-transparent ${isScrolled ? 'shadow-sm border-border-subtle py-1.5' : 'py-3'}`}
        onClick={closeDropdown}
      >
        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="flex items-center justify-between h-14">

            {/* Logo Section */}
            <LogoContainer className="z-50 flex-shrink-0" onClick={closeDropdown} />

            {/* Desktop Navigation */}
            <HeaderDesktopMenu
              headerLinks={headerData}
              activeDropdown={activeDropdown}
              setActiveDropdown={setActiveDropdown}
              closeDropdown={closeDropdown}
            />

            {/* Actions Section */}
            <div className="flex items-center flex-shrink-0">
              {/* Desktop Schedule Call Button - Only visible on large screens */}
              <Button
                variant="primary"
                className="hidden lg:inline-flex"
                to="/contact"
                onClick={closeDropdown}
              >
                Schedule Call
              </Button>

              {/* Mobile Menu Toggle - Only visible on mobile/tablet */}
              <button
                className="lg:hidden p-2 text-text-primary hover:bg-gray-100 rounded-lg transition-colors"
                onClick={openMobileMenu}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap - adjusted to match new header height */}
      <div className={`${isScrolled ? 'h-[60px]' : 'h-[68px]'}`}></div>

      <HeaderMobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        headerLinks={headerData}
      />
    </>
  );
};

export default Header;
