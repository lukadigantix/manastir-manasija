import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function BibliotekaPage() {
  return (
    <main className="overflow-hidden">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
        <section className="relative w-full pt-0 pb-8 md:py-24 overflow-visible">
          {/* Mobile: bleeding image from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginBottom: "-40px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/fortress-hero.webp"
                alt="Библиотека"
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
                Библиотека
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Ресавска библиотека у Манасији представљала је једно од
                најзначајнијих средишта писмености и књижевности у
                средњовековној Србији. Под покровитељством деспота Стефана
                Лазаревића, у манастиру је деловала чувена Ресавска преписивачка
                школа, у којој су монаси преписивали, преводили и уређивали
                књиге, постављајући високе стандарде писане речи.
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
                  src="/images/Export/fortress-hero.webp"
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
              Ресавска преписивачка школа
            </h2>
            <div className="flex flex-col gap-6 text-sm md:text-base text-zinc-600 leading-relaxed">
              <p>
                У Манасији је током прве половине 15. века деловала једна од
                најзначајнијих преписивачких школа на Балкану. Монаси су се
                бавили преписивањем богослужбених и књижевних дела, али и
                превођењем текстова са грчког језика.
              </p>
              <p>
                Посебан значај имало је уређивање и исправљање текстова, чиме је
                успостављена тaкозвана ресавска редакција старословенског језика
                — систем правила који је допринео већој језичкој прецизности и
                уједначености у књигама.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          {/* Слика — full width */}
          <div className="relative w-full h-[260px] md:h-[1089px]">
            <Image
              src="/images/Export/biblioteka-skola.webp"
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
              Рад у библиотеци
            </h2>
            <div className="flex flex-col gap-6 text-sm md:text-base text-zinc-600 leading-relaxed">
              <p>
                Књиге су се преписивале ручно, на пергаменту, уз употребу
                природних мастила и боја. Монаси су радили у посебним
                просторијама, где су стрпљиво и прецизно преписивали текстове,
                често украшавајући странице орнаментима и минијатурама.
              </p>
              <p>
                Овај процес није био само технички, већ и духовни чин, јер се
                свака књига стварала са посебном пажњом и посвећеношћу.
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
                src="/images/school.webp"
                alt="Значај и утицај"
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
              src="/images/school.webp"
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
                Значај и утицај
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Ресавска библиотека и њена школа имале су велики утицај далеко
                изван граница Србије. Рукописи настали у Манасији ширили су се у
                православном свету, допирући до Русије, Бугарске и Румуније.
              </p>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Захваљујући раду ресавских монаха, српска писменост достигла је
                висок ниво, а успостављени стандарди утицали су на развој
                књижевности и црквеног језика у наредним вековима.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          {/* Слика — full width */}
          <div className="relative w-full h-[260px] md:h-[1089px]">
            <Image
              src="/images/Export/biblioteka-sudbina.webp"
              alt="Последње почивалиште"
              fill
              className="object-cover"
            />
          </div>
        </section>

        <section className="w-full py-8 md:py-24 mb-8 md:mb-[100px] mt-0 md:mt-[-100px]">
          <div className="mx-auto max-w-[800px] px-4 md:px-8 flex flex-col items-center text-center gap-6 md:gap-10">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Судбина библиотеке
            </h2>
            <div className="flex flex-col gap-6 text-sm md:text-base text-zinc-600 leading-relaxed">
              <p>
                Након пада Манасије под османску власт у другој половини 15.
                века, рад Ресавске школе је прекинут. Монашки живот је ослабио,
                а велики број рукописа је изгубљен или расејан.
              </p>
              <p>
                Ипак, значај ове библиотеке остао је трајно упамћен као један од
                врхунаца српске средњовековне културе.
              </p>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
