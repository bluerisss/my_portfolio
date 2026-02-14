"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Enterprise Data Pipeline Platform",
    stack: ["Ruby on Rails", "Kafka", "PostgreSQL", "AWS", "Docker"],
    description: "Built a real-time data processing platform handling 50M+ daily events with 99.99% uptime, reducing data processing costs by 35%.",
  },
  {
    name: "AI-Powered Document Intelligence",
    stack: ["Python", "OpenAI", "pgvector", "FastAPI", "React"],
    description: "Designed and deployed a RAG-based system that processes 500K+ documents, enabling natural language queries with 94% accuracy.",
  },
  {
    name: "Multi-Region Cloud Infrastructure",
    stack: ["Kubernetes", "Terraform", "AWS EKS", "ArgoCD", "Prometheus"],
    description: "Architected cloud-native infrastructure across 3 regions with automated failover, achieving 40% cost reduction through intelligent scaling.",
  },
  {
    name: "Event-Driven Microservices Platform",
    stack: ["Ruby on Rails", "Redis", "Kafka", "gRPC", "Docker"],
    description: "Migrated monolithic architecture to event-driven microservices, improving deployment frequency by 10x and reducing MTTR by 80%.",
  },
];

const FeaturedProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-spacing relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-3 block">
            // projects
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag-pill">{tech}</span>
                ))}
              </div>

              <button className="font-mono text-sm text-primary hover:text-accent transition-colors inline-flex items-center gap-1.5">
                View Case Study <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
