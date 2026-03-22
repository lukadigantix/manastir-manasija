import Image from "next/image";
import FooterSection from "@/components/FooterSection";

export default function LiteraturaPage() {
  return (
    <main className="overflow-hidden">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative w-full pt-0 pb-8 md:py-24 overflow-visible">
          {/* Mobile: bleeding image from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginBottom: "-40px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/freske-grafija.webp"
                alt="Литература Манасије"
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
                Литература
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Манасија није само војна и духовна тврђава — у њеним зидинама
                цветала је средњовековна српска књижевност. Под покровитељством
                деспота Стефана Лазаревића, монастир је постао место окупљања
                учених монаха, писара и књижевника, чији је рад обликовао
                писану баштину српскога народа.
              </p>
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
                  src="/images/Export/freske-grafija.webp"
                  alt="Литература Манасије — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── РУКОПИСНА БАШТИНА ────────────────────────────────── */}
        <section className="w-full py-10 md:py-24">
          <div className="mx-auto max-w-[800px] px-4 md:px-8 flex flex-col items-center text-center gap-6 md:gap-10">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Рукописна баштина
            </h2>
            <div className="flex flex-col gap-6 text-sm md:text-base text-zinc-600 leading-relaxed">
              <p>
                У Манасији је у првој половини 15. века настао значајан број
                рукописних кодекса. Монаси су преписивали богослужбене књиге,
                теолошка дела, хагиографије и књижевне текстове, чувајући
                знање у тешким временима пред налетом Османлија.
              </p>
              <p>
                Посебан подвиг представљало је уређивање тзв. ресавске редакције
                старословенског језика — систематска реформа правописа и
                граматике која је извршена управо у духовном кругу ресавских
                монаха и постала образац за читав православни словенски свет.
              </p>
              <p>
                Рукописи настали у Манасији данас се чувају у збиркама у
                Србији, Русији, Бугарској и Румунији, сведочећи о широком
                утицају ове скрипторске традиције.
              </p>
            </div>
          </div>
        </section>

        {/* ── FULL-WIDTH СЛИКА ─────────────────────────────────── */}
        <section className="w-full flex flex-col items-center">
          <div className="relative w-full h-[260px] md:h-[1089px]">
            <Image
              src="/images/Export/biblioteka-skola.webp"
              alt="Ресавска скрипторска школа"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* ── ДЕСПОТ СТЕФАН — СПИСАТЕЉ ─────────────────────────── */}
        <section
          className="relative w-full overflow-visible mt-4 md:mt-50"
          style={{ minHeight: "600px" }}
        >
          {/* Mobile: bleeding image from the left */}
          <div className="md:hidden relative" style={{ height: "480px", marginBottom: "-40px" }}>
            <div style={{ position: "absolute", left: "-140px", right: "-60px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/despot-culture.webp"
                alt="Деспот Стефан — списатељ"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Desktop: absolute positioned left */}
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
              src="/images/Export/despot-culture.webp"
              alt="Деспот Стефан — списатељ"
              fill
              className="object-contain"
            />
          </div>

          {/* Text */}
          <div
            className="relative mx-auto max-w-[1200px] px-4 md:px-8 h-full flex items-center"
            style={{ zIndex: 1 }}
          >
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg pt-0 pb-8 md:py-32">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Деспот Стефан — списатељ
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Деспот Стефан Лазаревић није био само ратник и државник — он је
                и сам писао. Његово „Слово љубве", посвећено братству витешког
                реда, представља ремек-дело средњовековне српске лирске прозе,
                прожето хуманистичким идеалима и дубоком духовношћу.
              </p>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Поред деспота, у Манасији је деловао Константин Филозоф, бугарски
                учени монах и писац, аутор чувеног „Живота деспота Стефана
                Лазаревића" — незаобилазног извора за историју Србије тог доба
                и врхунца средњовековне српске биографске književnosti.
              </p>
            </div>
          </div>
        </section>

        {/* ── FULL-WIDTH СЛИКА ─────────────────────────────────── */}
        <section className="w-full flex flex-col items-center">
          <div className="relative w-full h-[260px] md:h-[1089px]">
            <Image
              src="/images/Export/biblioteka-sudbina.webp"
              alt="Рукописи Манасије"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* ── ЛИТЕРАРНО НАСЛЕЂЕ ────────────────────────────────── */}
        <section className="w-full py-8 md:py-24 mb-8 md:mb-[100px] mt-0 md:mt-[-100px]">
          <div className="mx-auto max-w-[800px] px-4 md:px-8 flex flex-col items-center text-center gap-6 md:gap-10">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Литерарно наслеђе
            </h2>
            <div className="flex flex-col gap-6 text-sm md:text-base text-zinc-600 leading-relaxed">
              <p>
                Након пада Манасије под османску власт 1439. године, рад школе
                је прекинут, али духовно и литерарно семе које је посејано није
                могло бити уништено. Ресавска традиција преписивања и
                књижевног стварања наставила је да живи кроз рукописе растурене
                широм православног света.
              </p>
              <p>
                Данас се литерарно наслеђе Манасије изучава на универзитетима,
                чува у музејима и враћа животу кроз савремена издања и
                истраживачке пројекте. Оно подсећа да је ова тврђава, поред
                камена и гвожђа, грађена и речима.
              </p>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
