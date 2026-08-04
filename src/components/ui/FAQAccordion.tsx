import { type ReactNode, useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

export interface FAQItem {
  question: string;
  answer: ReactNode;
}

export interface FAQAccordionProps {
  items: FAQItem[];
  allowMultiple?: boolean;
}

export function FAQAccordion({ items, allowMultiple = false }: FAQAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([]);
  const prefersReducedMotion = useReducedMotion();

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const isOpen = prev.includes(index);
      if (isOpen) {
        return prev.filter((i) => i !== index);
      }
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  const accordionId = useId();

  return (
    <div className="divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        const buttonId = `${accordionId}-btn-${index}`;
        const panelId = `${accordionId}-panel-${index}`;

        return (
          <div key={index}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-primary-600"
              >
                <span className="text-base font-medium text-neutral-900">
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-neutral-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={prefersReducedMotion ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={prefersReducedMotion ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0 : 0.2, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-sm leading-relaxed text-neutral-600">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
