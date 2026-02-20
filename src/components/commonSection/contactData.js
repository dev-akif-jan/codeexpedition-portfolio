import { MapPin, Phone, Clock } from 'lucide-react';

export const contactHero = {
  heading: "Connect with Us",
  description: "Ready to accelerate your digital journey? Our team of engineers and architects are here to help you scale."
};

export const contactMethods = {
  title: "Send Us a Message",
  description: "Fill out the form below and an AI specialist will get back to you within 24 hours.",
  info: [
    {
      icon: MapPin,
      title: "Global Headquarters",
      details: ["2261 Market Street #4829", "San Francisco, California 94114", "United States"]
    },
    {
      icon: Phone,
      title: "Direct Channels",
      details: ["Phone: +1 (415) 689-8565", "Email: hello@codeexpedition.com"]
    },
    {
      icon: Clock,
      title: "Operational Hours",
      details: ["Monday - Friday: 9:00 AM - 8:00 PM", "Technical Support: 24/7 Availability"]
    }
  ]
};

export const contactOffices = {
  title: "Our Global Network",
  description: "Strategically located hubs to serve our clients worldwide.",
  items: [
    {
      city: "Chicago",
      country: "United States",
      address: ["1664 W Division St", "Apt 210", "Chicago, Illinois 60622"]
    },
    {
      city: "Lahore",
      country: "Pakistan",
      address: ["460, Block G3", "Johar Town", "Lahore 54000"]
    },
    {
      city: "Dubai",
      country: "United Arab Emirates",
      address: ["IFZA Business Park", "Dubai Silicon Oasis", "Dubai"]
    }
  ]
};
