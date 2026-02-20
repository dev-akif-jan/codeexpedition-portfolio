import { Cloud, Database, Server, Zap, Settings, Shield, FileCheck, Lock, UserCheck, AlertTriangle, Users, Briefcase, UserPlus, Target, Headphones, Code2, Smartphone, Globe, Layers, Cpu, Palette, CheckCircle, Rocket, Award, TrendingUp, BarChart3, Brain, Network, Bot, FileText, Search, Sparkles, } from 'lucide-react';

// Technology Icons for Application Development
import reactIcon from '../../assets/Technologies/react.svg';
import nextjsIcon from '../../assets/Technologies/nextjs.svg';
import vueIcon from '../../assets/Technologies/vue.svg';
import angularIcon from '../../assets/Technologies/angular.svg';
import typescriptIcon from '../../assets/Technologies/typescript.svg';
import nodejsIcon from '../../assets/Technologies/nodejs.svg';
import pythonIcon from '../../assets/Technologies/python.svg';
import javaIcon from '../../assets/Technologies/java.svg';
import dotnetIcon from '../../assets/Technologies/dotnet.svg';
import swiftIcon from '../../assets/Technologies/swift.svg';
import postgresqlIcon from '../../assets/Technologies/postgresql.svg';
import mongodbIcon from '../../assets/Technologies/mongodb.svg';
import mysqlIcon from '../../assets/Technologies/mysql.svg';
import redisIcon from '../../assets/Technologies/redis.svg';
import elasticsearchIcon from '../../assets/Technologies/elasticsearch.svg';
import awsIcon from '../../assets/Technologies/aws.svg';
import azureIcon from '../../assets/Technologies/azure.svg';
import gcpIcon from '../../assets/Technologies/gcp.svg';
import dockerIcon from '../../assets/Technologies/docker.svg';
import kubernetesIcon from '../../assets/Technologies/kubernetes.svg';
import websocketIcon from '../../assets/Technologies/websocket.svg';

// AI Service Images
import langchainImg from '../../assets/Services/langchain.webp';
import claudeImg from '../../assets/Services/claude.webp';
import grokImg from '../../assets/Services/grok.webp';
import openaiImg from '../../assets/Services/openai.svg';
import vercelImg from '../../assets/Services/vercel.svg';
import gcpImgService from '../../assets/Services/gcp.svg';

export const allServicesHero = {
  heading: "Our Services",
  description: "Comprehensive software solutions to drive your business forward. We combine expertise, innovation, and industry best practices to deliver exceptional results.",
  learnMoreText: "Learn more"
};

export const servicesData = {
  cloudInfrastructure: {
    hero: {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Let's optimize your data infrastructure for better performance and scalability."
    },
    servicesSection: {
      title: "Our Services",
      description: "Comprehensive cloud and database solutions for your business",
      cards: [
        {
          icon: Cloud,
          title: "Cloud Migration",
          description: "Seamless migration of your existing infrastructure and applications to the cloud with minimal disruption."
        },
        {
          icon: Database,
          title: "Database Design",
          description: "Expert database architecture and design services to ensure optimal data organization and accessibility."
        },
        {
          icon: Server,
          title: "Cloud Architecture",
          description: "Custom cloud solutions designed for scalability, reliability, and cost-effectiveness."
        },
        {
          icon: Zap,
          title: "Performance Optimization",
          description: "Advanced optimization techniques to enhance database and cloud infrastructure performance."
        },
        {
          icon: Settings,
          title: "Managed Services",
          description: "24/7 monitoring and management of your cloud infrastructure and database systems."
        }
      ]
    },
    platformsSection: {
      title: "Cloud Platforms",
      description: "We work with leading cloud providers",
      items: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform",
        "Digital Ocean",
        "Heroku"
      ]
    },
    technologiesSection: {
      title: "Database Technologies",
      description: "Expertise in various database systems",
      items: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Redis",
        "Elasticsearch"
      ]
    },
    benefitsSection: {
      title: "Why Choose Our Cloud & Database Solutions?",
      description: "Experience the benefits of modern cloud infrastructure",
      benefits: [
        {
          title: "Scalability",
          description: "Easily scale your infrastructure up or down based on demand."
        },
        {
          title: "Cost Optimization",
          description: "Pay only for the resources you use with optimized cloud spending."
        },
        {
          title: "High Availability",
          description: "Ensure your applications and data are always accessible with redundant systems."
        },
        {
          title: "Security",
          description: "Enterprise-grade security measures to protect your data and applications."
        }
      ]
    }
  },
  securityCompliance: {
    hero: {
      icon: Shield,
      title: "Compliance Solutions",
      description: "Ensure your software solutions meet industry standards and regulatory requirements with our comprehensive compliance expertise."
    },
    servicesSection: {
      title: "Our Compliance Services",
      description: "Comprehensive compliance solutions to protect your business",
      cards: [
        {
          icon: FileCheck,
          title: "GDPR Compliance",
          description: "Ensure your software systems comply with EU data protection regulations and privacy requirements."
        },
        {
          icon: Shield,
          title: "HIPAA Compliance",
          description: "Implement healthcare data protection standards and secure handling of sensitive medical information."
        },
        {
          icon: Lock,
          title: "Security Audits",
          description: "Comprehensive security assessments to identify vulnerabilities and ensure regulatory compliance."
        },
        {
          icon: AlertTriangle,
          title: "Risk Assessment",
          description: "Thorough evaluation of potential security risks and implementation of mitigation strategies."
        },
        {
          icon: UserCheck,
          title: "Compliance Training",
          description: "Educational programs to help your team understand and maintain compliance requirements."
        }
      ]
    },
    standardsSection: {
      title: "Regulatory Standards",
      description: "We help you comply with major regulatory standards",
      items: [
        "GDPR (General Data Protection Regulation)",
        "HIPAA (Health Insurance Portability and Accountability Act)",
        "SOC 2 (Service Organization Control 2)",
        "PCI DSS (Payment Card Industry Data Security Standard)",
        "ISO 27001"
      ]
    },
    processSection: {
      title: "Our Compliance Process",
      description: "A systematic approach to achieving and maintaining compliance",
      steps: [
        {
          number: "1",
          title: "Assessment",
          description: "Evaluate current systems and processes against compliance requirements."
        },
        {
          number: "2",
          title: "Gap Analysis",
          description: "Identify areas that need improvement to meet compliance standards."
        },
        {
          number: "3",
          title: "Implementation",
          description: "Deploy necessary changes and security measures to achieve compliance."
        },
        {
          number: "4",
          title: "Monitoring",
          description: "Continuous monitoring and updates to maintain compliance status."
        }
      ]
    },
    benefitsSection: {
      title: "Benefits of Compliance",
      description: "Why maintaining compliance is crucial for your business",
      benefits: [
        {
          title: "Risk Mitigation",
          description: "Protect your business from potential legal and financial risks."
        },
        {
          title: "Customer Trust",
          description: "Build and maintain trust with customers by protecting their data."
        },
        {
          title: "Competitive Advantage",
          description: "Stand out in the market with proven compliance credentials."
        }
      ]
    }
  },
  staffAugmentation: {
    hero: {
      icon: Users,
      title: "On Demand Talent",
      description: "Access skilled technology professionals on-demand to augment your team and accelerate project delivery."
    },
    servicesSection: {
      title: "Our Talent Solutions",
      description: "Flexible engagement models to meet your staffing needs",
      cards: [
        {
          icon: Users,
          title: "Staff Augmentation",
          description: "Seamlessly integrate skilled professionals into your existing teams to enhance capabilities and accelerate project delivery."
        },
        {
          icon: Briefcase,
          title: "Dedicated Teams",
          description: "Full-time dedicated development teams that work exclusively on your projects with direct communication and management."
        },
        {
          icon: UserPlus,
          title: "Project-Based Hiring",
          description: "Access specialized talent for specific projects or time-bound initiatives with flexible engagement models."
        },
        {
          icon: Target,
          title: "Technical Consulting",
          description: "Expert guidance on technology selection, architecture decisions, and implementation strategies."
        },
        {
          icon: UserCheck,
          title: "Skill Gap Analysis",
          description: "Identify skill gaps in your team and find the right talent to complement your existing capabilities."
        }
      ]
    },
    expertiseSection: {
      title: "Areas of Expertise",
      description: "Access top talent across various technology domains",
      items: [
        "Full Stack Development",
        "DevOps & Cloud Engineering",
        "UI/UX Design",
        "Mobile Development",
        "Data Science & AI",
        "Quality Assurance"
      ]
    },
    processSection: {
      title: "Our Engagement Process",
      description: "Simple and efficient process to get you the right talent",
      steps: [
        {
          number: "1",
          title: "Requirements Analysis",
          description: "Understanding your needs, project scope, and required skill sets."
        },
        {
          number: "2",
          title: "Talent Matching",
          description: "Identifying and presenting the best-matched candidates for your needs."
        },
        {
          number: "3",
          title: "Team Integration",
          description: "Smooth onboarding and integration of selected talent with your team."
        },
        {
          number: "4",
          title: "Ongoing Support",
          description: "Continuous support and performance monitoring throughout the engagement."
        }
      ]
    },
    benefitsSection: {
      title: "Benefits of On-Demand Talent",
      description: "Why choose our talent solutions",
      benefits: [
        {
          title: "Flexibility",
          description: "Scale your team up or down based on project requirements."
        },
        {
          title: "Cost-Effective",
          description: "Reduce hiring costs and overhead while maintaining high quality."
        },
        {
          title: "Speed to Market",
          description: "Accelerate project delivery with immediate access to skilled professionals."
        }
      ]
    }
  },
  applicationDevelopment: {
    hero: {
      icon: Code2,
      title: "Custom Software Engineering",
      description: "Every successful business needs software that works as hard as you do. We build custom applications that solve real problems, delight users, and scale with your ambitions—whether you're launching your first product or transforming enterprise operations."
    },
    keyComponentsSection: {
      title: "Key Components of software Enginnering Development",
      description: "From concept to deployment, we handle every layer of modern software development",
      cards: [
        {
          icon: Globe,
          title: "Web Platforms",
          description: "Progressive web apps and browser-based systems that work anywhere. We build fast, responsive interfaces that feel native while leveraging the reach and accessibility of the web."
        },
        {
          icon: Smartphone,
          title: "Mobile Apps",
          description: "Native experiences for iOS and Android, or unified codebases with React Native and Flutter. Your users get smooth performance, offline functionality, and deep device integration."
        },
        {
          icon: Database,
          title: "Business Systems",
          description: "Custom CRM, ERP, and operational tools built around your workflows—not the other way around. Automate repetitive tasks and give your team software that actually helps them work better."
        },
        {
          icon: Layers,
          title: "Interface Design",
          description: "Beautiful, intuitive designs grounded in user research and testing. We craft experiences that feel effortless because we've thought through every interaction and edge case."
        },
        {
          icon: Cpu,
          title: "Backend & APIs",
          description: "Robust server architecture and well-documented APIs that power your applications and connect your systems. Built for reliability, security, and future integrations."
        },
        {
          icon: Palette,
          title: "Smart Features",
          description: "AI-powered search, recommendations, automation, and insights. We integrate machine learning where it adds genuine value—not just because it's trendy."
        }
      ]
    },
    technologiesSection: {
      title: "Our Technology Stack",
      description: "We choose proven tools that balance innovation with stability, ensuring your application is built on solid foundations",
      categories: [
        {
          subtitle: "Programming Languages",
          technologies: [
            { name: "JavaScript", icon: nodejsIcon, description: "Frontend & Backend" },
            { name: "TypeScript", icon: typescriptIcon, description: "Full-stack Development" },
            { name: "Python", icon: pythonIcon, description: "Backend & AI" },
            { name: "Java", icon: javaIcon, description: "Enterprise Development" },
            { name: "Swift", icon: swiftIcon, description: "iOS Development" }
          ]
        },
        {
          subtitle: "Frontend Frameworks",
          technologies: [
            { name: "React", icon: reactIcon, description: "Web Applications" },
            { name: "Next.js", icon: nextjsIcon, description: "SSR & Static Sites" },
            { name: "Vue.js", icon: vueIcon, description: "Interactive UIs" },
            { name: "Angular", icon: angularIcon, description: "Enterprise Apps" },
            { name: "React Native", icon: reactIcon, description: "Mobile Apps" }
          ]
        },
        {
          subtitle: "Backend Frameworks",
          technologies: [
            { name: "Node.js", icon: nodejsIcon, description: "API Development" },
            { name: "Python", icon: pythonIcon, description: "Python Framework" },
            { name: ".NET", icon: dotnetIcon, description: "Enterprise Solutions" },
            { name: "Spring Boot", icon: javaIcon, description: "Java Framework" },
            { name: "Express", icon: websocketIcon, description: "Web Services" }
          ]
        },
        {
          subtitle: "Databases",
          technologies: [
            { name: "PostgreSQL", icon: postgresqlIcon },
            { name: "MongoDB", icon: mongodbIcon },
            { name: "MySQL", icon: mysqlIcon },
            { name: "Redis", icon: redisIcon },
            { name: "Elasticsearch", icon: elasticsearchIcon }
          ]
        },
        {
          subtitle: "Cloud Services",
          technologies: [
            { name: "AWS", icon: awsIcon },
            { name: "Azure", icon: azureIcon },
            { name: "Google Cloud", icon: gcpIcon },
            { name: "Docker", icon: dockerIcon },
            { name: "Kubernetes", icon: kubernetesIcon }
          ]
        }
      ]
    },
    industryUseCasesSection: {
      title: "Industries We Serve",
      description: "We've built software across industries—here's how custom applications solve real challenges",
      benefits: [
        {
          icon: Target,
          title: "Healthcare",
          description: "Secure patient portals, telehealth platforms, and clinical workflow tools that improve care delivery while meeting strict HIPAA compliance requirements."
        },
        {
          icon: Palette,
          title: "Retail & Commerce",
          description: "Inventory systems, customer-facing marketplaces, and point-of-sale solutions that handle high transaction volumes and create seamless shopping experiences."
        },
        {
          icon: Code2,
          title: "Financial Services",
          description: "Banking platforms, payment processors, and investment tools with bank-grade security, real-time data processing, and regulatory compliance built in from day one."
        },
        {
          icon: Rocket,
          title: "Education",
          description: "Learning platforms, student management systems, and virtual classrooms that make education more accessible and engaging for students and educators alike."
        },
        {
          icon: TrendingUp,
          title: "Logistics",
          description: "Route optimization, fleet tracking, and warehouse management systems that reduce costs, improve delivery times, and provide real-time visibility across your supply chain."
        }
      ]
    },
    faqSection: {
      title: "Frequently Asked Questions",
      description: "Answers to what clients typically ask when starting a software project",
      faqs: [
        {
          question: "How long does it take to build an application?",
          answer: "It depends on scope and complexity. A focused MVP might take 8-12 weeks, while a full-featured platform could be 6-9 months. We'll give you a realistic timeline after understanding your requirements—no inflated estimates or surprise delays."
        },
        {
          question: "Can you build for both iOS and Android?",
          answer: "Yes. We can build native apps for each platform separately, or use cross-platform frameworks like React Native or Flutter to share code between them. We'll recommend the approach that makes sense for your budget, timeline, and performance needs."
        },
        {
          question: "How do you handle third-party integrations?",
          answer: "We integrate with payment processors, CRMs, analytics tools, shipping APIs—whatever your business needs. We've worked with hundreds of third-party services and know how to handle authentication, error handling, and data synchronization properly."
        },
        {
          question: "What about security and data protection?",
          answer: "Security isn't an afterthought. We encrypt sensitive data, implement proper authentication, conduct security reviews, and follow industry best practices. If you need compliance (GDPR, HIPAA, SOC 2), we build that in from the start."
        }
      ]
    },
    whyChooseSection: {
      title: "Why Choose CodeExpedition",
      description: "What makes our approach to application development different",
      points: [
        {
          icon: Award,
          title: "We've Done This Before",
          description: "Hundreds of applications shipped across industries. We know what works, what doesn't, and how to avoid common pitfalls that derail projects."
        },
        {
          icon: Rocket,
          title: "Iterative Development",
          description: "You see working software every two weeks, not after months of silence. We adapt as requirements evolve instead of rigidly following outdated specs."
        },
        {
          icon: CheckCircle,
          title: "Quality Standards",
          description: "Code reviews, automated testing, and performance monitoring are standard practice. We build software that's maintainable and won't become a nightmare to update."
        },
        {
          icon: Users,
          title: "Transparent Communication",
          description: "You'll always know what we're working on, what's next, and if we're hitting deadlines. No jargon, no excuses—just honest updates from people who care about your success."
        },
        {
          icon: BarChart3,
          title: "Built to Scale",
          description: "We architect applications to handle growth. Whether you have 100 users or 100,000, your software won't crumble under increased load."
        },
        {
          icon: Headphones,
          title: "Post-Launch Partnership",
          description: "Launch day isn't goodbye. We provide ongoing support, monitor performance, fix bugs quickly, and help you plan future enhancements as your needs evolve."
        }
      ]
    },
  },
  aiDevelopment: {
    hero: {
      icon: Brain,
      title: "Advanced AI Engineering",
      description: "Empower your enterprise with sophisticated AI systems. We build autonomous agents, specialized MCP infrastructure, and high-performance RAG architectures designed to solve complex business challenges."
    },
    agentDevelopmentSection: {
      title: "Autonomous AI Agents",
      description: "We develop goal-oriented agents that go beyond simple conversation. Our architectures combine advanced reasoning with long-term memory and multi-step logic to execute production-ready workflows with precision.",
      cards: [
        {
          icon: Layers,
          title: "Multi-Model Intelligence",
          description: "Optimized for GPT-4o, Claude 3.5, and Gemini"
        },
        {
          icon: Brain,
          title: "Executive Reasoning",
          description: "Logic-based decision engines"
        },
        {
          icon: Settings,
          title: "Action Orchestration",
          description: "Tool use and API integration"
        },
        {
          icon: Database,
          title: "Contextual Memory",
          description: "Persistent state across multiple complex sessions"
        },
        {
          icon: Users,
          title: "Human Supervision",
          description: "Seamless human-in-the-loop approval workflows"
        }
      ]
    },
    capabilitiesSection: {
      coreCapabilities: [
        "Hierarchical multi-agent coordination",
        "Advanced reasoning and logical deduction",
        "Scalable autonomous process automation"
      ],
      advancedFeatures: [
        "Interactive Human-AI control panels",
        "Continuous learning from user feedback",
        "Industrial-grade agent monitoring tools"
      ]
    },
    mcpServerSection: {
      title: "MCP Ecosystem Development",
      description: "Unlock your tools for AI. We build custom Model Context Protocol (MCP) servers that allow AI models to securely interact with your internal databases, local files, and proprietary business applications.",
      cards: [
        {
          icon: Server,
          title: "Custom MCP Infrastructure",
          points: [
            "Optimized protocol implementations",
            "Dynamic resource and tool allocation",
            "Distributed server architectures"
          ]
        },
        {
          icon: Network,
          title: "Enterprise Connectivity",
          points: [
            "Direct CRM and ERP integrations",
            "High-speed database connectors",
            "Legacy system modernization via AI"
          ]
        },
        {
          icon: Shield,
          title: "Ironclad Security",
          points: [
            "Zero-trust authentication models",
            "End-to-end data encryption",
            "Rigorous compliance auditing"
          ]
        }
      ]
    },
    ragSection: {
      title: "Knowledge-First RAG Systems",
      description: "Turn your company data into expert intelligence. Our RAG pipelines provide accurate, citation-backed answers by bridging frontier LLMs with your private knowledge base.",
      cards: [
        {
          icon: FileText,
          title: "Smart Ingestion",
          description: "Semantic chunking and advanced document parsing"
        },
        {
          icon: Database,
          title: "Vector Pipeline",
          description: "High-density embeddings and optimized indexing"
        },
        {
          icon: Search,
          title: "Precision Retrieval",
          description: "Context-aware search with multi-stage ranking"
        },
        {
          icon: Sparkles,
          title: "Fact-Based Generation",
          description: "Hallucination-free response engineering"
        }
      ],
      advancedFeatures: [
        "Hybrid search (Vector + Lexical)",
        "Dynamic knowledge graph integration",
        "Multi-modal data processing"
      ],
      enterpriseCapabilities: [
        "Granular role-based data access",
        "Real-time indexing for active data",
        "High-availability vector storage"
      ],
      precisionRetrievalTitle: "Precision Retrieval",
      enterpriseGuardTitle: "Enterprise Guard"
    },
    frameworksSection: {
      title: "Core AI Development Stack",
      description: "We build on the industry's most robust frameworks to ensure your AI is scalable and secure.",
      frameworks: [
        {
          name: "LangChain",
          icon: langchainImg,
          description: "The gold standard for building complex LLM chains and autonomous agentic workflows.",
          points: [
            "Agent orchestration",
            "Extensive tool ecosystems",
            "Long-term memory management",
            "Standardized LLM abstraction"
          ]
        },
        {
          name: "LangGraph",
          icon: langchainImg,
          description: "Advanced graph-based logic for building stateful, cyclic multi-agent systems.",
          points: [
            "Non-linear workflows",
            "Complex state persistence",
            "Multi-actor coordination",
            "Resilient execution loops"
          ]
        },
        {
          name: "Vertex AI",
          icon: gcpImgService,
          description: "Google's unified platform for deploying production-grade AI and custom ML models.",
          points: [
            "Enterprise MLOps",
            "Custom model fine-tuning",
            "Serverless model hosting",
            "Integrated data ethics tools"
          ]
        },
        {
          name: "Vercel AI SDK",
          icon: vercelImg,
          description: "High-performance toolkit for building fast, streaming AI interfaces and edge functions.",
          points: [
            "Low-latency streaming",
            "Edge-ready AI logic",
            "First-class React support",
            "TypeScript-first development"
          ]
        }
      ]
    },
    llmSection: {
      title: "Frontier Foundation Models",
      description: "We optimize and integrate the world's most powerful models for your specific requirements.",
      models: [
        {
          name: "OpenAI GPT Ecosystem",
          icon: openaiImg,
          description: "State-of-the-art models for general reasoning, coding, and logical tasks.",
          points: [
            "GPT-4o / GPT-4 Turbo",
            "Advanced logic patterns",
            "Function calling expertise",
            "Token usage optimization"
          ]
        },
        {
          name: "Anthropic Claude",
          icon: claudeImg,
          description: "Superior models for nuanced document analysis, coding, and long-context processing.",
          points: [
            "Claude 3.5 Sonnet",
            "100k+ context windows",
            "Ethically-aligned reasoning",
            "Highly technical accuracy"
          ]
        },
        {
          name: "Google Gemini",
          icon: gcpImgService,
          description: "Native multimodal models capable of processing text, video, and audio simultaneously.",
          points: [
            "Multimodal reasoning",
            "Large context handling",
            "Native Google Cloud sync",
            "Enterprise-grade stability"
          ]
        },
        {
          name: "Grok by xAI",
          icon: grokImg,
          description: "Real-time, information-heavy model with direct access to live knowledge streams.",
          points: [
            "Real-time event analysis",
            "Conversational depth",
            "Modern xAI platform",
            "Dynamic data sourcing"
          ]
        }
      ]
    },
    transformBusinessSection: {
      title: "Measurable Impact of AI Integration",
      description: "We focus on outcomes. Our AI implementations are designed to provide clear, quantifiable ROI from day one.",
      benefits: [
        {
          icon: TrendingUp,
          title: "Significant Cost Efficiency",
          description: "Replace manual, high-friction tasks with autonomous agents that maintain exceptional quality.",
          highlight: "Reduced legal overhead by 40%"
        },
        {
          icon: Bot,
          title: "24/7 Intelligent Automation",
          description: "Ensure your operations never stop. Our agents handle inquiries and processes around the clock.",
          highlight: "Consistent global availability"
        },
        {
          icon: Network,
          title: "Frictionless System Sync",
          description: "AI that fits your stack. We connect agents to your core systems via custom-tailored API bridging.",
          highlight: "MCP-powered server integration"
        },
        {
          icon: Rocket,
          title: "Exponential Scalability",
          description: "Grow your business without growing your headcount. AI handles the workload surges automatically.",
          highlight: "Built for rapid growth"
        },
        {
          icon: Shield,
          title: "Security & Compliance",
          description: "Deploy AI with confidence. We implement enterprise-grade security and strict data privacy controls.",
          highlight: "SOC 2 & GDPR compliant"
        },
        {
          icon: Settings,
          title: "Bespoke Workflow Design",
          description: "No generic bots. Every AI solution is custom-engineered for your unique business logic.",
          highlight: "Tailored to your industry"
        }
      ]
    },
    successStorySection: {
      title: "Performance Project: 4Corners Legal",
      description: "How specialized AI transformed the speed of judicial discovery for a leading legal team.",
      badge: "Legal Intelligence Solution",
      projectTitle: "Automated Transcript Analysis",
      projectDescription: "We engineered an AI platform that autonomously summarizes 1000+ page legal depositions, extracting key witnesses, conflicting testimonies, and legal arguments in minutes.",
      features: [
        {
          title: "Judicial Intelligence",
          description: "Deep analysis of legal arguments and witness credibility."
        },
        {
          title: "Automated Timelines",
          description: "Chronological event extraction from multiple sources."
        },
        {
          title: "Citation-Backed Summaries",
          description: "Verifiable summaries linked directly to original transcript pages."
        }
      ],
      results: [
        "Brief prep time reduced from days to hours",
        "100% summary accuracy across all discovery sets",
        "Processed 10x more transcripts with current team",
        "Enhanced client retention via faster results"
      ],
      technologies: "Custom NLP, Hybrid RAG, PDF Extraction, Legal Context Engines",
      team: "Discovery Team",
      image: "screenshot-1.webp",
      showcaseLabel: "Performance Showcase",
      efficiencyStat: {
        label: "Efficiency",
        value: "+85% Increase"
      },
      teamStatLabel: "Team",
      builtWithLabel: "Built with:",
      exploreCTAText: "Explore All Success Stories"
    },
  }
};

export const services = [
  {
    id: 1,
    title: "AI & Machine Learning",
    icon: Brain,
    href: "/services/ai",
    description: "Harness the power of artificial intelligence to transform your business operations with intelligent automation, predictive analytics, and data-driven decision-making capabilities.",
    points: [
      "Machine learning models & predictive analytics",
      "Natural language processing & automation",
      "Computer vision for image analysis",
      "AI-powered business process automation",
      "Real-time insights with continuous learning"
    ]
  },
  {
    id: 2,
    title: "Custom Software Engineering",
    icon: Code2,
    href: "/services/app-dev",
    description: "Build scalable, secure, and user-friendly applications tailored to your unique business requirements using cutting-edge technologies and industry best practices.",
    points: [
      "Full-stack web application development",
      "Cross-platform mobile apps (iOS & Android)",
      "Enterprise desktop applications",
      "RESTful API development & integration",
      "Responsive UI/UX design"
    ]
  },
  {
    id: 3,
    title: "Cloud Infrastructure",
    icon: Database,
    href: "/services/cloud",
    description: "Optimize your infrastructure with robust, scalable, and secure cloud ecosystems that enhance performance, reduce costs, and support business growth.",
    points: [
      "Cloud migration (AWS, Azure, Google Cloud)",
      "Scalable architecture with auto-scaling",
      "Database optimization & management",
      "DevOps automation & CI/CD pipelines",
      "24/7 monitoring & disaster recovery"
    ]
  },
  {
    id: 4,
    title: "Security & Compliance",
    icon: Shield,
    href: "/services/compliance",
    description: "Ensure your software solutions meet industry standards and regulatory requirements with comprehensive enterprise-grade protection and compliance expertise.",
    points: [
      "GDPR & HIPAA compliance implementation",
      "Threat detection & vulnerability assessments",
      "Multi-layered security architecture",
      "Regular security audits & penetration testing",
      "Compliance training & documentation"
    ]
  },
  {
    id: 5,
    title: "Staff Augmentation",
    icon: Users,
    href: "/services/talent",
    description: "Access skilled technology professionals on-demand to augment your team, accelerate project delivery, and fill critical skill gaps without long-term commitments.",
    points: [
      "Pre-vetted senior developers & specialists",
      "Flexible project-based or ongoing engagement",
      "Rapid onboarding & team integration",
      "Full project control & talent management",
      "Cost-effective scaling without overhead"
    ]
  }
];
