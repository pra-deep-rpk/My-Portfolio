import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavLink {
  label: string;
  href: string;
}

interface MobileNavProps {
  links: NavLink[];
  className?: string;
}

export default function MobileNav({ links, className }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className={`items-center justify-between w-full ${className ?? ''}`}>
      <Logo />
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="relative z-50"
        style={{ color: '#D7E2EA' }}
      >
        <Menu size={26} />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
              style={{ backgroundColor: 'rgba(12, 12, 12, 0.98)' }}
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="absolute top-6 right-6 md:top-8 md:right-10"
                style={{ color: '#D7E2EA' }}
              >
                <X size={28} />
              </button>

              {links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="font-medium uppercase tracking-widest text-2xl"
                  style={{ color: '#D7E2EA' }}
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
