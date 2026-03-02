import { DatePicker } from '@/components/date-picker';
import { MatchesFilters } from '@/components/matches-filters';
import { NewsFeed } from '@/components/news-feed';
import type { NewsFeedItemData } from '@/components/news-feed';
import { TransfersWidget } from '@/components/transfers-widget';

const MOCK_NEWS_FEED: NewsFeedItemData[] = [
  {
    newsText: 'Победа GUCCI на турнире',
    timeAdded: '5 минут назад',
    commentCount: 150,
    href: '/news/1',
    imageUrl:
      'https://st3.depositphotos.com/7677414/16494/i/450/depositphotos_164940980-stock-photo-low-key-golden-trophy-blur.jpg',
  },
  {
    newsText: 'Победа GUCCI на турнире!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    timeAdded: '5 минут назад',
    commentCount: 150,
    href: '/news/2',
    isHighlighted: true,
    imageUrl:
      'https://st3.depositphotos.com/7677414/16494/i/450/depositphotos_164940980-stock-photo-low-key-golden-trophy-blur.jpg',
  },
  {
    newsText: 'Новый сезон турниров стартует на следующей неделе',
    timeAdded: '1 час назад',
    commentCount: 89,
    href: '/news/3',
  },
  {
    newsText: 'Обновление правил сервера',
    timeAdded: '2 часа назад',
    commentCount: 42,
    href: '/news/4',
    imageUrl:
      'https://st3.depositphotos.com/7677414/16494/i/450/depositphotos_164940980-stock-photo-low-key-golden-trophy-blur.jpg',
  },
];

const MOCK_TRANSFERS = [{}, {}, {}, {}, {}];

export default function MatchesPage() {
  return (
    <main className="flex flex-col gap-6 p-4 md:flex-row md:p-6">
      {/* Left sidebar: datepicker + filters */}
      <aside className="order-2 flex w-full shrink-0 flex-col gap-4 md:order-1 md:max-w-[280px]">
        <article className="rounded-lg border border-zinc-700 bg-card p-2">
          <DatePicker placeholder="Выберите дату" />
        </article>
        <MatchesFilters />
      </aside>

      {/* Center: newsfeed (placeholder) */}
      <div className="order-1 min-w-0 flex-1 md:order-2">
        <NewsFeed items={MOCK_NEWS_FEED} title="Новости" />
      </div>

      {/* Right sidebar: top transfers */}
      <aside className="order-3 flex w-full shrink-0 flex-col gap-4 md:max-w-[186px]">
        <TransfersWidget
          transfers={MOCK_TRANSFERS}
          viewAllHref="/transfers"
          viewAllText="Все топ трансферы"
        />
      </aside>
    </main>
  );
}
