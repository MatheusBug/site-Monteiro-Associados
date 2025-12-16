import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const getVariants = () => {
    const distance = 40;
    const base = { opacity: 0, y: 0, x: 0 };
    
    switch (direction) {
      case 'up': return { ...base, y: distance };
      case 'down': return { ...base, y: -distance };
      case 'left': return { ...base, x: distance };
      case 'right': return { ...base, x: -distance };
      case 'none': return base;
      default: return { ...base, y: distance };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={getVariants()}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : getVariants()}
      transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;