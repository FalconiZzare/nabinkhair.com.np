import ShellWrapper from "@/components/layouts/shell-wrapper";
import {
  ExpandableSection,
  ExpandableSectionContent,
  ExpandableSectionDescription,
  ExpandableSectionHeader,
  ExpandableSectionItem,
  ExpandableSectionLabel,
  ExpandableSectionList,
  ExpandableSectionTitle,
  ExpandableSectionTrigger,
} from "@/components/ui/extended/expandable-section";
import StackBadge from "@/components/ui/extended/stack-badge";
import { ExperienceData } from "@/dev-constants/experience";
import { DotIcon } from "lucide-react";
import Image from "next/image";

const DeveloperExperience = () => {
  return (
    <ShellWrapper>
      <ExpandableSection>
        <ExpandableSectionHeader>
          <ExpandableSectionLabel>My Journey</ExpandableSectionLabel>
          <ExpandableSectionTitle>Professional Experience</ExpandableSectionTitle>
          <ExpandableSectionDescription>
            A timeline of my career path, showcasing the roles and technologies I&apos;ve worked
            with in various projects and companies.
          </ExpandableSectionDescription>
        </ExpandableSectionHeader>

        <ExpandableSectionList>
          {ExperienceData.map((experience, index) => (
            <ExpandableSectionItem key={index}>
              <ExpandableSectionTrigger>
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
              </ExpandableSectionTrigger>

              <ExpandableSectionContent>
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
              </ExpandableSectionContent>
            </ExpandableSectionItem>
          ))}
        </ExpandableSectionList>
      </ExpandableSection>
    </ShellWrapper>
  );
};

export default DeveloperExperience;
