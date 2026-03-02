'use client';

import Image from 'next/image';
import Link from 'next/link';

export interface StreamerCardProps {
  imageUrl: string;
  name: string;
  lastOnline: string;
  viewerCount: string | number;
  href: string;
}

function EyeIcon() {
  return (
    <svg
      className="h-3.5 w-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

export function StreamerCard({
  imageUrl,
  name,
  lastOnline,
  viewerCount,
  href,
}: StreamerCardProps) {
  const viewersText =
    typeof viewerCount === 'number'
      ? `${viewerCount.toLocaleString('ru-RU')} Зрителей`
      : viewerCount;

  return (
    <Link
      href={href}
      className="group relative flex aspect-video w-full min-w-[200px] max-w-[280px] shrink-0 overflow-hidden rounded-lg border border-zinc-700 bg-card transition-opacity hover:opacity-95"
    >
      <Image
        src={imageUrl}
        alt={name}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 50vw, 280px"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
        aria-hidden
      />
      <div className="relative flex h-full w-full min-w-0 flex-col justify-between p-3">
        <div className="flex flex-col gap-0.5">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-white">{name}</span>
            <span
              className="h-2 w-2 shrink-0 rounded-full bg-accent"
              aria-hidden
            />
          </div>
          <span className="text-xs text-zinc-400">{lastOnline}</span>
        </div>
        <div className="flex w-full min-w-0 items-end justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1.5 text-xs text-white">
            <EyeIcon />
            <span className="truncate">{viewersText}</span>
          </div>
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-black/50 text-white transition-transform group-hover:scale-110"
            aria-hidden
          >
            <PlayIcon />
          </span>
        </div>
      </div>
    </Link>
  );
}
