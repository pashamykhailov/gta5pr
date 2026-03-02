'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export interface NewsletterSubscriptionProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  submitLabel?: string;
  onSubmit?: (email: string) => void;
  className?: string;
}

const DEFAULT_TITLE = 'Подписывайся на обновления';
const DEFAULT_SUBTITLE = '— оставайся вместе с нами!';
const DEFAULT_PLACEHOLDER = 'Введите ваш email адрес';
const DEFAULT_SUBMIT_LABEL = 'Подписаться';

export function NewsletterSubscription({
  title = DEFAULT_TITLE,
  subtitle = DEFAULT_SUBTITLE,
  placeholder = DEFAULT_PLACEHOLDER,
  submitLabel = DEFAULT_SUBMIT_LABEL,
  onSubmit,
  className,
}: NewsletterSubscriptionProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
    setEmail('');
  };

  return (
    <div className={cn('flex flex-col h-full', className)}>
      <h3 className="text-base font-bold text-white">{title}</h3>
      <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 border-zinc-600 bg-zinc-800/50"
          aria-label={placeholder}
        />
        <Button
          type="submit"
          variant="accent"
          className="shrink-0 rounded-lg px-5 py-2.5"
        >
          {submitLabel}
        </Button>
      </form>
    </div>
  );
}
