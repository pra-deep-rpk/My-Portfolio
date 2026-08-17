import { useEffect, useMemo, useState, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  /** Set false for above-the-fold content that should animate on mount rather than wait for scroll into view (IntersectionObserver can be unreliable on some mobile browsers while the address bar collapses). */
  scrollTriggered?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
  scrollTriggered = true,
}: FadeInProps) {
  // motion.create() lets FadeIn render any element type (div, nav, h1, ...)
  const MotionComponent = useMemo(() => motion.create(as as ElementType), [as]) as any;

  // For mount-triggered (non-scroll) animations, gate the target behind real
  // React state set in an effect rather than relying on Framer Motion's own
  // mount detection via the `animate` prop — on a genuinely fresh mount with
  // no follow-up render, that target can silently fail to apply. Flipping
  // state after mount guarantees a real re-render, which Framer Motion always
  // picks up.
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    if (scrollTriggered) return;
    setRevealed(true);
  }, [scrollTriggered]);

  const animationProp = scrollTriggered
    ? { whileInView: { opacity: 1, x: 0, y: 0 } }
    : { animate: revealed ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y } };

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      {...animationProp}
      viewport={scrollTriggered ? { once: true, margin: '50px', amount: 0 } : undefined}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
}
