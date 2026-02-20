import { ShoppingCart, Stethoscope, GraduationCap, Scale, Building2, Plane, Calendar, Clapperboard, TrendingUp, Truck, Factory, Smartphone } from 'lucide-react';

export const allIndustriesHero = {
    heading: "Industries We Serve",
    description: "We deliver tailored software solutions across diverse industries, helping businesses innovate and stay ahead in their respective markets.",
    learnMoreText: "Learn more"
};

export const industriesData = {
    retail: {
        heroHeading: "Our Commerce & Retail Solutions",
        heroDescription: "Empower your retail business with innovative technology solutions designed to enhance customer experiences and drive growth.",
        icon: ShoppingCart,
        cards: [
            {
                icon: ShoppingCart,
                title: "E-Commerce Platforms",
                description: "Build scalable online stores with seamless shopping experiences, secure payment gateways, and real-time inventory tracking for modern retail operations."
            },
            {
                icon: TrendingUp,
                title: "Customer Analytics",
                description: "Leverage data-driven insights to understand customer behavior, optimize pricing strategies, and personalize shopping experiences for increased conversions."
            },
            {
                icon: Smartphone,
                title: "Mobile Commerce",
                description: "Create engaging mobile shopping apps with intuitive interfaces, push notifications, and one-click checkout to capture the growing mobile market."
            },
            {
                icon: Factory,
                title: "Inventory Management",
                description: "Streamline stock control with automated inventory systems, real-time tracking, and predictive analytics to reduce costs and prevent stockouts."
            }
        ]
    },
    healthcare: {
        heroHeading: "Our Healthcare Solutions",
        heroDescription: "Transform healthcare delivery with secure, compliant technology solutions that improve patient outcomes and operational efficiency.",
        icon: Stethoscope,
        cards: [
            {
                icon: Stethoscope,
                title: "Electronic Health Records",
                description: "Implement comprehensive EHR systems that centralize patient data, ensure HIPAA compliance, and enable seamless information sharing across healthcare providers."
            },
            {
                icon: Smartphone,
                title: "Telemedicine Platforms",
                description: "Build secure video consultation platforms that connect patients with healthcare providers remotely, improving access to care and reducing wait times."
            },
            {
                icon: TrendingUp,
                title: "Patient Management",
                description: "Optimize patient scheduling, appointment reminders, and follow-up care with intelligent management systems that enhance patient satisfaction."
            },
            {
                icon: Factory,
                title: "Medical Billing Systems",
                description: "Automate billing processes, insurance claims, and payment tracking to reduce errors and accelerate revenue cycle management."
            }
        ]
    },
    education: {
        heroHeading: "Our Educational Solutions",
        heroDescription: "Revolutionize learning experiences with innovative educational technology that engages students and empowers educators.",
        icon: GraduationCap,
        cards: [
            {
                icon: GraduationCap,
                title: "Learning Management Systems",
                description: "Build comprehensive platforms for course delivery, student engagement, and academic progress tracking with interactive learning experiences."
            },
            {
                icon: Smartphone,
                title: "Digital Content Delivery",
                description: "Create interactive learning materials and seamless content distribution systems for enhanced education and student engagement."
            },
            {
                icon: TrendingUp,
                title: "Performance Analytics",
                description: "Track and analyze student performance with data-driven insights for improved learning outcomes and personalized education paths."
            },
            {
                icon: Factory,
                title: "Student Collaboration Tools",
                description: "Enable effective communication and collaboration between students and educators through integrated platforms and real-time interaction."
            }
        ]
    },
    legal: {
        heroHeading: "Our Legal Technology Solutions",
        heroDescription: "Modernize legal practices with advanced technology solutions that streamline workflows and enhance client service delivery.",
        icon: Scale,
        cards: [
            {
                icon: Scale,
                title: "Case Management Systems",
                description: "Organize and track legal cases efficiently with comprehensive systems that manage documents, deadlines, and client communications seamlessly."
            },
            {
                icon: Factory,
                title: "Document Automation",
                description: "Automate legal document creation, review, and approval processes to reduce manual work and minimize errors in legal documentation."
            },
            {
                icon: TrendingUp,
                title: "Legal Research Tools",
                description: "Access powerful research platforms with AI-powered search capabilities to find relevant case law and legal precedents quickly."
            },
            {
                icon: Smartphone,
                title: "Client Portal Solutions",
                description: "Provide clients with secure access to case information, documents, and communication channels for improved transparency and satisfaction."
            }
        ]
    },
    finance: {
        heroHeading: "Our Financial Solutions",
        heroDescription: "Build secure, scalable financial platforms that enhance customer trust and drive digital transformation in banking and insurance.",
        icon: TrendingUp,
        cards: [
            {
                icon: TrendingUp,
                title: "Digital Banking Solutions",
                description: "Create secure online banking platforms with real-time transactions, account management, and advanced fraud detection capabilities."
            },
            {
                icon: Smartphone,
                title: "Insurance Management",
                description: "Build comprehensive insurance platforms for policy management, claims processing, and customer service automation."
            },
            {
                icon: Factory,
                title: "Payment Processing",
                description: "Implement secure payment gateways and transaction processing systems with multi-currency support and compliance features."
            },
            {
                icon: Scale,
                title: "Risk Assessment Tools",
                description: "Leverage AI-powered analytics to assess financial risks, detect fraud, and make data-driven lending decisions."
            }
        ]
    },
    realEstate: {
        heroHeading: "Our Real Estate Solutions",
        heroDescription: "Transform property management and real estate operations with cutting-edge digital solutions that enhance efficiency and client satisfaction.",
        icon: Building2,
        cards: [
            {
                icon: Building2,
                title: "Property Management Systems",
                description: "Streamline property listings, tenant management, and maintenance tracking with comprehensive real estate management platforms."
            },
            {
                icon: Smartphone,
                title: "Virtual Property Tours",
                description: "Create immersive 3D virtual tours and augmented reality experiences that showcase properties to potential buyers remotely."
            },
            {
                icon: TrendingUp,
                title: "Market Analytics",
                description: "Access real-time market data, property valuations, and investment insights to make informed real estate decisions."
            },
            {
                icon: Factory,
                title: "Transaction Management",
                description: "Automate contract management, document signing, and closing processes for faster, more efficient real estate transactions."
            }
        ]
    },
    hospitality: {
        heroHeading: "Our Hospitality Solutions",
        heroDescription: "Elevate guest experiences and optimize operations with innovative hospitality technology that drives satisfaction and revenue growth.",
        icon: Plane,
        cards: [
            {
                icon: Plane,
                title: "Booking & Reservation Systems",
                description: "Build seamless booking platforms with real-time availability, dynamic pricing, and integrated payment processing for hotels and travel."
            },
            {
                icon: Smartphone,
                title: "Guest Experience Apps",
                description: "Create mobile apps for contactless check-in, room service, concierge services, and personalized guest experiences."
            },
            {
                icon: TrendingUp,
                title: "Revenue Management",
                description: "Optimize pricing strategies and maximize revenue with AI-powered analytics and demand forecasting tools."
            },
            {
                icon: Factory,
                title: "Operations Management",
                description: "Streamline housekeeping, maintenance, and staff coordination with integrated management systems for efficient operations."
            }
        ]
    },
    events: {
        heroHeading: "Our Event Management Solutions",
        heroDescription: "Streamline event planning and execution with comprehensive platforms that deliver seamless experiences for organizers and attendees.",
        icon: Calendar,
        cards: [
            {
                icon: Calendar,
                title: "Event Planning Tools",
                description: "Organize events efficiently with comprehensive planning tools for scheduling, vendor management, and timeline coordination."
            },
            {
                icon: Smartphone,
                title: "Ticketing & Registration",
                description: "Create seamless ticketing systems with online registration, payment processing, and attendee management capabilities."
            },
            {
                icon: TrendingUp,
                title: "Event Analytics",
                description: "Track attendance, engagement metrics, and ROI with detailed analytics to measure event success and improve future planning."
            },
            {
                icon: Factory,
                title: "Virtual Event Platforms",
                description: "Build hybrid and virtual event solutions with live streaming, interactive sessions, and networking features for global reach."
            }
        ]
    },
    media: {
        heroHeading: "Our Media Solutions",
        heroDescription: "Create engaging digital experiences that captivate audiences and maximize content value through innovative media platforms.",
        icon: Clapperboard,
        cards: [
            {
                icon: Clapperboard,
                title: "Content Management Systems",
                description: "Manage and distribute digital content efficiently with scalable CMS platforms for media publishing and streaming services."
            },
            {
                icon: Smartphone,
                title: "Streaming Platforms",
                description: "Build high-performance video and audio streaming platforms with adaptive bitrate, DRM, and multi-device support."
            },
            {
                icon: TrendingUp,
                title: "Audience Analytics",
                description: "Understand viewer behavior and preferences with advanced analytics to optimize content strategy and engagement."
            },
            {
                icon: Factory,
                title: "Content Monetization",
                description: "Implement subscription models, pay-per-view, and advertising solutions to maximize revenue from digital content."
            }
        ]
    },
    logistics: {
        heroHeading: "Our Logistics Solutions",
        heroDescription: "Optimize supply chain operations with intelligent systems that enhance visibility, reduce costs, and improve delivery performance.",
        icon: Truck,
        cards: [
            {
                icon: Truck,
                title: "Fleet Management",
                description: "Track vehicles, optimize routes, and manage driver performance with comprehensive fleet management solutions."
            },
            {
                icon: Factory,
                title: "Warehouse Management",
                description: "Streamline inventory storage, picking, packing, and shipping operations with intelligent warehouse management systems."
            },
            {
                icon: TrendingUp,
                title: "Supply Chain Analytics",
                description: "Gain visibility into supply chain operations with real-time tracking, predictive analytics, and performance monitoring."
            },
            {
                icon: Smartphone,
                title: "Last-Mile Delivery",
                description: "Optimize final delivery with route planning, real-time tracking, and customer communication for superior service."
            }
        ]
    },
    manufacturing: {
        heroHeading: "Our Manufacturing Solutions",
        heroDescription: "Drive operational excellence with smart manufacturing solutions that increase productivity, quality, and competitiveness.",
        icon: Factory,
        cards: [
            {
                icon: Factory,
                title: "Production Planning",
                description: "Optimize manufacturing schedules, resource allocation, and workflow management with intelligent production planning systems."
            },
            {
                icon: TrendingUp,
                title: "Quality Control Systems",
                description: "Ensure product quality with automated inspection, defect tracking, and compliance management solutions."
            },
            {
                icon: Smartphone,
                title: "IoT & Smart Manufacturing",
                description: "Connect machines and equipment with IoT sensors for real-time monitoring, predictive maintenance, and operational insights."
            },
            {
                icon: Scale,
                title: "ERP Integration",
                description: "Unify manufacturing operations with comprehensive ERP systems that integrate production, inventory, and financial management."
            }
        ]
    },
    telecom: {
        heroHeading: "Our Telecommunications Solutions",
        heroDescription: "Enable next-generation connectivity with innovative telecom solutions that enhance network performance and customer satisfaction.",
        icon: Smartphone,
        cards: [
            {
                icon: Smartphone,
                title: "Network Management",
                description: "Monitor and optimize network performance with advanced management systems for reliable telecommunications infrastructure."
            },
            {
                icon: TrendingUp,
                title: "Customer Service Platforms",
                description: "Enhance customer support with omnichannel platforms, self-service portals, and AI-powered chatbots for telecom services."
            },
            {
                icon: Factory,
                title: "Billing & Subscription",
                description: "Automate billing, subscription management, and revenue assurance with flexible telecom billing solutions."
            },
            {
                icon: Scale,
                title: "5G & IoT Solutions",
                description: "Build next-generation applications leveraging 5G networks and IoT connectivity for innovative telecom services."
            }
        ]
    }
};


export const industries = [
    {
        id: 1,
        title: "Commerce & Retail",
        icon: industriesData.retail.icon,
        href: "/industries/retail",
        description: "Transform your retail business with cutting-edge e-commerce solutions, inventory management systems, and customer experience platforms."
    },
    {
        id: 2,
        title: "HealthTech",
        icon: industriesData.healthcare.icon,
        href: "/industries/healthcare",
        description: "Develop secure, compliant healthcare solutions that improve patient care, streamline operations, and enhance medical service delivery."
    },
    {
        id: 3,
        title: "EdTech",
        icon: industriesData.education.icon,
        href: "/industries/education",
        description: "Create engaging learning platforms and educational management systems that revolutionize the way knowledge is delivered and managed."
    },
    {
        id: 4,
        title: "LegalTech",
        icon: industriesData.legal.icon,
        href: "/industries/legal",
        description: "Streamline legal processes with advanced case management systems and document automation solutions."
    },
    {
        id: 5,
        title: "Finance & Insurance",
        icon: industriesData.finance.icon,
        href: "/industries/finance",
        description: "Develop secure financial systems and insurance platforms that streamline operations and enhance customer service."
    },
    {
        id: 6,
        title: "Real Estate",
        icon: industriesData.realEstate.icon,
        href: "/industries/real-estate",
        description: "Modernize property management and real estate operations with innovative digital solutions."
    },
    {
        id: 7,
        title: "Hospitality & Travel",
        icon: industriesData.hospitality.icon,
        href: "/industries/hospitality",
        description: "Enhance guest experiences and streamline operations with innovative hospitality management solutions."
    },
    {
        id: 8,
        title: "Event Management",
        icon: industriesData.events.icon,
        href: "/industries/events",
        description: "Simplify event planning and execution with comprehensive event management platforms."
    },
    {
        id: 9,
        title: "Entertainment & Media",
        icon: industriesData.media.icon,
        href: "/industries/media",
        description: "Build engaging platforms that connect audiences with content through innovative media solutions."
    },
    {
        id: 10,
        title: "Logistics & Supply Chain",
        icon: industriesData.logistics.icon,
        href: "/industries/logistics",
        description: "Optimize the movement and delivery of goods with advanced transportation management systems."
    },
    {
        id: 11,
        title: "Manufacturing",
        icon: industriesData.manufacturing.icon,
        href: "/industries/manufacturing",
        description: "Improve efficiency with ERP systems and production management solutions for modern manufacturing."
    },
    {
        id: 12,
        title: "Telecommunications",
        icon: industriesData.telecom.icon,
        href: "/industries/telecom",
        description: "Create solutions that enhance connectivity and communication for telecom service providers."
    },
];
