'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { SocialIcons, type SocialIconItem } from '@/components/social-icons';

export interface FooterPromoBlockProps {
  quote?: string;
  siteLabel?: string;
  socialItems?: SocialIconItem[];
  className?: string;
}

const DEFAULT_QUOTE = 'Не бойся проигрывать — бойся не учиться!';
const DEFAULT_SITE_LABEL = 'gta5rp.champ';
const DEFAULT_SOCIAL_ITEMS: SocialIconItem[] = [
  { href: 'https://discord.gg/', label: 'Discord', icon: 'discord' },
  { href: 'https://t.me/', label: 'Telegram', icon: 'telegram' },
  { href: 'https://youtube.com/', label: 'YouTube', icon: 'youtube' },
];

export function FooterPromoBlock({
  quote = DEFAULT_QUOTE,
  siteLabel = DEFAULT_SITE_LABEL,
  socialItems = DEFAULT_SOCIAL_ITEMS,
  className,
}: FooterPromoBlockProps) {
  return (
    <div
      className={cn(
        'h-full flex flex-col justify-between rounded-lg bg-accent p-5 text-white',
        className
      )}
    >
      <Link
        href="/"
        className="text-lg font-bold text-white transition-opacity hover:opacity-90 focus:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-accent"
      >
        GTA5<span className="text-white">★</span>RP
      </Link>
      <p className="my-4 text-center text-sm font-semibold leading-snug">
        {quote}
      </p>
      <div className="flex items-end justify-between gap-4">
        <span className="text-xs text-white/90">{siteLabel}</span>
        <SocialIcons items={socialItems} />
      </div>
    </div>
  );
}
