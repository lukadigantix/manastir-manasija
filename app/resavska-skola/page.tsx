import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function ResavskaSkola() {
  return (
    <main className="overflow-hidden">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
        <section className="relative w-full pt-0 pb-8 md:py-24 overflow-visible">
          {/* Mobile bleeding image */}
          <div className="md:hidden relative w-full h-[480px] overflow-hidden">
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "-60px",
                right: "-140px",
              }}
            >
              <Image
                src="/images/Export/resavska-hero.webp"
                alt="Ресавска школа — илустрација"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[1200px] px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center overflow-visible">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Ресавска школа
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Ресавска школа, настала у манастиру Манасија почетком 15. века,
                представља један од најзначајнијих културних и књижевних центара
                средњовековне Србије. Под покровитељством деспота Стефана
                Лазаревића, ова школа окупљала је ученe монахе, писце и
                преводиоце који су радили на очувању и унапређењу писане речи.
              </p>
            </div>

            {/* Illustration */}
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
                  src="/images/Export/resavska-hero.webp"
                  alt="Манасија — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-10 md:py-24">
          <div className="mx-auto max-w-[800px] px-4 md:px-8 flex flex-col items-center text-center gap-6 md:gap-10">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Центар писмености
            </h2>
            <div className="flex flex-col gap-6 text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              <p>
                У оквиру Ресавске школе развијен је систематичан рад на
                преписивању и превођењу књига. Посебна пажња посвећивана је
                тачности текста, језичкој исправности и уједначености, што је
                довело до стварања високих стандарда у српској писмености.
              </p>
              <p>
                Монаси су исправљали старе рукописе, упоређивали различите
                верзије текстова и настојали да створе што верније и прецизније
                преписе.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          {/* Слика — full width */}
          <div className="relative w-full h-[260px] md:h-[1089px]">
            <Image
              src="/images/Export/despot-zaduzbina.webp"
              alt="Последње почивалиште"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="w-full py-10 md:py-24">
          <div className="mx-auto max-w-[800px] px-4 md:px-8 flex flex-col items-center text-center gap-6 md:gap-10">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Ресавска редакција
            </h2>
            <div className="flex flex-col gap-6 text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              <p>
                Један од најважнијих доприноса Ресавске школе јесте стварање
                такозване ресавске редакције старословенског језика. Ова
                редакција представљала је скуп језичких и правописних правила
                која су допринела уједначавању књижевног језика и његовој већој
                јасноћи.
              </p>
              <p>
                Захваљујући овим правилима, текстови су постали прецизнији,
                разумљивији и погоднији за широку употребу у црквеном и
                културном животу.
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative w-full overflow-visible mt-4 md:mt-50"
          style={{ minHeight: "600px" }}
        >
          {/* Mobile: bleeding image from the left */}
          <div className="md:hidden relative" style={{ height: "480px", marginBottom: "-40px" }}>
            <div style={{ position: "absolute", left: "-140px", right: "-60px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/resavska-uticaj.webp"
                alt="Утицај"
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
              src="/images/Export/resavska-uticaj.webp"
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
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg pt-0 pb-8 md:py-32">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Утицај
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Значај Ресавске школе превазилазио је границе српске државе.
                Рукописи и језички стандарди настали у Манасији утицали су на
                развој писмености у другим православним земљама, пре свега у
                Русији, Бугарској и Румунији.
              </p>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                На тај начин, Манасија је постала један од кључних центара
                културног повезивања православног света.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          {/* Слика — full width */}
          <div className="relative w-full h-[260px] md:h-[1089px]">
            <Image
              src="/images/Export/resavska-full.webp"
              alt="Последње почивалиште"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="w-full py-8 md:py-24 mt-0 md:mt-[-100px] mb-8 md:mb-[100px]">
          <div className="mx-auto max-w-[800px] px-4 md:px-8 flex flex-col items-center text-center gap-6 md:gap-10">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Наслеђе
            </h2>
            <div className="flex flex-col gap-6 text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              <p>
                Иако је рад Ресавске школе прекинут падом Манасије под османску
                власт, њен утицај остао је трајан. Стандарди које је поставила
                наставили су да живе кроз касније преписивачке традиције и
                књижевност.
              </p>
              <p>
                Ресавска школа данас се сматра једним од врхунаца српске
                средњовековне културе и писмености.
              </p>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
