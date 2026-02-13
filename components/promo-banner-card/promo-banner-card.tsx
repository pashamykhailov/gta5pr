"use client";

import Image from "next/image";
import Link from "next/link";

export interface PromoBannerCardProps {
  tag?: string;
  titleLines: string[];
  href?: string;
  imageUrl?: string;
  imageAlt?: string;
}

export function PromoBannerCard({
  tag = "Розыгрыш",
  titleLines,
  href = "#",
  imageUrl,
  imageAlt,
}: PromoBannerCardProps) {
  const content = (
    <>
      <span className="inline-block rounded-md bg-amber-900/80 px-2.5 py-1 text-xs font-medium text-white">
        {tag}
      </span>
      <div className="mt-3 flex flex-col gap-0.5">
        {titleLines.map((line, i) => (
          <p
            key={i}
            className={`text-sm font-bold ${
              i === 1 ? "text-[#e85d04]" : "text-white"
            }`}
          >
            {line}
          </p>
        ))}
      </div>
      {imageUrl && (
        <div className="relative mt-4 aspect-video w-full overflow-hidden rounded-md bg-zinc-800">
          <Image
            src={imageUrl}
            alt={imageAlt ?? ""}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      )}
    </>
  );

  return (
    <article className="flex h-full flex-col rounded-lg border border-zinc-700 bg-[#1A1A1A] p-4">
      {href ? (
        <Link href={href} className="flex h-full flex-col transition-opacity hover:opacity-95">
          {content}
        </Link>
      ) : (
        content
      )}
    </article>
  );
}
