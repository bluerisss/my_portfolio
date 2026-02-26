"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    { icon: Mail, label: "Email", href: "mailto:ntnam7399@gmail.com", text: "ntnam7399@gmail.com" },
    { icon: Phone, label: "Phone", href: "tel:+84368897065", text: "+84 368 897 065" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/nam-nguyen-571859227/", text: "linkedin.com/in/nam-nguyen-571859227/" },
    { icon: Github, label: "GitHub", href: "https://github.com/bluerisss", text: "github.com/bluerisss" },
  ];

  return (
    <section id="contact" className="section-spacing relative">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <span className="font-mono text-sm text-primary mb-3 block">
            // contact
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Let's Build Something
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Open to discussing full-stack development, distributed architectures, data engineering, API ecosystems, and cloud-native systems.
          </p>

          <div className="space-y-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 transition-all group"
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div>
                  <span className="font-mono text-xs text-muted-foreground block">{link.label}</span>
                  <span className="text-sm group-hover:text-primary transition-colors">{link.text}</span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted-foreground">
            © 2025 Nguyen Thanh Nam — Built with precision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
