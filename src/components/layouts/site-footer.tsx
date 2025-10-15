import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { DeveloperDetails } from "@/config/developer-details"

const SiteFooter = () => {
  return (
    <footer className="w-full">
      <div className="flex h-14 px-8 md:px-0 max-w-2xl mx-auto items-center justify-between">
        <div className="flex flex-col items-center justify-center w-full">
          <p className="font-bold inline-block text-lg">devn</p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js and Tailwind CSS by{" "}
            <Link
              href={DeveloperDetails.socialLinks[1].url}
              className="hover:underline underline-offset-2 hover:text-primary transition-colors duration-500"
              title={`Developer ${DeveloperDetails.socialLinks[1].name} account`}
            >
              @nabinkhair
              <ArrowUpRight size={15} className="inline-block" />
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
