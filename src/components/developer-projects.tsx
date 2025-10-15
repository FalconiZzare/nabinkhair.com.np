import { DotIcon, PlusIcon } from "lucide-react"
import Image from "next/image"
import StackBadge from "@/components/ui/stack-badge"
import { ProjectsData } from "@/config/developer-projects"
import ShellWrapper from "./shell-wrapper"

const DeveloperProjects = () => {
  return (
    <ShellWrapper>
      <div className="space-y-3 p-2">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">My Work</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Projects I&apos;m proud of
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            A snapshot of product-focused experiments and client work where I handled everything
            from UX flow to production deployment.
          </p>
        </header>

        <div className="flex flex-col space-y-3">
          {ProjectsData.map((projects, index) => (
            <details key={index} className="group">
              <summary className="flex cursor-pointer items-center justify-between p-2">
                <div className="flex space-x-2">
                  <div>
                    <Image
                      src={projects.icon}
                      alt={projects.title}
                      width={100}
                      height={100}
                      className="h-8 w-8 mt-1 rounded  object-contain"
                    />
                  </div>
                  <div className="space-y-1 pl-3">
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">
                      {projects.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{projects.tagline}</p>
                  </div>
                </div>
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground transition group-open:rotate-45">
                  <PlusIcon />
                </span>
              </summary>

              {/* <CHANGE> Using grid-rows for smooth height animation */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="space-y-3 mt-3 pl-11">
                    <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {projects.description.map((line) => (
                        <li key={line} className="flex">
                          <DotIcon />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    {projects.techStack && (
                      <div className="flex flex-wrap gap-2">
                        {projects.techStack.map((tech, index) => (
                          <StackBadge
                            key={index}
                            name={tech.name}
                            icon={tech.icon}
                            hasDarkIcon={tech.hasDarkIcon}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </ShellWrapper>
  )
}

export default DeveloperProjects
