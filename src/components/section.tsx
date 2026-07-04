import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("py-14 sm:py-20", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <div className="mb-8 max-w-3xl">
            {eyebrow && <p className="mb-2 text-sm font-bold uppercase tracking-wide text-clinic-gold">{eyebrow}</p>}
            {title && <h2 className="text-3xl font-bold text-clinic-forest sm:text-4xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
