'use client';

import Image from 'next/image';

export interface WhiteHeadingProps {
  /** Путь к иконке (например /img/swords.svg) */
  imageSrc: string;
  /** Текст заголовка */
  title: string;
}

export function WhiteHeading({ imageSrc, title }: WhiteHeadingProps) {
  return (
    <h2 className="inline-flex w-full items-center gap-2 rounded-md bg-zinc-200 px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm">
      <Image
        src={imageSrc}
        alt=""
        width={10}
        height={10}
        aria-hidden
      />
      {title}
    </h2>
  );
}
