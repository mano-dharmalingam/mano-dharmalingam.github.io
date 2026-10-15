import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col justify-center py-20">
      <span className="rule-mark mb-5" aria-hidden />
      <h1 className="display text-5xl">This page doesn&apos;t exist.</h1>
      <p className="mt-4 max-w-lg text-lg text-muted-foreground">
        The link may be out of date. The case studies and résumé are a click away.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className={buttonVariants()}>Go to home page</Link>
        <Link href="/projects" className={buttonVariants({ variant: "outline" })}>Browse work</Link>
      </div>
    </div>
  );
}
