import "./globals.css";
import SiteFooter from "@/components/layouts/site-footer";
import SiteHeader from "@/components/layouts/site-header";
import { DeveloperDetails } from "@/dev-constants/details";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: DeveloperDetails.seo.title,
  description: DeveloperDetails.seo.description,
  keywords: DeveloperDetails.seo.keywords,
  authors: [{ name: DeveloperDetails.name }],
  creator: DeveloperDetails.name,
};

const siteUrl = DeveloperDetails.portfolio.replace(/\/$/, "");
metadata.metadataBase = new URL(siteUrl);

// Open Graph and Twitter card metadata so social previews pick up the og image
const ogImage = `${siteUrl}/og-image.png`;

metadata.openGraph = {
  title: DeveloperDetails.seo.title,
  description: DeveloperDetails.seo.description,
  url: siteUrl,
  siteName: DeveloperDetails.name,
  images: [
    {
      url: ogImage,
      width: 1200,
      height: 630,
      alt: `${DeveloperDetails.name} | Open Graph Image`,
    },
  ],
  locale: "en_US",
  type: "website",
};

metadata.twitter = {
  card: "summary_large_image",
  title: DeveloperDetails.seo.title,
  description: DeveloperDetails.seo.description,
  images: [ogImage],
};

const font = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
