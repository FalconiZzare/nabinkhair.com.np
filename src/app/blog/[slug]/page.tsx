import { BlogHeader } from "@/components/blog/blog-header";
import PageShellWrapper from "@/components/layouts/page-shell";
import ShellWrapper from "@/components/layouts/shell-wrapper";
import { getAllBlogSlugs, getBlogPostBySlug, mdxOptions } from "@/lib/markdown/mdx";
import { useMDXComponents } from "@/lib/markdown/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    authors: [{ name: post.frontmatter.developer }],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.developer],
      images: post.frontmatter.image,
    },
    twitter: {
      card: "summary_large_image",
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: post.frontmatter.image,
    },
  };
}

const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const components = useMDXComponents({});
  return (
    <PageShellWrapper>
      <ShellWrapper>
        <BlogHeader frontmatter={post.frontmatter} readingTime={post.readingTime} />
      </ShellWrapper>
      <ShellWrapper>
        <article className="p-2">
          {" "}
          {/* TODO: Think about the padding */}
          <MDXRemote source={post.content} components={components} options={mdxOptions} />
        </article>
      </ShellWrapper>
    </PageShellWrapper>
  );
};

export default BlogPostPage;
