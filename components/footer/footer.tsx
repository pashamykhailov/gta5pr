import { cn } from '@/lib/cn';
import { FooterPromoBlock } from '@/components/footer-promo-block';
import { FooterNavigation, type FooterNavColumn } from '@/components/footer-navigation';
import { NewsletterSubscription } from '@/components/newsletter-subscription';

const DEFAULT_NAV_COLUMNS: FooterNavColumn[] = [
  {
    title: 'Навигация',
    links: [
      { label: 'Новости', href: '/news' },
      { label: 'Матчи', href: '/matches' },
      { label: 'Турниры', href: '/tournaments' },
      { label: 'Команды', href: '/teams' },
      { label: 'Игроки', href: '/players' },
      { label: 'Медиа', href: '/media' },
    ],
  },
  {
    title: 'Навигация',
    links: [
      { label: 'Информация', href: '/info' },
      { label: 'Политика конфиденциальности', href: '/privacy' },
      { label: 'Правила сайта', href: '/rules' },
    ],
  },
];

const COPYRIGHT = '© 2026 GTASRP Championship. Все права защищены';

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <footer
      className={cn(
        'border-t border-zinc-800 bg-card px-4 py-8 md:px-6',
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="h-full lg:col-span-4">
            <FooterPromoBlock />
          </div>
          <div className="lg:col-span-4 flex items-center">
            <FooterNavigation columns={DEFAULT_NAV_COLUMNS} />
          </div>
          <div className="lg:col-span-4">
            <NewsletterSubscription className='justify-end' />
          </div>
        </div>
        <p className="mt-8 border-t border-zinc-800 pt-6 text-center text-xs text-subheading">
          {COPYRIGHT}
        </p>
      </div>
    </footer>
  );
}
