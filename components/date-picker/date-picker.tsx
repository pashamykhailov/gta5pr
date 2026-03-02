'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar as CalendarIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export interface DatePickerProps {
  value?: Date;
  onChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
}

export function DatePicker({
  value,
  onChange,
  placeholder = 'Выберите дату',
  className,
}: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(value);
  const selected = value ?? date;
  const handleSelect = (d: Date | undefined) => {
    setDate(d);
    onChange?.(d);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          data-empty={!selected}
          className={cn(
            'data-[empty=true]:text-muted-foreground w-full justify-start text-left font-normal border-zinc-700 bg-card hover:bg-zinc-700/50 hover:text-white',
            className
          )}
        >
          <CalendarIcon className="size-4 shrink-0" />
          {selected ? (
            format(selected, 'd MMMM yyyy', { locale: ru })
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 border-zinc-700 bg-card" align="start">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={handleSelect}
          className="rounded-lg"
        />
      </PopoverContent>
    </Popover>
  );
}
