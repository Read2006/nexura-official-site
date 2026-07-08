"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Users, Award } from "lucide-react";
export default function AboutUs() {
  const values = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Marketplace Mastery",
      description:
        "Deep expertise in Amazon, Walmart, eBay, and TikTok Shop algorithms, policies, and optimization strategies.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Results Driven",
      description:
        "Every campaign is optimized for maximum ROI with data-driven decisions that increase sales and profitability.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Brand Partnership",
      description:
        "We become an extension of your team, providing transparent communication and dedicated account management.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Success",
      description:
        "Hundreds of successful product launches and millions in revenue generated across all major marketplaces.",
    },
  ];
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Powering Your{" "}
            <span className="text-primary neon-text"> E-Commerce Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            At Nexura, we help sellers launch, manage, and scale on Amazon, Walmart, eBay, and TikTok Shop — combining hands-on marketplace expertise with smart automation to save you time, cut costs, and grow revenue faster.
            From account setup to daily operations, advertising, and fulfillment, we build systems that keep your store running and growing on autopilot.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full neon-border bg-card/50 backdrop-blur-sm hover:neon-glow transition-all duration-300">
                <CardContent className="p-4 text-center">
                  <div className="text-primary mb-3 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-base font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
