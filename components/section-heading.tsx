import { cn } from "@/lib/utils";

/**
 * Section opener: a short brass rule, a serif heading, and an optional standfirst.
 * `eyebrow` is accepted for backwards compatibility but no longer rendered.
 */
export function SectionHeading({
  title,
  subtitle,
  className,
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
  as?: "h1" | "h2";
}) {
  const Tag = as;
  return (
    <div className={cn("mb-12 max-w-3xl", className)}>
      <span className="rule-mark mb-5" aria-hidden />
      <Tag className={cn("display", as === "h1" ? "text-4xl sm:text-5xl" : "text-3xl sm:text-4xl")}>{title}</Tag>
      {subtitle && <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
