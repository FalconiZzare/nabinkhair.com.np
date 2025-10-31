import { BlogsGrid } from "@/components/blog/blogs-grid";
import PageShellWrapper from "@/components/layouts/page-shell";
import DeveloperConnect from "@/components/main/developer-connect";
import DeveloperEducation from "@/components/main/developer-education";
import DeveloperExperience from "@/components/main/developer-experience";
import DeveloperGitContribution from "@/components/main/developer-git-contribution";
import DeveloperIntro from "@/components/main/developer-intro";
import DeveloperProjects from "@/components/main/developer-projects";
import DeveloperStack from "@/components/main/developer-stack";
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
