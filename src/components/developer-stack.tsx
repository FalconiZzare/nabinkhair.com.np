import Image from "next/image"
import { TechStacksList } from "@/config/developer-stack"
import ShellWrapper from "./shell-wrapper"

const DeveloperStack = () => {
  return (
    <ShellWrapper>
      <div className="relative overflow-hidden p-2 space-y-3">
        <header className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">My Skills</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              The tools I reach for every day
            </h1>
          </div>
          <p className="text-base leading-relaxed text-justify text-muted-foreground">
            A curated mix of frameworks, runtimes, and services that help me craft reliable,
            performant user experiences across the stack.
          </p>
        </header>

        <div className="overflow-hidden rounded">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 ">
            {TechStacksList.map(({ name, icon, hasDarkIcon }) => {
              const darkVariant = icon.replace(".svg", "-dark.svg")

              return (
                <article key={name} className="flex flex-col items-center gap-2">
                  <span className="flex size-12 items-center justify-center rounded-lg border bg-muted/40">
                    <Image
                      src={icon}
                      alt={name}
                      width={20}
                      height={20}
                      title={name}
                      className={`h-6 w-6 object-contain ${hasDarkIcon ? "dark:hidden" : ""}`}
                    />
                    {hasDarkIcon && (
                      <Image
                        src={darkVariant}
                        alt={name}
                        title={name}
                        width={20}
                        height={20}
                        className="hidden h-6 w-6 object-contain dark:block"
                      />
                    )}
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="truncate text-sm font-semibold text-foreground">{name}</span>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </ShellWrapper>
  )
}

export default DeveloperStack
