'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface NewsFeedItemProps {
  imageUrl?: string;
  newsText: string;
  description?: string;
  timeAdded: string;
  commentCount: string | number;
  isHighlighted?: boolean;
  href: string;
}

function ImagePlaceholder({ className }: { className?: string }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border-2 border-amber-500/80 bg-zinc-700 ${className ?? ''}`}
      aria-hidden
    />
  );
}

export function NewsFeedItem({
  imageUrl,
  newsText,
  description,
  timeAdded,
  commentCount,
  isHighlighted = false,
  href,
}: NewsFeedItemProps) {
  const commentsText =
    typeof commentCount === 'number'
      ? `${commentCount} комментариев`
      : commentCount;

  if (isHighlighted) {
    return (
      <li>
        <Link
          href={href}
          className="flex gap-4 rounded-lg bg-zinc-700 p-4 transition-opacity hover:opacity-95"
        >
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-zinc-800">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={newsText}
                fill
                className="object-cover"
                sizes="96px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <ImagePlaceholder className="h-10 w-10" />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-bold text-accent">{newsText}</h3>
            {description && (
              <p className="mt-1 line-clamp-2 text-xs text-zinc-400">
                {description}
              </p>
            )}
          </div>
          <div className="flex shrink-0 flex-col items-end gap-0.5 text-right">
            <span className="text-xs text-zinc-400">{timeAdded}</span>
            <span className="text-xs text-zinc-400">{commentsText}</span>
          </div>
        </Link>
      </li>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className="flex items-center gap-3 rounded-lg bg-zinc-800 px-4 py-3 transition-opacity hover:opacity-95"
      >
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-zinc-700">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={newsText}
              fill
              className="object-cover"
              sizes="40px"
            />
          ) : (
            <ImagePlaceholder className="h-full w-full" />
          )}
        </div>
        <span className="min-w-0 flex-1 text-sm font-medium text-white">
          {newsText}
        </span>
        <div className="flex shrink-0 flex-col items-end gap-0.5 text-right">
          <span className="text-xs text-zinc-400">{timeAdded}</span>
          <span className="text-xs text-zinc-400">{commentsText}</span>
        </div>
      </Link>
    </li>
  );
}
