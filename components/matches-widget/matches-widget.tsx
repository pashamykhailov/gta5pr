"use client";

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
  title = "Матчи за сегодня",
}: MatchesWidgetProps) {
  return (
    <article className="rounded-lg border border-zinc-700 bg-[#1A1A1A] p-4">
      <h2 className="flex items-center gap-2 text-sm font-bold text-white">
        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-zinc-500 bg-zinc-700 text-xs" aria-hidden>
          ⚔
        </span>
        {title}
      </h2>
      <ul className="mt-3 space-y-0">
        {matches.map((match, index) => (
          <li
            key={index}
            className={`flex items-center gap-2 py-2.5 ${
              index < matches.length - 1 ? "border-b border-zinc-700" : ""
            }`}
          >
            <EmblemPlaceholder />
            <span className="text-sm text-white">{match.teamA}</span>
            <EmblemPlaceholder />
            <span className="text-sm text-white">{match.teamB}</span>
            <span className="ml-auto text-xs text-zinc-400">{match.time}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
