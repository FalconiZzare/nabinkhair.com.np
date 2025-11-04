import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative flex h-[calc(100svh-10rem)] w-full items-center justify-center px-8 py-16 md:px-0">
      <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(-45deg,var(--pattern-fg),var(--pattern-fg)_1px,transparent_1px,transparent_14px)] opacity-50 mix-blend-luminosity" />

      <div className="relative flex max-w-xl flex-col items-left space-y-6">
        <span className="text-[clamp(4rem,18vw,10rem)] font-semibold leading-none tracking-tight text-foreground/10">
          404
        </span>

        <header className="space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Page missing</p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            This page took a different route
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            The link you followed is no longer available. Head back home or jump into the blog to
            keep exploring the latest updates.
          </p>
        </header>

        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/">Return home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/blog">Read the blog</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
