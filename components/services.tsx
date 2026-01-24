"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  ShoppingBag,
  Megaphone,
  Settings,
  Truck,
  BarChart3,
  Bot,
  Globe,
  Smartphone,
  Workflow,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Services() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [equalHeight, setEqualHeight] = useState<number | undefined>(undefined);

  useEffect(() => {
    const computeHeights = () => {
      // Apply equal heights only on md and above to avoid tall cards on mobile
      const isMdUp = window.matchMedia("(min-width: 768px)").matches;
      if (!isMdUp) {
        setEqualHeight(undefined);
        return;
      }
      const heights = (cardRefs.current || []).map((el) =>
        el ? el.getBoundingClientRect().height : 0,
      );
      const max = heights.length ? Math.max(...heights) : undefined;
      setEqualHeight(max && isFinite(max) ? Math.ceil(max) : undefined);
    };

    // Compute after mount
    const id = window.setTimeout(computeHeights, 0);
    // Recompute on resize
    window.addEventListener("resize", computeHeights);
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("resize", computeHeights);
    };
  }, []);

  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Account Setup & Registration",
      slug: "account-setup",
      description:
        "Get your seller accounts created correctly and compliant across major marketplaces so you can start selling fast.",
      features: [
        "Amazon Seller Central setup (FBA / FBM)",
        "Walmart Seller Center setup",
        "eBay seller account setup",
        "TikTok Shop seller account creation",
        "LLC / Ltd company formation (where applicable)",
        "EIN, tax & compliance assistance",
      ],
      color: "from-primary to-accent",
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Product Listing & Store Management",
      slug: "product-listing",
      description:
        "Launch high-converting listings and keep your storefront healthy with daily operations managed for you.",
      features: [
        "Listing creation (titles, descriptions, keywords, SEO)",
        "High-quality images & A+ content",
        "Category approval & ungating (Amazon/Walmart)",
        "Storefront / brand store design",
        "Daily operations & order management",
      ],
      color: "from-accent to-primary",
    },
    {
      icon: <Megaphone className="h-8 w-8" />,
      title: "Advertising & Marketing",
      slug: "advertising",
      description:
        "Drive targeted traffic with paid ads and creator-led campaigns tuned for marketplace performance.",
      features: [
        "Amazon PPC setup & optimization",
        "TikTok ads & influencer/affiliate marketing",
        "Walmart advertising (Walmart Connect)",
        "eBay promoted listings",
        "Social media ads linked to stores",
      ],
      color: "from-primary to-accent",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Optimization & Growth",
      slug: "optimization",
      description:
        "Improve rankings, conversions, and account health with continuous optimization and monitoring.",
      features: [
        "SEO for Amazon, Walmart, eBay",
        "Conversion rate optimization",
        "Review & rating management",
        "Account health monitoring & reinstatement",
        "Competitor & product research",
      ],
      color: "from-accent to-primary",
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fulfillment & Logistics",
      slug: "fulfillment",
      description:
        "Keep inventory flowing and orders delivered on time with optimized fulfillment operations.",
      features: [
        "Amazon FBA inventory planning & management",
        "Walmart Fulfillment Services (WFS) assistance",
        "Multi-channel fulfillment (MCF) setups",
        "Return/refund handling",
      ],
      color: "from-primary to-accent",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Reporting & Scaling",
      slug: "reporting",
      description:
        "Track what matters and scale into new markets with clear insights and automation.",
      features: [
        "Sales reports & performance analytics",
        "ROI tracking",
        "Market expansion (cross-platform)",
        "Automation services for scaling",
      ],
      color: "from-accent to-primary",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Chatbot Development & Integration",
      slug: "ai-chatbot-development",
      description:
        "Custom-built AI chatbots tailored to your business needs with 24/7 automated customer support and instant responses.",
      features: [
        "Custom-built AI chatbots tailored to your business needs",
        "Integration on Websites, Mobile Apps, WhatsApp, Instagram & Facebook",
        "24/7 automated customer support with instant responses",
        "Smart conversation flows designed for sales, support & lead generation",
        "Multilingual chatbots for global customers",
        "Ability to connect chatbots with your CRM, databases, Google Sheets, APIs, payment systems, etc.",
        "Human-like responses powered by advanced AI models",
        "Ticketing support automation for faster customer handling",
        "Advanced features like memory, user profiling, custom intents & knowledge bases",
        "High-accuracy replies through fine-tuned AI knowledge training",
        "Reduce customer support workload by up to 70%",
        "Increase conversion rates with instant replies",
        "Provide clients a modern, fast, AI-driven experience",
        "Fully scalable — grows as your business grows",
      ],
      color: "from-primary to-accent",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      slug: "web-development",
      description:
        "Create stunning, high-performance websites and web applications that drive user engagement.",
      features: [
        "Custom front-end and back-end development",
        "E-commerce and marketplace solutions",
        "Content Management Systems (CMS)",
        "Progressive Web Apps (PWA)",
      ],
      color: "from-accent to-primary",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile App Development",
      slug: "mobile-app-development",
      description:
        "Build native and cross-platform mobile applications for iOS and Android.",
      features: [
        "Native iOS (Swift) and Android (Kotlin) development",
        "Cross-platform development (React Native, Flutter)",
        "UI/UX design for mobile",
        "App store submission and maintenance",
      ],
      color: "from-primary to-accent",
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "AI Workflow Automation (Powered by n8n)",
      slug: "ai-workflow-automation",
      description:
        "Design and build high-quality automation systems using n8n with end-to-end business process automation.",
      features: [
        "Design and build high-quality automation systems using n8n",
        "End-to-end business process automation",
        "Automated workflows for customer support, lead handling, notifications, marketing, CRM syncing",
        "Connect hundreds of apps (WhatsApp, Gmail, Stripe, Airtable, Shopify, Sheets, CRMs, etc.)",
        "AI-enhanced automations such as email & message classification, auto-draft replies, document extraction",
        "Smart routing & decision trees",
        "Build custom backend logic without writing heavy code",
        "Real-time dashboards, logs, and failure alerts",
        "API integration & webhook setup",
        "Maintenance, optimization & scaling support",
        "Save time by automating repetitive tasks",
        "Reduce manual errors",
        "Centralize your business operations",
        "Faster response times for customers",
        "Scalable automation that fits small to enterprise-level businesses",
      ],
      color: "from-accent to-primary",
    },
  ];

  const [selected, setSelected] = useState<number>(0);

  return (
    <section className="pb-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            <span className="text-primary neon-text">Comprehensive</span> Tech
            Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From concept to deployment, we provide end-to-end technology
            services that drive innovation and accelerate your digital
            transformation journey.
          </p>
        </motion.div>

        {/* Tabular layout: left vertical nav, right detail */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left nav */}
          <div className="md:col-span-4 flex">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg shadow-xl overflow-hidden relative neon-border w-full">
              <ul className="divide-y divide-border">
                {services.map((service, idx) => {
                  const active = idx === selected;
                  return (
                    <li key={service.slug} className="relative">
                      <button
                        onClick={() => setSelected(idx)}
                        className={
                          `w-full text-left px-6 py-4 flex items-center gap-4 transition-colors duration-200 focus:outline-none ` +
                          (active ? "bg-primary/10" : "hover:bg-primary/5")
                        }
                      >
                        <span
                          className={`w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            active
                              ? "text-black bg-primary scale-110"
                              : "text-primary bg-primary/10"
                          }`}
                        >
                          <span className="w-5 h-5 flex items-center justify-center">
                            {service.icon}
                          </span>
                        </span>
                        <span
                          className={`font-semibold ${
                            active ? "text-primary" : "text-foreground"
                          }`}
                        >
                          {service.title}
                        </span>
                      </button>
                      {/* floating accent for active item (small notch) */}
                      {active && (
                        <div className="absolute -right-0.5 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-l-lg shadow-md" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Right content */}
          <div className="md:col-span-8 flex">
            <motion.div
              key={services[selected].slug}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45 }}
              className="bg-card/50 backdrop-blur-sm rounded-lg shadow-lg p-8 w-full neon-border"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {services[selected].title}
                  </h3>
                  <p className="text-muted-foreground mt-3 max-w-2xl">
                    {services[selected].description}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-sm text-foreground/90 mb-3">
                  Business Benefits of Choosing Us
                </h4>
                <ul className="space-y-3 list-none ml-0">
                  {services[selected].features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{f}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
