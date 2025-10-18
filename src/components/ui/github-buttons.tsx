"use client";

import { Button } from "@/components/ui/button";
import { DeveloperDetails } from "@/config/developer-details";
import Image from "next/image";

export const GitHubButtons = () => {
  const handleClick = () => {
    window.open(DeveloperDetails.socialLinks[1].url, "_blank");
  };
  return (
    <Button variant="outline" size="icon" className="rounded-full" onClick={handleClick}>
      <Image
        src="/social/github.svg"
        alt="GitHub"
        width={20}
        height={20}
        className="h-5 w-5 dark:hidden"
      />
      <Image
        src="/social/github-dark.svg"
        alt="GitHub"
        width={20}
        height={20}
        className="hidden h-5 w-5 dark:inline"
      />
    </Button>
  );
};
