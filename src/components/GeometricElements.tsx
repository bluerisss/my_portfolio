"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/** Decorative geometric elements inspired by neural network nodes and data flow */
const GeometricElements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {/* Floating geometric nodes — neural network inspired */}
      {[
        { x: "8%", y: "15%", size: 6, delay: 0 },
        { x: "92%", y: "25%", size: 4, delay: 0.5 },
        { x: "85%", y: "60%", size: 5, delay: 1 },
        { x: "12%", y: "75%", size: 3, delay: 1.5 },
        { x: "50%", y: "45%", size: 4, delay: 0.8 },
        { x: "75%", y: "85%", size: 3, delay: 2 },
      ].map((node, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.12, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: node.delay, ease: [0.4, 0, 0.2, 1] }}
          className="absolute"
          style={{ left: node.x, top: node.y }}
        >
          {/* Diamond shape */}
          <div
            className="border border-primary/30 rotate-45"
            style={{ width: node.size * 4, height: node.size * 4 }}
          />
        </motion.div>
      ))}

      {/* Infrastructure block outlines */}
      {[
        { x: "5%", y: "30%", w: 60, h: 40, delay: 0.3 },
        { x: "88%", y: "40%", w: 50, h: 30, delay: 0.7 },
        { x: "45%", y: "80%", w: 70, h: 35, delay: 1.2 },
      ].map((block, i) => (
        <motion.div
          key={`block-${i}`}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.05 } : {}}
          transition={{ duration: 2, delay: block.delay }}
          className="absolute border border-accent/40 rounded-sm"
          style={{ left: block.x, top: block.y, width: block.w, height: block.h }}
        />
      ))}
    </div>
  );
};

export default GeometricElements;
