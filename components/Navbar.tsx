"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/novosti", label: "НОВОСТИ" },
  { href: "/prodavnica", label: "ПРОДАВНИЦА" },
  { href: "/nalog", label: "НАЛОГ" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isWhiteNav = pathname === "/o-manastiru";
  return (
    <header className="w-full px-6 pt-4 absolute top-0 left-0 z-50">
        <nav className="mx-auto max-w-[1300px] relative flex items-center justify-center px-8 py-3">
        <Link href="/" aria-label="Почетна" className="absolute left-8">
          <Image src="/logo.png" alt="Manasija Logo" width={52} height={52} priority />
        </Link>
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-semibold tracking-widest transition-colors ${isWhiteNav ? "text-white hover:text-white/60" : "text-zinc-800 hover:text-zinc-500"}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
