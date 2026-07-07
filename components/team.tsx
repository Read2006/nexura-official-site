"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
// Removed social links and badges for a cleaner, professional layout

export default function Team() {
  const accents = [
    "from-primary via-accent to-primary",
    "from-accent via-primary to-accent",
    "from-primary to-accent",
  ];
  const teamMembers = [
    {
      name: "Dr Jawad Hashmi",
      role: "Managing Director",
      image: "/j11.jpg",
    },
    {
      name: "Ammar",
      role: "CEO",
      image: "/a111.jpg",
    },
    {
      name: "Ihsanullah",
      role: "Director Ecommerce",
      image: "/ihsan.jpeg",
    },
    {
      name: "Usman",
      role: "Director Fintech",
      image: "/us.jpeg",
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
            Meet the <span className="text-primary neon-text">Innovators</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of experts brings together passion and experience
            in cutting-edge technologies, united by a passion for creating
            exceptional digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden border border-border/60 bg-card/60 backdrop-blur-xl transition-all duration-300 group flex flex-col hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                {/* soft glow aura */}
                <div
                  className="pointer-events-none absolute -inset-20 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(50% 50% at 50% 50%, hsl(var(--primary)/.25) 0%, transparent 60%)",
                  }}
                />
                <CardContent className="p-7 text-center flex flex-col items-center">
                  {/* avatar with gradient ring */}
                  <div
                    className={`relative mb-6 p-[3px] rounded-full bg-gradient-to-tr ${
                      accents[index % accents.length]
                    } shadow-[0_0_0_3px_hsl(var(--background))]`}
                  >
                    <div className="rounded-full bg-background p-[2px]">
                      <TeamAvatar src={member.image} alt={member.name} />
                    </div>
                    {/* ring highlight */}
                    <div className="pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* name */}
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground tracking-tight">
                    {member.name}
                  </h3>
                  {/* decorative underline */}
                  <div className="mt-2 mb-2 h-px w-14 bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
                  {/* role */}
                  <p className="text-xs md:text-sm text-primary/80 bg-primary/10 px-3 py-1 rounded-full">
                    {member.role}
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

type AvatarProps = { src?: string; alt: string };

function TeamAvatar({ src, alt }: AvatarProps) {
  const placeholder = "/avatar-placeholder.svg";
  const isAmmar = alt === "Ammar";

  return (
    <img
      src={src || placeholder}
      alt={alt}
      className={`w-40 h-40 md:w-44 md:h-44 rounded-full object-cover shadow-lg ${
        isAmmar ? "object-[center_25%]" : ""
      }`}
      onError={(e) => {
        const img = e.currentTarget as HTMLImageElement;
        if (img.src !== window.location.origin + placeholder) {
          img.src = placeholder;
        }
      }}
    />
  );
}
