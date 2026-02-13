"use client";

import Link from "next/link";

export interface TransferItem {
  id?: string;
  fromTeam?: string;
  toTeam?: string;
  playerAvatarUrl?: string;
}

export interface TransfersWidgetProps {
  transfers: TransferItem[];
  viewAllHref?: string;
  viewAllText?: string;
}

function EmblemPlaceholder() {
  return (
    <span
      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-amber-500/80 bg-zinc-700"
      aria-hidden
    />
  );
}

export function TransfersWidget({
  transfers,
  viewAllHref = "/transfers",
  viewAllText = "Все трансферы",
}: TransfersWidgetProps) {
  return (
    <article className="rounded-lg border border-zinc-700 bg-[#1A1A1A] p-4">
      <h2 className="text-sm font-bold text-white">Топ 30 трансферов</h2>
      <ul className="mt-3 space-y-0">
        {transfers.map((transfer, index) => (
          <li
            key={transfer.id ?? index}
            className={`flex items-center gap-2 py-2 ${
              index < transfers.length - 1 ? "border-b border-zinc-700" : ""
            }`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-zinc-700">
              <svg
                className="h-5 w-5 text-zinc-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </span>
            <EmblemPlaceholder />
            <span className="text-zinc-400" aria-hidden>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <EmblemPlaceholder />
          </li>
        ))}
      </ul>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="mt-4 block text-center text-sm text-zinc-400 transition-colors hover:text-[#e85d04]"
        >
          {viewAllText}
        </Link>
      )}
    </article>
  );
}
