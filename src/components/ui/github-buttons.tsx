import Image from "next/image"
import { Button } from "@/components/ui/button"

export const GitHubButtons = () => {
  return (
    <Button variant="outline" size="icon" className="rounded-full">
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
  )
}
