'use client';

import { NewsFeedItem } from '@/components/news-feed-item';
import type { NewsFeedItemProps } from '@/components/news-feed-item';

export type NewsFeedItemData = NewsFeedItemProps;

export interface NewsFeedProps {
  items: NewsFeedItemData[];
  title?: string;
  className?: string;
}

export function NewsFeed({ items, title, className }: NewsFeedProps) {
  return (
    <article className={`rounded-lg border border-zinc-700 bg-card p-4 ${className}`}>
      {title && <h2 className="text-sm font-bold text-white">{title}</h2>}
      <ul className="mt-3 space-y-2">
        {items.map((item, index) => (
          <NewsFeedItem key={item.href + index} {...item} />
        ))}
      </ul>
    </article>
  );
}
