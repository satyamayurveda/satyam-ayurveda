import type { Metadata } from "next";
import { Storefront } from "@/components/store";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Ayurvedic Medicine Store",
  description: "Order Ayurvedic wellness kits and personalized medicines with Pan India delivery after consultation."
};

export default function StorePage() {
  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow="Medicine Store" title="Treatment Kits & Ayurvedic Medicines">
        <Storefront />
      </Section>
    </main>
  );
}
