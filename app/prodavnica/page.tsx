import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

const categories = ["Све", "Мед и пчелињи производи", "Иконе", "Свеће", "Књиге", "Остало"];

const products = [
  {
    id: 1,
    name: "Monastirski med",
    category: "Мед и пчелињи производи",
    price: "1.200 дин",
    image: "/images/news1.png",
    badge: "Препоручујемо",
    badgeDark: true,
  },
  {
    id: 2,
    name: "Акацијин мед",
    category: "Мед и пчелињи производи",
    price: "1.400 дин",
    image: "/images/news2.png",
    badge: null,
    badgeDark: false,
  },
  {
    id: 3,
    name: "Восак и прополис",
    category: "Мед и пчелињи производи",
    price: "800 дин",
    image: "/images/news3.png",
    badge: null,
    badgeDark: false,
  },
  {
    id: 4,
    name: "Икона Свете Тројице",
    category: "Иконе",
    price: "3.500 дин",
    image: "/images/news1.png",
    badge: "Ново",
    badgeDark: false,
  },
  {
    id: 5,
    name: "Икона Деспота Стефана",
    category: "Иконе",
    price: "2.800 дин",
    image: "/images/news2.png",
    badge: null,
    badgeDark: false,
  },
  {
    id: 6,
    name: "Икона Богородице",
    category: "Иконе",
    price: "3.200 дин",
    image: "/images/news3.png",
    badge: null,
    badgeDark: false,
  },
  {
    id: 7,
    name: "Монастирске свеће",
    category: "Свеће",
    price: "350 дин",
    image: "/images/news1.png",
    badge: null,
    badgeDark: false,
  },
  {
    id: 8,
    name: "Историја Манасије",
    category: "Књиге",
    price: "1.600 дин",
    image: "/images/news2.png",
    badge: null,
    badgeDark: false,
  },
  {
    id: 9,
    name: "Разгледнице — сет 5 ком",
    category: "Остало",
    price: "250 дин",
    image: "/images/news3.png",
    badge: null,
    badgeDark: false,
  },
];

export default function ProdavnicaPage() {
  return (
    <main>
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >

      {/* ── Page Hero ─────────────────────────────────────────── */}
      <section
        className="relative w-full min-h-[240px] md:min-h-[340px] flex flex-col items-center justify-end pb-10 md:pb-16 pt-24 md:pt-40"
      >
        <div className="mx-auto max-w-[1300px] w-full px-4 md:px-8">
          <p className="text-xs font-semibold tracking-widest text-zinc-500 mb-2">
            <Link href="/" className="hover:text-zinc-800 transition-colors">ПОЧЕТНА</Link>
            {" / "}
            <span className="text-zinc-800">ПРОДАВНИЦА</span>
          </p>
          <h1
            className="text-5xl md:text-6xl text-zinc-900"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Онлајн продавница
          </h1>
        </div>
      </section>

      {/* ── Filter + Grid ─────────────────────────────────────── */}
      <section
        className="w-full py-10 md:py-16"
      >
        <div className="mx-auto max-w-[1300px] px-4 md:px-8">

          {/* Category filter */}
          <div className="flex items-center gap-2 md:gap-3 flex-wrap border-b border-zinc-300 pb-6 md:pb-8 mb-8 md:mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`text-xs font-bold tracking-widest px-4 md:px-6 py-2 md:py-2.5 transition-colors ${
                  i === 0
                    ? "bg-[#5a1e1e] text-white"
                    : "bg-white border border-zinc-300 text-zinc-700 hover:bg-zinc-100"
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6">
            {products.map((product) => (
              <div key={product.id} className="group flex flex-col">
                {/* Image */}
                <div className="relative rounded-2xl overflow-hidden h-[280px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />

                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className={`text-xs font-bold tracking-widest px-4 py-1.5 ${
                        product.badgeDark
                          ? "bg-[#5a1e1e] text-white"
                          : "bg-white text-zinc-900"
                      }`}>
                        {product.badge.toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex flex-col gap-2 pt-5 pb-6 border-b border-zinc-200">
                  <span className="text-zinc-400 text-xs font-bold tracking-widest uppercase">{product.category}</span>
                  <div className="flex items-center justify-between gap-4">
                    <h3
                      className="text-zinc-900 text-2xl leading-snug group-hover:text-[#5a1e1e] transition-colors"
                      style={{ fontFamily: "var(--font-caveat), cursive" }}
                    >
                      {product.name}
                    </h3>
                    <span
                      className="text-zinc-900 text-2xl whitespace-nowrap shrink-0"
                      style={{ fontFamily: "var(--font-caveat), cursive" }}
                    >
                      {product.price}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="inline-block w-fit mt-3 bg-[#5a1e1e] text-white text-xs font-bold tracking-widest px-8 py-3 hover:bg-[#3e1515] transition-colors"
                  >
                    ДОДАЈ У KORPU
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
      </div>
    </main>
  );
}
