import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, PackageCheck, Stethoscope, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion";
import { Section } from "@/components/section";
import { clinic, testimonials, treatments, trustBadges } from "@/data/clinic";
import { whatsappLink } from "@/lib/utils";

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-clinic-soft">
        <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-clinic-leaf via-clinic-gold to-clinic-leaf" />
        <div className="mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <FadeIn>
            <p className="text-sm font-bold uppercase tracking-wide text-clinic-gold">{clinic.hindiName}</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-clinic-forest sm:text-5xl lg:text-6xl">{clinic.name}</h1>
            <p className="mt-4 text-xl font-semibold text-clinic-leaf">{clinic.tagline}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
              Consult {clinic.doctor}, {clinic.qualifications}, for personalized Ayurvedic care in Ghaziabad or online from anywhere in India.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/consultation">Book Consultation <ArrowRight size={18} /></Link>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <Link href="/store">Order Medicines</Link>
              </Button>
              <Button asChild variant="gold" size="lg">
                <a href={whatsappLink("Namaste, I want to book an Ayurvedic consultation.")}><MessageCircle size={18} /> WhatsApp</a>
              </Button>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["Online consultation", Stethoscope],
                ["Medicine delivery across India", Truck],
                ["Customized by doctor", PackageCheck]
              ].map(([label, Icon]) => (
                <div key={String(label)} className="flex items-center gap-2 rounded-md bg-white px-3 py-3 text-sm font-bold text-clinic-forest shadow-sm">
                  <Icon size={18} className="text-clinic-leaf" /> {label}
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="relative rounded-lg bg-white p-4 shadow-soft">
              <Image
                src="/images/ayurveda-hero.svg"
                alt="Ayurvedic consultation with herbs and doctor profile placeholder"
                width={960}
                height={1200}
                priority
                className="h-auto w-full rounded-md"
              />
              <div className="absolute inset-x-8 bottom-8 rounded-lg bg-white/95 p-4 shadow-soft backdrop-blur">
                <h2 className="text-xl font-bold text-clinic-forest">{clinic.doctor}</h2>
                <p className="mt-1 text-sm font-semibold text-clinic-leaf">{clinic.qualifications}</p>
                <p className="mt-3 flex items-start gap-2 text-xs leading-5 text-slate-600"><MapPin size={16} className="mt-1 text-clinic-gold" /> {clinic.shortAddress}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section title="Trusted Ayurvedic Care, Built Around You">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map(({ label, icon: Icon }) => (
            <Card key={label}>
              <CardContent className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-clinic-mint text-clinic-leaf"><Icon size={22} /></div>
                <p className="font-bold text-clinic-forest">{label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-clinic-soft" eyebrow="Treatments" title="Common Conditions We Support">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {treatments.slice(0, 6).map(({ title, summary, icon: Icon }) => (
            <Card key={title}>
              <CardContent>
                <Icon className="text-clinic-leaf" />
                <h3 className="mt-4 text-xl font-bold text-clinic-forest">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Button asChild className="mt-8">
          <Link href="/treatments">View All Treatments</Link>
        </Button>
      </Section>

      <Section eyebrow="Testimonials" title="Patient Experiences">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <Card key={review.name}>
              <CardContent>
                <p className="text-clinic-gold">★★★★★</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">"{review.text}"</p>
                <p className="mt-4 font-bold text-clinic-forest">{review.name}</p>
                <p className="text-sm text-slate-500">{review.city}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section className="bg-clinic-forest text-white">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase text-clinic-saffron">Pan India Medicine Delivery</p>
            <h2 className="mt-2 text-3xl font-bold">Consult online, receive medicines at home.</h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/75">The clinic can prepare personalized Ayurvedic medicines after consultation and dispatch them by courier with tracking details.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Consultation", "Preparation", "Courier Dispatch", "Tracking"].map((step) => (
              <p key={step} className="flex items-center gap-2 rounded-md bg-white/10 px-4 py-3 font-semibold"><CheckCircle2 size={18} /> {step}</p>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
