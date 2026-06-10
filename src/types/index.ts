export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'political' | 'military' | 'social' | 'cultural';
  imageUrl?: string;
  details?: string;
}

export interface Flashcard {
  id: string;
  front: string;
  back: string;
  category: 'date' | 'person' | 'concept' | 'place' | 'event';
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'true-false';
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  type: 'concept' | 'person' | 'place' | 'movement';
}

export interface CauseNode {
  id: string;
  text: string;
  details?: string;
}

export interface CauseEffectData {
  causes: CauseNode[];
  event: { title: string; date: string; description: string };
  shortTermEffects: CauseNode[];
  longTermEffects: CauseNode[];
}

export interface Topic {
  id: string;
  title: string;
  subtitle?: string;
  block: string;
  period: string;
  description: string;
  content?: string;
  tags: string[];
  timeline: TimelineEvent[];
  flashcards: Flashcard[];
  quiz: QuizQuestion[];
  glossary: GlossaryTerm[];
  causeEffect: CauseEffectData;
}

export interface TopicGroup {
  id: string;
  title: string;
  icon: string;
  period: string;
  topics: Topic[];
}
