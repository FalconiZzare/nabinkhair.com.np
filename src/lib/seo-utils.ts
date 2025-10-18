import { DeveloperDetails } from "@/config/developer-details";
import { getAllBlogPosts } from "@/lib/markdown";
import type { MetadataRoute } from "next";

const normalizeSiteUrl = (url: string) => {
  return url.replace(/\/$/, "");
};

export const generateSitemap = (): MetadataRoute.Sitemap => {
  const siteUrl = normalizeSiteUrl(DeveloperDetails.portfolio);

  const staticRoutes = ["/", "/blog"];
  const posts = getAllBlogPosts();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.frontmatter.date ? new Date(post.frontmatter.date) : undefined,
  }));

  return [...staticEntries, ...postEntries];
};

export const generateRobots = (): MetadataRoute.Robots => {
  const siteUrl = normalizeSiteUrl(DeveloperDetails.portfolio);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
};
