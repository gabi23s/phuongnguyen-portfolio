"use client";

import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { useLang } from "./LangProvider";

export default function Hero() {
  const { t } = useLang();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const titleLineVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, delay: i * 0.1 },
    }),
  };

  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 right-12 section-number hidden md:block select-none">01</div>
      <svg className="absolute top-40 left-8 w-16 h-16 text-accent opacity-20 hidden md:block" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="2" strokeDasharray="4 6" />
      </svg>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent-dark text-xs font-bold tracking-widest uppercase rounded-full mb-8">
                {profile.title}
              </span>
            </motion.div>

            {/* Hero title with staggered lines */}
            <motion.h1 className="mb-8">
              <motion.span
                custom={0}
                variants={titleLineVariants}
                initial="hidden"
                animate="visible"
                className="block font-[family-name:var(--font-hand)] text-accent text-2xl md:text-3xl mb-2"
              >
                {t.hero.greeting}
              </motion.span>
              <motion.span
                custom={1}
                variants={titleLineVariants}
                initial="hidden"
                animate="visible"
                className="block font-[family-name:var(--font-display)] text-5xl md:text-7xl font-black tracking-tight leading-none"
              >
                {profile.name.split(" ")[0]}
              </motion.span>
              <motion.span
                custom={2}
                variants={titleLineVariants}
                initial="hidden"
                animate="visible"
                className="block font-[family-name:var(--font-display)] text-5xl md:text-7xl font-black tracking-tight leading-none mt-1"
              >
                {profile.name.split(" ").slice(1).join(" ")}
                <span className="text-accent">.</span>
              </motion.span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-muted text-base md:text-lg leading-relaxed max-w-lg mb-8">
              {t.hero.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full text-sm font-bold hover:shadow-lg hover:shadow-accent/40 transition-all"
              >
                {t.hero.cta}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center px-8 py-4 border-2 border-dark rounded-full text-sm font-bold hover:bg-dark hover:text-white transition-all"
              >
                LinkedIn
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — Photo with animation */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center"
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            >
              {/* Yellow background shape */}
              <motion.div
                className="absolute -top-4 -right-4 w-72 h-80 md:w-80 md:h-96 bg-accent rounded-3xl rotate-3"
                animate={{ rotate: 4, y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Photo container */}
              <div className="relative w-72 h-80 md:w-80 md:h-96 bg-dark rounded-3xl overflow-hidden -rotate-2 shadow-2xl">
                <img
                  src="/images/portrait.jpg"
                  alt="Phuong Nguyen"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              {/* Decorative elements */}
              <motion.div
                className="absolute -bottom-6 -left-6 w-20 h-20 border-4 border-accent rounded-full opacity-30"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.svg
                className="absolute -top-8 -left-8 w-12 h-12 text-accent"
                viewBox="0 0 40 40"
                fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <path d="M20 5L23 17L35 20L23 23L20 35L17 23L5 20L17 17Z" fill="currentColor" opacity="0.4" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
