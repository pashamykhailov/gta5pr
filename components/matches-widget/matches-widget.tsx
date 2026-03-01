'use client';

import Image from 'next/image';

export interface MatchItem {
  teamA: string;
  teamB: string;
  time: string;
}

export interface MatchesWidgetProps {
  matches: MatchItem[];
  title?: string;
}

function EmblemPlaceholder() {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-amber-500/80 bg-zinc-700"
      aria-hidden
    />
  );
}

export function MatchesWidget({
  matches,
  title = 'Матчи за сегодня',
}: MatchesWidgetProps) {
  return (
    <article className="rounded-lg border border-zinc-700 bg-card pb-2">
      <h2 className="inline-flex w-full text-xs items-center gap-2 rounded-md bg-zinc-200 px-3 py-2 text-sm font-600 text-zinc-800 shadow-sm">
        <Image
          src="/img/swords.svg"
          alt=""
          width={10}
          height={10}
          aria-hidden
        />
        {title}
      </h2>
      <ul className="mt-3 space-y-0 px-2">
        {matches.map((match, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 py-2.5 ${
              index < matches.length - 1 ? 'border-b border-zinc-700' : ''
            }`}
          >
            <div className='flex flex-col'>
              <div className="flex mb-1">
                <EmblemPlaceholder />
                <span className="pl-1 text-sm text-white self-center">
                  {match.teamA}
                </span>
              </div>
              <div className="flex">
                <EmblemPlaceholder />
                <span className="pl-1 text-sm text-white self-center">
                  {match.teamB}
                </span>
              </div>
            </div>

            <span className="ml-auto text-xs text-zinc-400">{match.time}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
