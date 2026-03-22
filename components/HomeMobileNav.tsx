"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "ПОЧЕТНА" },
  { href: "/o-manastiru", label: "МАНАСТИР" },
  { href: "/despot-stefan", label: "ДЕСПОТ СТЕФАН" },
  { href: "/donacije", label: "ДОНАЦИЈЕ" },
  { href: "/literatura", label: "ЛИТЕРАТУРА" },
  { href: "/kontakt", label: "КОНТАКТ" },
  { href: "/prodavnica", label: "ПРОДАВНИЦА" },
];

export default function HomeMobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <div className="lg:hidden sticky top-0 left-0 w-full z-50 bg-white border-b border-zinc-100 px-4 py-3 flex items-center justify-between">
      <Link href="/" aria-label="Почетна">
        <Image src="/logo.png" alt="Manasija Logo" width={44} height={44} priority />
      </Link>

      <button
        onClick={() => setOpen(true)}
        aria-label="Отвори мени"
        className="flex flex-col justify-center gap-[5px] w-9 h-9 cursor-pointer"
      >
        <span className="block h-[2px] w-full bg-zinc-800 rounded-full" />
        <span className="block h-[2px] w-full bg-zinc-800 rounded-full" />
        <span className="block h-[2px] w-full bg-zinc-800 rounded-full" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[60]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-[#1c0e0e] z-[70] flex flex-col py-10 px-8 gap-6 transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between mb-4">
          <Image src="/logo.png" alt="Manasija Logo" width={40} height={40} />
          <button
            onClick={() => setOpen(false)}
            aria-label="Затвори мени"
            className="text-white/60 hover:text-white transition-colors text-2xl leading-none cursor-pointer"
          >
            ✕
          </button>
        </div>
        <nav>
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block text-xs font-bold tracking-widest py-3 border-b border-white/10 text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
