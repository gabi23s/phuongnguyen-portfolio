"use client";

import { motion } from "framer-motion";
import { profile } from "../data/portfolio";
import { useLang } from "./LangProvider";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Footer() {
  const { t } = useLang();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer id="contact" className="bg-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div
        className="absolute top-10 right-20 w-32 h-32 border-2 border-accent/20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-20 h-20 bg-accent/10 rounded-full"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <motion.div
          className="flex flex-col md:flex-row justify-between gap-12 items-start md:items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <span className="font-[family-name:var(--font-hand)] text-accent text-2xl">{t.footer.title}</span>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black mt-2 leading-tight">
              {t.footer.subtitle.split("?")[0]}?
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <motion.a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-full text-sm font-bold hover:shadow-lg hover:shadow-accent/40 transition-all w-fit"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </motion.a>
            <motion.a
              href={`mailto:${profile.email}`}
              whileHover={{ x: 4, color: 'var(--accent)' }}
              className="text-white/60 hover:text-accent transition-colors text-sm"
            >
              {profile.email}
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        />

        <motion.div
          className="flex justify-between items-center text-xs text-white/40 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <span>{new Date().getFullYear()} Phuong Nguyen</span>
          <span className="font-[family-name:var(--font-hand)] text-accent/60 text-base">Made with passion</span>
        </motion.div>
      </div>
    </footer>
  );
}
