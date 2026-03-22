import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function UtvrdjenjePage() {
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
                src="/images/Export/fortress-hero.webp"
                alt="Утврђење"
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
                Утврђење
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Манастир Манасија, један од најзначајнијих споменика српске
                средњовековне архитектуре,{" "}
                <span className="font-bold">
                  јединствен је пример у коме је манастир и утврђење изграђен
                  као једна функционална целина.
                </span>{" "}
                Ово утврђење није самосталан замак већ{" "}
                <span className="font-bold">
                  комплекс одбрањених зидина, кула и донжона
                </span>{" "}
                са циљем да заштити монашку заједницу, имовину и духовну
                активност у време сталних ратних опасности.
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
                  src="/images/Export/fortress-hero.webp"
                  alt="Манасија — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Архитектура ──────────────────────────────────────── */}
        <section className="w-full py-12 md:py-24 mt-8 md:mt-20">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">

            {/* Слика — мобайл, центрирана */}
            <div className="md:hidden flex justify-center mb-4">
              <div className="relative w-[280px] h-[360px]">
                <Image
                  src="/images/arch.webp"
                  alt="Манасија — архитектура"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Слика — десктоп */}
            <div
              className="hidden md:flex relative items-center justify-center"
              style={{ minHeight: "600px" }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-60px",
                  left: "-140px",
                  width: "550px",
                  height: "750px",
                }}
              >
                <Image
                  src="/images/arch.webp"
                  alt="Манасија — архитектура"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Текст */}
            <div className="flex flex-col gap-6 max-w-lg">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Структура утврђења
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Утврђење Манасије окружује цео манастирски комплекс и састоји се
                од масивних бедема и 11 одбрамбених кула, док је на источној
                страни посебно утврђени део са додатном кулом познатом као
                Деспотова (донжон) кула — најмоћнија и најзначајнија у целој
                тврђави.
              </p>

              <p className="font-bold">
                Све куле имају идентичне одбрамбене карактеристике:
              </p>
              <ul className="list-disc list-inside text-sm md:text-base text-zinc-600 flex flex-col gap-1">
                <li>приземље и шест спратова</li>
                <li>проходне галерије за браниоце</li>
                <li>
                  повезане зидовима са мерлонима (одбрамбним зубцима) што
                  омогућава континуирану одбрану читаве тврђаве без „мртвих
                  зона&rdquo;.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="relative w-full overflow-visible mt-8 md:mt-20"
          style={{ minHeight: "600px" }}
        >
          {/* Mobile: bleeding image from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/fortress-tower.webp"
                alt="Деспотова кула"
                fill
                className="object-contain object-right"
                style={{ transform: "scaleX(-1)" }}
              />
            </div>
          </div>

          {/* Слика — десно, desktop only */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "-300px",
              right: "-280px",
              width: "1280px",
              height: "1120px",
              zIndex: 0,
            }}
          >
            <Image
              src="/images/Export/fortress-tower.webp"
              alt="Ресавска школа"
              fill
              className="object-contain"
              style={{ transform: "scaleX(-1)" }}
            />
          </div>

          {/* Текст — лево */}
          <div
            className="relative mx-auto max-w-[1200px] px-4 md:px-8 h-full flex items-center"
            style={{ zIndex: 1 }}
          >
            <div className="mr-0 md:mr-auto flex flex-col gap-6 max-w-lg py-10 md:py-32">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Деспотова кула
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Најмасивнији део одбрамбеног система представља Деспотова кула —
                једина затворена кула у комплексу, са високим зидовима и
                појачаним одбранбеним карактеристикама. Њена основа је подигнута
                на приближно 10 – 11 m изнад нивоа дворишта, а унутрашњост је
                подељена на више спратова повезаних дрвеним конструкцијама.
              </p>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                На највишем нивоу, наводно, постоје додатни одбрамбени путеви и
                галерије, што овој кули даје снажну одбрамбену улогу у случају
                опсаде.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center mt-10 md:mt-50">
          {/* Слика — full width */}
          <div
            className="relative w-full h-[260px] md:h-[1089px]"
          >
            <Image
              src="/images/Export/fortress-defence.webp"
              alt="Последње почивалиште"
              fill
              className="object-cover"
            />
          </div>

          {/* Текст */}
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl px-4 md:px-8 py-12 md:py-20">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Тактика и концепт одбране
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              <span className="font-bold">
                Манасијско утврђење представља модернији модел одбране у средњем
                веку, мешајући утицаје византијске војне архитектуре са
                појединим елементима западноевропских тврђава.
              </span>{" "}
              За разлику од многих монашких комплекса који су имали само зидове
              или појединачне куле, Манасија има комплексну мрежу бедема, кула,
              проходних галерија и структура за једноструку или дуплу линију
              одбране.
            </p>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              Иза главних зидова сачињен је и спољни бедем и ров, који су
              створили додатни одбрамбени појас. Такав концепт омогућавао је
              борбу у више „слојева“ и повећавао шансе да се одбрани у случају
              опсаде.
            </p>
          </div>
        </section>

        <section className="relative w-full pt-6 pb-8 md:py-24 overflow-visible">
          {/* Mobile: bleeding image from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/fortress-history.webp"
                alt="Утврђење и историјски контекст"
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
                Утврђење и историјски контекст
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Манасијско утврђење подигнуто је у доба турских и унутрашњих
                опасности, када су српске земље биле изложене сталним борбама и
                преселама становништва. Управо због тога,{" "}
                <span className="font-bold">
                  утврђење је конструисано истовремено са манастирским
                  комплексом
                </span>
                , што га чини јединственим у Србији и једним од најбоље очуваних
                примера такве архитектуре.
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
                  src="/images/Export/fortress-history.webp"
                  alt="Манасија — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Симболика и значај ───────────────────────────────── */}

        <section
          className="relative w-full overflow-visible mt-8 md:mt-75 mb-8 md:mb-50"
          style={{ minHeight: "600px" }}
        >
          {/* Mobile: bleeding image from the left */}
          <div className="md:hidden relative" style={{ height: "500px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-140px", right: "-60px", top: 0, height: "500px" }}>
              <Image
                src="/images/Export/fortress-full.webp"
                alt="Симболика и значај"
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
              left: "-480px",
              width: "1280px",
              height: "1120px",
              zIndex: 0,
            }}
          >
            <Image
              src="/images/Export/fortress-full.webp"
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
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-2xl py-10 md:py-0">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Симболика и значај
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                <span className="font-bold">
                  Манасијско утврђење представља модернији модел одбране у
                  средњем веку, мешајући утицаје византијске војне архитектуре
                  са појединим елементима западноевропских тврђава.
                </span>{" "}
                За разлику од многих монашких комплекса који су имали само
                зидове или појединачне куле, Манасија има комплексну мрежу
                бедема, кула, проходних галерија и структура за једноструку или
                дуплу линију одбране.
              </p>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify font-bold">
                Утврђење Манасије одражава потребу за защитом вере, писмености и
                монашког живота у време кризе.
              </p>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Снажан архитектонски одговор на војне претње чини је симболом
                отпорности и трајности српске православне заједнице у 15. веку.
              </p>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                <span className="font-bold">Концепт утврђења</span> у
                манастирској архитектури Манасије био је један од модела који{" "}
                <span className="font-bold">
                  {" "}
                  је утицао на развој каснијих тврђава у Србији, попут
                  двоструких бедема Смедерева.
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
