"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Enterprise Financial Health Analytics Platform",
    stack: ["Ruby on Rails", "MySQL", "NestJs", "NextJs", "GraphQL", "gRPC", "AWS", "Docker", "CI/CD"],
    description: "Contributed to building the foundational microservices architecture and designed the system infrastructure for enterprise financial analytics.",
  },
  {
    name: "AI-Powered Document Intelligence",
    stack: ["Python", "AI Models", "pgvector", "FastAPI", "ReactJS", "AWS"],
    description: "Designed and deployed a RAG-based system that processes 50K+ documents, enabling natural language queries with >80% accuracy.",
  },
  {
    name: "Digital Mortgage Processing Platform",
    stack: ["Ruby on Rails", "PostgreSQL", "AWS", "ReactJS"],
    description: "Leading development of a comprehensive digital mortgage processing system with automated workflows and secure document management.",
  },
  {
    name: "AI-powered Cancer Diagnosis System",
    stack: ["Ruby on Rails", "Python", "AI Models", "Google Cloud Platform", "PostgreSQL", "ReactJS"],
    description: "Designed solutions leveraging and fine-tuning pre-trained AI models, implemented AWS architecture, and developed features for medical diagnosis system.",
  },
  {
    name: "B2B Cosmetics Ordering System",
    stack: ["Ruby on Rails", "ReactJS", "MySQL", "Redis", "AWS"],
    description: "Designed and implemented AWS architecture for B2B e-commerce platform. Led team of 8 developers in building scalable ordering system.",
  },
  {
    name: "Drill Bit Position Standardization Module",
    stack: ["Python", "Django", "MySQL", "AI Models", "NextJs", "AWS"],
    description: "Designed solutions leveraging and fine-tuning pre-trained AI models for industrial automation. Implemented AWS architecture and developed core features.",
  },
  {
    name: "Kindergarten Timesheet Management System",
    stack: ["Ruby on Rails", "MySQL", "IoT", "ReactJS", "MQTT"],
    description: "Led team of 10 in building IoT-integrated timesheet system with real-time tracking and automated reporting for educational institutions.",
  },
  {
    name: "Alumni Community Service for the Unemployed",
    stack: ["Ruby on Rails", "MySQL", "DynamoDB", "Sinatra", "VueJs", "VueX", "Websocket"],
    description: "Designed and implemented the API architecture and foundational services. Built a real-time chat module integrated across the entire system. Proposed and implemented a secure file upload strategy to prevent malware from being uploaded to the server.",
  }
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
