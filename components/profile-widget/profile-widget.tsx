"use client";

import Image from "next/image";

export interface ProfileWidgetProps {
  name: string;
  subtitle?: string;
  statValue: string | number;
  statLabel: string;
  imageUrl?: string;
}

export function ProfileWidget({
  name,
  subtitle,
  statValue,
  statLabel,
  imageUrl,
}: ProfileWidgetProps) {
  return (
    <article className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800">
      {/* Background: image or placeholder on full card */}
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover object-center grayscale"
          sizes="(max-width: 768px) 100vw, 280px"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
          <svg
            className="h-20 w-20"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </div>
      )}

      {/* Top right: name + subtitle, overlaid */}
      <div className="absolute right-4 top-4 text-right">
        <p className="text-sm font-bold text-[#e85d04]">{name}</p>
        {subtitle && (
          <p className="mt-0.5 text-xs text-white">{subtitle}</p>
        )}
      </div>

      {/* Bottom right: stats, overlaid */}
      <div className="absolute bottom-4 right-4 text-right">
        <p className="text-xl font-bold text-[#e85d04]">{statValue}</p>
        <p className="text-xs text-white">{statLabel}</p>
      </div>
    </article>
  );
}
