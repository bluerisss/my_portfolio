"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

const ease = [0.4, 0, 0.2, 1] as const;
type EaseTuple = [number, number, number, number];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center section-container">
      <div className="grid-line opacity-20" />
      {/* Soft radial depth glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 30% 50%, hsl(210 100% 56% / 0.04), transparent)"
      }} />
      <div className="relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="mb-6"
        >
          <span className="font-mono text-sm text-muted-foreground tracking-wider">
            &gt; whoami
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span className="text-foreground">Nguyen Thanh</span>{" "}
          <span className="text-gradient" style={{ letterSpacing: "0.04em" }}>Nam</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease }}
          className="font-mono text-sm md:text-base text-primary mb-10 tracking-wide"
        >
          Solution Engineer · Cloud Architect · AI Systems Builder
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-14 max-w-2xl"
        >
          Designing scalable data systems and AI-driven platforms with a focus on
          reliability, cost efficiency, and real-world impact.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg transition-all duration-500 hover:shadow-[0_0_30px_hsl(var(--primary)/0.25)] hover:scale-[1.02]"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg transition-all duration-500 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.1)]"
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <Mail className="w-4 h-4" />
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.8, ease }}
          className="mt-16 glow-line origin-left"
        />
      </div>
    </section>
  );
};

export default HeroSection;
