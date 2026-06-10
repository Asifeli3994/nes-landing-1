import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TimelineEvent as TEvent } from '../../types';
import { Badge } from '../ui/Badge';
import { EVENT_TYPE_STYLES, EVENT_TYPE_LABELS, cn } from '../../lib/utils';

interface Props {
  event: TEvent;
  index: number;
}

export function TimelineEvent({ event, index }: Props) {
  const [expanded, setExpanded] = useState(false);
  const styles = EVENT_TYPE_STYLES[event.type];
  const isLeft = index % 2 === 0;

  return (
    <div
      className={cn(
        'group relative flex w-full items-start gap-4',
        'md:gap-0',
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse',
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: 0.05 }}
        className={cn(
          'w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-900',
          'md:w-[calc(50%-2rem)]',
          event.details ? 'cursor-pointer' : '',
        )}
        onClick={() => event.details && setExpanded((e) => !e)}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                {event.date}
              </span>
              <Badge className={styles.badge}>{EVENT_TYPE_LABELS[event.type]}</Badge>
            </div>
            <h3 className="font-semibold leading-snug text-gray-900 dark:text-white">
              {event.title}
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {event.description}
            </p>
          </div>
          {event.details && (
            <button
              aria-label={expanded ? 'Contraer' : 'Expandir'}
              className="ml-2 flex-shrink-0 rounded-full p-1 text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-200"
            >
              <motion.svg
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </motion.svg>
            </button>
          )}
        </div>

        <AnimatePresence>
          {expanded && event.details && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              style={{ overflow: 'hidden' }}
            >
              <div className="mt-3 border-t border-gray-100 pt-3 dark:border-gray-700">
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {event.details}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="hidden md:flex md:w-16 md:flex-shrink-0 md:flex-col md:items-center">
        <div
          className={cn(
            'z-10 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border-2 border-white shadow dark:border-gray-950',
            styles.dot,
          )}
        />
      </div>

      <div className="mt-1.5 flex-shrink-0 md:hidden">
        <div
          className={cn(
            'h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-950',
            styles.dot,
          )}
        />
      </div>

      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </div>
  );
}
