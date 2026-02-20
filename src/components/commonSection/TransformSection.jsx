import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const TransformSection = ({ title, description, primaryCTA, secondaryCTA }) => {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-brand-secondary/30 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-brand-primary/10 rounded-full blur-[100px]"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-text-primary mb-6 tracking-tight leading-[1.1]">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary mb-10 leading-relaxed font-medium max-w-2xl mx-auto">
            {description}
          </p>

          {/* Action Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to={primaryCTA.to}
              className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-primary hover:bg-brand-primaryDark rounded-xl transition-all duration-300 shadow-xl shadow-brand-primary/20 active:scale-95"
            >
              {primaryCTA.text}
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>

            <Link
              to={secondaryCTA.to}
              className="group inline-flex items-center justify-center text-base font-bold text-text-primary hover:text-brand-primary transition-all duration-300 active:scale-95"
            >
              {secondaryCTA.text}
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TransformSection;
