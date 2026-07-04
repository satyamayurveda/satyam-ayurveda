import { Section } from "@/components/section";

export default function TermsPage() {
  return (
    <main>
      <Section title="Terms & Conditions">
        <div className="max-w-3xl rounded-lg bg-white p-6 leading-7 text-slate-700 shadow-soft">
          <p>Consultations and medicines are provided after clinical assessment. Product availability, pricing, shipping timelines, and treatment duration may vary.</p>
          <p className="mt-4">Treatment outcomes vary from person to person. Consultation fees are generally non-refundable. Medicine refunds depend on dispatch status and product condition.</p>
        </div>
      </Section>
    </main>
  );
}
