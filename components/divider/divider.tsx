'use client';

export interface DividerProps {
  /** Дополнительные классы для корневого элемента */
  className?: string;
  /** Текст по центру разделителя (линия с подписью) */
  title?: string;
}

export function Divider({ className, title }: DividerProps) {
  const baseClasses = 'w-full border-t border-zinc-700 py-2';

  if (!title) {
    return (
      <div
        role="separator"
        aria-hidden
        className={className ? `${baseClasses} ${className}` : baseClasses}
      />
    );
  }

  return (
    <div
      className={className ? `flex items-center gap-3 py-2 ${className}` : 'flex items-center gap-3 py-2'}
      role="separator"
      aria-label={title}
    >
      <span className="shrink-0 text-sm text-foreground">{title}</span>
      <span className="flex-1 border-t border-zinc-700" aria-hidden />
    </div>
  );
}
