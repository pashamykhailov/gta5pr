'use client';

import * as React from 'react';
import { Globe, Shield, Trophy } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';

function FilterBlockHeading({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <h2 className="inline-flex w-full items-center gap-2 rounded-md bg-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm">
      <Icon className="size-4 shrink-0" />
      {title}
    </h2>
  );
}

export interface FilterOption {
  id: string;
  label: string;
}

export interface FilterBlockProps {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  options: FilterOption[];
  selectedIds: string[];
  onToggle: (id: string, checked: boolean) => void;
}

function FilterBlock({
  title,
  icon,
  options,
  selectedIds,
  onToggle,
}: FilterBlockProps) {
  return (
    <article className="rounded-lg border border-zinc-700 bg-card p-2">
      <FilterBlockHeading icon={icon} title={title} />
      <ul className="mt-3 flex flex-wrap gap-2">
        {options.map((opt) => (
          <li key={opt.id}>
            <label
              className={cn(
                'flex cursor-pointer items-center gap-2 rounded-md px-2.5 py-1.5 text-sm transition-colors',
                'border border-transparent hover:bg-zinc-700/50',
                selectedIds.includes(opt.id) && 'bg-zinc-600 text-white'
              )}
            >
              <Checkbox
                checked={selectedIds.includes(opt.id)}
                onCheckedChange={(checked) =>
                  onToggle(opt.id, checked === true)
                }
                className="border-zinc-500 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
              />
              <span className="select-none text-white">{opt.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </article>
  );
}

const DEFAULT_CITIES: FilterOption[] = [
  { id: 'downtown', label: 'Downtown' },
  { id: 'strawberry', label: 'Strawberry' },
  { id: 'vinewood', label: 'Vinewood' },
  { id: 'blackberry', label: 'Blackberry' },
  { id: 'insquad', label: 'Insquad' },
  { id: 'sunrise', label: 'Sunrise' },
  { id: 'rainbow', label: 'Rainbow' },
  { id: 'richman', label: 'Richman' },
  { id: 'eclipse', label: 'Eclipse' },
  { id: 'la-mesa', label: 'La Mesa' },
  { id: 'burton', label: 'Burton' },
  { id: 'rockford', label: 'Rockford' },
  { id: 'alta', label: 'Alta' },
  { id: 'del-perro', label: 'Del Perro' },
  { id: 'davis', label: 'Davis' },
  { id: 'harmony', label: 'Harmony' },
  { id: 'redwood', label: 'Redwood' },
  { id: 'vespucci', label: 'Vespucci' },
  { id: 'milton', label: 'Milton' },
  { id: 'la-puerta', label: 'La Puerta' },
];

const DEFAULT_FAMILIES: FilterOption[] = [
  { id: 'gucci', label: 'Gucci' },
  { id: 'cortez', label: 'Cortez' },
  { id: 'vex', label: 'Vex' },
  { id: 'fiend', label: 'Fiend' },
  { id: 'cartel', label: 'Cartel' },
  { id: 'uzi', label: 'Uzi' },
  { id: 'allegri', label: 'Allegri' },
  { id: 'sky', label: 'Sky' },
  { id: 'avantura', label: 'Avantura' },
];

const DEFAULT_EVENTS: FilterOption[] = [
  { id: 'champ-1', label: 'GTA5RP Championship IX — Этап 1' },
  { id: 'champ-2', label: 'GTA5RP Championship IX — Этап 2' },
  { id: 'champ-3', label: 'GTA5RP Championship IX — Этап 3' },
  { id: 'champ-4', label: 'GTA5RP Championship IX — Этап 4' },
  { id: 'champ-5', label: 'GTA5RP Championship IX — Этап 5' },
];

export interface MatchesFiltersProps {
  cities?: FilterOption[];
  families?: FilterOption[];
  events?: FilterOption[];
  selectedCities?: string[];
  selectedFamilies?: string[];
  selectedEvents?: string[];
  onCitiesChange?: (selected: string[]) => void;
  onFamiliesChange?: (selected: string[]) => void;
  onEventsChange?: (selected: string[]) => void;
  className?: string;
}

export function MatchesFilters({
  cities = DEFAULT_CITIES,
  families = DEFAULT_FAMILIES,
  events = DEFAULT_EVENTS,
  selectedCities: initialCities = [],
  selectedFamilies: initialFamilies = [],
  selectedEvents: initialEvents = [],
  onCitiesChange,
  onFamiliesChange,
  onEventsChange,
  className,
}: MatchesFiltersProps) {
  const [selectedCities, setSelectedCities] =
    React.useState<string[]>(initialCities);
  const [selectedFamilies, setSelectedFamilies] =
    React.useState<string[]>(initialFamilies);
  const [selectedEvents, setSelectedEvents] =
    React.useState<string[]>(initialEvents);

  const toggle = (
    current: string[],
    id: string,
    checked: boolean,
    setState: React.Dispatch<React.SetStateAction<string[]>>,
    onChange?: (selected: string[]) => void
  ) => {
    const next = checked
      ? [...current, id]
      : current.filter((x) => x !== id);
    setState(next);
    onChange?.(next);
  };

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <FilterBlock
        title="Города"
        icon={Globe}
        options={cities}
        selectedIds={selectedCities}
        onToggle={(id, checked) =>
          toggle(
            selectedCities,
            id,
            checked,
            setSelectedCities,
            onCitiesChange
          )
        }
      />
      <FilterBlock
        title="Семья"
        icon={Shield}
        options={families}
        selectedIds={selectedFamilies}
        onToggle={(id, checked) =>
          toggle(
            selectedFamilies,
            id,
            checked,
            setSelectedFamilies,
            onFamiliesChange
          )
        }
      />
      <FilterBlock
        title="Мероприятие"
        icon={Trophy}
        options={events}
        selectedIds={selectedEvents}
        onToggle={(id, checked) =>
          toggle(selectedEvents, id, checked, setSelectedEvents, onEventsChange)
        }
      />
    </div>
  );
}
