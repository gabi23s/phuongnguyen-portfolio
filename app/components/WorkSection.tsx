"use client";

import { motion } from "framer-motion";
import { projects } from "../data/portfolio";
import { useLang } from "./LangProvider";
import ProjectCard from "./ProjectCard";
import AnimateOnScroll from "./AnimateOnScroll";

export default function WorkSection() {
  const { t } = useLang();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="work" className="py-20 px-6 relative">
      {/* Section number */}
      <div className="absolute top-16 right-12 section-number hidden md:block select-none">02</div>

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <AnimateOnScroll variant="fadeUp" delay={0}>
          <div className="mb-16">
            <motion.div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-1 bg-accent rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '3rem' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              />
              <span className="text-xs font-bold text-accent uppercase tracking-widest">Portfolio</span>
            </motion.div>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black tracking-tight">
              {t.work.title}
              <span className="text-accent">.</span>
            </h2>
            <p className="text-muted mt-4 max-w-xl text-base">
              {t.work.subtitle}
            </p>
          </div>
        </AnimateOnScroll>

        {/* Project grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, i) => (
            <motion.div key={project.slug} variants={cardVariants}>
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
