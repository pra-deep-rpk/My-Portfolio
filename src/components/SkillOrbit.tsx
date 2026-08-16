import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SKILLS = ['Angular', 'AI', 'RAG', 'Node.js', 'React', 'UI/UX', 'TypeScript', 'MySQL', 'Agentic AI'];

// Fixed anchor points hugging the image perimeter — spaced to avoid overlap.
// A small per-mount jitter is added for a less mechanical feel.
const ANCHORS: { top?: string; bottom?: string; left?: string; right?: string }[] = [
  { top: '10%', left: '0%' },
  { top: '-1%', left: '36%' },
  { top: '-1%', right: '2%' },
  { top: '32%', left: '-3%' },
  { top: '32%', right: '-3%' },
  { top: '62%', left: '-3%' },
  { top: '62%', right: '-3%' },
  { bottom: '2%', left: '18%' },
  { bottom: '2%', right: '18%' },
];

interface SkillOrbitProps {
  children: ReactNode;
  className?: string;
}

/**
 * Hovering (or, on touch devices, an automatic cycle / tap) reveals floating
 * skill badges around the wrapped image. Cursor position drives a light
 * GPU-accelerated parallax on each badge, kept independent of Framer
 * Motion's own opacity/scale/float animation by applying it to a separate
 * outer node.
 */
export default function SkillOrbit({ children, className }: SkillOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeOuterRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const jitter = useMemo(
    () => ANCHORS.map(() => ({ x: (Math.random() - 0.5) * 6, y: (Math.random() - 0.5) * 6 })),
    []
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(media.matches);
    const onChange = () => setReducedMotion(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  // Touch fallback: no hover, so cycle the reveal automatically.
  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (!isTouch || reducedMotion) return;

    let show = true;
    setActive(true);
    const interval = setInterval(() => {
      show = !show;
      setActive(show);
    }, 3200);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reducedMotion) return;

    const resetTransforms = () => {
      badgeOuterRefs.current.forEach((node) => {
        if (node) node.style.transform = 'translate3d(0, 0, 0)';
      });
    };

    const handleMove = (e: MouseEvent) => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = el.getBoundingClientRect();
        const relX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const relY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        badgeOuterRefs.current.forEach((node, i) => {
          if (!node) return;
          const depth = 6 + i * 1.5;
          node.style.transform = `translate3d(${relX * depth}px, ${relY * depth}px, 0)`;
        });
      });
    };

    const handleEnter = () => setActive(true);
    const handleLeave = () => {
      setActive(false);
      resetTransforms();
    };

    el.addEventListener('mousemove', handleMove, { passive: true });
    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [reducedMotion]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative' }}
      onClick={() => setActive((prev) => !prev)}
    >
      {children}

      <AnimatePresence>
        {active &&
          SKILLS.map((skill, i) => (
            <div
              key={skill}
              ref={(node) => {
                badgeOuterRefs.current[i] = node;
              }}
              className="absolute z-20 pointer-events-none"
              style={{
                ...ANCHORS[i],
                marginLeft: jitter[i].x,
                marginTop: jitter[i].y,
              }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.5, y: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: reducedMotion ? 0 : [0, -6, 0],
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{
                  opacity: { duration: 0.3, delay: i * 0.06 },
                  scale: { duration: 0.35, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
                  y: reducedMotion
                    ? undefined
                    : {
                        duration: 2.2 + i * 0.3,
                        repeat: Infinity,
                        repeatType: 'mirror',
                        ease: 'easeInOut',
                        delay: i * 0.06 + 0.3,
                      },
                }}
                className="inline-block whitespace-nowrap select-none rounded-full border uppercase tracking-widest font-medium px-4 py-1.5 sm:px-5 sm:py-2 text-[0.65rem] sm:text-xs"
                style={{
                  borderColor: 'rgba(215, 226, 234, 0.35)',
                  backgroundColor: 'rgba(12, 12, 12, 0.65)',
                  backdropFilter: 'blur(6px)',
                  color: '#D7E2EA',
                }}
              >
                {skill}
              </motion.span>
            </div>
          ))}
      </AnimatePresence>
    </div>
  );
}
