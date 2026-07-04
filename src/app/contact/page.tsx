import type { Metadata } from "next";
import { MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/forms";
import { Section } from "@/components/section";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Contact Satyam Ayurvedic Clinic",
  description: "Call 9899842598 or 8076079269. Visit E-56 Govindpuram Bus Stand Ke Paas, Govindpuram, Ghaziabad."
};

export default function ContactPage() {
  const mapsQuery = encodeURIComponent(clinic.address);
  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow="Contact" title="Visit or Call the Clinic">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="overflow-hidden rounded-lg bg-white shadow-soft">
            <iframe
              title="Satyam Ayurvedic Clinic map"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="h-80 w-full border-0"
              loading="lazy"
            />
            <div className="grid gap-4 p-5">
              <p className="flex gap-3 text-slate-700"><MapPin className="text-clinic-gold" /> {clinic.shortAddress}</p>
              <p className="flex gap-3 text-slate-700"><Phone className="text-clinic-gold" /> {clinic.phones.join(" / ")}</p>
              <p className="flex gap-3 text-slate-700"><Clock className="text-clinic-gold" /> {clinic.hours}</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </main>
  );
}
