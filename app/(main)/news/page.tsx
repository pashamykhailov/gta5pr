import { MatchesWidget } from "@/components/matches-widget";
import { NewsCard } from "@/components/news-card";
import { ProfileWidget } from "@/components/profile-widget";
import { PromoBannerCard } from "@/components/promo-banner-card";
import { SidebarListWidget } from "@/components/sidebar-list-widget";
import { TransfersWidget } from "@/components/transfers-widget";

const TEAM_RATING_ITEMS = [
  { title: "Gucci", url: "/teams/gucci" },
  { title: "Gucci", url: "/teams/gucci" },
  { title: "Gucci", url: "/teams/gucci" },
  { title: "Gucci", url: "/teams/gucci" },
  { title: "Gucci", url: "/teams/gucci" },
];

const TOURNAMENTS_ITEMS = [
  { title: "Champ1", url: "/tournaments/champ1" },
  { title: "Champ2", url: "/tournaments/champ2" },
  { title: "Champ3", url: "/tournaments/champ3" },
  { title: "Champ4", url: "/tournaments/champ4" },
  { title: "Champ5", url: "/tournaments/champ5" },
];

const MOCK_MATCHES = [
  { teamA: "Gucci", teamB: "Gucci", time: "21:30" },
  { teamA: "Gucci", teamB: "Gucci", time: "21:30" },
  { teamA: "Gucci", teamB: "Gucci", time: "21:30" },
];

const MOCK_TRANSFERS = [
  {},
  {},
  {},
  {},
  {},
];

export default function NewsPage() {
  return (
    <main className="flex flex-col gap-6 p-4 md:flex-row md:p-6">
      {/* Left sidebar */}
      <aside className="order-2 flex w-full shrink-0 flex-col gap-4 md:order-1 max-w-[186px]">
        <ProfileWidget
          name="Имя Фамилия"
          subtitle="Игрок недели"
          statValue={530}
          statLabel="Убийств"
          imageUrl="data:image/jpeg;base64,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"
        />
        <SidebarListWidget
          title="Рейтинг команд:"
          items={TEAM_RATING_ITEMS}
          viewAllText="Смотреть все команды"
          viewAllHref="/teams"
        />
        <SidebarListWidget
          title="Турниры:"
          items={TOURNAMENTS_ITEMS}
          viewAllText="Смотреть все турниры"
          viewAllHref="/tournaments"
        />
      </aside>

      {/* Main: 3 cards */}
      <div className="order-1 min-w-0 flex-1 md:order-2">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="md:col-span-2 md:row-span-4">
            <PromoBannerCard
              tag="Розыгрыш"
              titleLines={[
                "Розыгрыш 5-ти",
                "Bugatti Chiron",
                "на всех серверах GTA5RP",
              ]}
              href="/giveaway"
              imageUrl="https://d3jvxfsgjxj1vz.cloudfront.net/news/wp-content/uploads/2023/08/12112505/bugatti-chiron-super-sport-golden-era-1-scaled.jpg"
            />
          </div>
          <div className="md:col-span-2 md:row-span-2 lg:col-span-1">
            <NewsCard
              tag="Новости"
              title="Gucci победители IX Осеннего турнира!"
              href="/news/1"
              imageUrl="https://st3.depositphotos.com/7677414/16494/i/450/depositphotos_164940980-stock-photo-low-key-golden-trophy-blur.jpg"
            />
          </div>
          <div className="md:col-span-2 md:row-span-2 lg:col-span-1 lg:col-start-3">
            <NewsCard
              tag="Новости"
              title="Gucci победители IX Осеннего турнира!"
              href="/news/2"
              imageUrl="https://st3.depositphotos.com/7677414/16494/i/450/depositphotos_164940980-stock-photo-low-key-golden-trophy-blur.jpg"
            />
          </div>
        </div>
      </div>

      {/* Right sidebar */}
      <aside className="order-3 flex w-full shrink-0 flex-col gap-4 max-w-[186px]">
        <MatchesWidget matches={MOCK_MATCHES} />
        <TransfersWidget transfers={MOCK_TRANSFERS} viewAllHref="/transfers" />
      </aside>
    </main>
  );
}
