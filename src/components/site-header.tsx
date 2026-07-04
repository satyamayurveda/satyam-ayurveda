"use client";

import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { clinic } from "@/data/clinic";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/utils";

const nav = [
  ["Doctor", "/about-doctor"],
  ["Treatments", "/treatments"],
  ["Consultation", "/consultation"],
  ["Medicine Store", "/store"],
  ["Delivery", "/delivery"],
  ["Reviews", "/testimonials"],
  ["FAQ", "/faq"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "HI">("EN");

  return (
    <header className="sticky top-0 z-50 border-b border-clinic-leaf/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0">
          <p className="truncate text-base font-extrabold text-clinic-forest">{lang === "EN" ? clinic.name : clinic.hindiName}</p>
          <p className="text-xs font-medium text-clinic-leaf">{clinic.tagline}</p>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm font-semibold text-slate-700 hover:text-clinic-leaf">
              {label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" onClick={() => setLang(lang === "EN" ? "HI" : "EN")} aria-label="Switch language">
            {lang === "EN" ? "हिंदी" : "English"}
          </Button>
          <Button asChild variant="secondary" size="sm">
            <a href={`tel:${clinic.phones[0]}`}>
              <Phone size={16} /> Call
            </a>
          </Button>
          <Button asChild size="sm">
            <Link href="/consultation">Book</Link>
          </Button>
        </div>
        <button className="rounded-md p-2 text-clinic-forest lg:hidden" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-clinic-leaf/10 bg-white px-4 py-4 lg:hidden">
          <div className="grid gap-3">
            {nav.map(([label, href]) => (
              <Link key={href} href={href} className="rounded-md px-2 py-2 font-semibold text-clinic-forest" onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <Button asChild variant="secondary">
                <a href={whatsappLink("Namaste, I want to consult Satyam Ayurvedic Clinic.")}>WhatsApp</a>
              </Button>
              <Button asChild>
                <Link href="/consultation">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
