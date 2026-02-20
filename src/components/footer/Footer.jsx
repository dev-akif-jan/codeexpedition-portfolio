import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Github, Instagram, Facebook, ArrowRight } from 'lucide-react';
import LogoContainer from '../ui/LogoContainer';
import { footerData } from './footerData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-text-inverse">
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12">
          {/* Left Section: Logo, Description, Social Icons */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="h-10 flex items-center mb-6">
              <LogoContainer variant="light" />
            </div>

            {/* Description */}
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
              {footerData.companyDescription}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-primary transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-primary transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-brand-primary transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Section: 4 Columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
              {/* Column 1: Services */}
              <div>
                <div className="h-10 flex items-center mb-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {footerData.services.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {footerData.services.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-[15px] font-medium text-white/80 hover:text-brand-primary transition-colors duration-200"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={footerData.services.footerLink.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-white transition-colors duration-200 mt-6 group"
                >
                  {footerData.services.footerLink.text}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Column 2: Industries */}
              <div>
                <div className="h-10 flex items-center mb-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {footerData.industries.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {footerData.industries.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-[15px] font-medium text-white/80 hover:text-brand-primary transition-colors duration-200"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={footerData.industries.footerLink.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-white transition-colors duration-200 mt-6 group"
                >
                  {footerData.industries.footerLink.text}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Column 3: Insights */}
              <div>
                <div className="h-10 flex items-center mb-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {footerData.insights.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {footerData.insights.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-[15px] font-medium text-white/80 hover:text-brand-primary transition-colors duration-200"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  to={footerData.insights.footerLink.href}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-white transition-colors duration-200 mt-6 group"
                >
                  {footerData.insights.footerLink.text}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Column 4: Company */}
              <div>
                <div className="h-10 flex items-center mb-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                    {footerData.company.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {footerData.company.items.map((item, index) => (
                    <li key={index}>
                      <Link
                        to={item.href}
                        className="text-[15px] font-medium text-white/80 hover:text-brand-primary transition-colors duration-200"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright and Legal Links */}
        <div className="border-t border-white/10 mt-10 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-white/50">
            © {currentYear} {footerData.copyright}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-2">
            {footerData.legalLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-xs font-medium text-white/50 hover:text-brand-primary transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
