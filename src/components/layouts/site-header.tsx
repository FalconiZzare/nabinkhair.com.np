"use client";

import { GitHubButtons } from "@/components/ui/extended/github-buttons";
import ThemeSwitcher from "@/components/ui/extended/theme-switcher";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="flex h-14 px-8 md:px-0 max-w-2xl mx-auto items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold inline-block text-lg">devn.</span>
        </Link>
        <div className="flex items-center space-x-2">
          <Link
            href="/blog"
            className="flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-500"
          >
            blog
            <ArrowUpRight size={16} />
          </Link>
          <GitHubButtons />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
