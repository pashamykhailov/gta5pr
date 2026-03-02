'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

export interface FooterNavLink {
  label: string;
  href: string;
}

export interface FooterNavColumn {
  title: string;
  links: FooterNavLink[];
}

export interface FooterNavigationProps {
  columns: FooterNavColumn[];
  className?: string;
}

export function FooterNavigation({ columns, className }: FooterNavigationProps) {
  return (
    <nav
      className={cn('flex flex-wrap gap-8', className)}
      aria-label="Навигация по сайту"
    >
      {columns.map((column, colIndex) => (
        <div key={column.title + colIndex}>
          <h3 className="text-xs font-medium uppercase tracking-wider text-zinc-400">
            {column.title}
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {column.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-[#DEDEDE] transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
