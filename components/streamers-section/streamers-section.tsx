'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { StreamerCard } from '@/components/streamer-card';
import type { StreamerCardProps } from '@/components/streamer-card';

export type StreamerItem = StreamerCardProps;

function ScrollArrow({
  direction,
  onClick,
  className,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
  className?: string;
}) {
  const isLeft = direction === 'left';
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-10 w-10 cursor-pointer shrink-0 items-center justify-center rounded-full border-2 border-zinc-500 bg-accent text-white transition-opacity hover:opacity-90 ${className ?? ''}`}
      aria-label={isLeft ? 'Прокрутить влево' : 'Прокрутить вправо'}
    >
      <svg
        className={`h-5 w-5 ${isLeft ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </button>
  );
}

interface StreamersViewAllCardProps {
  href: string;
  title?: string;
  subtitle?: string;
}

function TwitchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={['h-8 w-8', className].filter(Boolean).join(' ')}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M11.571 4.714h1.715v5.143H11.57V4.714zm4.715 0H18v5.143h-1.714V4.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0H6zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714v9.429z" />
    </svg>
  );
}

function StreamersViewAllCard({
  href,
  title = 'Смотреть все',
  subtitle = 'прямые трансляции',
}: StreamersViewAllCardProps) {
  return (
    <Link
      href={href}
      className="flex min-w-[200px] max-w-[280px] shrink-0 flex-col justify-between rounded-lg bg-accent p-4 transition-opacity hover:opacity-95"
    >
      <TwitchIcon className="text-white" />
      <div className="flex flex-col text-white">
        <span className="text-sm font-semibold">{title}</span>
        <span className="text-sm">{subtitle}</span>
      </div>
    </Link>
  );
}

export interface StreamersSectionProps {
  streamers: StreamerItem[];
  viewAllHref: string;
  viewAllTitle?: string;
  viewAllSubtitle?: string;
  className?: string;
}

const SCROLL_STEP = 320;

export function StreamersSection({
  streamers,
  viewAllHref,
  viewAllTitle,
  viewAllSubtitle,
  className,
}: StreamersSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (delta: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: delta, behavior: 'smooth' });
  };

  return (
    <section
      className={className ?? ''}
      aria-label="Прямые трансляции стримеров"
    >
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
          style={{ scrollbarWidth: 'thin' }}
        >
          {streamers.map((streamer, index) => (
            <StreamerCard key={streamer.href + index} {...streamer} />
          ))}
          <StreamersViewAllCard
            href={viewAllHref}
            title={viewAllTitle}
            subtitle={viewAllSubtitle}
          />
        </div>
        <ScrollArrow
          direction="left"
          onClick={() => scroll(-SCROLL_STEP)}
          className="absolute left-5 top-1/2 z-10 -translate-y-1/2"
        />
        <ScrollArrow
          direction="right"
          onClick={() => scroll(SCROLL_STEP)}
          className="absolute right-5 top-1/2 z-10 -translate-y-1/2"
        />
      </div>
    </section>
  );
}
