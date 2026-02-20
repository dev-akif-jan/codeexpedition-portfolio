// Import all success story images - proper React imports for Vite bundling
import uptokImage from '../../assets/SuccessStories/uptok.webp';
import fourCornersImage from '../../assets/Common/4-corners.webp';
import diagnossImage from '../../assets/Common/diagnoss.svg';
import cyberdiveImage from '../../assets/SuccessStories/cyberdive.svg';
import operatorCabaImage from '../../assets/SuccessStories/operator-caba.svg';
import helmerCaseImage from '../../assets/SuccessStories/helmer-case.webp';
import pbsImage from '../../assets/SuccessStories/pbs.webp';
import kenmoreImage from '../../assets/SuccessStories/kenmore.svg';
import jennairImage from '../../assets/Common/jennair.svg';
import mediskedImage from '../../assets/SuccessStories/medisked.webp';
import rcbsImage from '../../assets/SuccessStories/rcbs.svg';
import halyardImage from '../../assets/Common/halyard.svg';
import craftsmanImage from '../../assets/Common/craftsman.svg';
import kitchenaidImage from '../../assets/Common/kitchenaid.svg';
import meltzerHellrungImage from '../../assets/SuccessStories/meltzer-hellrung.webp';
import collegeAdmissionImage from '../../assets/Common/college-admission.png';
import realreppImage from '../../assets/SuccessStories/realrepp.webp';
import newsLiteracyImage from '../../assets/Common/news-literacy-project.svg';
import pathForwardImage from '../../assets/Common/path-forward-formulator.svg';
import financial4SquareImage from '../../assets/SuccessStories/financial-4-square.svg';
import trackingUnlimitedImage from '../../assets/SuccessStories/tracking-unlimited.svg';
import erpBuddyImage from '../../assets/SuccessStories/erpbuddy.webp';

// All 23 success stories data
export const successStoriesHero = {
  title: "Success Stories",
  searchPlaceholder: "Search success stories by title, technology, or industry..."
};

export const successStoriesContent = {
  noResultsMessage: "No success stories found matching your criteria.",
  keyResultsLabel: "Key Results:"
};

export const successStories = [
  {
    id: 1,
    title: "Uptok: Revolutionizing Digital Customer Engagement Through High-Performance Integrated Video Commerce Platforms",
    description: "We partnered with Uptok to integrate advanced video commerce for luxury fashion retail, leading to a twenty percent increase in purchase values by providing personalized guidance for all digital customers daily.",
    image: uptokImage,
    industry: "E-Commerce",
    keyResults: [
      "Achieved thirty percent higher conversion rates by re-humanizing the entire digital shopping experience for all.",
      "Observed twenty percent increase in average order values through curated consultations and professional care.",
      "Increased satisfaction scores by connecting shoppers with experts for personalized and professional support.",
    ],
    technologies: ["React.js", "Node.js", "WebRTC", "Socket.io", "Redux", "AWS Cloud", "TailwindCSS", "PostgreSQL"]
  },
  {
    id: 2,
    title: "SuiteBuddy: Conversational AI for Smarter CRM Sales and Automated Lead Management Within Global Ecosystems",
    description: "Build a seamless mobile experience with conversational AI to update leads in NetSuite, enabling sales teams to manage CRM tasks through chat interactions which increased accuracy by over forty percent now.",
    image: erpBuddyImage,
    industry: "Mobile & AI",
    keyResults: [
      "Streamlined CRM management with automated entry workflows allowing sales teams to update voice records fast.",
      "Enabled natural language interactions via sophisticated NLP models that understand complex sales contexts.",
      "Delivered a robust cross-platform mobile application that integrates directly with complex ERP systems today.",
    ],
    technologies: ["React Native", "Dialogflow", "NLP", "NetSuite", "Node.js", "Postgres", "Express", "Redis"]
  },
  {
    id: 3,
    title: "4Corners: AI-Powered Legal Deposition Summaries and Automated Document Analysis for Modern Law Professionals",
    description: "Transforming the legal industry with an AI-powered Deposition Summarizer that automates the process without compromising on accuracy by leveraging models to extract facts from thousands of legal pages fast.",
    image: fourCornersImage,
    industry: "Legal Tech",
    keyResults: [
      "Reduced turnaround time from several days to hours for legal summaries by automating the extraction phase.",
      "Significantly improved quality and consistency of legal documents using standardized AI-driven check tools.",
      "Enhanced scalability for handling larger volumes of cases without requiring additional paralegal staffers.",
    ],
    technologies: ["Python", "OpenAI", "NLP", "PDF Libs", "AWS Lambda", "Next.js", "FastAPI", "Postgres"]
  },
  {
    id: 4,
    title: "Diagnoss: AI-Powered Plugin for Medical Coding Accuracy and Seamless EHR Integration for Healthcare Providers",
    description: "Empower healthcare practitioners with an innovative AI-powered Chrome extension to fill in ICD and CPT codes within EHR systems, reducing errors by sixty percent and ensuring providers are reimbursed fast.",
    image: diagnossImage,
    industry: "Health Tech",
    keyResults: [
      "Increased coding efficiency for healthcare practitioners by providing real-time suggestions based on data.",
      "Improved clinical accuracy with AI-driven suggestion engines that scan for potential missing record files.",
      "Seamless EHR integration for a frictionless medical workflow that sits right on top of exist software today.",
    ],
    technologies: ["Chrome Ext.", "Python", "ML Models", "AthenaHealth", "SAML SSO", "React", "Flask", "Docker"]
  },
  {
    id: 5,
    title: "Cyberdive: Advanced Child Safety Monitoring Applications and Real-Time Mental Health Support for Families",
    description: "How we helped Cyber Dive create sophisticated monitoring apps that empower parents to monitor online interactions while providing mental health support through a smartphone experience that fosters better care.",
    image: cyberdiveImage,
    industry: "Child Safety",
    keyResults: [
      "Enhanced parental visibility into digital activities without invading privacy using real-time alerts today.",
      "Improved mental health support via integrated check-in systems that encourage children to express feelings.",
      "Increased user engagement and safety across the Aqua One platform by using sophisticated detection tools.",
    ],
    technologies: ["React Native", "Firebase", "WebSockets", "AI/ML", "Node.js", "AWS S3", "Analytics", "Lottie"]
  },
  {
    id: 6,
    title: "CABA Design: Client Meeting Optimization and Integrated CRM Solutions for Architecture and Interior Designers",
    description: "How we helped CABA Design create an innovative system to capture, transcribe, and search meeting insights, enhancing client communication and team collaboration by transforming recordings into actionable tasks.",
    image: operatorCabaImage,
    industry: "Design Tech",
    keyResults: [
      "Minimized meeting review time by over eighty percent using automated transcription and extraction tools.",
      "Enhanced attention to client needs by ensuring every detail mentioned during meetings is captured today.",
      "Improved consistency in project execution by centralizing all design feedback in a searchable database.",
    ],
    technologies: ["React.js", "Whisper AI", "Node.js", "Postgres", "TailwindCSS", "Recoil", "AWS Lambda", "Next.js"]
  },
  {
    id: 7,
    title: "Uptok Video: Scaling High-Impact Personalization for Luxury E-Commerce Brands Thru Real-Time Interactivity",
    description: "How we implemented a high-performance video communication protocol for Uptok, allowing luxury retailers to engage high-intent shoppers through face-to-face digital consultations that drive massive revenue.",
    image: uptokImage,
    industry: "E-Commerce",
    keyResults: [
      "Enabled seamless real-time video sessions between sales associates and luxury customers around the globe.",
      "Reduced latency for high-definition video streams to ensure a premium and lag-free experience for users.",
      "Integrated customer intent data to trigger video invitations at the perfect moment for higher conversions.",
    ],
    technologies: ["WebRTC", "Kurento", "Redis", "Node.js", "React.js", "Terraform", "Docker", "Prometheus"]
  },
  {
    id: 7,
    title: "Uptok Video: Scaling High-Impact Personalization for Luxury E-Commerce Brands Through Real-Time Customer Interactivity",
    description: "How we implemented a high-performance video communication protocol for Uptok, allowing luxury retailers to engage high-intent shoppers through face-to-face digital consultations that drive massive revenue for brands.",
    image: uptokImage,
    industry: "E-Commerce",
    keyResults: [
      "Enabled seamless real-time video sessions between sales associates and luxury customers around the globe.",
      "Reduced latency for high-definition video streams to ensure a premium and lag-free experience for users.",
      "Integrated customer intent data to trigger video invitations at the perfect moment for higher conversions.",
    ],
    technologies: ["WebRTC", "Kurento", "Redis", "Node.js", "React", "Terraform", "Docker", "Prometheus"]
  },
  {
    id: 8,
    title: "Helmer Legal: Custom Case Management Platform and Automated CSV Workflows for Large-Scale Immigration Law Operations",
    description: "How we built a comprehensive case management platform for Helmer Legal with over one hundred attorneys, featuring role-based access and automated CSV workflows for maximum speed and accuracy today.",
    image: helmerCaseImage,
    industry: "Legal Tech",
    keyResults: [
      "Streamlined case management for over one hundred attorneys by automating the repetitive generation.",
      "Integrated Outlook calendar scheduling and real-time requirement updates to ensure high compliance.",
      "Automated complex CSV import and export workflows that reduced manual data entry time significantly.",
    ],
    technologies: ["React.js", "Node.js", "TypeScript", "Postgres", "GraphQL", "Outlook", "Twilio", "SendGrid"]
  },
  {
    id: 9,
    title: "Multi-Brand E-Commerce: Scalable Magento platform for Limoges Jewelry, PBS Kids Shop, and Global Retailers Everywhere",
    description: "How we built and maintained scalable Magento-based e-commerce platforms for multiple retail brands including Limoges Jewelry and PBS Kids Shop with custom storefronts and automated management today.",
    image: pbsImage,
    industry: "E-Commerce",
    keyResults: [
      "Multi-brand storefronts delivered with a unified backend architecture for easy management of catalogs.",
      "Automated catalog management and inventory synchronization that reduced overhead for the sales team.",
      "Scalable architecture for growth that supports seasonal traffic spikes and high-volume transactions.",
    ],
    technologies: ["Magento 2", "PHP 8", "MySQL", "JavaScript", "Stripe API", "Authorize.Net", "PayPal", "Redis"]
  },
  {
    id: 10,
    title: "Kenmore: Custom Product Catalog Management and Flexible Admin Interface for Large-Scale Home Appliance Operations",
    description: "How we built a custom Ruby on Rails application for Kenmore to manage their extensive product catalog with a flexible admin interface and scalable architecture for seamless operations globally.",
    image: kenmoreImage,
    industry: "E-Commerce",
    keyResults: [
      "Streamlined catalog management with a custom interface that allows for rapid updates to products.",
      "Improved efficiency with bulk operations and automated data validation that ensured consistent info.",
      "Scalable architecture for growth which currently supports thousands of SKUs and millions of requests.",
    ],
    technologies: ["Ruby on Rails", "Postgres", "Redis", "AWS S3", "Elastic", "Sidekiq", "Docker", "Devise"]
  },
  {
    id: 11,
    title: "JennAir: Reinventing the Luxury Appliance Experience Through Integrated Concept Mobile Apps and Learning Systems Now",
    description: "How we helped JennAir reimagine customer and retailer interactions with concept mobile apps and AEM-powered catalogs that deliver premium appliance experiences for high-end luxury consumers today.",
    image: jennairImage,
    industry: "Luxury Tech",
    keyResults: [
      "Enhanced customer and retailer interactions using concept mobile apps that provide deep discovery.",
      "Implemented high-performance learning platforms that educate consumers on advanced device features.",
      "Streamlined product catalog management with AEM integration to ensure consistent branding for all.",
    ],
    technologies: ["React Native", "AEM", "SAP Commerce", "Node.js", "AWS Cloud", "GraphQL", "Storybook", "Typescript"]
  },
  {
    id: 12,
    title: "Medisked: Performance Optimization and Cloud Migration for Healthcare Data Systems Supporting Shared Care Plans Fast",
    description: "How we collaborated with Medisked to optimize their healthcare data management platform, improving system performance by over fifty percent and ensuring high availability for critical care services.",
    image: mediskedImage,
    industry: "Health Tech",
    keyResults: [
      "Improved system performance and response times by over fifty percent for complex data query files.",
      "Ensured high availability and data integrity for critical care by implementing cloud infrastructure.",
      "Simplified data reporting and analytics workflows for providers, allowing for better outcome tracking.",
    ],
    technologies: ["Angular", "Node.js", "SQL Server", "Azure", "Docker", "Kubernetes", "Power BI", "Express"]
  },
  {
    id: 13,
    title: "RCBS MatchMaster: Precision Engineering and Smart Bluetooth Connectivity for Professional Grade Load Equipment Systems",
    description: "Developing a sophisticated Bluetooth-enabled application for the RCBS MatchMaster scale, allowing professional handloaders to achieve unparalleled precision and consistency for their ammunition now.",
    image: rcbsImage,
    industry: "Precision Tech",
    keyResults: [
      "Achieved unparalleled precision in handloading operations by providing real-time local connectivity.",
      "Improved user consistency and safety through automated validation checks and historical logging fast.",
      "Delivered a high-performance, low-latency mobile experience that functions excellently everywhere.",
    ],
    technologies: ["Flutter", "Firebase", "BLE Tech", "Node.js", "D3.js", "SQLite", "Material UI", "Dart"]
  },
  {
    id: 14,
    title: "Halyard Health: Advanced Sterilization Monitoring and Healthcare Compliance Solutions for Modern Medical Centers Today",
    description: "How we helped Halyard Health build digital tools to monitor sterilization processes and ensure compliance with medical standards, reducing the risk of healthcare-associated infections globally now.",
    image: halyardImage,
    industry: "Medical Systems",
    keyResults: [
      "Reduced the risk of infections by providing real-time monitoring of sterilization cycles for all.",
      "Ensured strict compliance with medical standards through automated documentation and audits daily.",
      "Improved operational efficiency for sterile processing by providing maintenance alerts for teams.",
    ],
    technologies: ["React.js", "Node.js", "Postgres", "AWS Cloud", "PDF Gen", "IoT Gateway", "MQTT", "TailwindCSS"]
  },
  {
    id: 15,
    title: "Craftsman: Integrated Smart Tool Ecosystem and Mobile Maintenance Solutions for Professional Trades and DIY Builders",
    description: "How we built a connected tool ecosystem for Craftsman, allowing users to track performance, manage settings, and receive alerts through a unified mobile application that enhances productivity fast.",
    image: craftsmanImage,
    industry: "Industrial Tech",
    keyResults: [
      "Enhanced productivity on job sites by allowing users to track tool performance and safety alerts.",
      "Improved tool management for professional crews through integrated inventory tracking systems today.",
      "Delivered a high-performance mobile experience with offline capabilities for any environments now.",
    ],
    technologies: ["React Native", "BLE Connectivity", "Firebase", "Node.js", "Redux", "Sentry", "App Center", "Lottie"]
  },
  {
    id: 16,
    title: "KitchenAid: Elevating Global Digital Experience through Adobe Experience Manager and Unified Design Standards Now",
    description: "How we helped KitchenAid enhance their digital presence on kitchenaid.com using Adobe Experience Manager, delivering seamless navigation and brand-consistent designs for premium lines globally.",
    image: kitchenaidImage,
    industry: "Luxury Retail",
    keyResults: [
      "Enhanced navigation with a sophisticated mega menu system that allows users to explore items well.",
      "Ensured pixel-perfect brand consistency across digital touchpoints by using design tokens today.",
      "Improved cross-platform stability and performance by optimizing assets and caching strategies fast.",
    ],
    technologies: ["AEM", "JavaScript", "HTML5", "CSS3", "Java", "Figma", "Sightly", "OSGi Framework"]
  },
  {
    id: 17,
    title: "Meltzer Hellrung: Strategic Immigration Compliance Systems and Enterprise Level Case Management for Tech Groups",
    description: "How we developed a custom immigration compliance platform for Meltzer Hellrung that enables tech giants and startups to manage legal filings with automated notifications and status updates daily.",
    image: meltzerHellrungImage,
    industry: "Legal Tech",
    keyResults: [
      "Streamlined immigration compliance for thousands of foreign nationals by automating the process now.",
      "Improved legal outcomes and filing accuracy through automated checks and updates on federal laws.",
      "Enabled secure enterprise-grade communication between attorneys and HR through a unified portal.",
    ],
    technologies: ["React.js", "Node.js", "AWS Lambda", "PostgreSQL", "SendGrid", "Formik", "AWS S3", "Stripe API"]
  },
  {
    id: 18,
    title: "College Advisor: Revolutionizing College Admissions Guidance Through Scalable Digital Mentorship and Systems",
    description: "How we transformed the admissions guidance industry by building a platform that grew from eight hundred to over two million active users, helping more than eight thousand families navigate everything.",
    image: collegeAdmissionImage,
    industry: "EdTech",
    keyResults: [
      "Grew user base from eight hundred to over two million active users by implementing cloud systems.",
      "Guided more than eight thousand families successfully through complex cycles with advisory tools.",
      "Connected students with over three hundred expert advisors globally using matching algorithms now.",
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "PostgreSQL", "AWS Amplify", "Redis", "Next.js", "TailwindCSS"]
  },
  {
    id: 19,
    title: "RealRepp: Transforming Talent Recruitment with Custom Applicant Tracking Systems and Automated Candidate Flows",
    description: "How we helped RealRepp build a custom Applicant Tracking System that revolutionized their recruitment processes and grew to manage over five thousand active candidates with enhanced efficiency.",
    image: realreppImage,
    industry: "HR Tech",
    keyResults: [
      "Manages over five thousand active candidates with high-performance database and rapid discovery.",
      "Handles more than five hundred unique job listings simultaneously with automated applicant grading.",
      "Became an industry-leading recruitment platform by providing customized tools for data decisions.",
    ],
    technologies: ["React.js", "Node.js", "Redux", "Postgres", "Elastic", "Docker", "CI/CD", "Sentry Cloud"]
  },
  {
    id: 20,
    title: "NLP: Modernizing National Media Literacy Platforms and Integrated Educational Dashboards for American Schools",
    description: "How we helped the News Literacy Project transform their legacy PHP platforms into modern, scalable solutions reaching millions of students across the United States with innovative new features.",
    image: newsLiteracyImage,
    industry: "Nonprofit Tech",
    keyResults: [
      "Integrated with over thirteen hundred schools to provide media analysis tools for students today.",
      "Launched an innovative Election Dashboard that tracks media narratives in real-time for students.",
      "Unified authentication across multiple educational platforms to create a seamless user journey fast.",
    ],
    technologies: ["Next.js", "React.js", "NestJS", "TypeORM", "Postgres", "AWS SDK", "Passport", "Storybook"]
  },
  {
    id: 21,
    title: "PathForward: Next-Gen Pharmaceutical Formulation Platforms and Automated Drug Development Compliance Workflow",
    description: "How we built a state-of-the-art digital platform that revolutionized pharmaceutical and dietary supplement formulation processes with streamlined workflows and compliance monitoring for all.",
    image: pathForwardImage,
    industry: "Healthcare",
    keyResults: [
      "Streamlined entire FDA approval process by automating formulation documentation and adherence fast.",
      "Enabled mobile formula management and ingredient sourcing for laboratory teams for collaboration.",
      "Integrated global ingredient sourcing and inventory tracking systems to ensure quality compliance.",
    ],
    technologies: ["React.js", "React Native", "NestJS", "TypeORM", "Postgres", "Swagger", "Docker", "Auth0"]
  },
  {
    id: 22,
    title: "Financial Foursquare: Transforming Financial Advice Delivery Thru Automated Checklists and Integrated Pillars",
    description: "How we built a digital platform that revolutionized how financial advisors deliver value to their clients through automated checklists and the innovative Four-Pillar Program for planning always.",
    image: financial4SquareImage,
    industry: "FinTech",
    keyResults: [
      "Digitized complex financial advisory workflows using automated check-lists that ensure consistency.",
      "Implemented the innovative Four-Pillar Program as a digital interactive experience for all users.",
      "Enhanced client collaboration and engagement levels through a secure mobile portal for progress.",
    ],
    technologies: ["React.js", "Node.js", "Typescript", "Express", "Postgres", "GCP Cloud", "Chart.js", "JWT Auth"]
  },
  {
    id: 23,
    title: "Print Refinery: Modernizing Print Management Operations Thru Custom Laboratory Information and LIMS Systems",
    description: "How we built a custom Laboratory Information Management System (LIMS) that transformed print management and product delivery operations for streamlined B2B2C workflows across retail networks fast.",
    image: trackingUnlimitedImage,
    industry: "Print Tech",
    keyResults: [
      "Automated the entire order lifecycle management process for custom print products for consumers.",
      "Integrated multiple secure payment systems and shipping providers to create B2B2C operations now.",
      "Streamlined complex print laboratory operations by providing real-time production tracking checks.",
    ],
    technologies: ["React.js", "NestJS", "Typescript", "GraphQL", "Postgres", "AWS S3", "Stripe API", "ApexCharts"]
  }
];



