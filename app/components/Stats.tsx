'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimateOnScroll from './AnimateOnScroll';

interface Stat {
  value: string;
  label: string;
  icon?: string;
}

const stats: Stat[] = [
  { value: '+35%', label: 'GMV per Merchant' },
  { value: '50+', label: 'Features Shipped' },
  { value: '10', label: 'Years Experience' },
  { value: '4', label: 'Industries' },
];

function CounterValue({ value, isVisible }: { value: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = numericValue / (duration / 50);

    const interval = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setDisplayValue(numericValue);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, numericValue]);

  const prefix = value.startsWith('+') ? '+' : '';
  const suffix = value.includes('y') || value.includes('s') ? (value.endsWith('s') ? 's' : 'y') : '';

  return (
    <span className="text-accent">
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-20 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll variant="fadeUp" delay={0}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black leading-tight mb-3">
                  <CounterValue value={stat.value} isVisible={inView} />
                </div>
                <p className="text-sm md:text-base text-muted font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
