"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Spline from "@splinetool/react-spline";

const ease = [0.4, 0, 0.2, 1] as const;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="grid-line opacity-20" />
      {/* Soft radial depth glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 60% 50% at 30% 50%, hsl(210 100% 56% / 0.04), transparent)"
      }} />
      <div className="section-container relative z-10 w-full">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
          <div className="max-w-3xl">
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
              Software Engineer · Cloud Architect · AI Systems Builder
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease }}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-14 max-w-2xl"
            >
              Designing scalable data systems and AI-driven platforms with a focus on reliability, cost efficiency, and real-world impact.
              Full stack engineer, distributed architectures, data engineering, API ecosystems, and cloud-native systems.
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

          {/* Spline visual: responsive + blended into background */}
          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            <div className="relative h-[320px] sm:h-[380px] md:h-[440px] lg:h-[560px] rounded-2xl overflow-hidden opacity-70 lg:opacity-100">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-background/90 via-background/25 to-transparent" />
              <div className="absolute inset-0 pointer-events-none ring-1 ring-border/50" />
              <div className="absolute -inset-20 pointer-events-none blur-2xl opacity-40"
                   style={{ background: "radial-gradient(circle at 40% 40%, hsl(var(--primary) / 0.22), transparent 60%)" }}
              />

              <div className="relative h-full w-full scale-[1.08] lg:scale-100 [mask-image:radial-gradient(circle_at_center,black_55%,transparent_78%)]">
                <Spline scene="https://prod.spline.design/w6IogbeMYu7vnYTn/scene.splinecode" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
