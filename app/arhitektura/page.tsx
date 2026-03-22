import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function ArhitekturaPagе() {
  return (
    <main className="overflow-hidden">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
        <section className="relative w-full pt-6 pb-8 md:py-24 overflow-visible">
          {/* Mobile: bleeding image from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/arch-hero.webp"
                alt="Архитектура"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center overflow-visible">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Архитектура
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Манасија припада Моравској архитектонској школи, карактерисаној
                богатом каменом декорацијом, гарнитуром резбарених орнамената и
                витким пропорцијама зидова.
              </p>
              <Link
                href="/o-manastiru"
                className="mt-2 w-fit bg-[#5a1e1e] text-white text-xs font-bold tracking-widest px-10 py-4 hover:bg-[#3e1515] transition-colors"
              >
                САЗНАЈ ВИШЕ
              </Link>
            </div>

            {/* Illustration — desktop only */}
            <div className="hidden md:block relative" style={{ minHeight: "600px" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-200px",
                  left: "-80px",
                  width: "1200px",
                  height: "1200px",
                }}
              >
                <Image
                  src="/images/Export/arch-hero.webp"
                  alt="Манасија — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative w-full overflow-visible mt-8 md:mt-50"
          style={{ minHeight: "600px" }}
        >
          {/* Mobile: bleeding image from the left */}
          <div className="md:hidden relative" style={{ height: "500px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-140px", right: "-60px", top: 0, height: "500px" }}>
              <Image
                src="/images/Export/arch-structure.webp"
                alt="Структура"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Слика — desktop only */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "-300px",
              left: "-280px",
              width: "1280px",
              height: "1120px",
              zIndex: 0,
            }}
          >
            <Image
              src="/images/Export/arch-structure.webp"
              alt="Ресавска школа"
              fill
              className="object-contain"
            />
          </div>

          {/* Текст */}
          <div
            className="relative mx-auto max-w-[1200px] px-4 md:px-8 h-full flex items-center"
            style={{ zIndex: 1 }}
          >
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg py-8 md:py-16">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Структура
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Центар комплекса заузима Црква Свете Тројице, око које су
                распоређени конаци, трпезарија и помоћне зграде, организовани
                око унутрашњег дворишта. Сви објекти унутар зидина интегрисани
                су у јединствену композицију која спаја духовну и функционалну
                улогу манастира.
              </p>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Одбране архитектонске елементе чине 11 кула и донжон Деспотова
                кула, са масивним каменим бедемима и некадашњим одбрамбеним
                ровом, који доприносе монументалности комплекса.
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative w-full overflow-visible mt-8 md:mt-0"
          style={{ minHeight: "320px" }}
        >
          {/* Mobile: edge-to-edge */}
          <div className="md:hidden relative w-screen -ml-4 h-[360px]">
            <Image
              src="/images/Export/arch-full-width.webp"
              alt="Манасија"
              fill
              className="object-contain"
            />
          </div>

          {/* Desktop: absolute overflow */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "-120px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "1300px",
              height: "1300px",
            }}
          >
            <Image
              src="/images/Export/arch-full-width.webp"
              alt="Манасија"
              fill
              className="object-contain"
            />
          </div>
        </section>

        {/* ── Цитат / истакнути текст ───────────────────────────── */}
        <section className="w-full py-12 md:py-24 mt-8 md:mt-80">
          <div className="mx-auto max-w-3xl px-4 md:px-8 text-center">
            <p className="text-sm md:text-lg font-bold text-zinc-800 leading-relaxed">
              Технике градње обухватају рад са каменом и дрветом, примењене у
              зидовима, крововима и декоративним елементима. Камена резбарена
              декорација фасада, портал и мотиви на зидовима и стубовима сведоче
              о високом уметничком нивоу средњовековних мајстора.
            </p>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
