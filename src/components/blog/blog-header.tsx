import ShellWrapper from "@/components/shell-wrapper";
import type { BlogFrontmatter } from "@/lib/markdown/mdx";
import { Calendar, Clock, User } from "lucide-react";
import Image from "next/image";

interface BlogHeaderProps {
  frontmatter: BlogFrontmatter;
  readingTime: string;
}

export function BlogHeader({ frontmatter, readingTime }: BlogHeaderProps) {
  return (
    <>
      <ShellWrapper>
        <header className="space-y-3 p-2 bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              {frontmatter.title}
            </h1>
            <p className="text-base leading-relaxed text-justify text-muted-foreground">
              {frontmatter.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              <span>{frontmatter.developer}</span>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              <time dateTime={frontmatter.date}>
                {new Date(frontmatter.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            <div className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              <span>{readingTime}</span>
            </div>
          </div>
        </header>
      </ShellWrapper>

      <ShellWrapper>
        {frontmatter.image && (
          <div className="overflow-hidden bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]">
            <Image
              src={frontmatter.image}
              width={1000}
              height={1000}
              alt={frontmatter.title}
              title={frontmatter.title}
              className="max-h-96 mx-auto aspect-video border"
            />
          </div>
        )}
      </ShellWrapper>
    </>
  );
}
