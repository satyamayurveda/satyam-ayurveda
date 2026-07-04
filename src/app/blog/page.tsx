import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Ayurveda Blog",
  description: "SEO articles on PCOD, piles, kidney stones, personalized Ayurveda, and natural joint pain management."
};

export default function BlogPage() {
  return (
    <main>
      <Section className="bg-clinic-soft" eyebrow="Blog" title="Ayurveda Health Articles">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug}>
              <CardContent>
                <p className="text-xs font-bold uppercase text-clinic-gold">{post.keyword}</p>
                <h2 className="mt-3 text-xl font-bold text-clinic-forest">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{post.description}</p>
                <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-clinic-leaf">
                  Read article <ArrowRight size={16} />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </main>
  );
}
