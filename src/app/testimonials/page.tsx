import type { Metadata } from "next";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Patient Testimonials",
  description: "Patient reviews and experience stories for Satyam Ayurvedic Clinic, Ghaziabad."
};

export default function TestimonialsPage() {
  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow="Reviews" title="Patient Testimonials">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <Card key={review.name}>
              <CardContent>
                <p className="text-lg text-clinic-gold">{"★".repeat(review.rating)}</p>
                <p className="mt-4 leading-7 text-slate-700">"{review.text}"</p>
                <p className="mt-5 font-bold text-clinic-forest">{review.name}</p>
                <p className="text-sm text-slate-500">{review.city}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-sm text-slate-600">Testimonials are sample CMS-ready entries. Replace them with verified patient consent records before launch.</p>
      </Section>
    </main>
  );
}
