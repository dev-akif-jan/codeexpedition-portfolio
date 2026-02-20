import React, { useState } from 'react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Send, MapPin } from 'lucide-react';
import { contactHero, contactMethods, contactOffices } from '../components/commonSection/contactData';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-background-main pb-20">
      {/* Header Section */}
      <section className="pt-24 pb-20 bg-background-section border-b border-border-subtle">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-black text-brand-primary mb-6 uppercase tracking-tight">
              {contactHero.heading}
            </h1>
            <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed max-w-2xl mx-auto">
              {contactHero.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Methods & Form Section */}
      <section className="py-16 lg:py-24 bg-white">
        <Container>
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
            {/* Left Side: Info Cards */}
            <div className="space-y-8">
              {contactMethods.info.map((info, index) => (
                <Card key={index} className="group" hoverEffect={true}>
                  <div className="w-12 h-12 rounded-xl bg-brand-secondaryLight flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all duration-300">
                    <info.icon className="text-brand-primary group-hover:text-white w-6 h-6 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-4 group-hover:text-brand-primary transition-colors">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((line, idx) => (
                      <p key={idx} className="text-text-secondary leading-relaxed">{line}</p>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            {/* Right Side: Form */}
            <div className="bg-background-main p-8 lg:p-12 rounded-3xl border border-border-subtle shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                {contactMethods.title}
              </h2>
              <p className="text-text-secondary mb-10">
                {contactMethods.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-bold text-text-primary uppercase tracking-wider ml-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-border-subtle bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-bold text-text-primary uppercase tracking-wider ml-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-border-subtle bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-text-primary uppercase tracking-wider ml-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-border-subtle bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-text-primary uppercase tracking-wider ml-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl border border-border-subtle bg-white focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <Button type="submit" variant="primary" className="w-full py-4 text-lg font-bold group">
                  <span className="flex items-center gap-2">
                    Send Message <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Offices Section */}
      <section className="py-16 lg:py-24 bg-background-section border-y border-border-subtle">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-text-primary mb-6 tracking-tight">
              {contactOffices.title}
            </h2>
            <p className="text-lg text-text-secondary font-medium">
              {contactOffices.description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOffices.items.map((office, index) => (
              <Card key={index} className="flex flex-col h-full group" hoverEffect={true}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-brand-secondaryLight flex items-center justify-center text-brand-primary shrink-0 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-text-primary leading-tight group-hover:text-brand-primary transition-colors duration-300">{office.city}</h3>
                    <p className="text-brand-primary font-bold text-xs uppercase tracking-widest">{office.country}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {office.address.map((line, idx) => (
                    <p key={idx} className="text-text-secondary leading-relaxed font-medium">{line}</p>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
