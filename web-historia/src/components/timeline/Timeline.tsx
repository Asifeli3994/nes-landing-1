import type { TimelineEvent as TEvent } from '../../types';
import { TimelineEvent } from './TimelineEvent';
import { EVENT_TYPE_STYLES, EVENT_TYPE_LABELS } from '../../lib/utils';

interface Props {
  events: TEvent[];
}

export function Timeline({ events }: Props) {
  const types = ['political', 'military', 'social', 'cultural'] as const;

  return (
    <div>
      {/* Legend */}
      <div className="mb-6 flex flex-wrap gap-2">
        {types.map((type) => (
          <span
            key={type}
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${EVENT_TYPE_STYLES[type].badge}`}
          >
            <span className={`h-2 w-2 rounded-full ${EVENT_TYPE_STYLES[type].dot}`} />
            {EVENT_TYPE_LABELS[type]}
          </span>
        ))}
        <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">
          Haz clic en un evento para más detalles
        </span>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line — desktop */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gray-200 dark:bg-gray-700 md:block" />

        {/* Vertical line — mobile */}
        <div className="absolute left-[7px] top-0 block h-full w-px bg-gray-200 dark:bg-gray-700 md:hidden" />

        <div className="flex flex-col gap-6 pl-6 md:pl-0">
          {events.map((event, index) => (
            <TimelineEvent key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
