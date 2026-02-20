import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const SuccessSection = ({ title, description }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-text-primary to-text-secondary py-16 lg:py-24">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[80%] bg-brand-primary/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-brand-secondary/40 rounded-full blur-[120px]"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium mb-10">
            {description}
          </p>

          {/* CTA Button */}
          <Link
            to="/success-stories"
            className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-text-primary bg-white hover:bg-brand-secondary rounded-xl transition-all duration-300 shadow-xl shadow-black/20 active:scale-95"
          >
            View Our Success Stories
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
      </Container>
    </section>
  );
};

export default SuccessSection;
