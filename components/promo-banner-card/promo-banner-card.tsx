'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { ReactNode } from 'react';

export interface PromoBannerCardProps {
  tag?: string;
  titleContent: ReactNode;
  href?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function PromoBannerCard({
  tag = 'Розыгрыш',
  titleContent,
  href = '#',
  imageUrl,
  imageAlt,
}: PromoBannerCardProps) {
  const content = (
    <>
      {imageUrl && (
        <div className="relative min-h-0 w-full flex-1 overflow-hidden rounded-md bg-zinc-800">
          <Image
            src={imageUrl}
            alt={imageAlt ?? ''}
            fill
            className="object-cover"
            sizes="100vw, 100vh"
          />
        </div>
      )}
      <Button
        size="sm"
        className="inline-block max-w-[78px] absolute top-4 left-4 rounded-md bg-amber-900/80 px-2.5 py-1 text-xs font-semibold text-orange"
      >
        {tag}
      </Button>
      <div className="mt-3 flex flex-col gap-0.5 absolute top-15 left-4">
        {titleContent}
      </div>
    </>
  );

  return (
    <article className="flex h-full relative flex-col rounded-lg border border-zinc-700 bg-card">
      {href ? (
        <Link
          href={href}
          className="flex h-full flex-col transition-opacity hover:opacity-95"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}
