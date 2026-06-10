import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Flashcard as TFlashcard } from '../../types';
import { Badge } from '../ui/Badge';
import { CARD_CATEGORY_STYLES, CARD_CATEGORY_LABELS } from '../../lib/utils';

interface Props {
  card: TFlashcard;
}

export function Flashcard({ card }: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 relative h-56 w-full cursor-pointer select-none"
      style={{ perspective: '1000px' }}
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring', damping: 20, stiffness: 150 }}
        style={{ transformStyle: 'preserve-3d', width: '100%', height: '100%' }}
        className="relative"
      >
        <div
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-900"
        >
          <Badge className={CARD_CATEGORY_STYLES[card.category]} size="sm">
            {CARD_CATEGORY_LABELS[card.category]}
          </Badge>
          <p className="mt-4 text-center text-lg font-semibold text-gray-900 dark:text-white">
            {card.front}
          </p>
          <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">Toca para ver la respuesta</p>
        </div>

        <div
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-indigo-200 bg-indigo-50 p-6 shadow-md dark:border-indigo-800 dark:bg-indigo-950/50"
        >
          <p className="text-center text-sm leading-relaxed text-gray-800 dark:text-gray-200 whitespace-pre-line">
            {card.back}
          </p>
          <p className="mt-4 text-xs text-indigo-400 dark:text-indigo-500">Toca para volver</p>
        </div>
      </motion.div>
    </div>
  );
}
