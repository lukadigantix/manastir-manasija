import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function DespotStefanPage() {
  return (
    <main className="overflow-hidden">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="w-full pt-6 pb-8 md:pt-40 md:pb-24 flex flex-col items-center text-center gap-8">
          {/* Портрет */}
          <div className="relative w-[340px] h-[340px] md:w-[620px] md:h-[620px]">
            <Image
              src="/images/portrait.webp"
              alt="Деспот Стефан Лазаревић"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Наслов */}
          <div className="flex flex-col items-center gap-0">
            <h1
              className="text-5xl md:text-8xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Деспот
            </h1>
            <h1
              className="text-5xl md:text-8xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Стефан Лазаревић
            </h1>
          </div>

          {/* Опис */}
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-2xl px-4 md:px-0">
            <span className="font-bold">
              Деспот Стефан Лазаревић (1377–1427)
            </span>
            , син кнеза Лазара и кнегиње Милице, био је један од најзначајнијих
            владара српске средњовековне државе. Као владар, војсковођа и
            књижевник, обележио је период обнове и културног развоја Српске
            деспотовине почетком 15. века.
            <span className="font-bold">
              {" "}
              Посебно место у његовом животу и владавини заузима манастир
              Манасија, његова најзначајнија задужбина и духовни центар државе.
            </span>
          </p>
        </section>

        {/* ── Слика манасије ───────────────────────────────────── */}
        <section className="relative w-full overflow-visible">
          {/* Mobile: overflow slika kao na pocetnoj */}
          <div className="md:hidden relative w-full h-[340px]">
            <div style={{ position: "absolute", top: "-40px", left: "-60px", right: "-60px", bottom: "-40px" }}>
              <Image
                src="/images/mon1.webp"
                alt="Манасија"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop: artisticka velika slika */}
          <div className="hidden md:block" style={{ minHeight: "700px", position: "relative" }}>
            <div
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
                src="/images/mon1.webp"
                alt="Манасија"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        <section className="relative w-full py-10 md:py-24 overflow-visible mt-8 md:mt-150">
          {/* Позадина — само на десктопу */}
          <div
            className="hidden md:block"
            style={{
              position: "absolute",
              top: "-180px",
              left: "-10px",
              width: "1700px",
              height: "1000px",
              zIndex: 0,
            }}
          >
            <Image
              src="/images/portbg.webp"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Mobile: centered portrait */}
          <div className="md:hidden flex justify-center mb-4">
            <div className="relative w-[260px] h-[260px]">
              <Image
                src="/images/portrait2.webp"
                alt="Деспот Стефан Лазаревић"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Садржај */}
          <div
            className="relative mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center"
            style={{ zIndex: 1 }}
          >
            {/* Портрет — само на десктопу */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-[420px] h-[420px]">
                <Image
                  src="/images/portrait2.webp"
                  alt="Деспот Стефан Лазаревић"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Текст */}
            <div className="flex flex-col gap-6 max-w-lg items-center md:items-start text-center md:text-left">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Деспот Стефан
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Деспот Стефан Лазаревић, познат као Стефан Високи, био је не
                само верни стратег и витез, већ и значајан књижевник чија дела
                спадају у највреднија достигнућа српске средњовековне
                књижевности.{" "}
                <span className="font-bold">
                  {" "}
                  Манастир Манасија, као његова задужбина и место вечног
                  починка, сведочи о његовом неизмерном утицају и значају.
                </span>
              </p>
  
            </div>
          </div>
        </section>

        <section className="relative w-full py-10 md:py-24 overflow-visible mt-8 md:mt-100">
          {/* Mobile: bleeding illustration from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/despot-culture.webp"
                alt="Духовни центар"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center overflow-visible">
            {/* Text */}
            <div className="flex flex-col gap-6 mt-0 md:mt-[-150px]">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Духовни и културни центар
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg">
                Под покровитељством деспота Стефана у Манасији је деловала
                чувена Ресавска преписивачка школа. Овде су монаси писци и
                преводиоци преписивали и преводили књиге, постављајући високе
                стандарде писмености и књижевности.
              </p>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg">
                Захваљујући томе, Манасија је постала један од најзначајнијих
                културних центара Балкана у 15. веку.
              </p>
              <Link
                href="/o-manastiru"
                className="w-fit bg-[#5a1e1e] text-white text-[10px] md:text-xs font-bold tracking-widest px-5 py-2.5 md:px-8 md:py-3 hover:bg-[#3e1515] transition-colors"
              >
                САЗНАЈТЕ ВИШЕ
              </Link>
            </div>

            {/* Illustration — само на десктопу */}
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
                  src="/images/Export/despot-culture.webp"
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
                src="/images/Export/resavska-uticaj.webp"
                alt="Задужбина"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Слика — само на десктопу */}
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
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg mt-0 md:mt-[-50px] py-10 md:py-0">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Задужбина и духовно наслеђе
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                За деспота Стефана Лазаревића Манасија није била само
                манастирска задужбина, већ и духовно и културно средиште његове
                државе. Подизањем овог манастира настојао је да створи место где
                ће се неговати вера, писменост и култура српског народа.
              </p>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Манасија је зато постала више од архитектонског и духовног
                подухвата — она је представљала симбол његове владарске визије и
                тежње да у тешким временима очува духовни и културни идентитет
                Србије.
              </p>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                И вековима након његове смрти, манастир Манасија остао је трајни
                споменик личности и делу свог ктитора, деспота Стефана
                Лазаревића.
              </p>
            </div>
          </div>
        </section>

        {/* ── Последње почивалиште ─────────────────────────────── */}
        <section className="w-full flex flex-col items-center mt-8 md:mt-50">
          {/* Слика — full width */}
          <div className="relative w-full h-[260px] md:h-[1089px]">
            <Image
              src="/images/Export/despot-remains.webp"
              alt="Последње почивалиште"
              fill
              className="object-cover"
            />
          </div>

          {/* Текст */}
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl px-4 md:px-8 py-10 md:py-20 mt-0 md:mt-[-50px] mb-10 md:mb-20">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Последње почивалиште
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              После своје смрти 1427. године, деспот Стефан Лазаревић сахрањен
              је у својој задужбини — манастиру Манасији. Његов гроб налази се
              унутар манастирске цркве и представља једно од најважнијих
              историјских места овог комплекса.
            </p>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
              Манасија је тако остала трајно повезана са својим ктитором, чија
              је владавина оставила дубок траг у историји српске државе и
              културе.
            </p>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
}
