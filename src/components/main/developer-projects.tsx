import ShellWrapper from "@/components/layouts/shell-wrapper";
import { Button } from "@/components/ui/button";
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
import { ProjectsData } from "@/dev-constants/projects";
import { DotIcon, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const DeveloperProjects = () => {
  return (
    <ShellWrapper>
      <ExpandableSection>
        <ExpandableSectionHeader>
          <ExpandableSectionLabel>My Work</ExpandableSectionLabel>
          <ExpandableSectionTitle>Projects I&apos;m proud of</ExpandableSectionTitle>
          <ExpandableSectionDescription>
            A snapshot of product-focused experiments and client work where I handled everything
            from UX flow to production deployment.
          </ExpandableSectionDescription>
        </ExpandableSectionHeader>

        <ExpandableSectionList>
          {ProjectsData.map((project, index) => (
            <ExpandableSectionItem key={index}>
              <ExpandableSectionTrigger>
                <div className="flex space-x-2">
                  <div>
                    <Image
                      src={project.icon}
                      alt={project.title}
                      width={100}
                      height={100}
                      className="h-8 w-8 mt-1 rounded object-contain"
                    />
                  </div>
                  <div className="space-y-1 pl-3">
                    <h3 className="text-lg font-semibold text-foreground md:text-xl">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.tagline}</p>
                  </div>
                </div>
              </ExpandableSectionTrigger>

              <ExpandableSectionContent>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description.map((line) => (
                    <li key={line} className="flex">
                      <DotIcon />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                {project.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <StackBadge
                        key={idx}
                        name={tech.name}
                        icon={tech.icon}
                        hasDarkIcon={tech.hasDarkIcon}
                      />
                    ))}
                  </div>
                )}
                {(project.liveLink || project.repo) && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.liveLink && (
                      <Button asChild size="icon" variant="outline" className="rounded-full">
                        <Link
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Open live site for ${project.title}`}
                        >
                          <Globe className="size-4" />
                        </Link>
                      </Button>
                    )}
                    {project.repo && (
                      <Button asChild size="icon" variant="outline" className="rounded-full">
                        <Link
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`View repository for ${project.title}`}
                        >
                          <Image
                            src="/tech-icon/github.svg"
                            alt="GitHub"
                            width={20}
                            height={20}
                            className={"h-4 w-4 rounded dark:hidden"}
                          />
                          <Image
                            src="/tech-icon/github-dark.svg"
                            alt="GitHub"
                            width={16}
                            height={16}
                            className="hidden h-4 w-4 rounded dark:block"
                          />
                        </Link>
                      </Button>
                    )}
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

export default DeveloperProjects;
