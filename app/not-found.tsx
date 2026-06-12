import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[50vh] flex-col items-center justify-center py-20 text-center">
      <p className="font-display text-6xl font-bold text-gradient">404</p>
      <p className="mt-4 text-muted-foreground">This page doesn&apos;t exist.</p>
      <Link href="/" className="mt-6"><Button>Back home</Button></Link>
    </div>
  );
}
