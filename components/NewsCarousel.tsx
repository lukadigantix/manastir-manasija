"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";

const vesti = [
  {
    datum: "24.03.2024.",
    kategorija: "Богослужења",
    naslov: "Прва Недеља Великог поста",
    izvod: "Прва недеља Великог поста свечано је обележена у Цркви Свете Тројице уз учешће великог броја верника из Деспотовца и околине.",
    image: "/images/news1.png",
    href: "/novosti/1",
  },
  {
    datum: "23.03.2024.",
    kategorija: "Празници",
    naslov: "Теодорова субота торжествено прослављена",
    izvod: "Теодорова субота, прва субота Великог поста, прослављена је парастосом за покојне и Литургијом Светог Јована Златоустог.",
    image: "/images/news2.png",
    href: "/novosti/2",
  },
  {
    datum: "17.03.2024.",
    kategorija: "Богослужења",
    naslov: "Недеља сиропопусна",
    izvod: "Недеља Сиропопусна обележена је свечаним вечерњем и опроштајним целивом као увод у дане Великог поста у Манасији.",
    image: "/images/news3.png",
    href: "/novosti/3",
  },
];

export default function NewsCarousel() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((c) => (c === 0 ? vesti.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === vesti.length - 1 ? 0 : c + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <>
      {/* Mobile: slider */}
      <div
        className="md:hidden overflow-hidden px-4"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(calc(-${current * 85}vw - ${current * 16}px))` }}
        >
          {vesti.map((vest) => (
            <Link
              key={vest.href}
              href={vest.href}
              className="group flex flex-col w-[82vw] shrink-0 mr-4 last:mr-0"
            >
              <div className="relative rounded-2xl overflow-hidden h-[220px]">
                <Image
                  src={vest.image}
                  alt={vest.naslov}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#5a1e1e] text-white text-xs font-bold tracking-widest px-3 py-1.5">
                    {vest.kategorija}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-5 pb-6 border-b border-zinc-200">
                <span className="text-zinc-400 text-xs">{vest.datum}</span>
                <h3
                  className="text-zinc-900 text-xl leading-snug group-hover:text-[#5a1e1e] transition-colors"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  {vest.naslov}
                </h3>
                <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3">{vest.izvod}</p>
                <span className="inline-block w-fit mt-3 text-xs font-bold tracking-widest text-[#5a1e1e]">
                  ПРОЧИТАЈТЕ ВЕСТ →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {vesti.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-[#5a1e1e]" : "bg-zinc-300"}`}
              aria-label={`Вест ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 px-8">
        {vesti.map((vest) => (
          <Link key={vest.href} href={vest.href} className="group flex flex-col">
            <div className="relative rounded-2xl overflow-hidden h-[260px]">
              <Image
                src={vest.image}
                alt={vest.naslov}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#5a1e1e] text-white text-xs font-bold tracking-widest px-3 py-1.5">
                  {vest.kategorija}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 pt-5 pb-6 border-b border-zinc-200">
              <span className="text-zinc-400 text-xs">{vest.datum}</span>
              <h3
                className="text-zinc-900 text-2xl leading-snug group-hover:text-[#5a1e1e] transition-colors"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                {vest.naslov}
              </h3>
              <p className="text-zinc-600 text-base leading-relaxed line-clamp-3">{vest.izvod}</p>
              <span className="inline-block w-fit mt-3 text-xs font-bold tracking-widest text-[#5a1e1e] hover:underline">
                ПРОЧИТАЈТЕ ВЕСТ →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
