import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { blogPosts } from "@/data/clinic";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  return {
    title: post?.title || "Ayurveda Article",
    description: post?.description
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow={post.keyword} title={post.title}>
        <article className="max-w-3xl rounded-lg bg-white p-6 leading-8 text-slate-700 shadow-soft">
          <p>{post.description}</p>
          <p className="mt-5">
            Ayurveda studies the patient as a complete person: digestion, sleep, stress, diet, habits, season, constitution, and symptom pattern all matter. A personalized plan may combine dietary guidance, lifestyle changes, classical formulations, and follow-up monitoring.
          </p>
          <p className="mt-5">
            For chronic conditions, avoid self-medication. Consult a qualified Ayurvedic doctor so the medicine, dose, and duration are selected according to your history and current health status.
          </p>
          <p className="mt-5 text-sm font-semibold text-clinic-forest">Treatment outcomes vary from person to person.</p>
        </article>
      </Section>
    </main>
  );
}
