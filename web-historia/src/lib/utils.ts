export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export const EVENT_TYPE_STYLES: Record<string, { badge: string; dot: string }> = {
  political: {
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
    dot: 'bg-indigo-500',
  },
  military: {
    badge: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
    dot: 'bg-red-500',
  },
  social: {
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    dot: 'bg-emerald-500',
  },
  cultural: {
    badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
    dot: 'bg-purple-500',
  },
};

export const EVENT_TYPE_LABELS: Record<string, string> = {
  political: 'Político',
  military: 'Militar',
  social: 'Social',
  cultural: 'Cultural',
};

export const CARD_CATEGORY_STYLES: Record<string, string> = {
  date: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  person: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  concept: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  place: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  event: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
};

export const CARD_CATEGORY_LABELS: Record<string, string> = {
  date: 'Fecha',
  person: 'Personaje',
  concept: 'Concepto',
  place: 'Lugar',
  event: 'Evento',
};

export const GLOSSARY_TYPE_STYLES: Record<string, string> = {
  concept: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  person: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  place: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  movement: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
};

export const GLOSSARY_TYPE_LABELS: Record<string, string> = {
  concept: 'Concepto',
  person: 'Persona',
  place: 'Lugar',
  movement: 'Movimiento',
};
