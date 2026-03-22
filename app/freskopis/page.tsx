import Image from "next/image";
import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function FreskopisPage() {
  return (
    <main className="overflow-hidden">
      <div
        className="w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="w-full pt-24 md:pt-40 pb-0 flex flex-col items-center overflow-visible">
          {/* Наслов */}
          <h1
            className="text-5xl md:text-8xl text-zinc-900 leading-tight mb-8 px-4 md:px-0 text-center"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Фрескопис
          </h1>

          {/* Опис */}
          <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-3xl text-center px-4 md:px-8 mb-4 md:mb-16">
            Фрескопис у Манасији представља један од најзначајнијих примера
            Моравске школе у српској средњовековној уметности. Распоређен по
            зидовима, куполи и олтарском простору цркве, он приказује Христове
            циклусе, живот светитеља и ктиторске сцене деспота Стефана
            Лазаревића. Поред уметничке вредности, фреске служе и као духовни
            водич, преносећи догматске и моралне поруке верницима. Њихова
            техника, изражајност ликова и богата орнаментација чине их кључним
            сведочанством културног и духовног живота Србије почетком 15. века.
          </p>

          {/* Три слике — мобил */}
          <div className="md:hidden relative w-full" style={{ height: '320px' }}>
            <div
              className="absolute flex flex-row items-end mt-[-80px]"
              style={{ left: '-30vw', width: '160vw', height: '320px' }}
            >
              <div className="relative flex-1" style={{ height: '300px', marginBottom: '50px' }}>
                <Image src="/images/fr1.webp" alt="Фреска 1" fill className="object-contain" />
              </div>
              <div className="relative flex-1" style={{ height: '300px' }}>
                <Image src="/images/fr2.webp" alt="Фреска 2" fill className="object-contain" />
              </div>
              <div className="relative flex-1" style={{ height: '300px', marginBottom: '50px' }}>
                <Image src="/images/fr3.webp" alt="Фреска 3" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Три слике — десктоп */}
          <div
            className="hidden md:flex relative w-full items-end justify-center overflow-visible"
            style={{ minHeight: "460px" }}
          >
            {/* Лева слика — апсолутно, излази лево */}
            <div
              style={{
                position: "absolute",
                bottom: "300px",
                left: "-520px",
                width: "1060px",
                height: "1020px",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/fr1.webp"
                alt="Фреска 1"
                fill
                className="object-contain object-right"
              />
            </div>

            {/* Средња слика — остаје у нормалном току */}
            <div
              className="relative flex-shrink-0"
              style={{
                width: "920px",
                height: "960px",
                zIndex: 2,
                marginTop: "-200px",
              }}
            >
              <Image
                src="/images/fr2.webp"
                alt="Фреска 2"
                fill
                className="object-contain"
              />
            </div>

            {/* Десна слика — апсолутно, излази десно */}
            <div
              style={{
                position: "absolute",
                bottom: "300px",
                right: "-520px",
                width: "1060px",
                height: "1020px",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/fr3.webp"
                alt="Фреска 3"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Наслов испод фрески */}
          <h2
            className="text-5xl md:text-7xl text-zinc-900 leading-tight text-center -mt-8 md:mt-0 px-4 md:px-8"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            Информације о
            <br />
            фрескопису Манасије
          </h2>
        </section>

        <section className="relative w-full pt-6 pb-8 md:py-24 overflow-visible">
          {/* Mobile: bleeding image from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/freske-org.webp"
                alt="Организација фрескописа"
                fill
                className="object-contain object-right"
              />
            </div>
          </div>

          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center overflow-visible">
            {/* Text */}
            <div className="flex flex-col gap-6 mt-0 md:mt-20">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Организација фрескописа
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg">
                Фреске су распоређене по зонама унутрашњег простора цркве: Нава
                (главна просторна оса) – Христови циклуси, апостоли. Претходни
                део олтара (Свети олтар) – сцена Тајне вечере и Богородица. Сви
                страни зидови и купола – прикази деспота као ктитора, светитељи,
                сцене из живота Христовог. Свака зона има свој духовни и
                симболички значај: врх куполе као небо и Христос, зидови као
                живот светица и учење верницима.
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
                  src="/images/Export/freske-org.webp"
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
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-140px", right: "-60px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/freske-grafija.webp"
                alt="Иконографија"
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
              src="/images/Export/freske-grafija.webp"
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
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg py-10 md:py-32">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Иконографија деспота Стефана Лазаревића
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Приказан је у више фресака, обично као ктитор у аутентичној
                одори, са ктиторским даровима (црквени модел и поклон у злату).
                Ово је класичан пример „књижевне иконографије“, где владар и
                духовни живот цркве постају визуелно повезани.
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full pt-6 pb-8 md:py-24 overflow-visible">
          {/* Mobile: bleeding image from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/freske-uticaj.webp"
                alt="Утицаји и стил"
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
                Утицаји и стил
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg">
                Јасан утицај византијске уметности, али адаптирано у стил
                Моравске школе: богата декорација, употреба геометријских и
                флоралних орнамената. Карактеристично за Моравску школу:
                изражене физиономије ликова, емоционални изрази, сложена
                композиција сцена.
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
                  src="/images/Export/freske-uticaj.webp"
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
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-140px", right: "-60px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/freske-tehnika.webp"
                alt="Техника"
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
              src="/images/Export/freske-tehnika.webp"
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
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg py-10 md:py-32">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Техника
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Фрескопис је рађен „по мокром малтеру“ (true fresco), што
                омогућава бојама да се природно апсорбују у зид. Природни
                пигменти: окер, сребрно-сиви, тиркиз, црвена земља.
              </p>
            </div>
          </div>
        </section>

        <section className="relative w-full pt-6 pb-8 md:py-24 overflow-visible">
          {/* Mobile: bleeding image from the right */}
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-60px", right: "-140px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/freske-znacenje.webp"
                alt="Значење"
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
                Значење
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg">
                Фреске нису само уметност, већ служе као духовни водич: образују
                вернике о догмату, животу светитеља и историји деспота.
                Деспотова улога као покровитеља духовног живота наглашена је
                кроз ктиторске сцене.
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
                  src="/images/Export/freske-znacenje.webp"
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
          <div className="md:hidden relative" style={{ height: "480px", marginTop: "-48px", marginBottom: "-20px" }}>
            <div style={{ position: "absolute", left: "-140px", right: "-60px", top: 0, height: "480px" }}>
              <Image
                src="/images/Export/freske-sacuvanost.webp"
                alt="Сачуваност"
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
              src="/images/Export/freske-sacuvanost.webp"
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
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg py-10 md:py-32">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Сачуваност
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Велики део фрескописа је очуван у оригиналу, али неки делови су
                обновљени током 20. века. Конзерваторски радови су укључивали
                чишћење, фиксацију боја и заштиту од влаге.
              </p>
            </div>
          </div>
        </section>
      </div>
      <FooterSection />
    </main>
  );
}
