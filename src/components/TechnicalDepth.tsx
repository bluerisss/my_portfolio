"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Server, Cloud, Database } from "lucide-react";

const modules = [
  {
    icon: Server,
    label: "BACKEND",
    title: "Backend & APIs",
    items: [
      { name: "Ruby on Rails", level: 95 },
      { name: "RESTful & GraphQL APIs", level: 90 },
      { name: "Event-driven Architecture", level: 92 },
      { name: "Microservices Design", level: 88 },
    ],
  },
  {
    icon: Cloud,
    label: "CLOUD",
    title: "Cloud & DevOps",
    items: [
      { name: "AWS (EC2, EKS, Lambda, S3)", level: 93 },
      { name: "Docker & Kubernetes", level: 90 },
      { name: "Terraform & IaC", level: 85 },
      { name: "CI/CD Pipelines", level: 88 },
    ],
  },
  {
    icon: Database,
    label: "DATA",
    title: "Data & AI",
    items: [
      { name: "PostgreSQL & pgvector", level: 92 },
      { name: "Apache Kafka", level: 87 },
      { name: "RAG Pipelines", level: 85 },
      { name: "ML Model Deployment", level: 80 },
    ],
  },
];

const TechnicalDepth = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="section-spacing relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-3 block">
            // expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Technical Depth</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {modules.map((mod, i) => (
            <motion.div
              key={mod.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <mod.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-accent tracking-widest block">{mod.label}</span>
                  <h3 className="font-semibold text-sm">{mod.title}</h3>
                </div>
              </div>

              <div className="space-y-4">
                {mod.items.map((item, j) => (
                  <div key={item.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-muted-foreground">{item.name}</span>
                    </div>
                    <div className="h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.level}%` } : {}}
                        transition={{ duration: 1, delay: i * 0.15 + j * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalDepth;
