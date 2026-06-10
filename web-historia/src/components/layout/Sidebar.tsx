import { useState } from 'react';
import { Link, useMatch } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { topicGroups } from '../../data/topics';
import { cn } from '../../lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const topicMatch = useMatch('/tema/:id');
  const id = topicMatch?.params.id;
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    () => new Set(['contemporanea']),
  );

  const toggle = (groupId: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(groupId)) {
        next.delete(groupId);
      } else {
        next.add(groupId);
      }
      return next;
    });
  };

  const sidebarContent = (
    <nav className="flex flex-col gap-1 p-3">
      <Link
        to="/"
        onClick={onClose}
        className="mb-2 flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
      >
        <span>🏠</span>
        <span>Inicio</span>
      </Link>

      <div className="mb-1 px-3 text-[10px] font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
        Bloques Históricos
      </div>

      {topicGroups.map((group) => {
        const isExpanded = expandedGroups.has(group.id);
        const hasTopics = group.topics.length > 0;

        return (
          <div key={group.id}>
            <button
              onClick={() => hasTopics && toggle(group.id)}
              className={cn(
                'flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-colors',
                hasTopics
                  ? 'cursor-pointer text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  : 'cursor-default text-gray-400 dark:text-gray-600',
              )}
            >
              <span className="text-base">{group.icon}</span>
              <div className="min-w-0 flex-1">
                <div className="truncate font-medium">{group.title}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500">{group.period}</div>
              </div>
              {hasTopics && (
                <svg
                  className={cn(
                    'h-3.5 w-3.5 flex-shrink-0 text-gray-400 transition-transform duration-200',
                    isExpanded && 'rotate-90',
                  )}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {!hasTopics && (
                <span className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-400 dark:bg-gray-800 dark:text-gray-500">
                  Próximamente
                </span>
              )}
            </button>

            <AnimatePresence initial={false}>
              {isExpanded && hasTopics && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="ml-4 mt-1 flex flex-col gap-0.5 border-l border-gray-200 pl-3 dark:border-gray-700">
                    {group.topics.map((topic) => (
                      <Link
                        key={topic.id}
                        to={`/tema/${topic.id}`}
                        onClick={onClose}
                        className={cn(
                          'flex flex-col rounded-md px-2.5 py-2 text-sm transition-colors',
                          id === topic.id
                            ? 'bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300'
                            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800',
                        )}
                      >
                        <span className="font-medium leading-tight">{topic.title}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {topic.period}
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed left-0 top-0 z-50 flex h-full w-64 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950 lg:hidden"
          >
            <div className="flex h-14 items-center justify-between border-b border-gray-200 px-4 dark:border-gray-800">
              <span className="font-bold text-gray-900 dark:text-white">📚 Historia</span>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">{sidebarContent}</div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-shrink-0 lg:block">
        <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-950">
          {sidebarContent}
        </div>
      </aside>
    </>
  );
}
