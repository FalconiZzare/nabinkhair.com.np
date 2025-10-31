import { BlogIntroduction, BlogsGrid, NoMoreBlogs } from "@/components/blog";
import PageShellWrapper from "@/components/layouts/page-shell";
import { getAllBlogPosts } from "@/lib/markdown";

const BlogPage = () => {
  const posts = getAllBlogPosts();

  return (
    <PageShellWrapper>
      <BlogIntroduction />
      <BlogsGrid posts={posts} />
      <NoMoreBlogs />
    </PageShellWrapper>
  );
};

export default BlogPage;
