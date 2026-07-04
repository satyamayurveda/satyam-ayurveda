import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { PhoneCall, Video, MessageCircle } from "lucide-react";
import { ConsultationForm } from "@/components/forms";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Online Ayurvedic Consultation India",
  description: "Book phone, video, or WhatsApp consultation with Satyam Ayurvedic Clinic for personalized Ayurveda care and medicine delivery."
};

export default function ConsultationPage() {
  const modes: [string, string, LucideIcon][] = [
    ["Phone Consultation", "Speak directly with the clinic team for assessment and guidance.", PhoneCall],
    ["Video Consultation", "Useful when visible symptoms or report discussion is needed.", Video],
    ["WhatsApp Consultation", "Share symptoms and reports conveniently before follow-up.", MessageCircle]
  ];

  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow="Book Appointment" title="Online Consultation Booking">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <ConsultationForm />
          <div className="grid gap-4">
            {modes.map(([title, text, Icon]) => (
              <Card key={String(title)}>
                <CardContent>
                  <Icon className="text-clinic-gold" />
                  <h2 className="mt-3 text-lg font-bold text-clinic-forest">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
