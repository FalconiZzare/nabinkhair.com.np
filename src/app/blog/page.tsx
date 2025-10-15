import { BlogsGrid } from "@/components/blog";
import PageShellWrapper from "@/components/page-shell";
import { getAllBlogPosts } from "@/lib/markdown";

const BlogPage = () => {
  const posts = getAllBlogPosts();

  return (
    <PageShellWrapper>
      <BlogsGrid posts={posts} />
    </PageShellWrapper>
  );
};

export default BlogPage;