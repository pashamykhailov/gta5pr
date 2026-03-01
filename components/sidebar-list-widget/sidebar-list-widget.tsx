'use client';

import Link from 'next/link';

export interface SidebarListWidgetItem {
  title: string;
  url: string;
}

export interface SidebarListWidgetProps {
  title: string;
  items: SidebarListWidgetItem[];
  viewAllText?: string;
  viewAllHref?: string;
}

export function SidebarListWidget({
  title,
  items,
  viewAllText = 'Смотреть все команды',
  viewAllHref = '/teams',
}: SidebarListWidgetProps) {
  return (
    <article className="rounded-lg border border-zinc-700 bg-card">
      <div className='p-4'>
        <h2 className="text-sm font-bold text-white">{title}</h2>
        <ul className="mt-3">
          {items.map((item, index) => (
            <li
              key={item.url + index}
              className={`flex items-center gap-2 py-2 ${
                index < items.length - 1 ? 'border-b border-zinc-700' : ''
              }`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-zinc-600 text-xs font-medium text-white">
                {index + 1}
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-amber-500/80 bg-zinc-700">
                {/* Placeholder for team/tournament icon */}
              </span>
              <Link
                href={item.url}
                className="text-sm text-white transition-colors hover:text-accent"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="mt-4 flex w-full items-center justify-center rounded-b-md bg-accent px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
        >
          {viewAllText}
        </Link>
      )}
    </article>
  );
}
