import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StickyActions } from "@/components/sticky-actions";
import { ExitIntent } from "@/components/exit-intent";
import { clinic } from "@/data/clinic";
import { siteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Satyam Ayurvedic Clinic Ghaziabad | Online Ayurvedic Consultation India",
    template: "%s | Satyam Ayurvedic Clinic"
  },
  description:
    "Consult Vaidya Aarti Jindal at Satyam Ayurvedic Clinic, Govindpuram, Ghaziabad. Online Ayurveda consultation and personalized Ayurvedic medicine delivery across India.",
  keywords: [
    "Ayurvedic doctor in Ghaziabad",
    "Ayurvedic clinic Govindpuram",
    "PCOD treatment Ayurveda",
    "Ayurvedic piles treatment",
    "Ayurvedic infertility treatment",
    "Ayurvedic medicine delivery India",
    "Online Ayurvedic consultation India"
  ],
  openGraph: {
    title: "Satyam Ayurvedic Clinic",
    description: "Natural Healing Through Ayurveda with online consultation and Pan India medicine delivery.",
    url: siteUrl,
    siteName: clinic.name,
    locale: "en_IN",
    type: "website"
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    alternateName: clinic.hindiName,
    description: "Ayurvedic clinic in Ghaziabad offering online consultation and medicine delivery across India.",
    medicalSpecialty: "Ayurveda",
    address: {
      "@type": "PostalAddress",
      streetAddress: "E-56, Govindpuram Bus Stand Ke Paas, Govindpuram",
      addressLocality: "Ghaziabad",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN"
    },
    telephone: clinic.phones,
    openingHours: "Mo-Sa 10:00-19:00",
    founder: {
      "@type": "Person",
      name: clinic.doctor,
      honorificSuffix: clinic.qualifications
    },
    url: siteUrl
  };

  return (
    <html lang="en-IN">
      <body className="min-h-screen pb-20 antialiased md:pb-0">
        <Script id="clinic-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SiteHeader />
        {children}
        <SiteFooter />
        <StickyActions />
        <ExitIntent />
      </body>
    </html>
  );
}
