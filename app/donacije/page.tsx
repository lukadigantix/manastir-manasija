import Image from "next/image";
import FooterSection from "@/components/FooterSection";

export default function DonacijePage() {
  return (
    <main className="overflow-hidden">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative w-full pt-6 pb-8 md:py-32 overflow-visible">
          {/* Mobile: bleeding illustration from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/fortress-hero.webp"
                alt="Манасија — донације"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center overflow-visible">
            {/* Текст */}
            <div className="flex flex-col gap-6">
              <h1
                className="text-5xl md:text-7xl text-zinc-900 leading-tight text-center md:text-left"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Подржите Манасију
              </h1>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Ваша донација директно доприноси очувању и обнови Манастира
                Манасија — непроцењивог духовног и културног блага српског
                народа. Сваки прилог, без обзира на износ, оставља трајни
                траг у историји ове свете задужбине.
              </p>
            </div>

            {/* Илустрација — само на десктопу */}
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
                  src="/images/Export/fortress-hero.webp"
                  alt="Манасија — донације"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Зашто донирати ───────────────────────────────────── */}
        <section className="w-full py-12 md:py-24">
          <div className="mx-auto max-w-[800px] px-4 md:px-8 flex flex-col items-center text-center gap-8">
            <h2
              className="text-5xl md:text-6xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Зашто је важна ваша подршка
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              Манастир Манасија, подигнута у 15. веку, кроз векове је преживела
              бројна разарања и обнове. Одржавање историјских зидина, фресака и
              конака захтева стална улагања. Средства прикупљена путем донација
              користе се искључиво за конзервацију и рестаурацију комплекса,
              едукативне програме и духовни живот заједнице.
            </p>
          </div>
        </section>

        {/* ── Три начина донирања ──────────────────────────────── */}
        <section className="w-full py-12 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {/* Динарска уплата */}
            <div className="bg-[#3d2a1e] text-white p-6 md:p-10 flex flex-col gap-5">
              <h3
                className="text-3xl md:text-4xl leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Домаћа уплата
              </h3>
              <div className="w-12 h-[2px] bg-white/40" />
              <div className="flex flex-col gap-3 text-sm leading-relaxed">
                <p>
                  <span className="font-bold block mb-1">Назив примаоца:</span>
                  Манастир Манасија
                </p>
                <p>
                  <span className="font-bold block mb-1">Банка:</span>
                  АИК Банка
                </p>
                <p>
                  <span className="font-bold block mb-1">Број рачуна:</span>
                  105-0000000003776-30
                </p>
                <p>
                  <span className="font-bold block mb-1">Сврха уплате:</span>
                  Донација за обнову Манасије
                </p>
              </div>
            </div>

            {/* Девизна уплата */}
            <div className="bg-zinc-900 text-white p-6 md:p-10 flex flex-col gap-5">
              <h3
                className="text-3xl md:text-4xl leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Девизна уплата
              </h3>
              <div className="w-12 h-[2px] bg-white/40" />
              <div className="flex flex-col gap-3 text-sm leading-relaxed">
                <p>
                  <span className="font-bold block mb-1">Банка:</span>
                  АИК Банка
                </p>
                <p>
                  <span className="font-bold block mb-1">Девизни рачун:</span>
                  105-0040120010753-45
                </p>
                <p>
                  <span className="font-bold block mb-1">За уплате из иностранства:</span>
                  Контактирајте нас путем е-поште за додатне инструкције и SWIFT/IBAN
                  податке.
                </p>
              </div>
            </div>

            {/* Контакт за донације */}
            <div className="border border-zinc-300 bg-white/60 p-6 md:p-10 flex flex-col gap-5">
              <h3
                className="text-3xl md:text-4xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Контакт
              </h3>
              <div className="w-12 h-[2px] bg-zinc-300" />
              <div className="flex flex-col gap-3 text-sm leading-relaxed text-zinc-700">
                <p>
                  За сва питања у вези са донацијама, намонским прилозима или
                  посебним завештањима, слободно нас контактирајте.
                </p>
                <p>
                  <span className="font-bold block mb-1">Телефон:</span>
                  +381 35 611 290
                </p>
                <p>
                  <span className="font-bold block mb-1">Е-пошта:</span>
                  <a
                    href="mailto:manastirmanasija@mts.rs"
                    className="underline hover:text-zinc-900 transition-colors"
                  >
                    manastirmanasija@mts.rs
                  </a>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Позив на акцију ──────────────────────────────────── */}
        <section className="relative w-full py-16 md:py-32 overflow-hidden">
          {/* Воден жиг */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "600px",
              zIndex: 0,
              opacity: 0.08,
            }}
          >
            <Image
              src="/images/logo-big.webp"
              alt=""
              fill
              className="object-contain"
            />
          </div>
          <div
            className="relative mx-auto max-w-[700px] px-4 md:px-8 flex flex-col items-center text-center gap-8"
            style={{ zIndex: 1 }}
          >
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Сваки прилог је
              <br />
              благослов
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              Духовна и материјална подршка верника и пријатеља Манасије
              представља темељ опстанка и развоја овог светог места. Свакоме
              ко допринесе обнови биће одслужен парастос или молебан по жељи
              дародавца.
            </p>
            <div className="flex flex-col gap-2 text-sm text-zinc-500">
              <p>Број рачуна: АИК Банка 105-0000000003776-30</p>
              <p>
                Е-пошта:{" "}
                <a
                  href="mailto:manastirmanasija@mts.rs"
                  className="underline hover:text-zinc-900 transition-colors"
                >
                  manastirmanasija@mts.rs
                </a>
              </p>
            </div>
          </div>
        </section>

      </div>
      <FooterSection />
    </main>
  );
}
