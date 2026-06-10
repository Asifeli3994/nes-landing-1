import { revolucionFrancesa } from './mock/revolucionFrancesa';
import { primeraGuerraMundial } from './mock/primeraGuerraMundial';
import type { TopicGroup } from '../types';

export const topicGroups: TopicGroup[] = [
  { id: 'antigua', title: 'El Mundo Antiguo', icon: '🏛️', period: 'Hasta s. V d.C.', topics: [] },
  { id: 'medieval', title: 'La Edad Media', icon: '⚔️', period: 'S. V – XV', topics: [] },
  { id: 'moderna', title: 'La Edad Moderna', icon: '🔭', period: 'S. XV – XVIII', topics: [] },
  { id: 'contemporanea', title: 'La Edad Contemporánea', icon: '🗽', period: 'S. XVIII – XX', topics: [revolucionFrancesa, primeraGuerraMundial] },
  { id: 'sigloXX', title: 'El Siglo XX y XXI', icon: '🌍', period: 'S. XX – Actualidad', topics: [] },
];

export const allTopics = topicGroups.flatMap((g) => g.topics);

export function getTopicById(id: string) {
  return allTopics.find((t) => t.id === id);
}
