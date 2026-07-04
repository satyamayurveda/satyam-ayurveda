import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { treatments } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Ayurvedic Treatments in Ghaziabad",
  description: "Ayurvedic support for PCOD, piles, infertility, digestive disorders, kidney stones, skin, ENT, respiratory, joint and men's health concerns."
};

export default function TreatmentsPage() {
  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow="Treatments" title="Ayurvedic Treatment Areas">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {treatments.map(({ title, items, summary, icon: Icon }) => (
            <Card key={title}>
              <CardContent>
                <Icon className="text-clinic-leaf" />
                <h2 className="mt-4 text-xl font-bold text-clinic-forest">{title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
                <ul className="mt-4 grid gap-2 text-sm text-slate-700">
                  {items.map((item) => (
                    <li key={item} className="rounded-md bg-clinic-soft px-3 py-2">{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 rounded-md bg-white p-4 text-sm font-semibold text-clinic-forest shadow-sm">Disclaimer: Treatment outcomes vary from person to person.</p>
      </Section>
    </main>
  );
}
