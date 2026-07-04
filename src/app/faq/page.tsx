import type { Metadata } from "next";
import { Section } from "@/components/section";
import { faqs } from "@/data/clinic";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Questions about consultation fees, medicine delivery, online consultation, refunds, and treatment duration."
};

export default function FaqPage() {
  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow="FAQ" title="Frequently Asked Questions">
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-lg bg-white p-5 shadow-soft">
              <summary className="cursor-pointer font-bold text-clinic-forest">{faq.q}</summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </main>
  );
}
