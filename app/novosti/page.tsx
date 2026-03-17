import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

const allNews = [
  {
    id: 1,
    date: "24.03.2024.",
    category: "Богослужења",
    title: "Прва Недеља Великог поста",
    excerpt:
      "Прва недеља Великог поста свечано је обележена у Цркви Свете Тројице. Литургији је присуствовало велики број верника из Деспотовца и околних места.",
    image: "/images/news1.png",
    href: "/novosti/1",
    featured: true,
  },
  {
    id: 2,
    date: "23.03.2024.",
    category: "Празници",
    title: "Теодорова субота торжествено прослављена",
    excerpt:
      "Теодорова субота, прва субота Великог поста, прослављена је парастосом за покојне и Литургијом Светог Јована Златоустог у Манасији.",
    image: "/images/news2.png",
    href: "/novosti/2",
    featured: false,
  },
  {
    id: 3,
    date: "17.03.2024.",
    category: "Богослужења",
    title: "Недеља сиропопусна",
    excerpt:
      "Недеља Сиропопусна обележена је свечаним вечерњем и опроштајним целивом као увод у дане Великог поста у Манастиру Манасија.",
    image: "/images/news3.png",
    href: "/novosti/3",
    featured: false,
  },
  {
    id: 4,
    date: "10.03.2024.",
    category: "Обнова",
    title: "Радови на обнови конака завршени",
    excerpt:
      "Завршена је прва фаза обнове источног конака Манастира Манасија. Обновљени простори биће намењени смештају ходочасника.",
    image: "/images/news1.png",
    href: "/novosti/4",
    featured: false,
  },
  {
    id: 5,
    date: "02.03.2024.",
    category: "Посете",
    title: "Делегација из Русије посетила Манасију",
    excerpt:
      "Православна делегација из Москве боравила је у двонедељном ходочашћу кроз Србију и одала почаст светињама Манасијске цркве.",
    image: "/images/news2.png",
    href: "/novosti/5",
    featured: false,
  },
  {
    id: 6,
    date: "18.02.2024.",
    category: "Образовање",
    title: "Нов циклус Ресавске школе отворен",
    excerpt:
      "Традиционална Ресавска школа у Деспотовцу отворена је новим циклусом предавања о средњовековној историји и культури Србије.",
    image: "/images/news3.png",
    href: "/novosti/6",
    featured: false,
  },
  {
    id: 7,
    date: "05.02.2024.",
    category: "Празници",
    title: "Сретење Господње свечано обележено",
    excerpt:
      "На дан Сретења Господњег, државни и верски празник Србије, у Манасији је служена Света Литургија уз учешће бројних званичних гостију.",
    image: "/images/news1.png",
    href: "/novosti/7",
    featured: false,
  },
  {
    id: 8,
    date: "27.01.2024.",
    category: "Обнова",
    title: "Конзервација фресака на северном зиду",
    excerpt:
      "Стручна екипа Републичког завода за заштиту споменика завршила је конзервацијске радове на фрескама северног зида унутрашњости цркве.",
    image: "/images/news2.png",
    href: "/novosti/8",
    featured: false,
  },
  {
    id: 9,
    date: "07.01.2024.",
    category: "Празници",
    title: "Срећан Божић — Христос се роди!",
    excerpt:
      "Целоноћна Литургија и торжествена Литургија Светог Василија Великог служена је на Божић уз звоњаву звона и окупљање бројних верника.",
    image: "/images/news3.png",
    href: "/novosti/9",
    featured: false,
  },
];

const categories = ["Све", "Богослужења", "Празници", "Обнова", "Посете", "Образовање"];

export default function NovostiPage() {
  const [featured, ...rest] = allNews;

  return (
    <main>
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-[340px] flex flex-col items-center justify-end pb-16 pt-40"
      >
        <div className="mx-auto max-w-[1300px] w-full px-8">
          <p className="text-xs font-semibold tracking-widest text-zinc-500 mb-2">
            <Link href="/" className="hover:text-zinc-800 transition-colors">ПОЧЕТНА</Link>
            {" / "}
            <span className="text-zinc-800">НОВОСТИ</span>
          </p>
          <h1
            className="text-6xl text-zinc-900"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Новости
          </h1>
        </div>
      </section>

      {/* ── Featured Article ──────────────────────────────────── */}
      <section
        className="w-full py-16"
      >
        <div className="mx-auto max-w-[1300px] px-8">
          <Link href={featured.href} className="group block">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col gap-3">
                <div className="flex items-center gap-4">
                  <span className="bg-[#5a1e1e] text-white text-xs font-bold tracking-widest px-4 py-1.5">
                    {featured.category}
                  </span>
                  <span className="text-white/60 text-sm">{featured.date}</span>
                </div>
                <h2
                  className="text-4xl text-white leading-tight max-w-2xl"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  {featured.title}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed max-w-xl">{featured.excerpt}</p>
                <span className="inline-block w-fit mt-2 bg-[#5a1e1e] text-white text-xs font-bold tracking-widest px-8 py-3 group-hover:bg-[#3e1515] transition-colors">
                  ПРОЧИТАЈТЕ ВЕСТ
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── Category Filter ───────────────────────────────────── */}
      <section
        className="w-full py-4"
      >
        <div className="mx-auto max-w-[1300px] px-8">
          <div className="flex items-center gap-3 flex-wrap border-b border-zinc-300 pb-6">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-xs font-bold tracking-widest px-6 py-2.5 transition-colors ${
                  i === 0
                    ? "bg-[#5a1e1e] text-white"
                    : "bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── News Grid ─────────────────────────────────────────── */}
      <section
        className="w-full py-16"
      >
        <div className="mx-auto max-w-[1300px] px-8">
          <div className="grid grid-cols-3 gap-6">
            {rest.map((item) => (
              <Link key={item.id} href={item.href} className="group flex flex-col">
                <div className="relative rounded-2xl overflow-hidden h-[260px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#5a1e1e] text-white text-xs font-bold tracking-widest px-3 py-1.5">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 pt-5 pb-6 border-b border-zinc-200">
                  <span className="text-zinc-400 text-xs">{item.date}</span>
                  <h3
                    className="text-zinc-900 text-2xl leading-snug group-hover:text-[#5a1e1e] transition-colors"
                    style={{ fontFamily: "var(--font-caveat), cursive" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
                  <span className="inline-block w-fit mt-3 text-xs font-bold tracking-widest text-[#5a1e1e] hover:underline">
                    ПРОЧИТАЈТЕ ВЕСТ →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-14">
            <button className="bg-[#5a1e1e] text-white text-xs font-bold tracking-widest w-10 h-10 flex items-center justify-center hover:bg-[#3e1515] transition-colors">
              1
            </button>
            {[2, 3, 4].map((n) => (
              <button
                key={n}
                className="border border-zinc-300 text-zinc-700 text-xs font-bold tracking-widest w-10 h-10 flex items-center justify-center hover:bg-zinc-100 transition-colors"
              >
                {n}
              </button>
            ))}
            <button className="border border-zinc-300 text-zinc-700 text-xs font-bold tracking-widest px-6 h-10 flex items-center justify-center hover:bg-zinc-100 transition-colors">
              СЛЕДЕЋА →
            </button>
          </div>
        </div>
      </section>

      <FooterSection />
      </div>
    </main>
  );
}
