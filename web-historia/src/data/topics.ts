import { revolucionFrancesa } from './mock/revolucionFrancesa';
import { primeraGuerraMundial } from './mock/primeraGuerraMundial';
import { democraciaAteniense } from './mock/democraciaAteniense';
import { imperioRomano } from './mock/imperioRomano';
import { cruzadas } from './mock/cruzadas';
import { pesteNegra } from './mock/pesteNegra';
import { descubrimientoAmerica } from './mock/descubrimientoAmerica';
import { reformaProtestante } from './mock/reformaProtestante';
import { guerraFria } from './mock/guerraFria';
import type { TopicGroup } from '../types';

export const topicGroups: TopicGroup[] = [
  {
    id: 'antigua',
    title: 'El Mundo Antiguo',
    icon: '🏛️',
    period: 'Hasta s. V d.C.',
    topics: [democraciaAteniense, imperioRomano],
  },
  {
    id: 'medieval',
    title: 'La Edad Media',
    icon: '⚔️',
    period: 'S. V – XV',
    topics: [cruzadas, pesteNegra],
  },
  {
    id: 'moderna',
    title: 'La Edad Moderna',
    icon: '🔭',
    period: 'S. XV – XVIII',
    topics: [descubrimientoAmerica, reformaProtestante],
  },
  {
    id: 'contemporanea',
    title: 'La Edad Contemporánea',
    icon: '🗽',
    period: 'S. XVIII – XX',
    topics: [revolucionFrancesa, primeraGuerraMundial],
  },
  {
    id: 'sigloXX',
    title: 'El Siglo XX y XXI',
    icon: '🌍',
    period: 'S. XX – Actualidad',
    topics: [guerraFria],
  },
];

export const allTopics = topicGroups.flatMap((g) => g.topics);

export function getTopicById(id: string) {
  return allTopics.find((t) => t.id === id);
}
