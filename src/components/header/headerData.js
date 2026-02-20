import { FileText, Lightbulb, Database, Shield, Users, ShoppingCart, Stethoscope, GraduationCap, Scale, Map, Layout, Zap, BookOpen } from 'lucide-react';

export const headerData = [
  {
    label: "Services",
    href: "/services",
    type: "simple",
    items: [
      {
        title: "AI & Machine Learning",
        desc: "Automate processes with intelligent, self-learning algorithms",
        href: "/services/ai",
        icon: Lightbulb
      },
      {
        title: "Custom Software Engineering",
        desc: "Tailored web and mobile platforms built for scale",
        href: "/services/app-dev",
        icon: Layout
      },
      {
        title: "Cloud Infrastructure",
        desc: "Robust, scalable, and secure cloud ecosystems",
        href: "/services/cloud",
        icon: Database
      },
      {
        title: "Security & Compliance",
        desc: "Enterprise-grade protection and regulatory alignment",
        href: "/services/compliance",
        icon: Shield
      },
      {
        title: "Staff Augmentation",
        desc: "Integrate elite developers into your existing team",
        href: "/services/talent",
        icon: Users
      },
    ],
    footerLink: { text: "Explore all Services", href: "/services" }
  },
  {
    label: "Industries",
    href: "/industries",
    type: "simple",
    items: [
      {
        title: "Commerce & Retail",
        desc: "Next-gen digital shopping experiences",
        href: "/industries/retail",
        icon: ShoppingCart
      },
      {
        title: "HealthTech",
        desc: "Secure patient data and telemedicine solutions",
        href: "/industries/healthcare",
        icon: Stethoscope
      },
      {
        title: "EdTech",
        desc: "Platforms that power modern learning",
        href: "/industries/education",
        icon: GraduationCap
      },
      {
        title: "LegalTech",
        desc: "Streamlined case management and digital tools",
        href: "/industries/legal",
        icon: Scale
      },
    ],
    footerLink: { text: "View all Industries", href: "/industries" }
  },
  {
    label: "Success Stories",
    href: "/success-stories",
    type: "link"
  },
  {
    label: "Insights",
    href: "/insights",
    type: "simple",
    items: [
      { title: "Transformation Blueprint", desc: "Your guide to digital evolution", href: "/insights/roadmap", icon: Map, section: "STRATEGIC PLANNING" },
      { title: "System Audit", desc: "No-cost architecture evaluation", href: "/insights/assessment", icon: FileText, section: "STRATEGIC PLANNING" },
      { title: "AI-Driven Workflows", desc: "Accelerating build times by 40%", href: "/insights/ai-assist", icon: Zap, section: "DEVELOPMENT HUB" },
      { title: "Engineering Standards", desc: "Our commitment to code quality", href: "/insights/best-practices", icon: BookOpen, section: "DEVELOPMENT HUB" },
      { title: "Tech Radar", desc: "Tools and frameworks we use", href: "/insights/technologies", icon: Layout, section: "DEVELOPMENT HUB" },
    ],
    footerLink: { text: "Browse all insights", href: "/insights" }
  }
];
