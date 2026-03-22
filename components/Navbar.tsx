"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "ПОЧЕТНА" },
  { href: "/o-manastiru", label: "МАНАСТИР" },
  { href: "/despot-stefan", label: "ДЕСПОТ СТЕФАН" },
  { href: "/donacije", label: "ДОНАЦИЈЕ" },
  { href: "/kontakt", label: "КОНТАКТ" },
  { href: "/prodavnica", label: "ПРОДАВНИЦА" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      {/* Desktop nav — only on large screens (≥1024px) */}
      <header className="hidden lg:block w-full px-6 pt-4 absolute top-0 left-0 z-50">
        <nav className="mx-auto max-w-[1300px] relative flex items-center justify-center px-8 py-3">
          <Link href="/" aria-label="Почетна" className="absolute left-8">
            <Image src="/logo.png" alt="Manasija Logo" width={52} height={52} priority />
          </Link>
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-semibold tracking-widest transition-colors text-zinc-800 hover:text-zinc-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile hamburger button — rendered via HomeMobileNav, nothing here */}
    </>
  );
}
