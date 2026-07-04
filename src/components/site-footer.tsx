import Link from "next/link";
import { clinic } from "@/data/clinic";

export function SiteFooter() {
  return (
    <footer className="border-t border-clinic-leaf/10 bg-clinic-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="text-lg font-bold">{clinic.name}</p>
          <p className="mt-1 text-sm text-white/75">{clinic.hindiName}</p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-white/75">
            Doctor-led Ayurvedic consultations, personalized medicines, and treatment kit delivery across India.
          </p>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-3 text-sm text-white/75">{clinic.shortAddress}</p>
          <p className="mt-2 text-sm text-white/75">{clinic.phones.join(" / ")}</p>
        </div>
        <div>
          <p className="font-semibold">Legal</p>
          <div className="mt-3 grid gap-2 text-sm text-white/75">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/sitemap.xml">Sitemap</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/60">
        Treatment outcomes vary from person to person. This website does not replace emergency medical care.
      </div>
    </footer>
  );
}
