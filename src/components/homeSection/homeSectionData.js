// Import all required images and icons
import googleLogo from '../../assets/HomePage/google.webp';
import clutchLogo from '../../assets/HomePage/clutch.webp';
import chexpassLogo from '../../assets/HomePage/chexpass.svg';
import craftsmanLogo from '../../assets/Common/craftsman.svg';
import halyardLogo from '../../assets/Common/halyard.svg';
import kitchenaidLogo from '../../assets/Common/kitchenaid.svg';
import newsLiteracyLogo from '../../assets/Common/news-literacy-project.svg';
import pathForwardLogo from '../../assets/Common/path-forward-formulator.svg';
import whirlpoolLogo from '../../assets/HomePage/whirlpool.svg';
import collegeAdmissionLogo from '../../assets/Common/college-admission.png';
import featured1 from '../../assets/HomePage/featured1.webp';
import featured2 from '../../assets/HomePage/featured2.webp';
import brianMitchell from '../../assets/HomePage/brian-mitchell.webp';
import bobBoyle from '../../assets/HomePage/bob-boyle.webp';
import mikaelEdwards from '../../assets/HomePage/mikael-edwards.webp';
import avatarPlaceholder from '../../assets/HomePage/avatar-placeholder-ab.svg';
import retailIllustration from '../../assets/HomePage/Industries1.svg';
import healthcareIllustration from '../../assets/HomePage/Industries2.svg';
import educationIllustration from '../../assets/HomePage/Industries3.svg';
import legalIllustration from '../../assets/HomePage/Industries4.svg';
import jenniairLogo from '../../assets/Common/jennair.svg';
import aimedLogo from '../../assets/HomePage/aimed.svg';
import diagnossLogo from '../../assets/Common/diagnoss.svg';
import nlpEducationLogo from '../../assets/HomePage/nlp-education.svg';
import universalBeanCountersLogo from '../../assets/HomePage/universal-bean-counters.svg';
import fourCornersLogo from '../../assets/Common/4-corners.webp';
import cursorLogo from '../../assets/HomePage/cursor.webp';
import claudeLogo from '../../assets/HomePage/claude.webp';
import openaiLogo from '../../assets/HomePage/openai.svg';
import ibmLogo from '../../assets/HomePage/ibm.svg';

export const homeSectionData = {
  // Hero Section Data
  hero: {
    headline: {
      line1: "Deploy Faster",
      line2: "Engineer Excellence",
      line3: "Scale Without Limits"
    },
    subtext: "We empower visionary companies to streamline their development lifecycle with cutting-edge AI integration, ensuring rapid delivery without compromising on reliability or performance.",
    primaryCTA: {
      text: "Start Your Journey",
      to: "/contact"
    },
    secondaryCTA: {
      text: "View Success Stories",
      to: "/success-stories"
    },
    socialProof: {
      title: "Trusted by Industry Leaders",
      reviews: [
        {
          platform: "Clutch",
          logo: clutchLogo,
          rating: "4.9/5",
          count: "13 Reviews",
          stars: 5
        },
        {
          platform: "Google",
          logo: googleLogo,
          rating: "4.7/5",
          count: "38 Reviews",
          stars: 5
        }
      ]
    }
  },

  // Trusted Section Data
  trusted: {
    title: "Trusted by Industry Leaders",
    description: "With decades of combined experience, we empower organizations globally to achieve their full potential through cutting-edge technology and strategic innovation. Our results speak for themselves.",
    ctaText: "Why companies choose CodeExpedition",
    ctaLink: "/success-stories",
    logos: [
      { src: whirlpoolLogo, alt: 'Whirlpool' },
      { src: kitchenaidLogo, alt: 'KitchenAid' },
      { src: newsLiteracyLogo, alt: 'News Literacy Project' },
      { src: pathForwardLogo, alt: 'Path Forward' },
      { src: chexpassLogo, alt: 'Chexpass' },
      { src: collegeAdmissionLogo, alt: 'College Admission' },
      { src: craftsmanLogo, alt: 'Craftsman' },
      { src: halyardLogo, alt: 'Halyard' }
    ]
  },

  // Expertise Section Data
  expertise: {
    title: "Our Expertise",
    description: "We deliver standout digital experiences and transformative solutions that drive business growth through innovation and precision engineering.",

    // AI & Intelligent Automation Block
    aiAutomation: {
      badge: "AI & Intelligent Automation",
      title: "Intelligent Automation",
      description: "Deploy custom AI architectures that streamline complex workflows, empowering your workforce to achieve more while reducing operational overhead by up to 40%.",
      solutions: [
        {
          title: "Enterprise Agents",
          description: "Custom-trained AI agents integrated directly into your enterprise stack for autonomous workflow orchestration.",
          link: "/services/ai",
          linkText: "Explore Agents",
          badge: "Live Beta",
          variant: "gradient"
        },
        {
          title: "Workflow Engineering",
          description: "Eliminate repetitive manual tasks and liberate your team to focus on high-value strategic initiatives.",
          variant: "default"
        },
        {
          title: "LLM Solutions",
          description: "Secure, domain-specific Large Language Models tailored to your unique data compliance and business needs.",
          variant: "default"
        }
      ],
      primaryCTA: {
        text: "Launch Your AI Strategy",
        to: "/services/ai"
      },
      secondaryCTA: {
        text: "Explore Consulting Services",
        to: "/contact"
      }
    },

    // Secondary Services
    services: [
      {
        title: "Custom Software Engineering",
        description: "Build scalable, future-proof applications architectures designed for performance and rapid evolution.",
        tags: ["Web", "Mobile Apps", "Enterprise Software"],
        link: "/services/app-dev",
        linkText: "Learn More"
      },
      {
        title: "Cloud & Data Infrastructure",
        description: "Enterprise-grade cloud architectures ensuring security, redundancy, and optimal data performance.",
        tags: ["AWS", "Google Cloud", "Microsoft Azure"],
        link: "/services/cloud",
        linkText: "Learn More"
      },
      {
        title: "On-Demand Talent Augmentation",
        description: "Instantly access a curated network of top-tier engineers and architects to accelerate your roadmap.",
        tags: ["AI Engineers", "Developers", "Cloud Architects"],
        link: "/services/talent",
        linkText: "Learn More"
      }
    ],

    footerCTA: {
      text: "Explore All Services",
      to: "/services"
    }
  },

  // Featured Section Data
  featured: {
    title: "Featured Work",
    description: "Discover how we helped businesses achieve their digital transformation goals.",
    successStories: [
      {
        id: 1,
        title: "Uptok: Redefining Digital Sales via Personal Connection",
        description: "How we helped Uptok bring a human touch to digital commerce through personalized, one-on-one video interactions, increasing conversion rates by 30% and average order values by 20%. We also built their AI agent using AI ORCHESTRATION AGENT.",
        image: featured1,
        imageAlt: "Uptok Platform",
        badges: [
          { text: "E-COMMERCE", variant: "secondary" },
          { text: "AI ORCHESTRATION AGENT", variant: "primary" }
        ],
        technologies: ["AI ORCHESTRATION AGENT", "React.js", "Node.js", "WebRTC"],
        link: "/success-stories",
        linkText: "View Success Story",
        layout: "text-left"
      },
      {
        id: 2,
        title: "PathForward: Next-Gen Pharmaceutical Formulation",
        description: "Our engineers built a high-performance digital foundation to automate complex formulation data. By optimizing workflow orchestration, the platform achieved a 40% gain in research efficiency, accelerating development from lab to market.",
        image: featured2,
        imageAlt: "PathForward Analytics",
        badges: [
          { text: "HEALTHCARE TECH", variant: "secondary" }
        ],
        technologies: ["Vue.js", "Python", "Google Cloud", "PostgreSQL"],
        link: "/success-stories",
        linkText: "View Success Story",
        layout: "image-left"
      }
    ],
    ctaText: "View All Success Stories",
    ctaLink: "/success-stories"
  },

  // Feedback Section Data
  feedback: {
    title: "What Our Clients Say",
    description: "Hear from industry leaders who trust us with their digital transformation",
    testimonials: [
      {
        id: 1,
        name: 'Brian Mitchell',
        title: 'CEO',
        company: 'US News College Advisor',
        image: brianMitchell,
        quote: 'CodeExpedition impressed us with their ability to digest requirements and come back with great ideas. Their communication was exceptional throughout the project.'
      },
      {
        id: 2,
        name: 'Bob Boyle',
        title: 'Director of Brands',
        company: 'Sears',
        image: bobBoyle,
        quote: 'CodeExpedition excelled with project timing and met our demanding requirements, delivering great results across multiple big projects including Smart Lawn and Craftsman Club.'
      },
      {
        id: 3,
        name: 'Mikael Edwards',
        title: 'CEO',
        company: 'TrueReview',
        image: mikaelEdwards,
        quote: 'CodeExpedition was crucial in launching TrueReview, quickly adapting to our existing application and codebase from another development company.'
      },
      {
        id: 4,
        name: 'Andy Beering',
        title: 'Project Manager',
        company: 'Citco Design',
        image: avatarPlaceholder,
        quote: 'CodeExpedition routinely hit deadlines and reacted to change requests quickly. They were very communicative and took great interest in developing the software as if building it for themselves.'
      }
    ]
  },

  // Industries Section Data
  industries: {
    title: "Industries We Serve",
    description: "Tailored solutions for diverse industry needs",
    list: [
      {
        id: 1,
        title: 'Retail & E-commerce',
        illustration: retailIllustration,
        description: 'Intelligent digital experiences that boost client loyalty and optimize business workflows.',
        logos: [jenniairLogo, craftsmanLogo],
        link: '/industries/retail',
        linkText: 'More'
      },
      {
        id: 2,
        title: 'Healthcare',
        illustration: healthcareIllustration,
        description: 'Robust, regulated systems that transform clinical workflows and elevate patient experiences.',
        logos: [aimedLogo, diagnossLogo],
        link: '/industries/healthcare',
        linkText: 'More'
      },
      {
        id: 3,
        title: 'Education',
        illustration: educationIllustration,
        description: 'Dynamic learning apps that tailor educational paths and drive success for every learner.',
        logos: [nlpEducationLogo, collegeAdmissionLogo],
        link: '/industries/education',
        linkText: 'More'
      },
      {
        id: 4,
        title: 'Legal',
        illustration: legalIllustration,
        description: 'Advanced data tools for automated discovery, case analysis, and superior client advocacy.',
        logos: [universalBeanCountersLogo, fourCornersLogo],
        link: '/industries/legal',
        linkText: 'More'
      }
    ],
    ctaText: "View All Industries",
    ctaLink: "/industries"
  },

  // Work Section Data
  work: {
    title: "How We Work",
    description: "Our AI-enhanced methodology delivers solutions with greater speed and superior quality compared to conventional development approaches",
    badge: "Vibe Coding + AI Acceleration",

    process: [
      {
        id: 1,
        title: "Discovery & Strategy",
        description: "We start by thoroughly understanding your business objectives:",
        points: [
          "AI-powered requirements analysis",
          "Strategic roadmap development",
          "Optimal technology stack selection"
        ]
      },
      {
        id: 2,
        title: "AI-Powered Development",
        description: "Our team harnesses advanced AI capabilities to build faster and better:",
        points: [
          "Vibe Coding with AI pair programming",
          "Automated testing and optimization",
          "50% faster delivery with AI tools"
        ]
      },
      {
        id: 3,
        title: "Continuous Excellence",
        description: "We ensure ongoing success with AI-powered tools:",
        points: [
          "AI-powered monitoring and analytics",
          "Predictive maintenance and updates",
          "Continuous optimization with AI insights"
        ]
      }
    ],

    vibeCode: {
      badge: "AI-Assisted Development",
      title: "Our Developers Vibe Code",
      description: "Combining elite talent with AI tools for efficient, high-quality delivery",
      subtitle: "Leveraging cutting-edge AI tools at every step",
      tools: [
        { name: "Cursor", logo: cursorLogo, alt: "Cursor AI" },
        { name: "Claude", logo: claudeLogo, alt: "Claude AI" },
        { name: "ChatGPT", logo: openaiLogo, alt: "ChatGPT" },
        { name: "IBM Orchestrate", logo: ibmLogo, alt: "IBM Orchestrate", highlight: true }
      ],
      stats: {
        multiplier: "3x",
        title: "Developer Productivity",
        description: "Our AI-powered development process accelerates delivery while maintaining high quality standards"
      },
      cta: {
        text: "Browse Our Vibe Coders",
        link: "/about"
      }
    }
  },

  // Track Section Data
  track: {
    title: "Our Track Record",
    description: "Delivering excellence across hundreds of projects",
    stats: [
      {
        id: 1,
        value: "150+",
        title: "Projects Delivered",
        description: "Across various industries"
      },
      {
        id: 2,
        value: "95%",
        title: "Client Satisfaction",
        description: "Based on client feedback"
      },
      {
        id: 3,
        value: "8+",
        title: "Years Experience",
        description: "Of digital excellence"
      }
    ]
  }
};
