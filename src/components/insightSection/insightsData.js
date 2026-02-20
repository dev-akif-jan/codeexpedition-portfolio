import { Map, FileText, BookOpen, Target, Layers, TrendingUp, Radar, Zap, Code2, MessageSquare, Search, Sparkles, GitBranch, Clock, DollarSign, Award, Lightbulb } from 'lucide-react';

// AI Workflow Images
import aiRequirementsImg from '../../assets/Insights/ai-requirements.svg';
import aiDevelopmentImg from '../../assets/Insights/ai-development.svg';
import aiQualityImg from '../../assets/Insights/ai-quality.svg';


// Technology Icons Imports
import reactIcon from '../../assets/Technologies/react.svg';
import nextjsIcon from '../../assets/Technologies/nextjs.svg';
import vueIcon from '../../assets/Technologies/vue.svg';
import angularIcon from '../../assets/Technologies/angular.svg';
import typescriptIcon from '../../assets/Technologies/typescript.svg';
import tailwindIcon from '../../assets/Technologies/tailwind.svg';

import nodejsIcon from '../../assets/Technologies/nodejs.svg';
import pythonIcon from '../../assets/Technologies/python.svg';
import javaIcon from '../../assets/Technologies/java.svg';
import goIcon from '../../assets/Technologies/go.svg';
import dotnetIcon from '../../assets/Technologies/dotnet.svg';
import rubyIcon from '../../assets/Technologies/ruby.svg';

import postgresqlIcon from '../../assets/Technologies/postgresql.svg';
import mongodbIcon from '../../assets/Technologies/mongodb.svg';
import mysqlIcon from '../../assets/Technologies/mysql.svg';
import redisIcon from '../../assets/Technologies/redis.svg';
import elasticsearchIcon from '../../assets/Technologies/elasticsearch.svg';
import s3Icon from '../../assets/Technologies/s3.svg';

import awsIcon from '../../assets/Technologies/aws.svg';
import azureIcon from '../../assets/Technologies/azure.svg';
import gcpIcon from '../../assets/Technologies/gcp.svg';
import dockerIcon from '../../assets/Technologies/docker.svg';
import kubernetesIcon from '../../assets/Technologies/kubernetes.svg';
import terraformIcon from '../../assets/Technologies/terraform.svg';

import watsonxIcon from '../../assets/Technologies/watsonx-orchestrate.svg';
import openaiIcon from '../../assets/Technologies/openai.svg';
import tensorflowIcon from '../../assets/Technologies/tensorflow.svg';
import pytorchIcon from '../../assets/Technologies/pytorch.svg';
import huggingfaceIcon from '../../assets/Technologies/huggingface.svg';
import scikitIcon from '../../assets/Technologies/scikit.svg';

import reactNativeIcon from '../../assets/Technologies/react-native.svg';
import flutterIcon from '../../assets/Technologies/flutter.svg';
import swiftIcon from '../../assets/Technologies/swift.svg';
import kotlinIcon from '../../assets/Technologies/kotlin.svg';
import iosIcon from '../../assets/Technologies/ios.svg';
import androidIcon from '../../assets/Technologies/android.svg';

import graphqlIcon from '../../assets/Technologies/graphql.svg';
import websocketIcon from '../../assets/Technologies/websocket.svg';
import rabbitmqIcon from '../../assets/Technologies/rabbitmq.svg';
import jenkinsIcon from '../../assets/Technologies/jenkins.svg';
import prometheusIcon from '../../assets/Technologies/prometheus.svg';
import grafanaIcon from '../../assets/Technologies/grafana.svg';

import gitlabIcon from '../../assets/Technologies/gitlab.svg';
import nxIcon from '../../assets/Technologies/nx.svg';
import webpackIcon from '../../assets/Technologies/webpack.svg';
import eslintIcon from '../../assets/Technologies/eslint.svg';
import prettierIcon from '../../assets/Technologies/prettier.svg';
import jestIcon from '../../assets/Technologies/jest.svg';

export const allInsightsHero = {
  heading: "Insights",
  description: "Explore our strategic insights, development methodologies, and technology expertise. Discover how we transform ideas into exceptional software solutions through proven frameworks and innovative approaches.",
  learnMoreText: "Learn more"
};

export const insightsData = {
  transformationBlueprint: {
    title: "Transformation Blueprint",
    description: "Navigate your digital evolution with a comprehensive strategic roadmap that aligns technology initiatives with business objectives, driving sustainable growth through systematic digital integration.",
    icon: Map,
    link: {
      text: "Create Your Roadmap",
      to: "/contact"
    },
    cards: [
      {
        icon: Target,
        title: "Strategic Planning",
        description: "Define your vision and map out the journey from current state to future vision with clear milestones and achievable goals."
      },
      {
        icon: Layers,
        title: "Phased Approach",
        description: "Break down transformation into manageable phases with prioritized initiatives and measurable outcomes at each stage."
      },
      {
        icon: TrendingUp,
        title: "Progress Tracking",
        description: "Monitor implementation and measure success with comprehensive KPIs, analytics, and continuous improvement frameworks."
      }
    ]
  },
  systemAudit: {
    title: "System Audit",
    description: "Evaluate your current technology stack and receive personalized recommendations to improve your development efficiency, scalability, and innovation potential.",
    icon: FileText,
    link: {
      text: "Start Free Assessment",
      to: "/contact"
    },
    cards: [
      {
        icon: Layers,
        title: "Detailed Analysis",
        description: "Get insights into your tech stack's strengths and areas for improvement through comprehensive architecture and code quality evaluation."
      },
      {
        icon: Target,
        title: "Custom Recommendations",
        description: "Receive tailored suggestions based on your specific needs and goals to optimize performance, security, and maintainability."
      },
      {
        icon: TrendingUp,
        title: "Action Plan",
        description: "Get a clear roadmap for implementing improvements and optimizations with prioritized steps and expected outcomes."
      }
    ]
  },
  engineeringStandards: {
    title: "Engineering Standards",
    description: "Comprehensive guide to modern software development best practices. Learn industry-standard patterns, security practices, and architecture guidelines.",
    icon: BookOpen,
    link: {
      text: "Explore Best Practices",
      to: "/contact"
    },
    cards: [
      {
        icon: Layers,
        title: "Architecture & Design",
        description: "Best practices for software architecture and system design including SOLID principles, design patterns, and scalable architectures."
      },
      {
        icon: Target,
        title: "Security & Performance",
        description: "Security best practices and performance optimization techniques to build robust, efficient, and secure applications."
      },
      {
        icon: TrendingUp,
        title: "Testing & Quality",
        description: "Testing strategies and code quality practices including unit testing, integration testing, and continuous quality assurance."
      }
    ]
  },
  techRadar: {
    title: "Our Technology Stack",
    description: "We leverage cutting-edge technologies to build robust, scalable, and innovative solutions for our clients.",
    icon: Radar,
    categories: [
      {
        title: "Frontend Development",
        description: "Modern, responsive, and performant user interfaces",
        technologies: [
          { name: "React", icon: reactIcon },
          { name: "Next.js", icon: nextjsIcon },
          { name: "Vue.js", icon: vueIcon },
          { name: "Angular", icon: angularIcon },
          { name: "TypeScript", icon: typescriptIcon },
          { name: "Tailwind CSS", icon: tailwindIcon }
        ]
      },
      {
        title: "Backend Development",
        description: "Scalable and secure server-side solutions",
        technologies: [
          { name: "Node.js", icon: nodejsIcon },
          { name: "Python", icon: pythonIcon },
          { name: "Java", icon: javaIcon },
          { name: "Go Lang", icon: goIcon },
          { name: ".NET", icon: dotnetIcon },
          { name: "Ruby", icon: rubyIcon }
        ]
      },
      {
        title: "Database & Storage",
        description: "Reliable and efficient data management",
        technologies: [
          { name: "PostgreSQL", icon: postgresqlIcon },
          { name: "MongoDB", icon: mongodbIcon },
          { name: "MySQL", icon: mysqlIcon },
          { name: "Redis", icon: redisIcon },
          { name: "Elasticsearch", icon: elasticsearchIcon },
          { name: "Amazon S3", icon: s3Icon }
        ]
      },
      {
        title: "Cloud & DevOps",
        description: "Robust cloud infrastructure and deployment",
        technologies: [
          { name: "AWS", icon: awsIcon },
          { name: "Azure", icon: azureIcon },
          { name: "Google Cloud", icon: gcpIcon },
          { name: "Docker", icon: dockerIcon },
          { name: "Kubernetes", icon: kubernetesIcon },
          { name: "Terraform", icon: terraformIcon }
        ]
      },
      {
        title: "AI & Machine Learning",
        description: "Cutting-edge artificial intelligence solutions",
        technologies: [
          { name: "watsonx Orchestrate", icon: watsonxIcon },
          { name: "OpenAI", icon: openaiIcon },
          { name: "TensorFlow", icon: tensorflowIcon },
          { name: "PyTorch", icon: pytorchIcon },
          { name: "Hugging Face", icon: huggingfaceIcon },
          { name: "scikit-learn", icon: scikitIcon }
        ]
      },
      {
        title: "Mobile Development",
        description: "Cross-platform and native mobile applications",
        technologies: [
          { name: "React Native", icon: reactNativeIcon },
          { name: "Flutter", icon: flutterIcon },
          { name: "Swift", icon: swiftIcon },
          { name: "Kotlin", icon: kotlinIcon },
          { name: "iOS", icon: iosIcon },
          { name: "Android", icon: androidIcon }
        ]
      },
      {
        title: "DevOps & Integration",
        description: "Enterprise integration and development operations",
        technologies: [
          { name: "GraphQL", icon: graphqlIcon },
          { name: "WebSocket", icon: websocketIcon },
          { name: "RabbitMQ", icon: rabbitmqIcon },
          { name: "Jenkins", icon: jenkinsIcon },
          { name: "Prometheus", icon: prometheusIcon },
          { name: "Grafana", icon: grafanaIcon }
        ]
      },
      {
        title: "Development Tools",
        description: "Essential tools for efficient software development",
        technologies: [
          { name: "GitLab CI", icon: gitlabIcon },
          { name: "Nx", icon: nxIcon },
          { name: "Webpack", icon: webpackIcon },
          { name: "ESLint", icon: eslintIcon },
          { name: "Prettier", icon: prettierIcon },
          { name: "Jest", icon: jestIcon }
        ]
      }
    ],
  },
  aiAssistedDevelopment: {
    title: "AI-Assisted Development",
    description: "We harness the power of modern AI tools and practices to build software more efficiently. Our AI-assisted approach enhances developer productivity while maintaining high quality standards.",
    icon: Zap,
    toolset: {
      heading: "Our AI Toolset",
      subheading: "We leverage industry-leading AI development tools to enhance our capabilities",
      tools: [
        {
          icon: Code2,
          title: "AI-Enhanced IDEs",
          description: "We use modern AI-powered code editors like GitHub Copilot and Cursor to write, review, and refactor code more efficiently."
        },
        {
          icon: MessageSquare,
          title: "Natural Language to Code",
          description: "Our developers leverage AI to quickly translate business requirements into working code, accelerating the development process."
        },
        {
          icon: Search,
          title: "Intelligent Code Analysis",
          description: "AI-powered tools help us identify potential issues, ensure best practices, and maintain high code quality standards."
        },
        {
          icon: Sparkles,
          title: "Smart Code Generation",
          description: "We use AI to generate boilerplate code, tests, and documentation, letting us focus on core business logic."
        },
        {
          icon: GitBranch,
          title: "Version Control Enhancement",
          description: "AI assists in code reviews, commit messages, and merge conflict resolutions, streamlining our Git workflow."
        }
      ]
    },
    workflow: {
      heading: "Our AI-Enhanced Workflow",
      subheading: "How we integrate AI tools into our development process",
      steps: [
        {
          image: aiRequirementsImg,
          title: "Requirements to Code",
          description: "AI helps translate your requirements into initial code structure and boilerplate."
        },
        {
          image: aiDevelopmentImg,
          title: "Smart Development",
          description: "AI-powered coding assistants help write, review, and optimize code in real-time."
        },
        {
          image: aiQualityImg,
          title: "Quality Assurance",
          description: "AI tools analyze code quality, suggest improvements, and help prevent potential issues."
        }
      ]
    },
    benefits: {
      heading: "Benefits for Your Project",
      subheading: "How AI-assisted development improves your software project",
      items: [
        {
          icon: Clock,
          title: "Faster Development",
          description: "AI tools help us write and review code faster, reducing development time while maintaining quality."
        },
        {
          icon: Award,
          title: "Better Code Quality",
          description: "AI-powered analysis helps catch issues early and suggests improvements based on best practices."
        },
        {
          icon: DollarSign,
          title: "Cost Efficiency",
          description: "Accelerated development and reduced debugging time translate to cost savings for your project."
        },
        {
          icon: Lightbulb,
          title: "Modern Practices",
          description: "We stay current with the latest AI development tools and methodologies to deliver cutting-edge solutions."
        }
      ]
    }
  }
};

export const insights = [
  {
    id: 1,
    title: "Transformation Blueprint",
    icon: Map,
    href: "/insights/roadmap",
    section: "STRATEGIC PLANNING",
    description: "Navigate your digital evolution with a comprehensive strategic roadmap that aligns technology initiatives with business objectives, driving sustainable growth through systematic digital integration.",
    points: [
      "Strategic assessment of current digital maturity",
      "Clear vision & SMART goals aligned with business",
      "Phased implementation roadmap with milestones",
      "Change management & cultural transformation",
      "Continuous monitoring with KPIs & iteration"
    ]
  },
  {
    id: 2,
    title: "System Audit",
    icon: FileText,
    href: "/insights/assessment",
    section: "STRATEGIC PLANNING",
    description: "Gain deep insights into your technology landscape with our comprehensive architecture evaluation that identifies strengths, weaknesses, and optimization opportunities for enhanced performance.",
    points: [
      "Performance, scalability & reliability assessment",
      "Security vulnerabilities & compliance review",
      "Code quality & technical debt analysis",
      "Infrastructure optimization recommendations",
      "Risk mitigation strategies & action plan"
    ]
  },
  {
    id: 3,
    title: "AI-Driven Workflows",
    icon: Zap,
    href: "/insights/ai-assist",
    section: "DEVELOPMENT HUB",
    description: "Revolutionize your development process with intelligent automation that accelerates build times by 40%, enhancing code quality while maintaining the highest standards of software excellence.",
    points: [
      "Automated code generation & boilerplate reduction",
      "AI-powered testing & bug detection",
      "Intelligent code reviews & optimization",
      "Streamlined CI/CD pipeline automation",
      "Real-time insights & continuous learning"
    ]
  },
  {
    id: 4,
    title: "Engineering Standards",
    icon: BookOpen,
    href: "/insights/best-practices",
    section: "DEVELOPMENT HUB",
    description: "Discover our unwavering commitment to code quality through industry-leading engineering standards, proven methodologies, and best practices that ensure maintainable, scalable solutions.",
    points: [
      "SOLID principles & clean code architecture",
      "Comprehensive testing (unit, integration, E2E)",
      "Version control & branching strategies",
      "Security-first design & regular audits",
      "Continuous refactoring & documentation"
    ]
  },
  {
    id: 5,
    title: "Tech Radar",
    icon: Radar,
    href: "/insights/technologies",
    section: "DEVELOPMENT HUB",
    description: "Stay ahead with our curated technology radar showcasing modern frameworks, tools, and platforms that deliver performance, scalability, and long-term maintainability for your projects.",
    points: [
      "Modern frontend frameworks (React, Vue, Next.js)",
      "Scalable backend technologies (Node, Python, Go)",
      "Cloud infrastructure (AWS, Azure, Google Cloud)",
      "Database solutions (SQL, NoSQL, Redis)",
      "DevOps tools & monitoring platforms"
    ]
  }
];
