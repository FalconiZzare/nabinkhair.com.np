import ShellWrapper from "@/components/shell-wrapper";
import { ArrowUpRight } from "lucide-react";
import { DeveloperDetails } from "@/config/developer-details";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BlogPost } from "@/lib/markdown/mdx";
import {
  BlogCard,
  BlogCardContent,
  BlogCardDescription,
  BlogCardFooter,
  BlogCardImage,
  BlogCardTitle,
} from "@/components/ui/blogs-card";

interface BlogsGridProps {
  posts: BlogPost[];
  maxPosts?: number;
}

export const BlogsGrid = ({ posts, maxPosts }: BlogsGridProps) => {
  const displayPosts = maxPosts ? posts.slice(0, maxPosts) : posts;

  return (
    <ShellWrapper>
      <div className="space-y-3 p-2">
        <header className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            My Writings
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Recent Blogs
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            A collection of my latest writings on web development, design, and
            technology.
          </p>
        </header>

        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {displayPosts.map((post) => {
              const { slug, frontmatter } = post;
              return (
                <BlogCard key={slug} link={`/blog/${slug}`} className="group">
                  <BlogCardImage
                    src={frontmatter.image || "/image.png"}
                    alt={frontmatter.title}
                  />
                  <BlogCardContent className="space-y-2">
                    <BlogCardTitle className="group-hover:underline group-hover:underline-offset-2">{frontmatter.title}</BlogCardTitle>
                    <BlogCardDescription>
                      {frontmatter.description}
                    </BlogCardDescription>
                  </BlogCardContent>
                  <BlogCardFooter className="flex justify-between pb-2">
                    <Avatar className="border">
                      <AvatarImage
                        src={DeveloperDetails.avatar}
                        alt={DeveloperDetails.name}
                      />
                      <AvatarFallback>
                        {DeveloperDetails.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex gap-px items-center justify-center">
                      <span className="text-muted-foreground group-hover:text-primary transition-colors duration-500">
                        Read More
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="text-muted-foreground group-hover:text-primary transition-colors duration-500"
                      />
                    </div>
                  </BlogCardFooter>
                </BlogCard>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-bold mb-2">No blog posts found</h2>
            <p className="text-muted-foreground">
              Check back later for new content!
            </p>
          </div>
        )}
      </div>
    </ShellWrapper>
  );
};
