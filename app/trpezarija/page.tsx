import Image from "next/image";
import Link from "next/link";
import FooterSection from "@/components/FooterSection";

export default function TrpezarijaPage() {
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
                src="/images/Export/trpezarija-hero.webp"
                alt="Трпезарија"
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
                Трпезарија
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Трпезарија Манасије била је срце монашког живота, место окупљања
                монаха за заједничке обеде и духовну размислу. Ова грађевина
                није имала само практичну улогу, већ је и архитектонски важан
                део манастирског комплекса, са простором који одражава моравски
                стил и хармонију са околним конацима и црквом.
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
                  src="/images/Export/trpezarija-hero.webp"
                  alt="Манасија — илустрација"
                  fill
                  className="object-contain"
                />
              </div>
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
                src="/images/Export/trpezarija-prostor.webp"
                alt="Arhitektura i prostor"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Slika desktop only */}
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
              src="/images/Export/trpezarija-prostor.webp"
              alt="Resavska skola"
              fill
              className="object-contain"
            />
          </div>

          {/* Tekst */}
          <div
            className="relative mx-auto max-w-[1200px] px-4 md:px-8 h-full flex items-center"
            style={{ zIndex: 1 }}
          >
            <div className="ml-0 md:ml-auto flex flex-col gap-6 max-w-lg pt-0 pb-8 md:py-32">
              <h2
                className="text-5xl md:text-7xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Архитектура и простор
              </h2>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Трпезарија је грађена у складу са Моравском школом,
                карактеристична по једноставној, али строгом архитектонском
                изразу.
              </p>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Простор је обично једнобродан или са низом стубова који
                раздвајају централни пролаз од бочних делова.
              </p>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
                Кровна конструкција и декоративни елементи (арки, камени
                орнаменти) повезују трпезарију са црквеним и коначким
                комплексом.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl px-4 md:px-8 py-10 md:py-20">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Функција и живот у трпезарији
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              Монаси су у трпезарији обављали дневне оброке, уз молитву и читање
              духовне литературе.
            </p>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              Трпезарија је такође служила као место састанака и монашких
              дискусија, што је доприносило културном и духовном животу
              манастира. Неке трпезарије имале су посебне просторе за госте и
              ходочаснике, што је Манасију повезивало са широм регијом.
            </p>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          {/* Слика — full width */}
          <div className="relative w-full h-[260px] md:h-[1089px]">
            <Image
              src="/images/Export/trpezarija-zivot.webp"
              alt="Последње почивалиште"
              fill
              className="object-cover"
            />
          </div>

          {/* Значај */}
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl px-4 md:px-8 py-8 md:py-20 mt-0 md:mt-[-100px] mb-8 md:mb-[100px]">
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Значај
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              Трпезарија представља пример како функционални простори у
              манастирима нису били самo практични, већ и духовно и
              архитектонски значајни. Очувана је као део комплекса и сведочи о
              животу монаха и организацији манастирског свакодневља.
            </p>
          </div>
        </section>
      </div>

      <FooterSection />
    </main>
  );
}
