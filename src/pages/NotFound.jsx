import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Home, ArrowLeft } from 'lucide-react';
import { notFoundData } from '../components/commonSection/notFoundData';

const NotFound = () => {
  const Icon = notFoundData.icon;

  return (
    <div className="bg-background-main min-h-[80vh] flex items-center justify-center py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          {/* Icon with animation */}
          <div className="mb-10 inline-flex items-center justify-center p-8 bg-brand-primary/10 rounded-[2.5rem] animate-bounce-slow">
            <Icon className="w-20 h-20 text-brand-primary" strokeWidth={1.5} />
          </div>

          <h1 className="text-8xl md:text-9xl font-black text-brand-primary mb-6 tracking-tighter opacity-20">
            {notFoundData.errorCode}
          </h1>

          <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">
            {notFoundData.heading}
          </h2>

          <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed mb-12">
            {notFoundData.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button as={Link} to="/" variant="primary" className="px-8 py-4 text-lg font-bold group">
              <span className="flex items-center gap-2">
                <Home className="w-5 h-5" /> {notFoundData.homeButtonText}
              </span>
            </Button>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 text-lg font-bold text-text-primary hover:text-brand-primary transition-colors flex items-center gap-2 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> {notFoundData.backButtonText}
            </button>
          </div>

          {/* Technical detail footer */}
          <div className="mt-20 pt-10 border-t border-border-subtle flex flex-col md:flex-row items-center justify-center gap-8 opacity-50 font-mono text-xs uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></div>
              System Status: {notFoundData.systemStatus}
            </div>
            <div>Protocol: {notFoundData.protocol}</div>
            <div>Node ID: {notFoundData.nodeId}</div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
