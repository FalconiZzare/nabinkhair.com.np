import { TechStacksList } from "@/dev-constants/stack";
import Image from "next/image";
import ShellWrapper from "../layouts/shell-wrapper";

const DeveloperStack = () => {
  return (
    <ShellWrapper>
      <div className="relative overflow-hidden p-2 space-y-3">
        <header className="space-y-2">
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

        <div
          className="grid gap-0 border-l border-t border-border"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))" }}
        >
          {TechStacksList.map(({ name, icon, hasDarkIcon }) => {
            const darkVariant = icon.replace(".svg", "-dark.svg");

            return (
              <div
                key={name}
                className="group flex flex-col items-center justify-center aspect-square p-2 border-r border-b transition-all duration-200 cursor-pointer overflow-hidden"
              >
                <div className="flex items-center justify-center text-foreground/60 group-hover:text-foreground transition-colors duration-200">
                  <Image
                    src={icon}
                    alt={name}
                    width={20}
                    height={20}
                    title={name}
                    className={
                      hasDarkIcon ? "size-4 aspect-square dark:hidden" : "size-4 aspect-square"
                    }
                  />
                  {hasDarkIcon && (
                    <Image
                      src={darkVariant}
                      alt={name}
                      title={name}
                      width={20}
                      height={20}
                      className="size-4 aspect-square hidden dark:block"
                    />
                  )}
                </div>
                <p className="text-xs font-medium text-foreground/70 text-center group-hover:text-foreground transition-colors duration-200 mt-2">
                  {name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </ShellWrapper>
  );
};

export default DeveloperStack;
