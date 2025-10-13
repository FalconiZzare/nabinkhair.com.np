import Image from "next/image";
import ShellWrapper from "./shell-wrapper";
import { TechStacksList } from "@/config/developer-stack";

const DeveloperStack = () => {
  return (
    <ShellWrapper>
      <div className="relative overflow-hidden p-2 space-y-3">
        <header className="space-y-3">
          <div className="space-y-1">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              My Skills
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              The tools I reach for every day
            </h1>
          </div>
          <p className="text-base leading-relaxed text-justify text-muted-foreground">
            A curated mix of frameworks, runtimes, and services that help me
            craft reliable, performant user experiences across the stack.
          </p>
        </header>

        <div className="grid grid-cols-5 gap-3 md:grid-cols-6 md:gap-4">
          {TechStacksList.map(({ name, icon, hasDarkIcon }) => {
            const darkVariant = icon.replace(".svg", "-dark.svg");

            return (
              <div
                key={name}
                className="relative mx-auto flex aspect-square w-full max-w-[80px] items-center justify-center border"
              >
                <Image
                  src={icon}
                  alt={name}
                  width={64}
                  height={64}
                  title={name}
                  className={`relative h-12 w-12 object-contain ${
                    hasDarkIcon ? "dark:hidden" : ""
                  }`}
                />
                {hasDarkIcon ? (
                  <Image
                    src={darkVariant}
                    alt={name}
                    width={64}
                    height={64}
                    title={name}
                    className="relative hidden h-12 w-12 object-contain dark:block"
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </ShellWrapper>
  );
};

export default DeveloperStack;
