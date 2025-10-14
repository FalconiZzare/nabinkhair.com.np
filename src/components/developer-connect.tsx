import { ArrowUpRight, FileText, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ShellWrapper from "@/components/shell-wrapper"
import { Button } from "@/components/ui/button"
import { DeveloperDetails } from "@/config/developer-details"
import { cn } from "@/lib/utils"

const DeveloperConnect = () => {
  const SocialLinks = DeveloperDetails.socialLinks
  return (
    <ShellWrapper>
      <div className="space-y-3 p-2">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Connect</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let&apos;s build together
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Pick the channel that fits best — every link here stays in sync with my latest work.
          </p>
        </header>

        <div className="overflow-hidden">
          <div className="grid grid-cols-2 ">
            {Object.entries(SocialLinks).map(([key, link]) => (
              <article key={key} className="flex items-center gap-4 p-3 border">
                <span className="flex size-12 items-center justify-center ">
                  <Image
                    src={link.icon}
                    alt={link.handle}
                    width={32}
                    height={32}
                    className={cn("size-8", link.hasDarkIcon ? "dark:hidden" : "")}
                  />
                  {link.hasDarkIcon ? (
                    <Image
                      src={link.icon.replace(".svg", "-dark.svg")}
                      alt={link.handle}
                      width={20}
                      height={20}
                      className="hidden size-5 dark:block"
                    />
                  ) : null}
                </span>
                <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="truncate text-sm font-semibold text-foreground">
                    {link.name}
                  </span>
                  <span className="truncate text-xs text-muted-foreground">{link.handle}</span>
                </div>
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={`Open ${link.handle} on ${key}`}
                >
                  <ArrowUpRight className="size-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="">
          <div className="flex flex-col space-y-3">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">Prefer a direct line?</h3>
              <p className="text-sm text-muted-foreground">
                Email lands straight in my inbox and my resume is updated with every new engagement.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {DeveloperDetails.email && (
                <Button asChild>
                  <Link href={`mailto:${DeveloperDetails.email}`}>
                    <Mail className="size-4" />
                    Email Me
                  </Link>
                </Button>
              )}
              {DeveloperDetails.resume && (
                <Button variant="outline" asChild>
                  <Link href={DeveloperDetails.resume} target="_blank" rel="noreferrer noopener">
                    <FileText className="size-4" />
                    Download Resume
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </ShellWrapper>
  )
}

export default DeveloperConnect
