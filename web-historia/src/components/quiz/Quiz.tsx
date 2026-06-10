import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { QuizQuestion } from '../../types';
import { cn } from '../../lib/utils';

interface Props {
  questions: QuizQuestion[];
}

type AnswerState = 'idle' | 'correct' | 'wrong';

export function Quiz({ questions }: Props) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [state, setState] = useState<AnswerState>('idle');
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const q = questions[current];
  const progress = ((current) / questions.length) * 100;

  const handleSelect = (index: number) => {
    if (state !== 'idle') return;
    setSelected(index);
  };

  const handleConfirm = () => {
    if (selected === null || state !== 'idle') return;
    const correct = selected === q.correctIndex;
    setState(correct ? 'correct' : 'wrong');
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, correct]);
  };

  const handleNext = () => {
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setState('idle');
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setState('idle');
    setScore(0);
    setFinished(false);
    setAnswers([]);
  };

  if (finished) {
    const pct = Math.round((score / questions.length) * 100);
    const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📚';
    const message =
      pct >= 80
        ? '¡Excelente! Dominas este tema.'
        : pct >= 60
          ? 'Bien hecho. Repasa los temas fallados.'
          : 'Sigue practicando. ¡Tú puedes!';

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6 py-8 text-center"
      >
        <div className="text-6xl">{emoji}</div>
        <div>
          <div className="text-5xl font-bold text-gray-900 dark:text-white">
            {score}/{questions.length}
          </div>
          <div className="mt-1 text-gray-500 dark:text-gray-400">{pct}% de respuestas correctas</div>
        </div>
        <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{message}</p>

        {/* Answer summary */}
        <div className="flex flex-wrap justify-center gap-2">
          {answers.map((correct, i) => (
            <div
              key={i}
              className={cn(
                'flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold',
                correct
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
              )}
            >
              {i + 1}
            </div>
          ))}
        </div>

        <button
          onClick={handleRestart}
          className="rounded-xl bg-indigo-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Repetir quiz
        </button>
      </motion.div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div>
        <div className="mb-2 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>
            Pregunta <span className="font-semibold text-gray-900 dark:text-white">{current + 1}</span>{' '}
            de {questions.length}
          </span>
          <span>
            {score} correctas · {answers.filter((a) => !a).length} incorrectas
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
          <motion.div
            className="h-full rounded-full bg-indigo-500"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <div className="mb-1 inline-block rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
            {q.type === 'true-false' ? 'Verdadero o Falso' : 'Opción múltiple'}
          </div>
          <h3 className="mt-2 text-base font-semibold text-gray-900 dark:text-white">{q.question}</h3>

          <div className="mt-4 flex flex-col gap-2">
            {q.options.map((option, i) => {
              let optStyle =
                'border-gray-200 bg-white text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/30';

              if (state !== 'idle') {
                if (i === q.correctIndex) {
                  optStyle =
                    'border-emerald-400 bg-emerald-50 text-emerald-800 dark:border-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-300';
                } else if (i === selected && i !== q.correctIndex) {
                  optStyle =
                    'border-red-400 bg-red-50 text-red-800 dark:border-red-700 dark:bg-red-950/40 dark:text-red-300';
                } else {
                  optStyle = 'border-gray-200 bg-white text-gray-400 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-600';
                }
              } else if (selected === i) {
                optStyle =
                  'border-indigo-400 bg-indigo-50 text-indigo-800 dark:border-indigo-600 dark:bg-indigo-950/40 dark:text-indigo-300';
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={state !== 'idle'}
                  className={cn(
                    'flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-all',
                    optStyle,
                    state === 'idle' ? 'cursor-pointer' : 'cursor-default',
                  )}
                >
                  <span
                    className={cn(
                      'flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold',
                      selected === i && state === 'idle'
                        ? 'border-indigo-500 bg-indigo-500 text-white'
                        : state !== 'idle' && i === q.correctIndex
                          ? 'border-emerald-500 bg-emerald-500 text-white'
                          : state !== 'idle' && i === selected
                            ? 'border-red-500 bg-red-500 text-white'
                            : 'border-gray-300 dark:border-gray-600',
                    )}
                  >
                    {state !== 'idle' && i === q.correctIndex
                      ? '✓'
                      : state !== 'idle' && i === selected && i !== q.correctIndex
                        ? '✗'
                        : String.fromCharCode(65 + i)}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          <AnimatePresence>
            {state !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div
                  className={cn(
                    'mt-4 rounded-xl border p-4 text-sm',
                    state === 'correct'
                      ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300'
                      : 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-300',
                  )}
                >
                  <div className="mb-1 font-semibold">
                    {state === 'correct' ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                  </div>
                  <p className="leading-relaxed">{q.explanation}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        {state === 'idle' ? (
          <button
            onClick={handleConfirm}
            disabled={selected === null}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Confirmar respuesta
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
          >
            {current + 1 >= questions.length ? 'Ver resultados' : 'Siguiente pregunta'} →
          </button>
        )}
      </div>
    </div>
  );
}
