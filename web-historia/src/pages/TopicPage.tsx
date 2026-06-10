import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getTopicById } from '../data/topics';
import { Timeline } from '../components/timeline/Timeline';
import { FlashcardDeck } from '../components/flashcards/FlashcardDeck';
import { Quiz } from '../components/quiz/Quiz';
import { CauseEffectDiagram } from '../components/cause-effect/CauseEffectDiagram';
import { GlossarySection, GlossaryTooltip } from '../components/glossary/GlossaryTooltip';
import { cn } from '../lib/utils';

type Tab = 'resumen' | 'timeline' | 'repaso' | 'glosario';

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'resumen', label: 'Resumen', icon: '📋' },
  { id: 'timeline', label: 'Línea de Tiempo', icon: '⏳' },
  { id: 'repaso', label: 'Repaso', icon: '🧠' },
  { id: 'glosario', label: 'Glosario', icon: '📖' },
];

export function TopicPage() {
  const { id } = useParams<{ id: string }>();
  const topic = id ? getTopicById(id) : undefined;
  const [activeTab, setActiveTab] = useState<Tab>('resumen');
  const [reviewMode, setReviewMode] = useState<'flashcards' | 'quiz'>('flashcards');

  if (!topic) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500">
        <Link to="/" className="hover:text-gray-700 dark:hover:text-gray-300">
          Inicio
        </Link>
        <span>/</span>
        <span className="text-gray-600 dark:text-gray-300">{topic.block}</span>
        <span>/</span>
        <span className="text-gray-900 font-medium dark:text-white">{topic.title}</span>
      </nav>

      {/* Topic header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            {topic.block}
          </span>
          <span className="text-sm text-gray-400">{topic.period}</span>
        </div>
        <h1 className="mb-1 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {topic.title}
        </h1>
        {topic.subtitle && (
          <p className="mb-3 text-lg text-gray-500 dark:text-gray-400">{topic.subtitle}</p>
        )}
        <p className="max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-400">
          {topic.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {topic.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-500 dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Stats bar */}
      <div className="mb-8 grid grid-cols-3 gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-800 dark:bg-gray-900">
        {[
          { icon: '⏱', value: topic.timeline.length, label: 'Eventos' },
          { icon: '🃏', value: topic.flashcards.length, label: 'Flashcards' },
          { icon: '❓', value: topic.quiz.length, label: 'Preguntas' },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-0.5">
            <div className="text-xl">{s.icon}</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">{s.value}</div>
            <div className="text-xs text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="mb-6 flex overflow-x-auto rounded-xl border border-gray-200 bg-gray-50 p-1 dark:border-gray-800 dark:bg-gray-900">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              'flex flex-1 items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium whitespace-nowrap transition-all',
              activeTab === tab.id
                ? 'bg-white text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white'
                : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200',
            )}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {/* === RESUMEN === */}
          {activeTab === 'resumen' && (
            <div className="space-y-10">
              <section>
                <SectionHeader icon="🗺️" title="Causa y Efecto" />
                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
                  Haz clic en cada nodo para ver más detalles. Expande las consecuencias a largo
                  plazo al final.
                </p>
                <CauseEffectDiagram data={topic.causeEffect} />
              </section>

              <section>
                <SectionHeader icon="📝" title="Términos clave en contexto" />
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  Algunos de los conceptos más importantes de este tema incluyen:{' '}
                  {topic.glossary.slice(0, 5).map((term, i) => (
                    <span key={term.term}>
                      <GlossaryTooltip term={term}>{term.term}</GlossaryTooltip>
                      {i < 4 ? ', ' : '.'}
                    </span>
                  ))}
                  {' '}Pasa el cursor sobre cualquier término subrayado para ver su definición.
                </p>
              </section>
            </div>
          )}

          {/* === TIMELINE === */}
          {activeTab === 'timeline' && (
            <div>
              <SectionHeader icon="⏳" title={`Cronología: ${topic.title}`} />
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                {topic.timeline.length} eventos ordenados cronológicamente. Los eventos con{' '}
                <span className="font-medium text-gray-700 dark:text-gray-300">▼</span> tienen
                información adicional al hacer clic.
              </p>
              <Timeline events={topic.timeline} />
            </div>
          )}

          {/* === REPASO === */}
          {activeTab === 'repaso' && (
            <div>
              {/* Sub-tabs */}
              <div className="mb-6 flex gap-2">
                <button
                  onClick={() => setReviewMode('flashcards')}
                  className={cn(
                    'rounded-xl px-4 py-2 text-sm font-medium transition-all',
                    reviewMode === 'flashcards'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800',
                  )}
                >
                  🃏 Flashcards
                </button>
                <button
                  onClick={() => setReviewMode('quiz')}
                  className={cn(
                    'rounded-xl px-4 py-2 text-sm font-medium transition-all',
                    reviewMode === 'quiz'
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'border border-gray-200 text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800',
                  )}
                >
                  ❓ Quiz
                </button>
              </div>

              <AnimatePresence mode="wait">
                {reviewMode === 'flashcards' ? (
                  <motion.div
                    key="flashcards"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <SectionHeader icon="🃏" title="Modo Flashcards" />
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                      Toca cada tarjeta para ver la respuesta. Usa los botones para navegar o
                      baraja el mazo para un repaso aleatorio.
                    </p>
                    <FlashcardDeck cards={topic.flashcards} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="quiz"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <SectionHeader icon="❓" title="Quiz de evaluación" />
                    <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                      {topic.quiz.length} preguntas de opción múltiple y verdadero/falso. Recibirás
                      explicación detallada tras cada respuesta.
                    </p>
                    <Quiz questions={topic.quiz} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* === GLOSARIO === */}
          {activeTab === 'glosario' && (
            <div>
              <SectionHeader icon="📖" title="Glosario de términos" />
              <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
                {topic.glossary.length} términos clave de este tema. Busca cualquier concepto,
                personaje o movimiento.
              </p>
              <GlossarySection terms={topic.glossary} />
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SectionHeader({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="text-xl">{icon}</span>
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
    </div>
  );
}
