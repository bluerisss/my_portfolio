"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const BootSequence = ({ children }: { children: React.ReactNode }) => {
  const [booted, setBooted] = useState(false);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 600);
    const t3 = setTimeout(() => setPhase(3), 1000);
    const t4 = setTimeout(() => {
      setPhase(4);
      setBooted(true);
    }, 1600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <>
      <AnimatePresence>
        {!booted && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <div className="relative w-64 h-64">
              {/* Horizontal scan lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={`h-${i}`}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={phase >= 1 ? { scaleX: 1, opacity: 0.15 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.06, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute left-0 right-0 h-px bg-primary origin-left"
                  style={{ top: `${20 + i * 15}%` }}
                />
              ))}
              {/* Vertical scan lines */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={`v-${i}`}
                  initial={{ scaleY: 0, opacity: 0 }}
                  animate={phase >= 1 ? { scaleY: 1, opacity: 0.15 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute top-0 bottom-0 w-px bg-primary origin-top"
                  style={{ left: `${20 + i * 15}%` }}
                />
              ))}
              {/* Nodes at intersections */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={`n-${i}`}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={phase >= 2 ? { scale: 1, opacity: 0.6 } : {}}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: [0.4, 0, 0.2, 1] }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                  style={{
                    top: `${20 + (i % 3) * 30}%`,
                    left: `${20 + Math.floor(i / 3) * 45}%`,
                  }}
                />
              ))}
              {/* Connection lines between nodes */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
                {[
                  [51, 51, 51, 128],
                  [51, 51, 166, 51],
                  [166, 51, 166, 128],
                  [51, 128, 166, 128],
                  [51, 205, 166, 205],
                  [51, 128, 51, 205],
                ].map(([x1, y1, x2, y2], i) => (
                  <motion.line
                    key={`l-${i}`}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="hsl(var(--primary))"
                    strokeWidth="0.5"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={phase >= 2 ? { pathLength: 1, opacity: 0.3 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: [0.4, 0, 0.2, 1] }}
                  />
                ))}
              </svg>
              {/* System text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={phase >= 3 ? { opacity: 1 } : {}}
                transition={{ duration: 0.3 }}
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-[10px] text-muted-foreground tracking-widest"
              >
                INITIALIZING SYSTEM
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={booted ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default BootSequence;
