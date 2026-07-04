import type { Metadata } from "next";
import Image from "next/image";
import { ClipboardCheck, FlaskConical, PackageCheck, Truck } from "lucide-react";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Pan India Ayurvedic Medicine Delivery",
  description: "Online consultation, customized medicine preparation, courier dispatch, tracking details, and delivery across India."
};

export default function DeliveryPage() {
  const steps = [
    ["Online consultation", "Share symptoms, reports, history, and current medicines.", ClipboardCheck],
    ["Customized preparation", "Doctor-guided medicines or treatment kits are selected.", FlaskConical],
    ["Courier dispatch", "Your package is packed and sent by courier.", PackageCheck],
    ["Tracking details", "Tracking details are shared by phone or WhatsApp.", Truck]
  ] as const;

  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow="Pan India Delivery" title="Ayurvedic Medicines Delivered Across India">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
          <div className="grid gap-4">
            {steps.map(([title, text, Icon], index) => (
              <div key={String(title)} className="flex gap-4 rounded-lg bg-white p-5 shadow-soft">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-clinic-mint font-bold text-clinic-leaf">{index + 1}</div>
                <div>
                  <Icon className="text-clinic-gold" />
                  <h2 className="mt-2 text-lg font-bold text-clinic-forest">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-lg bg-white p-4 shadow-soft">
            <Image src="/images/india-delivery.svg" alt="Pan India Ayurvedic medicine delivery map" width={900} height={700} className="h-auto w-full rounded-md" />
            <p className="mt-4 text-center text-sm leading-6 text-slate-600">
              Delhi NCR, Uttar Pradesh, Punjab, Haryana, Rajasthan, Maharashtra, Karnataka, Tamil Nadu, West Bengal, and more.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
