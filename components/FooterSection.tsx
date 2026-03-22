import Link from "next/link";
import Image from "next/image";

const pages1 = [
  { label: "Почетна", href: "/" },
  { label: "Новости", href: "/novosti" },
  { label: "О манастиру", href: "/o-manastiru" },
  { label: "Деспот Стефан", href: "/despot-stefan" },
  { label: "Продавница", href: "/prodavnica" },
  { label: "Донације", href: "/donacije" },
  { label: "Контакт", href: "/kontakt" },
  { label: "Налог", href: "/nalog" },
];

const pages2 = [
  { label: "Утврђење", href: "/utvrdjenje" },
  { label: "Архитектура", href: "/arhitektura" },
  { label: "Фрескопис", href: "/freskopis" },
  { label: "Трпезарија", href: "/trpezarija" },
  { label: "Библиотека", href: "/biblioteka" },
  { label: "Ресавска школа", href: "/resavska-skola" },
  { label: "Литература", href: "/o-manastiru" },
];

const events = [
  { date: "02.05.2024.", location: "Црква Свете Тројице", title: "Велики Четвртак", img: "/images/news1.png" },
  { date: "03.05.2024.", location: "Црква Свете Тројице", title: "Велики Петак", img: "/images/news2.png" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white">

      {/* Newsletter */}
      <div className="mx-auto max-w-[1300px] px-4 md:px-8 py-10 md:py-12">
        <div className="border border-zinc-600 rounded-sm px-6 md:px-12 py-8 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-16">
          <h3
            className="text-2xl md:text-3xl text-white"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Пријавите се на наш билтен!
          </h3>
          <div className="flex flex-col gap-4 w-full md:flex-1 md:max-w-lg">
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="tvojemail@gmail.com"
                className="flex-1 min-w-0 bg-zinc-700 text-white placeholder-zinc-400 text-sm px-5 py-4 outline-none"
              />
              <button className="bg-[#5a1e1e] hover:bg-[#3e1515] text-white text-xs font-bold tracking-widest px-6 md:px-8 py-4 transition-colors shrink-0">
                ПРИЈАВИТЕ СЕ
              </button>
            </div>
            <label className="flex items-center gap-3 text-xs text-zinc-400 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-[#5a1e1e]" />
              Слажем се да примам обавештења од Манастира Манасија.
            </label>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-[1300px] px-4 md:px-8 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12">
        {/* Logo + contact */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-6">
          <Image src="/logo.png" alt="Manasija Logo" width={100} height={100} className="object-contain" />
          <div className="flex flex-col gap-2 text-sm">
            <p className="font-bold text-white">+381 35 611 290</p>
            <Link href="mailto:manastirmanasija@mts.rs" className="font-bold underline text-white hover:opacity-70">
              manastirmanasija@mts.rs
            </Link>
          </div>
        </div>

        {/* Pages col 1 */}
        <div className="flex flex-col gap-3">
          <h4 className="font-bold text-white mb-2">Странице</h4>
          {pages1.map((p) => (
            <Link key={p.href} href={p.href} className="text-sm text-zinc-300 hover:text-white flex items-center gap-2">
              <span className="text-[#5a1e1e]">•</span> {p.label}
            </Link>
          ))}
        </div>

        {/* Pages col 2 */}
        <div className="flex flex-col gap-3 md:mt-[2.25rem]">
          {pages2.map((p) => (
            <Link key={p.href + p.label} href={p.href} className="text-sm text-zinc-300 hover:text-white flex items-center gap-2">
              <span className="text-[#5a1e1e]">•</span> {p.label}
            </Link>
          ))}
        </div>

        {/* Events */}
        <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
          <h4 className="font-bold text-white mb-2">Догађаји</h4>
          {events.map((e) => (
            <div key={e.title} className="flex gap-4 items-center">
              <Image src={e.img} alt={e.title} width={72} height={72} className="object-cover rounded-sm shrink-0 h-[72px]" />
              <div>
                <p className="text-xs text-zinc-400">{e.date}</p>
                <p className="text-xs text-zinc-400">{e.location}</p>
                <p className="text-sm font-bold text-white">{e.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-700 py-5">
        <div className="mx-auto max-w-[1300px] px-4 md:px-8 flex flex-col md:flex-row items-center gap-3 md:gap-0 md:justify-between text-xs text-zinc-400 text-center md:text-left">
          <p>© 2024 Манастир Манасија - Царска Лавра Свете Тројице. Сва права задржана.</p>
          <div className="flex gap-6 md:gap-8">
            <Link href="#" className="hover:text-white">Појмовник</Link>
            <Link href="#" className="hover:text-white">Српска Православна Црква</Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
