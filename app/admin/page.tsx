import Image from "next/image";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen flex bg-zinc-50">

      {/* ── Sidebar ── */}
      <aside className="w-56 bg-white border-r border-zinc-100 flex flex-col">
        <div className="px-6 py-6">
          <Link href="/">
            <Image src="/logo.png" alt="Manasija" width={40} height={40} />
          </Link>
        </div>

        <nav className="flex-1 px-3">
          <ul className="flex flex-col gap-1">
            <li>
              <Link
                href="/admin/novosti"
                className="block px-4 py-2.5 text-xs font-bold tracking-widest text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
              >
                НОВОСТИ
              </Link>
            </li>
            <li>
              <Link
                href="/admin/prodavnica"
                className="block px-4 py-2.5 text-xs font-bold tracking-widest text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors"
              >
                ПРОДАВНИЦА
              </Link>
            </li>
          </ul>
        </nav>

        <div className="px-3 pb-6">
          <button className="w-full px-4 py-2.5 text-xs font-bold tracking-widest text-zinc-400 hover:text-zinc-700 transition-colors text-left">
            ОДЈАВИ СЕ
          </button>
        </div>
      </aside>

      {/* ── Content ── */}
      <main className="flex-1">
      </main>

    </div>
  );
}

