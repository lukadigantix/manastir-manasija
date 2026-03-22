import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function OManastiruPage() {
  return (
    <main className="overflow-hidden">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
        <section className="relative w-full pt-2 pb-6 md:py-24 overflow-visible">
          {/* Mobile: bleeding image before text */}
          <div className="md:hidden relative" style={{ height: "540px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "540px" }}>
              <Image
                src="/images/Export/about-hero.webp"
                alt="Манасија — илустрација"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center overflow-visible">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-5xl lg:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                О манастиру
              </h2>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Манастир Манасија, познат и као Ресава, један је од
                најзначајнијих споменика српске средњовековне културе.{" "}
                <span className="font-bold">
                  {" "}
                  Подигао га је почетком 15. века српски деспот Стефан Лазаревић
                  као своју задужбину и духовно средиште.{" "}
                </span>
                Окружен снажним зидинама и кулама, са Црквом Свете Тројице у
                свом средишту, Манасија већ више од шест векова представља
                симбол вере, културе и историје Србије.
              </p>
 
            </div>

            {/* Desktop illustration */}
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
                  src="/images/Export/about-hero.webp"
                  alt="Манасија — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative w-full overflow-visible mt-10 md:mt-50"
          style={{ minHeight: "600px" }}
        >
          {/* Mobile: bleeding image from the left */}
          <div className="md:hidden relative" style={{ height: "540px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-140px", right: "-60px", top: 0, height: "540px" }}>
              <Image
                src="/images/Export/arch-structure.webp"
                alt="Ресавска школа"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Слика — само на десктопу */}
          <div className="hidden md:block" style={{
              position: "absolute",
              top: "-300px",
              left: "-280px",
              width: "1280px",
              height: "1120px",
              zIndex: 0,
            }}>
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
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg py-8 md:py-0">
              <h2
                className="text-5xl lg:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Судбина манастира
              </h2>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed text-justify">
                <span className="font-bold">
                  Током друге половине 15. века манастир Манасија суочио се са
                  великим историјским преокретима.
                </span>{" "}
                Након османских освајања у области Српске деспотовине, манастир
                је 1458. године поново пао под власт Османлија. Због снажних
                утврђења и стратешког положаја, комплекс је претворен у војно
                утврђење и у њему је смештена турска војна посада.
              </p>

              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed text-justify">
                <span className="font-bold">
                  У наредним деценијама монашки живот у манастиру је постепено
                  замро, а манастирске зграде коришћене су у војне сврхе.{" "}
                </span>
                Ипак, упркос тешком периоду, у историјским записима и предању
                манастир је и даље остао упамћен као место где почива Стефан
                Лазаревић, његов оснивач и један од најзначајнијих владара
                средњовековне Србије.
              </p>
    
            </div>
          </div>
        </section>

        {/* ── Историјат ────────────────────────────────────────── */}
        <section className="w-full py-12 md:py-24">
          <div className="mx-auto max-w-[800px] px-4 md:px-8">
            <h2
              className="text-5xl lg:text-7xl text-zinc-900 leading-tight mb-10 md:mb-20 text-center"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Историјат
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Вертикална линија */}
              <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-zinc-300" />

                <div className="flex flex-col gap-10 md:gap-14">
                {[
                  {
                    year: "1407.",
                    title: "Почетак градње",
                    text: "Почиње изградња манастира Манасије као задужбине српског деспота Стефана Лазаревића. Подигнути су црква, манастирски конаци и снажно утврђење са кулама.",
                  },
                  {
                    year: "1418.",
                    title: "Завршетак утврђења",
                    text: "Завршено је грађење одбрамбеног утврђења са 11 кула и бедемима дебљине до 3,5 метра. Манасија постаје и духовна и војна тврђава српске деспотовине.",
                  },
                  {
                    year: "1427.",
                    title: "Упокојење деспота Стефана",
                    text: "Деспот Стефан Лазаревић умире и бива сахрањен у цркви Свете Тројице у Манасији. Monastery постаје његово вечно почивалиште.",
                  },
                  {
                    year: "15–16. век",
                    title: "Ресавска школа",
                    text: "У Манасији цвета Ресавска преписивачка школа. Монаси преписивачи, окупљени под утицајем патријарха Јефтимија, стварају значајна дела српске средњовековне књижевности.",
                  },
                  {
                    year: "1456.",
                    title: "Турске пљачке",
                    text: "Турске снаге пљачкају и оштећују манстир. Упркос разарањима, монашка заједница наставља да живи и ради у Манасији.",
                  },
                  {
                    year: "18–19. век",
                    title: "Обнове и рестаурације",
                    text: "Кроз неколико векова, Манасија пролази кроз вишеструке обнове. Рестаурисане су цркве, фреске и бедеми, враћајући бившу славу овог духовног центра.",
                  },
                  {
                    year: "Данас",
                    title: "Споменик културе",
                    text: "Манасија је проглашена споменик културе од изузетног значаја. Сваке године хиљаде посетилаца из целог света долазе да погледају фреске, утврђење и духовно наслеђе овог јединственог места.",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative flex gap-8 pl-10">
                    {/* Bullet */}
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-zinc-800 flex-shrink-0" />

                    {/* Садржај */}
                    <div className="flex flex-col gap-2">
                      <span
                        className="text-xl lg:text-2xl text-zinc-900 font-semibold"
                        style={{ fontFamily: "var(--font-caveat), cursive" }}
                      >
                        {item.year} — {item.title}
                      </span>
                      <p className="text-sm lg:text-base text-zinc-600 leading-relaxed max-w-xl text-justify">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full pt-10 pb-10 md:py-24 overflow-visible mt-8 md:mt-50">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center overflow-visible">
            {/* Text */}
            <div className="flex flex-col gap-6 mt-0 md:mt-[-120px]">
              <h2
                className="text-5xl lg:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Манастир Манасија данас
              </h2>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Данас је манастир Манасија једно од
                <span className="font-bold">
                  најзначајнијих културно-историјских и духовних места у Србији
                </span>
                . Манастирски комплекс са Црквом Свете Тројице и снажним
                средњовековним утврђењем очуван је у великој мери у свом
                изворном облику и представља изузетно достигнуће српске
                средњовековне архитектуре.
              </p>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Манасија је проглашена спомеником културе од изузетног значаја и
                налази се под заштитом Републике Србије, а од 2010. године
                укључена је у процес кандидатуре за УНЕСКО листу светске
                баштине.
                <span className="font-bold">
                  У последњих неколико деценија спроводе се бројни археолошки и
                  конзерваторски радови на обнови зидина, кула и манастирског
                  комплекса.
                </span>
              </p>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                <span className="font-bold">
                  Током истраживања потврђено је и место гроба њеног ктитора,
                  деспота Стефана Лазаревића.
                </span>{" "}
                Обнова и очување комплекса настављају се и данас, а планирани
                радови обухватају рестаурацију утврђења, трпезарије и других
                делова манастира.
              </p>
            </div>

            {/* Mobile illustration — hidden */}

            {/* Desktop illustration */}
            <div className="hidden md:block relative" style={{ minHeight: "600px" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-400px",
                  left: "-80px",
                  width: "1200px",
                  height: "1200px",
                }}
              >
                <Image
                  src="/images/Export/about-today.webp"
                  alt="Манасија — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          {/* Слика — full width */}

          <div
            className="relative w-full h-[260px] md:h-[1089px]"
          >
            <Image
              src="/images/Export/about-full-width.webp"
              alt="Последње почивалиште"
              fill
              className="object-cover"
            />
          </div>

          {/* Три колоне */}
          <div className="mx-auto max-w-[1200px] px-4 md:px-8 py-12 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
            <div className="flex flex-col gap-4">
              <h2
                className="text-5xl lg:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Куле
              </h2>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed text-justify">
                Манастир је подигнут као снажно утврђен комплекс који је, поред
                духовне функције, имао и важну одбрамбену улогу.{" "}
                <span className="font-bold">
                  Комплекс је опасан високим каменим бедемима са 11 кула иједном
                  великом донжон кулом, док је испред зидина некада постојао
                  дубок одбрамбени ров.
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2
                className="text-5xl lg:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Унутрашност
              </h2>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed text-justify">
                <span className="font-bold">
                  Унутар зидина налазили су се манастирски конаци, трпезарија,
                  помоћне зграде и централна црква, распоређени око унутрашњег
                  дворишта.
                </span>{" "}
                Архитектура целог комплекса припада Моравској школи,
                препознатљивој по богатој каменој декорацији.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h2
                className="text-5xl lg:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Положај
              </h2>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed text-justify">
                Захваљујући снажним зидинама и стратешком положају у долини реке
                Ресаве,{" "}
                <span className="font-bold">
                  утврђење Манасије данас важи за једно од најбоље очуваних
                  средњовековних манастирских фортификација у Србији.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative w-full overflow-visible mt-8 md:mt-50 mb-8 md:mb-50"
          style={{ minHeight: "600px" }}
        >
          {/* Mobile: bleeding image from the right */}
          <div className="md:hidden relative" style={{ height: "500px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "500px" }}>
              <Image
                src="/images/Export/fortress-history.webp"
                alt="Значај Манасије"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>

          {/* Слика — само на десктопу */}
          <div className="hidden md:block" style={{
              position: "absolute",
              top: "-300px",
              right: "-280px",
              width: "1280px",
              height: "1120px",
              zIndex: 0,
            }}>
            <Image
              src="/images/Export/fortress-history.webp"
              alt="Ресавска школа"
              fill
              className="object-contain"
            />
          </div>

          {/* Mobile: image hidden */}

          {/* Текст */}
          <div
            className="relative mx-auto max-w-[1200px] px-4 md:px-8 h-full flex items-center"
            style={{ zIndex: 1 }}
          >
            <div className="ml-0 flex flex-col gap-6 max-w-lg py-10 md:py-20">
              <h2
                className="text-5xl lg:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Значај Манасије
              </h2>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed text-justify">
                Манастир Манасија је био дом познатој Ресавској преписивачкој
                школи, која је окупљала учене монахе писце, преводиоце и
                преписиваоце. Њихов рад је имао{" "}
                <span className="font-bold">
                  значајан утицај на развој српске књижевности и културе у 15.
                  веку.
                </span>
              </p>
              <p className="text-sm lg:text-base text-zinc-600 leading-relaxed text-justify">
                <span className="font-bold">Данас Манасија</span> није само историјски споменик, већ и жив манастир у коме се наставља монашки живот, а њене зидине и даље сведоче о снази вере, културе и традиције српског народа.
              </p>
            </div>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
