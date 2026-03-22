import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";
import NewsCarousel from "@/components/NewsCarousel";
import HomeMobileNav from "@/components/HomeMobileNav";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >

        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="relative w-full lg:min-h-screen flex items-start lg:items-center px-4 md:px-8 pb-16 md:pb-24 pt-6 md:pt-20 lg:pt-40">
          <div className="mx-auto max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Portrait */}
            <div className="relative flex items-center justify-center order-1 lg:order-1">
              <Image
                src="/images/portrait.webp"
                alt="Деспот Стефан Лазаревић"
                width={560}
                height={700}
                className="object-contain w-full max-h-[480px] lg:max-h-none h-auto"
                priority
              />
            </div>

            {/* Text */}
            <div className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left order-2 lg:order-2">
              <h1
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Чувар српске
                <br />
                културне баштине
              </h1>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Добродошли у манастир Манасија, монументално достигнуће средњовековне
                српске архитектуре и уметности. Ова светиња, подигнута у периоду између 1407.
                и 1418. године, представља трајни споменик деспота Стефана Лазаревића, који је
                својим делима оставио дубок печат на српску историју.
              </p>
              <Link
                href="/o-manastiru"
                className="mt-2 bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-10 md:py-4 hover:bg-[#3e1515] transition-colors"
              >
                САЗНАЈ ВИШЕ
              </Link>
            </div>
          </div>
        </section>

        {/* ── О Манастиру ──────────────────────────────────────── */}
        <section className="relative w-full py-16 md:py-24 overflow-visible">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Text */}
            <div className="flex flex-col gap-6">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                О манастиру
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Манастир Манасија, задужбина деспота Стефана Лазаревића,
                представљаједно од најзначајнијих културних и духовних места у
                Србији. Кроз векове, овај манастир је преживео разна разарања и
                обнове, чувајући своје богато наслеђе.
              </p>
              <Link
                href="/o-manastiru"
                className="mt-2 w-fit bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-10 md:py-4 hover:bg-[#3e1515] transition-colors"
              >
                САЗНАЈ ВИШЕ
              </Link>
            </div>

            {/* Illustration */}
            <div className="relative w-full h-[340px] md:h-auto md:min-h-[600px]">
              {/* Desktop: artistic overflowing image */}
              <div className="hidden md:block" style={{ position: 'absolute', top: '-400px', left: '-80px', width: '1200px', height: '1200px' }}>
                <Image
                  src="/images/mon1.webp"
                  alt="Манасија — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Mobile: overflowing image */}
              <div className="md:hidden" style={{ position: 'absolute', top: '-40px', left: '-60px', right: '-60px', bottom: '-40px' }}>
                <Image
                  src="/images/mon1.webp"
                  alt="Манасија — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Последње вести ───────────────────────────────────── */}
        <section className="w-full py-16 md:py-24 bg-white/40">
          <div className="mx-auto max-w-[1300px] px-4 md:px-8">
            <div className="flex items-end justify-between mb-8 md:mb-12">
              <h2
                className="text-4xl md:text-6xl text-zinc-900"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Новости
              </h2>
              <Link
                href="/novosti"
                className="bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-10 md:py-4 hover:bg-[#3e1515] transition-colors"
              >
                СВЕ ВЕСТИ
              </Link>
            </div>
          </div>

          <div className="mx-auto max-w-[1300px]">
            <NewsCarousel />
          </div>
        </section>

        {/* ── Утврђење ─────────────────────────────────────────── */}
        <section className="relative w-full overflow-visible md:min-h-[450px] lg:min-h-[700px]">
          {/* Desktop only — велика артистичка слика */}
          <div className="hidden lg:block" style={{ position: 'absolute', top: '-270px', left: '-10px', width: '1500px', height: '1400px' }}>
            <Image
              src="/images/monastery.webp"
              alt="Манасија — утврђење"
              fill
              className="object-contain"
            />
          </div>

          {/* Tablet only */}
          <div className="hidden md:block lg:hidden" style={{ position: 'absolute', top: '-60px', left: '-150px', width: '1000px', height: '900px' }}>
            <Image
              src="/images/monastery.webp"
              alt="Манасија — утврђење"
              fill
              className="object-contain"
            />
          </div>

          {/* Mobile: overflowing image */}
          <div className="md:hidden" style={{ position: 'absolute', top: '-60px', left: '-120px', right: '-120px', height: '480px' }}>
            <Image
              src="/images/monastery.webp"
              alt="Манасија — утврђење"
              fill
              className="object-contain"
            />
          </div>

          {/* Текст */}
          <div className="relative mx-auto max-w-[1000px] px-4 md:px-8 h-full flex items-center">
            <div className="mx-auto w-full grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-24 pt-80 pb-10 md:py-32 items-start">
              <div>
                <h2
                  className="mt-12 md:mt-0 text-5xl md:text-7xl text-zinc-900 leading-tight"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  Утврђење
                </h2>
              </div>
              <div className="flex flex-col gap-4 max-w-lg">
                <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                  Једно од најупечатљивијих карактеристика Манастира Манасија је
                  његово импресивно утврђење. Oko цркве Свете Тројице налазе се бедеми
                  са 11 кула, од којих је најпознатија „Деспотова кула&#8221;. Ово утврђење
                  је пример врхунске српске архитектуре касног средњег века.
                </p>
                <Link
                  href="/o-manastiru"
                  className="w-fit bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-8 md:py-3 hover:bg-[#3e1515] transition-colors"
                >
                  САЗНАЈТЕ ВИШЕ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Архитектура ──────────────────────────────────────── */}
        <section className="w-full py-16 md:py-24 mt-0 md:mt-80">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Текст */}
            <div className="flex flex-col gap-6 max-w-lg">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Архитектура
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Архитектонски дизајн Манастира Манасија представља ремек-дело
                моравске школе градитељства. Црква Свете Тројице, друга по
                величини у средњој вековној Србији, истиче се своjом петокуполном
                конструкцијом и монументалним кубитом. Фасади су прекривене
                тесаником и танким слојем малтера, док унутрашност крије
                драгоцености фрескописа и архитектонских детаља који сведоче о
                мајсторству и духовном значају овог места.
              </p>
              <Link
                href="/o-manastiru"
                className="w-fit bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-8 md:py-3 hover:bg-[#3e1515] transition-colors"
              >
                САЗНАЈТЕ ВИШЕ
              </Link>
            </div>

            {/* Слика */}
            <div className="relative w-full h-[280px] md:h-auto md:min-h-[600px] flex items-center justify-center">
              {/* Desktop: artistic positioned image */}
              <div className="hidden md:block" style={{ position: 'absolute', top: '-60px', left: '-40px', width: '750px', height: '750px' }}>
                <Image
                  src="/images/arch.webp"
                  alt="Манасија — архитектура"
                  fill
                  className="object-contain"
                />
              </div>
              {/* Mobile: contained image */}
              <Image
                src="/images/arch.webp"
                alt="Манасија — архитектура"
                fill
                className="object-contain md:hidden"
              />
            </div>
          </div>
        </section>

        {/* ── Фрескопис ────────────────────────────────────────── */}
        <section className="relative w-full pt-16 md:pt-24 pb-0 overflow-visible">
          {/* Наслов и текст — центрирано */}
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto px-4 md:px-8 mb-2 md:mb-12">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Фрескопис
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              Иако делимично оштећене, фреске цркве Свете Тројице чине изузетну уметничку целину, сабирући богато
              искуство српског средњовековног сликарства. Виртуозном техником исликане су сцене из Библије, живописни
              портрети светаца и ктиторска композиција деспота Стефана Лазаревића. Сликарство Манасије високо се
              котира као „врхунско дело моравске школе и тог периода на целом Балкану&#8221;, а у европским оквирима познато
              је као „Ресавска ренесанса&#8221;.
            </p>
            <Link
              href="/o-manastiru"
              className="w-fit bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-8 md:py-3 hover:bg-[#3e1515] transition-colors"
            >
              САЗНАЈТЕ ВИШЕ
            </Link>
          </div>

          {/* Mobile: три слике у реду, леве и десне излазе ван екрана */}
          <div className="md:hidden relative" style={{ height: '360px' }}>
            <div
              className="absolute flex flex-row items-end mt-[-50px]"
              style={{ left: '-30vw', width: '160vw', height: '360px' }}
            >
              <div className="relative flex-1" style={{ height: '340px', marginBottom: '50px' }}>
                <Image src="/images/fr1.webp" alt="Фреска 1" fill className="object-contain" />
              </div>
              <div className="relative flex-1" style={{ height: '340px' }}>
                <Image src="/images/fr2.webp" alt="Фреска 2" fill className="object-contain" />
              </div>
              <div className="relative flex-1" style={{ height: '340px', marginBottom: '50px' }}>
                <Image src="/images/fr3.webp" alt="Фреска 3" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Desktop: лева и десна у нивоу, средња нижа */}
          <div className="hidden md:flex flex-row items-end justify-center gap-0 px-0">
            <div className="relative w-[400px] h-[340px] mb-16">
              <Image src="/images/fr1.webp" alt="Фреска 1" fill className="object-contain" />
            </div>
            <div className="relative w-[420px] h-[360px]" style={{ zIndex: 10 }}>
              <Image src="/images/fr2.webp" alt="Фреска 2" fill className="object-contain" />
            </div>
            <div className="relative w-[400px] h-[340px] mb-16">
              <Image src="/images/fr3.webp" alt="Фреска 3" fill className="object-contain" />
            </div>
          </div>
        </section>

        {/* ── Деспот Стефан ────────────────────────────────────── */}
        <section className="relative w-full py-16 md:py-24 overflow-hidden md:overflow-visible mt-8 md:mt-50">
          {/* Позадина — само на десктопу */}
          <div className="hidden md:block" style={{ position: 'absolute', top: '-180px', left: '-10px', width: '1700px', height: '1000px', zIndex: 0 }}>
            <Image
              src="/images/portbg.webp"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Садржај */}
          <div className="relative mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center" style={{ zIndex: 1 }}>
            {/* Портрет */}
            <div className="flex items-center justify-center">
              <div className="relative w-[260px] h-[260px] md:w-[420px] md:h-[420px]">
                <Image
                  src="/images/portrait2.webp"
                  alt="Деспот Стефан Лазаревић"
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
                Деспот Стефан
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Деспот Стефан Лазаревић, познат као Стефан Високи, био је не само
                вeрни стратег и витез, већ и значајан књижевник чија дела спадају у
                највреднија достигнућа српске средњовековне књижевности.
                Манастир Манасија, као његова задужбина и место вечног починка,
                сведочи о његовом неизмерном утицају и значају.
              </p>
              <Link
                href="/despot-stefan"
                className="w-fit bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-8 md:py-3 hover:bg-[#3e1515] transition-colors"
              >
                ЖИВОТОПИС
              </Link>
            </div>
          </div>
        </section>

        {/* ── Трпезарија и Библиотека ──────────────────────────── */}
        <section className="w-full py-16 md:py-24 mt-8 md:mt-50">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-48">

            {/* Трпезарија */}
            <div className="flex flex-col items-center gap-6">
              <h2
                className="text-4xl md:text-6xl text-zinc-900 self-start"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Трпезарија
              </h2>
              <div className="relative w-full h-[320px]">
                <Image
                  src="/images/build.webp"
                  alt="Трпезарија"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Манастир Манасија поседује јединствену трпезарију која је, за разлику од
                традиционалних манастирских трпезарија, слободно-стојећи објекат. Овај
                архитектонски драгуљ не само што пружа увид у живот монаха тог доба, већ
                представља и део одбрамбеног система манастира.
              </p>
              <Link
                href="/o-manastiru"
                className="w-fit bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-8 md:py-3 hover:bg-[#3e1515] transition-colors"
              >
                САЗНАЈТЕ ВИШЕ
              </Link>
            </div>

            {/* Библиотека */}
            <div className="flex flex-col items-center gap-6">
              <h2
                className="text-4xl md:text-6xl text-zinc-900 self-start"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Библиотека
              </h2>
              <div className="relative w-full h-[320px]">
                <Image
                  src="/images/book.webp"
                  alt="Библиотека"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Богата библиотека Манастира Манасија чува многе рукописе, књиге и иконе које
                сведоче о духовном и културном животу Србије у средњем веку. Овај драгоцени
                архив представља важан извор за проучавање српске историје, књижевности и
                уметности.
              </p>
              <Link
                href="/o-manastiru"
                className="w-fit bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-8 md:py-3 hover:bg-[#3e1515] transition-colors"
              >
                САЗНАЈТЕ ВИШЕ
              </Link>
            </div>

          </div>
        </section>

        {/* ── Ресавска школа ───────────────────────────────────── */}
        <section className="relative w-full overflow-visible mt-8 md:mt-50 md:min-h-[600px]">
          {/* Слика — само на десктопу */}
          <div className="hidden md:block" style={{ position: 'absolute', top: '-300px', left: '-280px', width: '1280px', height: '1120px', zIndex: 0 }}>
            <Image
              src="/images/school.webp"
              alt="Ресавска школа"
              fill
              className="object-contain"
            />
          </div>

          {/* Mobile: bleeding image */}
          <div className="md:hidden" style={{ position: 'absolute', left: '-80px', right: '-80px', top: 0, height: '340px', zIndex: 0 }}>
            <Image
              src="/images/school.webp"
              alt="Ресавска школа"
              fill
              className="object-contain"
            />
          </div>

          {/* Текст */}
          <div className="relative mx-auto max-w-[1200px] px-4 md:px-8 h-full flex items-center" style={{ zIndex: 1 }}>
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg pt-[300px] md:pt-0 pb-10 md:py-32">
              <h2
                className="mt-12 md:mt-0 text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Ресавска школа
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Манастир Манасија је био дом познатој Ресавској преписивачкој
                школи, која је окупљала учене монахе писце, преводиоце и
                преписиваоце. Њихов рад је имао значајан утицај на развој српске
                књижевности и културе у 15. веку.
              </p>
              <Link
                href="/o-manastiru"
                className="w-fit bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-wide md:tracking-widest px-5 py-2.5 md:px-8 md:py-3 hover:bg-[#3e1515] transition-colors"
              >
                САЗНАЈТЕ ВИШЕ
              </Link>
            </div>
          </div>
        </section>

        {/* ── Донације и Контакт ───────────────────────────────── */}
        <section className="relative w-full py-16 md:py-32 overflow-hidden mt-8">
          {/* Позадина — лого воден жиг */}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '700px', height: '700px', zIndex: 0, opacity: 1 }}>
            <Image
              src="/images/logo-big.webp"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          <div className="relative mx-auto max-w-[1200px] px-4 md:px-8 flex flex-col gap-16 md:gap-24" style={{ zIndex: 1 }}>

            {/* Донације */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              <div className="flex flex-col gap-5">
                <h2
                  className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  Донације
                </h2>
                <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                  Ваша подршка нам помаже да очувамо и негујемо богато наслеђе
                  Манастира Манасија. Ако желите да допринесете обнови и
                  одржавању манастирског комплекса, можете то учинити путем
                  донација које су добродошле и веома цењене.
                </p>
              </div>
              <div className="bg-[#3d2a1e] text-white p-8 flex flex-col gap-4">
                <p className="text-sm leading-relaxed">
                  <span className="font-bold">Рачун Манастира за динарске уплате:</span><br />
                  АИК Банка 105-0000000003776-30
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="font-bold">Девизни рачун:</span> АИК Банка 105-0040120010753-45
                </p>
                <p className="text-sm leading-relaxed">
                  За уплате из иностранства потребно је контактирати Манастир
                  за инструкције путем е-поште:{" "}
                  <a href="mailto:manastirmanasija@mts.rs" className="underline hover:opacity-80">
                    manastirmanasija@mts.rs
                  </a>
                </p>
              </div>
            </div>

            {/* Контакт */}
            <div className="flex flex-col items-center gap-6 text-center">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Контакт
              </h2>
              <div className="flex flex-col gap-2 text-sm md:text-base text-zinc-600">
                <p>Манастир Манасија, Деспотовац, Србија</p>
                <p>Координате: С 44° 06&apos; 03&quot; И 21° 28&apos; 09&quot;</p>
                <p>ГПС координате: С 44 06 060 И 21 28 163</p>
                <p>Телефон: +381 35 611 290</p>
                <p>
                  Е-пошта:{" "}
                  <a href="mailto:manastirmanasija@mts.rs" className="underline hover:text-zinc-900 transition-colors">
                    manastirmanasija@mts.rs
                  </a>
                </p>
              </div>
            </div>

          </div>
        </section>

      </div>
      <FooterSection />
    </main>
  );
}
