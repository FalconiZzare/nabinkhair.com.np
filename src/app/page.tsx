import DeveloperExperience from "@/components/developer-experience";
import DeveloperIntro from "@/components/developer-intro";
import DeveloperProjects from "@/components/developer-projects";
import DeveloperStack from "@/components/developer-stack";
import PageShellWrapper from "@/components/page-shell";

const Page = () => {
  return (
    <PageShellWrapper>
      <DeveloperIntro />
      <DeveloperStack />
      <DeveloperProjects />
      <DeveloperExperience />
    </PageShellWrapper>
  );
};

export default Page;
