"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    date: "2025-01",
    title: "Building Cost-Efficient RAG Pipelines at Scale",
    excerpt: "How to design retrieval-augmented generation systems that balance accuracy with infrastructure costs in production environments.",
    tags: ["AI", "RAG", "Architecture"],
  },
  {
    date: "2024-11",
    title: "Event-Driven Architecture: Lessons from Production",
    excerpt: "Key patterns and anti-patterns learned from operating event-driven systems processing millions of messages daily.",
    tags: ["Kafka", "Microservices", "DevOps"],
  },
  {
    date: "2024-09",
    title: "Kubernetes Cost Optimization Playbook",
    excerpt: "Practical strategies for reducing cloud spend by 40% without sacrificing reliability or developer experience.",
    tags: ["Kubernetes", "AWS", "Cost"],
  },
];

const BlogInsights = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="section-spacing relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-primary mb-3 block">
            // insights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Blog & Insights</h2>
        </motion.div>

        <div className="space-y-4">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass group cursor-pointer flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
              <span className="font-mono text-xs text-muted-foreground shrink-0 w-20">
                {article.date}
              </span>

              <div className="flex-1">
                <h3 className="font-semibold group-hover:text-primary transition-colors mb-1">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag-pill text-[10px]">{tag}</span>
                ))}
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all ml-2" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
