import ShellWrapper from "@/components/shell-wrapper";
import StackBadge from "@/components/ui/stack-badge";
import { ExperienceData } from "@/config/developer-experience";
import { DotIcon, PlusIcon } from "lucide-react";
import Image from "next/image";

const DeveloperExperience = () => {
  return (
    <ShellWrapper>
      <div className="space-y-3 p-2">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">My Journey</p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Professional Experience
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            A timeline of my career path, showcasing the roles and technologies I've worked with in
            various projects and companies.
          </p>
        </header>

        <div className="flex flex-col space-y-3">
          {ExperienceData.map((experience, index) => (
            <details key={index} className="group">
              <summary className="flex cursor-pointer items-center justify-between p-2">
                <div className="flex space-x-2">
                  <div>
                    <Image
                      src={experience.logo}
                      alt={experience.company}
                      width={100}
                      height={100}
                      className="h-8 w-8 mt-1 rounded object-contain"
                    />
                  </div>
                  <div className="space-y-1 pl-3">
                    <div className="flex space-x-1 items-center">
                      <h3 className="text-lg font-semibold text-foreground md:text-xl">
                        {experience.company}
                      </h3>
                      {experience.isCurrent && (
                        <div className="border h-2 w-2 flex items-center justify-center border-blue-600 rounded-full ">
                          <span className="h-2 w-2 inline-flex rounded-full opacity-75 bg-blue-500 animate-caret-blink duration-700" />
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {experience.designation} • {experience.type}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {experience.startDate} - {experience.endDate}
                    </p>
                  </div>
                </div>
                <span className="text-sm uppercase tracking-[0.3em] text-muted-foreground transition group-open:rotate-45">
                  <PlusIcon />
                </span>
              </summary>

              {/* Using grid-rows for smooth height animation */}
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="space-y-3 mt-3 pl-11">
                    {experience.description.length > 0 && (
                      <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {experience.description.map((line, idx) => (
                          <li key={idx} className="flex">
                            <DotIcon />
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {experience.skills && (
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, idx) => (
                          <StackBadge
                            key={idx}
                            name={skill.name}
                            icon={skill.icon}
                            hasDarkIcon={skill.hasDarkIcon}
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
  );
};

export default DeveloperExperience;
