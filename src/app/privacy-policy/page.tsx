import { Section } from "@/components/section";

export default function PrivacyPage() {
  return (
    <main>
      <Section title="Privacy Policy">
        <div className="max-w-3xl rounded-lg bg-white p-6 leading-7 text-slate-700 shadow-soft">
          <p>Patient inquiries, contact details, health concerns, and report uploads are used only to respond to consultation, medicine, and order requests.</p>
          <p className="mt-4">Do not submit emergency medical information through this website. For urgent care, contact local emergency services.</p>
        </div>
      </Section>
    </main>
  );
}
