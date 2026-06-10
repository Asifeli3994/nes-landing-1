import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { GlossaryTerm } from '../../types';
import { Badge } from '../ui/Badge';
import { GLOSSARY_TYPE_STYLES, GLOSSARY_TYPE_LABELS } from '../../lib/utils';

interface TooltipProps {
  term: GlossaryTerm;
  children: React.ReactNode;
}

export function GlossaryTooltip({ term, children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  return (
    <span className="relative inline-block">
      <span ref={ref} onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)} onFocus={() => setVisible(true)} onBlur={() => setVisible(false)} className="cursor-help border-b-2 border-dotted border-indigo-400 text-indigo-700 dark:border-indigo-500 dark:text-indigo-300" tabIndex={0}>
        {children}
      </span>
      <AnimatePresence>
        {visible && (
          <motion.div initial={{ opacity: 0, y: 6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 4, scale: 0.97 }} transition={{ duration: 0.15 }} className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-3 shadow-xl dark:border-gray-700 dark:bg-gray-900">
            <div className="mb-1.5 flex items-center gap-2">
              <span className="font-semibold text-gray-900 dark:text-white">{term.term}</span>
              <Badge className={GLOSSARY_TYPE_STYLES[term.type]} size="sm">{GLOSSARY_TYPE_LABELS[term.type]}</Badge>
            </div>
            <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">{term.definition}</p>
            <div className="absolute -bottom-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}

export function GlossarySection({ terms }: { terms: GlossaryTerm[] }) {
  const [search, setSearch] = useState('');
  const filtered = terms.filter((t) => t.term.toLowerCase().includes(search.toLowerCase()) || t.definition.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="space-y-4">
      <div className="relative">
        <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input type="text" placeholder="Buscar término..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 outline-none transition-colors focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-500 dark:focus:ring-indigo-900/40" />
      </div>
      {filtered.length === 0 ? (
        <p className="py-8 text-center text-sm text-gray-400 dark:text-gray-500">No se encontraron términos para "{search}"</p>
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {filtered.map((term) => (
            <div key={term.term} className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-1.5 flex items-center gap-2">
                <span className="font-semibold text-gray-900 dark:text-white">{term.term}</span>
                <Badge className={GLOSSARY_TYPE_STYLES[term.type]} size="sm">{GLOSSARY_TYPE_LABELS[term.type]}</Badge>
              </div>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{term.definition}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
