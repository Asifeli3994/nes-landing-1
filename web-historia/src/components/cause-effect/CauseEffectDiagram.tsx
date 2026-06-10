import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { CauseEffectData, CauseNode } from '../../types';
import { cn } from '../../lib/utils';

interface Props {
  data: CauseEffectData;
}

function NodeItem({ node, color }: { node: CauseNode; color: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => node.details && setOpen((o) => !o)}
        className={cn(
          'w-full rounded-lg border px-3 py-2.5 text-left text-sm transition-all',
          color,
          node.details ? 'cursor-pointer hover:shadow-sm' : 'cursor-default',
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <span className="font-medium leading-snug">{node.text}</span>
          {node.details && (
            <motion.svg
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 opacity-60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          )}
        </div>
      </button>
      <AnimatePresence>
        {open && node.details && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-3 pb-2 pt-1 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              {node.details}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function CauseEffectDiagram({ data }: Props) {
  const [showLong, setShowLong] = useState(false);

  return (
    <div className="space-y-6">
      {/* Three-column layout */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_auto_1fr]">
        {/* Causes */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs dark:bg-red-900/40">🔥</span>
            <h4 className="text-sm font-bold uppercase tracking-wide text-red-700 dark:text-red-400">
              Causas
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            {data.causes.map((node) => (
              <NodeItem
                key={node.id}
                node={node}
                color="border-red-200 bg-red-50 text-red-800 dark:border-red-800/50 dark:bg-red-950/30 dark:text-red-200"
              />
            ))}
          </div>
        </div>

        {/* Arrow & Event */}
        <div className="flex flex-col items-center justify-center gap-3 py-4">
          {/* Arrow left side */}
          <div className="hidden items-center gap-1 md:flex">
            <div className="h-px w-8 bg-gray-400 dark:bg-gray-600" />
            <svg className="h-4 w-4 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>

          {/* Event box */}
          <div className="flex w-full max-w-[160px] flex-col items-center gap-1 rounded-2xl border-2 border-gray-900 bg-gray-900 p-4 text-center shadow-lg dark:border-gray-100 dark:bg-gray-100">
            <div className="text-xl">⚡</div>
            <div className="text-sm font-bold text-white dark:text-gray-900">{data.event.title}</div>
            <div className="text-xs text-gray-300 dark:text-gray-600">{data.event.date}</div>
          </div>

          {/* Arrow right side */}
          <div className="hidden items-center gap-1 md:flex">
            <svg className="h-4 w-4 text-gray-400 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <div className="h-px w-8 bg-gray-400 dark:bg-gray-600" />
          </div>

          {/* Mobile arrows */}
          <div className="flex items-center gap-2 md:hidden text-gray-400 text-xs">
            <span>↑ causas</span>
            <span>·</span>
            <span>efectos ↓</span>
          </div>
        </div>

        {/* Short-term effects */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs dark:bg-emerald-900/40">💥</span>
            <h4 className="text-sm font-bold uppercase tracking-wide text-emerald-700 dark:text-emerald-400">
              Efectos inmediatos
            </h4>
          </div>
          <div className="flex flex-col gap-2">
            {data.shortTermEffects.map((node) => (
              <NodeItem
                key={node.id}
                node={node}
                color="border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-emerald-200"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Long-term effects toggle */}
      {data.longTermEffects.length > 0 && (
        <div className="rounded-xl border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setShowLong((s) => !s)}
            className="flex w-full items-center justify-between px-4 py-3 text-left"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 text-xs dark:bg-indigo-900/40">🌊</span>
              <h4 className="text-sm font-bold uppercase tracking-wide text-indigo-700 dark:text-indigo-400">
                Consecuencias a largo plazo
              </h4>
            </div>
            <motion.svg
              animate={{ rotate: showLong ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </motion.svg>
          </button>

          <AnimatePresence>
            {showLong && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.25 }}
                style={{ overflow: 'hidden' }}
              >
                <div className="grid grid-cols-1 gap-2 border-t border-gray-200 p-4 sm:grid-cols-2 dark:border-gray-700">
                  {data.longTermEffects.map((node) => (
                    <NodeItem
                      key={node.id}
                      node={node}
                      color="border-indigo-200 bg-indigo-50 text-indigo-800 dark:border-indigo-800/50 dark:bg-indigo-950/30 dark:text-indigo-200"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
