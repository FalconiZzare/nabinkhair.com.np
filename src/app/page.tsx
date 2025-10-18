import { BlogsGrid } from "@/components/blog/blogs-grid";
import DeveloperConnect from "@/components/developer-connect";
import DeveloperEducation from "@/components/developer-education";
import DeveloperExperience from "@/components/developer-experience";
import DeveloperGitContribution from "@/components/developer-git-contribution";
import DeveloperIntro from "@/components/developer-intro";
import DeveloperProjects from "@/components/developer-projects";
import DeveloperStack from "@/components/developer-stack";
import PageShellWrapper from "@/components/page-shell";
import { getRecentPosts } from "@/lib/markdown";

const Page = () => {
  const recentPosts = getRecentPosts();

  return (
    <PageShellWrapper>
      <DeveloperIntro />
      <DeveloperProjects />
      <DeveloperExperience />
      <DeveloperEducation />
      <DeveloperGitContribution />
      <DeveloperStack />
      <BlogsGrid maxPosts={4} posts={recentPosts} />
      <DeveloperConnect />
    </PageShellWrapper>
  );
};

export default Page;
