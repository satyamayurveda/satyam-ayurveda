import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Award, HeartHandshake, Leaf, UserRoundCheck } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { clinic } from "@/data/clinic";

export const metadata: Metadata = {
  title: "About Vaidya Aarti Jindal",
  description: "Meet Vaidya Aarti Jindal, B.A.M.S. Amritsar and P.G.D.H.H.C. Apollo, at Satyam Ayurvedic Clinic in Govindpuram, Ghaziabad."
};

export default function AboutDoctorPage() {
  const highlights: [string, string, LucideIcon][] = [
    ["Education", "B.A.M.S. from Amritsar and P.G.D.H.H.C. from Apollo, combining classical Ayurvedic training with holistic health counseling.", Award],
    ["Experience", "Clinical care for chronic digestive, skin, ENT, reproductive, respiratory, joint, kidney stone, and piles-related concerns.", UserRoundCheck],
    ["Philosophy", "Ayurveda treats the person, not just the symptom. Diet, routine, digestion, stress, and constitution are all considered.", Leaf],
    ["Approach", "Every plan is personalized, with medicine prepared or recommended after assessment and follow-up guidance.", HeartHandshake]
  ];

  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow="About Doctor" title={clinic.doctor}>
        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <div className="rounded-lg bg-white p-5 shadow-soft">
            <div className="grid aspect-square place-items-center rounded-md bg-clinic-mint text-center">
              <div>
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-white text-5xl text-clinic-leaf shadow-sm">वै</div>
                <p className="mt-4 font-bold text-clinic-forest">Doctor photo placeholder</p>
              </div>
            </div>
            <p className="mt-5 text-xl font-bold text-clinic-forest">{clinic.doctor}</p>
            <p className="mt-1 text-sm font-semibold text-clinic-leaf">{clinic.qualifications}</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {highlights.map(([title, text, Icon]) => (
              <Card key={String(title)}>
                <CardContent>
                  <Icon className="text-clinic-gold" />
                  <h2 className="mt-4 text-xl font-bold text-clinic-forest">{title}</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
