"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export interface NewsCardProps {
  tag?: string;
  /** Контент блока под картинкой (любой JSX, например заголовок) */
  titleContent?: ReactNode;
  href: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function NewsCard({
  tag = "Новости",
  titleContent,
  href,
  imageUrl,
  imageAlt,
}: NewsCardProps) {
  return (
    <Link
      href={href}
      className="relative flex flex-col overflow-hidden rounded-lg border border-zinc-700 bg-card transition-opacity hover:opacity-95"
    >
      <span className="absolute left-4 top-4 z-10 rounded-md bg-zinc-700 px-2.5 py-1 text-xs text-zinc-300">
        {tag}
      </span>
      <div className="aspect-[4/3] w-full shrink-0 overflow-hidden bg-zinc-800">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt ?? ""}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 280px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-zinc-600">
            <svg
              className="h-12 w-12"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
            </svg>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 absolute bottom-0 left-0 right-0">
        {titleContent}
      </div>
    </Link>
  );
}
