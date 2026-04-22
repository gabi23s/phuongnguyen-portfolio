'use client';

import { motion } from 'framer-motion';
import { useLang } from './LangProvider';
import AnimateOnScroll from './AnimateOnScroll';

interface ProcessStep {
  number: string;
  title: string;
  items: string[];
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover & Research',
    items: [
      'User interviews & research',
      'Problem framing',
      'Market analysis',
    ],
  },
  {
    number: '02',
    title: 'Design & Iterate',
    items: [
      'Wireframes & specs',
      'Stakeholder alignment',
      'Rapid iteration',
    ],
  },
  {
    number: '03',
    title: 'Ship & Measure',
    items: [
      'Launch & analytics',
      'OKR tracking',
      'Continuous improvement',
    ],
  },
];

export default function Process() {
  const { t } = useLang();
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 px-6 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <AnimateOnScroll variant="fadeUp" delay={0} className="text-center mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            How I Work
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A structured approach to discovering insights, designing solutions, and shipping impact
          </p>
        </AnimateOnScroll>

        {/* Process Steps */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group p-8 rounded-2xl bg-white border-2 border-border hover:border-accent transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Number */}
              <div className="text-6xl font-black text-accent/20 group-hover:text-accent/30 transition-colors mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-6 text-foreground">
                {step.title}
              </h3>

              {/* Items list */}
              <ul className="space-y-3">
                {step.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-accent/20 text-accent text-xs font-bold flex-shrink-0">
                      •
                    </span>
                    <span className="text-muted text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Arrow indicator */}
              {idx < steps.length - 1 && (
                <motion.div
                  className="hidden md:flex absolute -right-6 top-1/2 transform -translate-y-1/2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
