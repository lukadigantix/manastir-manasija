import Link from "next/link";

export default function NalogPage() {
  return (
    <main>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
        style={{ backgroundImage: "url('/images/bgbodyfinal.webp')" }}
      >
        {/* Header spacer for navbar */}
        <div className="pt-32 flex-1 flex items-center justify-center px-4 pb-16">
          <div className="w-full max-w-md">
            <div className="bg-white/90 backdrop-blur-sm border border-zinc-200 p-10">
              <h1
                className="text-5xl text-zinc-900 mb-2"
                style={{ fontFamily: "var(--font-caveat), cursive" }}
              >
                Пријава
              </h1>
              <p className="text-xs font-semibold tracking-widest text-zinc-500 mb-10">
                <Link href="/" className="hover:text-zinc-800 transition-colors">ПОЧЕТНА</Link>
                {" / "}
                <span className="text-zinc-800">НАЛОГ</span>
              </p>

              <form className="flex flex-col gap-5">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold tracking-widest text-zinc-700"
                  >
                    ИМЕЈЛ
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="vas@email.com"
                    className="w-full border border-zinc-300 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-[#5a1e1e] transition-colors bg-white"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="password"
                    className="text-xs font-bold tracking-widest text-zinc-700"
                  >
                    ЛОЗИНКА
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    placeholder="••••••••"
                    className="w-full border border-zinc-300 px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 outline-none focus:border-[#5a1e1e] transition-colors bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full bg-[#5a1e1e] text-white text-xs font-bold tracking-widest py-4 hover:bg-[#3e1515] transition-colors"
                >
                  ПРИЈАВИ СЕ
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

