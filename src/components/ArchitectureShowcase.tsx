"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const architectures = [
  {
    title: "Microservices",
    problem:
      "Designing a scalable microservices architecture for enterprise financial health analytics with secure data isolation and reliable reporting.",
    stack: [
      "Ruby on Rails",
      "MySQL & PostgreSQL",
      "NestJs",
      "NextJs",
      "GraphQL",
      "gRPC",
      "AWS",
      "Docker",
    ],
    metrics: [
      { label: "Services", value: "10+" },
      { label: "Team size", value: "20" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    title: "AI‑Powered Platform",
    problem:
      "Building a RAG-based document intelligence system that can search, retrieve, and summarize large volumes of documents with high accuracy.",
    stack: ["Python", "AI Models", "PostgreSQL", "pgvector", "FastAPI", "ReactJS", "AWS"],
    metrics: [
      { label: "Docs indexed", value: "50K+" },
      { label: "Answer accuracy", value: ">80%" },
      { label: "Response time", value: "<2s" },
    ],
  },
  {
    title: "Cloud-native Deployment Architecture",
    problem: "Zero-downtime deployments with auto-scaling, observability, and cost optimization across multi-region.",
    stack: ["Kubernetes", "Terraform", "AWS EKS", "Prometheus", "Grafana", "ArgoCD", "Ceph", "Loki", "HelmChart", "Docker"],
    metrics: [
      { label: "Deploy time", value: "<3min" },
      { label: "Cost saved", value: "40%" },
      { label: "Scale", value: "Auto" },
    ],
  },
];

const ArchitectureShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="architecture" className="section-spacing relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-3 block">
            // architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            System Design
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {architectures.map((arch, i) => (
            <motion.div
              key={arch.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-glass flex flex-col"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse-slow" />
                <span className="font-mono text-xs text-accent">SYSTEM_{String(i + 1).padStart(2, "0")}</span>
              </div>

              <h3 className="text-lg font-semibold mb-3">{arch.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">
                {arch.problem}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {arch.stack.map((tech) => (
                  <span key={tech} className="tag-pill">{tech}</span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-border">
                {arch.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-sm font-semibold text-primary">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{m.label}</div>
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

export default ArchitectureShowcase;
