import Image from "next/image";
import FooterSection from "@/components/FooterSection";

export default function KontaktPage() {
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
                src="/images/Export/fortress-history.webp"
                alt="Манасија — контакт"
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
                Контакт
              </h1>
              <p className="text-sm md:text-base text-zinc-600 leading-relaxed max-w-lg text-justify">
                Налазимо се у Деспотовцу, у долини реке Ресаве. Добродошли сте
                да нас посетите, упутите питање или нас контактирате у вези са
                богослужењима, посетама и донацијама.
              </p>
            </div>

            {/* Илустрација — desktop only */}
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
                  alt="Манасија — контакт"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Подаци за контакт ────────────────────────────────── */}
        <section className="w-full py-12 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            {/* Адреса */}
            <div className="bg-[#3d2a1e] text-white p-6 md:p-10 flex flex-col gap-5">
              <h3
                className="text-3xl md:text-4xl leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Адреса
              </h3>
              <div className="w-12 h-[2px] bg-white/40" />
              <div className="flex flex-col gap-3 text-sm leading-relaxed">
                <p>Манастир Манасија</p>
                <p>Деспотовац, Србија</p>
                <p className="mt-2">
                  <span className="font-bold block mb-1">Координате:</span>
                  С 44° 06&apos; 03&quot; И 21° 28&apos; 09&quot;
                </p>
                <p>
                  <span className="font-bold block mb-1">ГПС:</span>
                  С 44 06 060 И 21 28 163
                </p>
              </div>
            </div>

            {/* Телефон и е-пошта */}
            <div className="bg-zinc-900 text-white p-6 md:p-10 flex flex-col gap-5">
              <h3
                className="text-3xl md:text-4xl leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Телефон и е-пошта
              </h3>
              <div className="w-12 h-[2px] bg-white/40" />
              <div className="flex flex-col gap-4 text-sm leading-relaxed">
                <p>
                  <span className="font-bold block mb-1">Телефон:</span>
                  <a href="tel:+38135611290" className="hover:opacity-70 transition-opacity">
                    +381 35 611 290
                  </a>
                </p>
                <p>
                  <span className="font-bold block mb-1">Е-пошта:</span>
                  <a
                    href="mailto:manastirmanasija@mts.rs"
                    className="underline hover:opacity-70 transition-opacity break-all"
                  >
                    manastirmanasija@mts.rs
                  </a>
                </p>
              </div>
            </div>

            {/* Радно време */}
            <div className="border border-zinc-300 bg-white/60 p-6 md:p-10 flex flex-col gap-5">
              <h3
                className="text-3xl md:text-4xl text-zinc-900 leading-tight"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Посете
              </h3>
              <div className="w-12 h-[2px] bg-zinc-300" />
              <div className="flex flex-col gap-3 text-sm leading-relaxed text-zinc-700">
                <p>
                  <span className="font-bold block mb-1">Радним данима:</span>
                  08:00 — 19:00
                </p>
                <p>
                  <span className="font-bold block mb-1">Викендом и празницима:</span>
                  07:00 — 20:00
                </p>
                <p className="mt-2 text-zinc-500">
                  Улаз је слободан. За групне посете препоручујемо претходну најаву.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ── Порука ───────────────────────────────────────────── */}
        <section className="relative w-full py-16 md:py-32 overflow-hidden">
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
            <Image src="/images/logo-big.webp" alt="" fill className="object-contain" />
          </div>
          <div
            className="relative mx-auto max-w-[700px] px-4 md:px-8 flex flex-col items-center text-center gap-6"
            style={{ zIndex: 1 }}
          >
            <h2
              className="text-5xl md:text-7xl text-zinc-900 leading-tight"
              style={{ fontFamily: "var(--font-caveat), cursive" }}
            >
              Добродошли
              <br />
              у Манасију
            </h2>
            <p className="text-sm md:text-base text-zinc-600 leading-relaxed text-justify">
              Врата Манасије су отворена за све богомољце, посетиоце и
              истраживаче. Радујемо се вашем доласку и молимо Господа да
              вас благослови на путу до наше свете лавре.
            </p>
          </div>
        </section>

      </div>

      {/* ── Мапа — full width uz footer ──────────────────────── */}
      <div style={{ height: "280px", width: "100%" }} className="md:h-[480px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.7!2d21.4690!3d44.1008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4752a7f1f1f1f1f1%3A0x1!2sManastir+Manasija!5e0!3m2!1ssr!2srs!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Мапа — Манастир Манасија"
        />
      </div>
      <FooterSection />
    </main>
  );
}
